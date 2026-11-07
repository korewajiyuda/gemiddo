# 꽝 없는 로또 제미또 (Google Gemini × 11·11 스크래치 복권 이벤트)

학교 계정(`@khu.ac.kr` 등 `.ac.kr` / `.edu`)과 이름을 입력하면 스크래치 복권을 긁을 수 있고, 당첨 결과(`1등 배민 10만원권` / `2등 오리지널 초코 빼빼로` / `3등 츄파춥스`)가 **구글 스프레드시트(Google Sheets)에 실시간으로 자동 기록**되는 모바일 웹 프로모션 페이지입니다.

---

## 구글 시트 실시간 연동 정보 (연동 완료)

- **실시간 당첨자 명단 구글 시트**: [https://docs.google.com/spreadsheets/d/1Rt8oDx_serZkIq_CFPkkKGW7UPCFRyYah_80Tfaj7LE/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1Rt8oDx_serZkIq_CFPkkKGW7UPCFRyYah_80Tfaj7LE/edit?usp=sharing)
- **Apps Script 웹 앱 엔드포인트**: `https://script.google.com/macros/s/AKfycbxntDMogmC96EnDHehhmYs2lnQAuU4ePC4TELXR0jT3RjjHX5cXjHBNGRrl7TdGgEn8/exec` (`index.html`에 기본 내장됨)

---

## 구글 시트에 자동 생성되는 열(Column) 구조

학생이 복권을 긁는 즉시 시트에 아래 항목이 한 줄씩 자동 추가됩니다:

| 참여순번 | 참여일시 | 이름 | 학교계정(이메일) | 당첨등수 | 당첨상품명 | DM인증확인(운영진체크) | 기프티콘발송여부 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 12 | 2026-11-11 10:05:21 | 김경희 | student@khu.ac.kr | 2등 (SR) | 롯데 오리지널 초코 빼빼로 | 미확인 | 미발송 |
| 25 | 2026-11-11 10:14:09 | 이제미 | gemi@khu.ac.kr | 1등 (SSR) | 배달의민족 100,000원권 | 미확인 | 미발송 |

---

## 당첨 순번 배정 규칙 (총 200명)

- **1등 (배달의민족 50,000원권 · 2명)**: **25번째(`#025`), 92번째(`#092`)** 참가자 고정 (1인당 5만 원권 1장)
- **2등 (롯데 오리지널 초코 빼빼로)** & **3등 (츄파춥스 막대사탕)**: 나머지 순번 전원 무작위(랜덤) 100% 당첨
