# 원티드 프리온보딩 7차 4차 과제

## 과제 설명

> [Assignment 4](https://younuk.notion.site/c8c9654411f64ce9aadb2f4a4b136e42) 주제 : - [광고 현황 대시보드 및 광고 관리 서비스](https://www.figma.com/file/4LvAWqkU4ZMcI14MEZzJTx/Madup-X-Wanted-FE-PJT?node-id=0%3A1)를 구현합니다.

- 진행 기간 : 2022-11-04 ~ 2022-11-07

<br />

## 데모

[🚀 GO TO DEMO](https://unrivaled-tulumba-fd4a80.netlify.app/)

1. 통합 광고 현황 대시보드 페이지

![dashboard](https://user-images.githubusercontent.com/50790145/200422451-e6fa1ceb-bf75-4770-ae9e-b57ad7c42a59.gif)

2. 광고 관리 페이지

![ad_manager](https://user-images.githubusercontent.com/50790145/200422488-6f57fa9a-ce00-4620-aee3-e6495f9cff8f.gif)

<br />

## 실행 방법

### Local

```bash
# Clone Repo
git clone git@github.com:wanted-pre-onboarding-frontend-12team/assignment-2-team12.git

# Install Dependency
yarn run install

# Run Project
yarn run dev

# Build Project
yarn run build
```

<br />

## 과제 달성 사항 및 해결 방법

### 필수 구현 범위

- [x] `1. 사이드바`

  - [x] 서비스 추가 버튼까지만, 실제 추가 기능은 구현 X

- [x] `2. 대시보드`

  - [x] 통합광고현황까지만 구현

  - [x] 매체현황은 구현 X

- [x] `3. 광고관리`

  - [x] 광고 표시 및 수정하기까지만 구현

    - [x] 백엔드가 없으므로 수정한 데이터는 새로고침 시 초기화 되도 무방함

  - [x] 광고만들기는 구현 X

### 필수 요구 사항

- [ ] 어떤 상태로 다른 페이지에 이동했다 하더라도, 다시 기존 페이지로 복귀 할 시 마지막 상태가 유지되어야 함 (필터링 상태 등)

- [x] 임의적으로 Fetch 타임을 만들어 로딩 시간 지연

<br />

## 기술스택 & 레포지토리 구조

<br />

<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=black"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/react-router-CA4245?style=for-the-badge&logo=react-router&logoColor=white">

<img src="https://img.shields.io/badge/styled-component-DB7093?style=for-the-badge&logo=styled-component&logoColor=white"> <img src="https://img.shields.io/badge/recharts-FF6384?style=for-the-badge&logo=recharts&logoColor=white"> <img src="https://img.shields.io/badge/react-datepicker-216BA5?style=for-the-badge&logo=react-datepicker&logoColor=white">

<img src="https://img.shields.io/badge/eslint-181717?style=for-the-badge&logo=eslint&logoColor=white"> <img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E"> <img src="https://img.shields.io/badge/yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white">
<img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">
<img src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white">

<br />

```jsx
📦src
 ┣ 📂api
 ┃ ┣ 📜myAds.ts
 ┃ ┗ 📜trend.ts
 ┣ 📂assets
 ┃ ┗ 📂icons
 ┃ ┃ ┣ 📜admanagement.svg
 ┃ ┃ ┣ 📜alarm.svg
 ┃ ┃ ┣ 📜arrow_down.svg
 ┃ ┃ ┣ 📜blue_admanagement.svg
 ┃ ┃ ┣ 📜blue_circle.svg
 ┃ ┃ ┣ 📜blue_dashboard.svg
 ┃ ┃ ┣ 📜bulb.svg
 ┃ ┃ ┣ 📜dashboard.svg
 ┃ ┃ ┣ 📜green_circle.svg
 ┃ ┃ ┣ 📜green_down_triangle.svg
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┣ 📜logo.svg
 ┃ ┃ ┣ 📜red_up_triangle.svg
 ┃ ┃ ┣ 📜setting.svg
 ┃ ┃ ┗ 📜user.svg
 ┣ 📂components
 ┃ ┣ 📂feature
 ┃ ┃ ┣ 📂AdStatusItem
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜styled.ts
 ┃ ┃ ┣ 📂AdStatusList
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜styled.ts
 ┃ ┃ ┣ 📂Card
 ┃ ┃ ┃ ┣ 📂CardInfo
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┗ 📜styled.ts
 ┃ ┃ ┃ ┣ 📂CardTitle
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┗ 📜styled.ts
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜styled.ts
 ┃ ┃ ┣ 📂CardList
 ┃ ┃ ┃ ┣ 📂Skeleton
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┗ 📜styled.ts
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜styled.ts
 ┃ ┃ ┣ 📂Chart
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜styled.ts
 ┃ ┃ ┗ 📂DatePicker
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜styled.ts
 ┃ ┣ 📂layout
 ┃ ┃ ┣ 📂Header
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜styled.ts
 ┃ ┃ ┣ 📂SideBar
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜styled.ts
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styled.ts
 ┃ ┣ 📂shared
 ┃ ┃ ┣ 📂Button
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜styled.ts
 ┃ ┃ ┣ 📂DropDown
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜styled.ts
 ┃ ┃ ┣ 📂Guide
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜styled.ts
 ┃ ┃ ┣ 📂MenuTab
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜styled.ts
 ┃ ┃ ┣ 📂Select
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜styled.ts
 ┃ ┃ ┣ 📂Title
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜styled.ts
 ┃ ┃ ┗ 📂Typography
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜styled.ts
 ┃ ┗ 📜index.ts
 ┣ 📂constants
 ┃ ┗ 📜dropDownDataList.ts
 ┣ 📂contexts
 ┃ ┗ 📜DatePickerStatusProvider.tsx
 ┣ 📂hooks
 ┃ ┣ 📜useDatePickerStatus.ts
 ┃ ┣ 📜useDropdown.ts
 ┃ ┣ 📜useOutsideClick.ts
 ┃ ┗ 📜useTrendData.ts
 ┣ 📂pages
 ┃ ┣ 📂ADManagement
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styled.ts
 ┃ ┣ 📂DashBoard
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styled.ts
 ┃ ┣ 📂NotFound
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┗ 📜index.ts
 ┣ 📂router
 ┃ ┣ 📜index.tsx
 ┃ ┗ 📜routePath.ts
 ┣ 📂styles
 ┃ ┣ 📜GlobalStyle.tsx
 ┃ ┣ 📜index.ts
 ┃ ┣ 📜styled.d.ts
 ┃ ┗ 📜theme.ts
 ┣ 📂types
 ┃ ┣ 📜advertise.ts
 ┃ ┣ 📜media.ts
 ┃ ┗ 📜trend.ts
 ┣ 📂utils
 ┃ ┣ 📜ArrayUtils.ts
 ┃ ┣ 📜DateUtils.ts
 ┃ ┣ 📜KPIUtils.ts
 ┃ ┣ 📜NumberUtils.ts
 ┃ ┣ 📜StorageUtils.ts
 ┃ ┗ 📜index.ts
 ┣ 📜App.tsx
 ┣ 📜index.tsx
 ┗ 📜vite-env.d.ts
```

<br />

## 12팀 소개

| <img src="https://avatars.githubusercontent.com/u/40523487?v=4"/> | <img src="https://avatars.githubusercontent.com/u/50790145?v=4"/> | <img src="https://avatars.githubusercontent.com/u/108744804?v=4"> | <img src="https://avatars.githubusercontent.com/u/97100045?v=4"/> | <img src="https://avatars.githubusercontent.com/u/92246102?v=4"> | <img src="https://avatars.githubusercontent.com/u/96763714?v=4"> |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| <a href="https://github.com/od-log">[팀장] 오다영</a>             | <a href="https://github.com/youngminss">[부팀장] 위영민</a>       | <a href="https://github.com/jong6598">김종현</a>                  | <a href="https://github.com/hopak-e">박상호</a>                   | <a href="https://github.com/forest-6">임승민</a>                 | <a href="https://github.com/kyunghee47">피경희</a>               |

<br />

## 12팀이 동료학습으로 협업하는 방식

1. [Convention Rule](https://github.com/wanted-pre-onboarding-frontend-12team/pre-onboarding-7th-2-2-12/wiki) 을 정의 & 모든 팀원이 실천합니다.

- 1시부터 6시까지는 12팀이 집중해서 작업하는 코어 시간입니다. 멀리 떨어져 있지만 옆에 있는 것처럼 화면을 공유하고 서로 자유롭게 의견을 나누면서 과제를 해결하기 위해 협업합니다.

- 12팀은 git flow 방식으로 개발하고 있습니다. devlop branch에 자신이 작업한 branch를 merge하려면 최소 두 명 이상의 팀원이 리뷰를 하고, 요청을 수락해야 합니다. 그래서 12팀은 pull request 요청이 오는 즉시 12팀의 디스코드에 알람으로, 메일로 각 팀원들에게 전달되어 빠르게 피드백이 가능하면서도 작업하는 branch의 변경사항을 공유할 수 있는 환경을 구성했습니다.

2. 피그잼 & 피그마에서 요구사항을 동료 학습을 기반으로 논의하고 정의합니다.

- [🚀 Figjam 요구 상항 분석 보러가기](https://www.figma.com/file/hWxQ6rPTf2Ftov5xD7M0Hw/Assignment-4---MadUp?node-id=0%3A1)

- [🚀 Figma UI 시안 보러가기](https://www.figma.com/file/wgIUxDLFKQyAqSGww3arko/Assignment-4---MadUp?node-id=0%3A1)
