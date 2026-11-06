/**
 * [꽝 없는 로또 제미또 - 구글 시트 실시간 연동 Apps Script 코드]
 *
 * [설치 방법 (1분 컷)]
 * 1. 새 구글 스프레드시트(Google Sheets)를 만듭니다.
 * 2. 상단 메뉴 [확장 프로그램] -> [Apps Script]를 클릭합니다.
 * 3. 기존 코드를 모두 지우고, 이 파일의 코드를 전부 복사해서 붙여넣은 뒤 저장(Ctrl+S / Cmd+S)합니다.
 * 4. 우측 상단 [배포] -> [새 배포]를 클릭합니다.
 * 5. '유형 선택(톱니바퀴)'에서 [웹 앱]을 선택합니다.
 *    - 다음 사용자 인증 정보로 실행: [나 (본인 계정)]
 *    - 액세스 권한이 있는 사용자: [모든 사용자]  <-- 중요! 반드시 '모든 사용자'로 설정해야 학생들이 접속할 때 시트에 기록됩니다.
 * 6. [배포] 버튼을 누르고 권한 승인을 완료한 뒤, 생성된 [웹 앱 URL (https://script.google.com/macros/s/.../exec)]을 복사합니다.
 * 7. index.html 하단 스크립트의 GOOGLE_SHEET_WEB_APP_URL 변수에 복사한 URL을 붙여넣으면 연동 끝!
 */

const TOTAL_STOCK = 200;
const FIRST_PRIZE_TURNS = [25, 92]; // 25번째, 92번째 참가자 1등(배민 10만원권) 고정

function getPrizeByTurn(turn) {
  if (FIRST_PRIZE_TURNS.indexOf(turn) !== -1) {
    return { rank: '1등 (SSR)', name: '배달의민족 100,000원권' };
  }
  // 2~166 짝수 순번(92 제외, 총 82명): 2등 오리지널 초코 빼빼로
  if (turn >= 2 && turn <= 166 && turn % 2 === 0) {
    return { rank: '2등 (SR)', name: '롯데 오리지널 초코 빼빼로' };
  }
  // 나머지 116명: 3등 츄파춥스 막대사탕
  return { rank: '3등 (R)', name: '츄파춥스 막대사탕 기프티콘' };
}

function ensureSheetHeader(sheet) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      '참여순번',
      '참여일시',
      '이름',
      '학교계정(이메일)',
      '당첨등수',
      '당첨상품명',
      'DM인증확인(운영진체크)',
      '기프티콘발송여부'
    ]);
    sheet.getRange('A1:H1').setFontWeight('bold').setBackground('#FFE8F1');
  }
}

// 실시간 남은 수량 조회용 (GET)
function doGet(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  ensureSheetHeader(sheet);
  const participantCount = Math.max(0, sheet.getLastRow() - 1);
  const remaining = Math.max(0, TOTAL_STOCK - participantCount);

  return ContentService.createTextOutput(
    JSON.stringify({
      status: 'ok',
      participantCount: participantCount,
      remaining: remaining
    })
  ).setMimeType(ContentService.MimeType.JSON);
}

// 학생이 이름+학교계정으로 복권을 긁었을 때 시트에 자동 기록 (POST)
function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);

  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    ensureSheetHeader(sheet);

    const body = JSON.parse(e.postData.contents || '{}');
    const userName = String(body.name || '').trim();
    const schoolEmail = String(body.schoolEmail || '').trim().toLowerCase();
    const clientTurn = Number(body.turnNumber || 0);
    const clientPrizeRank = String(body.prizeRank || '');
    const clientPrizeName = String(body.prizeName || '');

    // 이미 참여한 학교 이메일인지 중복 체크
    const lastRow = sheet.getLastRow();
    if (lastRow > 1) {
      const records = sheet.getRange(2, 1, lastRow - 1, 6).getValues();
      for (let i = 0; i < records.length; i++) {
        if (String(records[i][3]).toLowerCase() === schoolEmail) {
          return ContentService.createTextOutput(
            JSON.stringify({
              status: 'duplicate',
              turnNumber: Number(records[i][0]),
              name: records[i][2],
              schoolEmail: records[i][3],
              prizeRank: records[i][4],
              prizeName: records[i][5],
              remaining: Math.max(0, TOTAL_STOCK - (lastRow - 1))
            })
          ).setMimeType(ContentService.MimeType.JSON);
        }
      }
    }

    // 신규 참여자 순번 계산 (시트 행 기준)
    const serverTurn = lastRow; // 헤더가 1행이므로 첫 참여자는 1번
    const finalTurn = body.useClientTurn && clientTurn > 0 ? clientTurn : serverTurn;
    const prize = clientPrizeName
      ? { rank: clientPrizeRank, name: clientPrizeName }
      : getPrizeByTurn(finalTurn);

    const nowKst = Utilities.formatDate(new Date(), 'Asia/Seoul', 'yyyy-MM-dd HH:mm:ss');

    sheet.appendRow([
      finalTurn,
      nowKst,
      userName,
      schoolEmail,
      prize.rank,
      prize.name,
      '미확인',
      '미발송'
    ]);

    const newRemaining = Math.max(0, TOTAL_STOCK - finalTurn);

    return ContentService.createTextOutput(
      JSON.stringify({
        status: 'success',
        turnNumber: finalTurn,
        name: userName,
        schoolEmail: schoolEmail,
        prizeRank: prize.rank,
        prizeName: prize.name,
        remaining: newRemaining
      })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: 'error', message: String(err) })
    ).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
