# [꽝 없는 로또 제미또] 11/11 공동 운영진 매뉴얼

> **운영 일시**: 11월 11일(월) 10:00 ~ 22:00 (운영진 3인 교대, 선착순 200명 마감 시 종료)

---

## 0. 운영진 필수 링크 모음

- **실시간 당첨자 확인 구글 시트 링크**:
  [https://docs.google.com/spreadsheets/d/1Rt8oDx_serZkIq_CFPkkKGW7UPCFRyYah_80Tfaj7LE/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1Rt8oDx_serZkIq_CFPkkKGW7UPCFRyYah_80Tfaj7LE/edit?usp=sharing)
- **구글 시트 연동 웹 앱 URL (index.html 내장 완료)**:
  `https://script.google.com/macros/s/AKfycbxntDMogmC96EnDHehhmYs2lnQAuU4ePC4TELXR0jT3RjjHX5cXjHBNGRrl7TdGgEn8/exec`
- **프로모션 웹사이트 링크**: `[여기에 GitHub Pages 배포 주소 입력]`
- **인스타그램 DM 검수 계정**: `@please_gemini` ([https://www.instagram.com/please_gemini/](https://www.instagram.com/please_gemini/))
- **학생 안내용 Google AI Plan 무료 가입 링크 (UTM)**:
  [https://gemini.google/students/?utm_source=student&utm_medium=social&utm_campaign=microsite_campus_kyunghee-ambassador](https://gemini.google/students/?utm_source=student&utm_medium=social&utm_campaign=microsite_campus_kyunghee-ambassador)

---

## 1. 학생들이 참여하는 순서 (자동 진행)

1. 학생이 웹사이트에 접속해 본인의 **이름**과 **학교 계정(`@khu.ac.kr` 등 `.ac.kr` / `.edu`)**을 입력합니다.
2. 복권 잠금이 해제되면 화면을 문질러 스크래치 복권을 긁습니다 (100% 당첨).
3. **복권이 긁히는 즉시 우리 구글 시트에 `[참여순번 / 참여일시 / 이름 / 학교계정 / 당첨등수 / 당첨상품명]`이 실시간으로 자동 기록됩니다.**
4. 학생 화면에 수령 방법 안내창이 자동으로 뜨며, 학생은 아래 2가지를 진행한 뒤 `@please_gemini` 인스타 DM으로 캡처본을 보냅니다:
   - **캡처 1**: 전용 UTM 링크로 Google AI Plan (12개월 무료) 가입 후 **[구독 활성화 완료 화면]**
   - **캡처 2**: Gemini에 제시된 1초 프롬프트 입력 후 출력된 **[행운의 키워드 결과 화면]**

---

## 2. 인스타 DM(`@please_gemini`) 왔을 때 운영진 검수 방법 (3단계)

교대 근무 중 학생에게 DM이 도착하면 아래 3단계로 확인 후 기프티콘을 발송해 주세요.

### [STEP 1] 구글 시트에서 당첨 내역 대조
- 구글 시트에서 `Ctrl + F` (Mac은 `Cmd + F`)를 눌러 학생의 **이름**, **학교 계정 이메일**, 또는 화면에 찍힌 **참여순번(`#012` 등)**을 검색합니다.
- 시트에 기록된 **당첨등수(`1등` / `2등` / `3등`)**와 **당첨상품명**이 학생이 말한 상품과 일치하는지 확인합니다.
- 이미 같은 학교 이메일로 수령해 간 기록이 있는지 확인합니다 (시트에서 동일 이메일 중복 기록은 자동 차단됩니다).

### [STEP 2] DM 캡처본 2장 검수 기준
1. **구독 활성화 화면 캡처본**:
   - Google AI Plan (대학생 12개월 무료) 구독이 활성화되어 있는지 확인
   - **멤버십 시작일이 `11/11`인 신규 가입자**인지 반드시 확인
2. **Gemini 행운의 키워드 답변 화면 캡처본**:
   - 제시된 1초 프롬프트(`안녕 제미나이! 11/11 제미또 복권 당첨 기념 오늘의 행운 키워드 1개를 알려줘!`)를 입력해 답변을 받은 화면인지 확인

### [STEP 3] 시트 상태 체크 및 기프티콘 발송 (중복/누락 방지)
- 검수가 통과되면 구글 시트의 해당 학생 행(Row)에서:
  1. **`G열 (DM인증확인)`**을 `미확인` -> **`확인완료 (검수자 이름)`**으로 수정합니다.
  2. 해당 등수에 맞는 기프티콘을 DM으로 발송합니다.
  3. **`H열 (기프티콘발송여부)`**을 `미발송` -> **`발송완료`**로 수정합니다.
- *교대 근무 시 다음 타임 운영진은 `G열`과 `H열`만 보고도 어디까지 처리되었는지 즉시 파악할 수 있습니다.*

---

## 3. 경품 배정 규칙 (총 200명 선착순)

- **1등 (`SSR` · 배달의민족 100,000원권)**: **25번째(`#025`), 92번째(`#092`)** 참여자 고정 배정
- **2등 (`SR` · 롯데 오리지널 초코 빼빼로 · 82명)**: `2, 4, 6, 8, 10, 12 ... 166` 짝수 순번 고정 배정 (`92`번 제외)
- **3등 (`R` · 츄파춥스 막대사탕 · 116명)**: 나머지 순번 전원 100% 배정
- **마감 기준**: 구글 시트 기준 참여순번 **200번**까지 기록되면 선착순 마감 처리합니다.

---

## 4. (최초 1회) 구글 시트 생성 및 사이트 연동 방법

1. [https://sheets.new](https://sheets.new) 에 접속해 새 구글 시트를 만들고 제목을 **`꽝 없는 로또 제미또 실시간 당첨자 명단`**으로 지정합니다.
2. 우측 상단 **[공유]** 버튼을 눌러 공동 운영진들의 구글 계정을 **편집자**로 초대하고, 시트 링크를 위 `0번 필수 링크 모음`에 붙여넣습니다.
3. 시트 상단 메뉴 **[확장 프로그램] > [Apps Script]** 클릭 -> 프로젝트 폴더의 `google-apps-script.js` 코드 전체 붙여넣기 후 저장(`Cmd + S`).
4. 우측 상단 **[배포] > [새 배포]** -> 유형: **[웹 앱]** 선택 -> 액세스 권한: **[모든 사용자]** 선택 후 배포.
5. 생성된 **웹 앱 URL**(`https://script.google.com/macros/s/.../exec`)을 복사해 `index.html`의 `DEFAULT_GOOGLE_SHEET_WEB_APP_URL`(또는 웹페이지 하단 운영진 패널의 URL 입력칸)에 저장하면 즉시 연동됩니다.
