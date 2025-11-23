# [조윤우] 센카바이오 프론트엔드 UI 구현 과제 제출서 

## 프로젝트 개요 및 목표
1. 프로젝트 개요 및 목표

이번 프로젝트는 UI 구현 역량을 확인하기 위한 과제입니다.
제공된 Figma 디자인을 기반으로 콘텐츠 영역 최대 PC(1100px) · 모바일(430px) 환경을 지원하는 반응형 웹 페이지를 구현했습니다.

핵심 목표는 다음과 같습니다.

- PC·모바일 반응형 레이아웃 충실히 구현

- 웹 표준 및 접근성(WCAG 2.1 AA) 준수

- SEO를 고려한 시맨틱 마크업 작성

- 재사용 가능한 UI 컴포넌트 설계 및 Storybook 문서화

### 구현 범위
- Figma 시안에서 구현 가능한 영역을 모두 구현했습니다.
(Gnb, Hero Section, Video Section, Image Tab Section, Image Slider Section)


- 레이아웃 기준

    PC: 최대 너비 1100px
    Mobile: 최대 너비 430px

Responsive: Sass Mixin으로 커스텀 breakpoint를 정의하고, 다양한 화면 크기에서도 자연스럽게 동작하도록 Fluid Layout을 적용했습니다.

### 구현 의도

#### 컴포넌트 설계

SRP(단일책임원칙) 중심의 컴포넌트 구조 + 필요한 곳에 Singleton 패턴 적용

각 컴포넌트가 하나의 책임에 집중하도록 설계

공유 유틸이나 전역적으로 하나만 존재해야 하는 서비스는 Singleton 방식으로 관리

#### 코드 구조

전역 상수·Hook 분리

네비게이션, 이미지 경로 등을 `globalConstants.ts`, `images.ts` 등으로 분리

로그인 안내 로직은 `useLoginNotice`로 분리하여 GNB의 책임을 줄이고 재사용 가능하게 구성

### 주요 구현 디테일 & 접근성

**GNB / 로그인 버튼 접근성**

WCAG 2.1 AA 기준 충족을 위해 aria-live="polite"를 가진 sr-only 영역 추가

alert 뿐 아니라 스크린리더 사용자도 “준비 중” 안내를 확인할 수 있도록 처리

연속 클릭 시 다시 읽도록 메시지 초기화 테크닉 적용

**커스텀 Select**

- 기본 <select> 스타일 제거 후 커스텀 UI 적용

- measure span으로 최소 폭(83px) 계산

- focus-visible, data-open 상태값으로 포커스·드롭다운 상태를  핸들링

- 텍스트 길이가 변해도 깨지지 않는 안정적인 UI 제공


**Image Slider**

- `Swiper`를 사용해 무한 루프 및 반응형 슬라이드 구현

- `overflow: visible !important`와 섹션의 `overflow-x: clip` 조합으로 자연스럽게 이어지는 슬라이드 효과 구현 (!important은 지양하나 라이브러리 특성상 사용할 수 밖에 없었습니다.)


**히어로 섹션 딤 처리**

- 복잡한 레이어에서 z-index 충돌을 막기 위해 isolation: isolate 적용

- mask-image로 딤 처리 시 디바이스 프레임 박스 섀도우 노출 문제 해결

- 관련 의사 요소(the associated pseudo-elements)에 `pointer-events: none`으로 사용성 보호


**비디오 섹션**

- 초기에는 포스터 이미지 + PlayButton만 보여주고 클릭 시 비디오를 로딩하는 방식으로 지연 로딩 구현

- LCP 개선 및 불필요한 초기 리소스 로드를 최소화


**폴더 대소문자 문제 대응**

- git  폴더 대소문자 문제로 인한 이슈 대응 

- git mv를 두 번 사용해 video → Video로 명시적으로 변경
```
    # 1단계: 임시 이름으로 이동
    git mv src/commons/components/landing/video src/commons/components/landing/video_tmp

    # 2단계: 최종 이름으로 다시 이동
    git mv src/commons/components/landing/video_tmp src/commons/components/landing/Video
```

----

## 웹 표준, 접근성, SEO 적용 내용

### 시맨틱 마크업

- <header>, <nav>, <main>, <section>, 등 HTML5 시맨틱 태그  활용

- 이미지 + 캡션 영역은 <figure>, <figcaption> 적용

- GNB 바로 뒤에 스킵 링크(SkipLink) 추가하여 키보드 사용자 접근성 향상

### 웹 접근성(WCAG 2.1 AA)

- 의미 있는 이미지에 alt 제공 / 장식용 이미지는 alt="" 처리

- 모든 인터랙티브 요소는 Tab 접근 및 Enter/Space 활성화 가능

- 탭은 ARIA 속성(aria-label/expanded/controls 등) 명시

### SEO

- 단 하나의 <h1> 유지

- <head> 내부에 title, meta description, OG 태그 구성

- 스크린리더 전용 sr-only H1을 main 내부에 배치해 페이지 주제 확인 가능

### Storybook 

- 요구사항에 따라서 재사용성과 협업을 생각하며 주요 컴포넌트를 작성하였습니다.

| 컴포넌트 | Storybook URL |
|----------|----------------|
| Button | http://localhost:6006/?path=/story/components-ui-button--primary |
| PlayButton | http://localhost:6006/?path=/story/components-ui-playbutton--with-circle |
| Select | hhttp://localhost:6006/?path=/story/components-ui-select--default-with-icon |
| ImageTab | http://localhost:6006/?path=/story/components-ui-imagetab--default |
| ImageSlider | http://localhost:6006/?path=/story/components-ui-imageslider-carousel--default |
| SkipLink | http://localhost:6006/?path=/story/components-ui-skiplink--default |

