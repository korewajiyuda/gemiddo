# ZIGZAG Style Mobile Promotion Page (제미또)

지그재그(ZIGZAG) 스타일의 감각적이고 트렌디한 모바일 웹 스크래치 복권 프로모션 페이지 UI 퍼블리싱 프로젝트입니다.

## 주요 특징 (Design System)

- **Typography**: `Pretendard` 웹 폰트(CDN) 전체 적용
- **Color Palette**:
  - Background: 따뜻하고 고급스러운 크림/오프화이트 (`#FFF9F5`, `#F7EFEA`)
  - Point Color: 트렌디 핑크 (`#FF1493`, `#FFF0F7`)
  - Text & Accent: 초콜릿 브라운 (`#3A2321`, `#6E5653`)
- **Layout**: 모바일 뷰포트 최적화 (`max-width: 480px`, 중앙 정렬, `min-height: 100vh`)
- **Components**:
  1. 상단 글래스모피즘 고정(Sticky) 실시간 수량 뱃지 (`LIVE 실시간 남은 수량: 200개`)
  2. 헤더 타이틀 및 히어로 이미지 영역 (`4:3` 비율 Placeholder)
  3. 메인 스크래치 카드 컴포넌트 (`1:1` 비율 Placeholder)
  4. 하단 고정 CTA 버튼 (`경품 수령 조건 확인하기` - 초기 비활성화 상태)

## 디렉토리 구조

```text
.
├── index.html       # 메인 프로모션 페이지 (HTML5 + Tailwind CSS CDN)
├── assets/          # 커스텀 이미지 에셋 폴더 (히어로 이미지, 스크래치 덮개 등)
├── .gitignore       # Git 제외 파일 설정
└── README.md        # 프로젝트 소개 및 가이드
```

## 실행 및 배포 방법

별도의 빌드 과정 없이 `index.html` 파일을 브라우저에서 바로 열거나, **GitHub Pages**를 통해 즉시 배포할 수 있습니다.

1. GitHub 저장소 생성 후 코드 푸시
2. 저장소 **Settings > Pages** 이동
3. **Branch**를 `main` (또는 `master`), 폴더를 `/ (root)`로 설정 후 **Save**