---

## 구조도

<details>

    <summary>📂프로젝트 폴더 구조 보기</summary>
```📦
src
 ┣ 📂commons
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂landing
 ┃ ┃ ┃ ┣ 📂Hero
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┗ 📜styles.module.scss
 ┃ ┃ ┃ ┣ 📂ImageSlider
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┗ 📜styles.module.scss
 ┃ ┃ ┃ ┣ 📂ImageTab
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┣ 📜logic.ts
 ┃ ┃ ┃ ┃ ┗ 📜styles.module.scss
 ┃ ┃ ┃ ┗ 📂Video
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┣ 📜logic.ts
 ┃ ┃ ┃ ┃ ┗ 📜styles.module.scss
 ┃ ┃ ┗ 📂ui
 ┃ ┃ ┃ ┣ 📂Button
 ┃ ┃ ┃ ┃ ┣ 📂prompts
 ┃ ┃ ┃ ┃ ┃ ┣ 📜prompt.201.stories.txt
 ┃ ┃ ┃ ┃ ┃ ┗ 📜prompt.201.ui.txt
 ┃ ┃ ┃ ┃ ┣ 📜index.stories.tsx
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┗ 📜styles.module.scss
 ┃ ┃ ┃ ┣ 📂ImageSlider
 ┃ ┃ ┃ ┃ ┣ 📂Carousel
 ┃ ┃ ┃ ┃ ┃ ┣ 📜index.stories.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜styles.module.scss
 ┃ ┃ ┃ ┃ ┣ 📂SlideCard
 ┃ ┃ ┃ ┃ ┃ ┣ 📜index.stories.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜styles.module.scss
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂ImageTab
 ┃ ┃ ┃ ┃ ┣ 📜index.stories.tsx
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┗ 📜styles.module.scss
 ┃ ┃ ┃ ┣ 📂PlayButton
 ┃ ┃ ┃ ┃ ┣ 📜index.stories.tsx
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┗ 📜styles.module.scss
 ┃ ┃ ┃ ┣ 📂PlayIcon
 ┃ ┃ ┃ ┣ 📂Select
 ┃ ┃ ┃ ┃ ┣ 📂prompts
 ┃ ┃ ┃ ┃ ┃ ┣ 📜prompt.201.stories.txt
 ┃ ┃ ┃ ┃ ┃ ┗ 📜prompt.201.ui.txt
 ┃ ┃ ┃ ┃ ┣ 📜index.stories.tsx
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┗ 📜styles.module.scss
 ┃ ┃ ┃ ┗ 📂SkipLink
 ┃ ┃ ┃ ┃ ┣ 📜index.stories.tsx
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂constants
 ┃ ┃ ┣ 📜globalConstants.ts
 ┃ ┃ ┣ 📜images.ts
 ┃ ┃ ┗ 📜types.ts
 ┃ ┣ 📂hooks
 ┃ ┃ ┣ 📜useImageTab.ts
 ┃ ┃ ┣ 📜useLoginNotice.ts
 ┃ ┃ ┣ 📜useScrollSpy.ts
 ┃ ┃ ┗ 📜useVideoAutoPlay.ts
 ┃ ┗ 📂layout
 ┃ ┃ ┣ 📂Gnb
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┣ 📜logic.ts
 ┃ ┃ ┃ ┗ 📜styles.module.scss
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.module.scss
 ┣ 📂pages
 ┃ ┣ 📜_app.tsx
 ┃ ┣ 📜_document.tsx
 ┃ ┗ 📜index.tsx
 ┣ 📂stories
 ┃ ┣ 📜Page.tsx
 ┃ ┣ 📜page.interactions.ts
 ┃ ┣ 📜page.module.scss
 ┃ ┗ 📜page.stories.ts
 ┗ 📂styles
 ┃ ┣ 📜_mixins.scss
 ┃ ┗ 📜globals.scss

 ```
</details>

--

## 기술 스택
- Framework: [Next.js 14](https://nextjs.org/)
- Language: [TypeScript](https://www.typescriptlang.org/)
- Styling: [Sass](https://sass-lang.com/) / [CSS Modules](https://github.com/css-modules/css-modules)
- UI Components: [Storybook](https://storybook.js.org/)
- Linting: [ESLint](https://eslint.org/)
- Formatting [Prettier](https://prettier.io/)
- Package Manager [Yarn](https://yarnpkg.com/)

### 추가 설치 라이브러리 목록
- Image Slide 컴포넌트 구현을 위해 `swiper": "^12.0.3`을 설치하였습니다.
- Jest 에러 해결을 위해 라이브러리 추가 및 업데이트 등을 하였습니다.("@types/jest": "^29.5.14","@types/node": "^20.11.16",)

---

## 시작하기

### 전제 조건

- [Node.js](https://nodejs.org/en/) (v20.x 이상 권장)
- [Yarn](https://yarnpkg.com/getting-started/install)

### 설치

1.  저장소를 클론합니다.
    ```bash
    git clone [본인 GitHub 저장소 URL]
    ```
2.  프로젝트 디렉토리로 이동합니다.
    ```bash
    cd design-to-markup
    ```
3.  의존성을 설치합니다.
    ```bash
    yarn install
    ```

### 사용 가능한 스크립트

-   `yarn storybook`: Storybook을 실행합니다. (http://localhost:6006)
-   `yarn storybook:build`: Storybook을 정적 파일로 빌드합니다.
-   `yarn dev`: 로컬에서 프로젝트를 실행합니다.