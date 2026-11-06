# Drey Browser — 사용 조건과 개인정보 설명

[English](TERMS.md) · **한국어**

시행일: 2026-11-07 · 문의: [GitHub Issues](https://github.com/TRpop/DreyBrowserRelease/issues) (이슈는 공개되므로 개인정보나 비밀번호를 쓰지 마세요)

## 사용 조건

1. **사용 허락**: Drey Browser(이하 "앱")는 무료다. 개인·회사 업무·상업 목적으로 설치해 쓸 수 있다.
2. **소스·재배포**: 앱 본체 소스는 공개하지 않는다. 앱 설치 파일을 다시 배포할 때는 받은 그대로(수정 없이) 배포하고, 함께 든 고지 파일을 빼지 않는다.
3. **제3자 구성 요소**: 앱에는 오픈소스 등 제3자 구성 요소가 들어 있다. 그 구성 요소에는 앱 조건이 아니라 각자의 라이선스가 적용된다. 목록과 원문: 설정 > 정보 > 오픈소스 라이선스, 앱 폴더와 이 저장소의 `THIRD-PARTY-NOTICES.txt`. 내장 에이전트 스킬은 MIT 라이선스(Copyright (c) 2026 TRpop)이며, obra/superpowers 를 바탕으로 한 부분은 그 프로젝트의 MIT 고지(Copyright (c) 2025 Jesse Vincent)를 따른다.
4. **외부 서비스**: 번역·AI·웹 챗봇 등은 사용자가 고른 외부 서비스(Google·DeepL·NAVER·Anthropic·OpenAI·Microsoft 등)를 쓴다. 그 이용에는 각 서비스의 약관과 요금이 적용된다. 계정·키는 사용자가 직접 준비한다.
5. **보증 없음**: 앱은 "있는 그대로" 제공된다. 법이 허용하는 범위에서 앱 사용으로 생긴 손해에 대해 책임지지 않는다. 중요한 자료는 따로 백업한다.
6. **서명하지 않은 설치 파일**: 설치 파일은 코드 서명하지 않아 Windows 가 경고를 보일 수 있다. 이 저장소의 Releases 에서만 받고, 함께 올린 SHA-256 값으로 확인한다.

## 개인정보 설명

- **Drey 계정 없음**: 앱에는 자체 계정·로그인·동기화가 없다. 앱 개발자가 운영하는 서버로 사용 기록·통계·대화를 보내는 기능은 없다. 아래 '이 PC 에 저장되는 것' 은 이 PC 에만 남는다.
- **이 PC 에 저장되는 것**: 탭·그룹·방문 기록·북마크·다운로드 목록·설정·비밀번호·플러그인 자료·AI Agent 의 대화·도구 실행·세션 기록과 작업 공간 목록·앱 기록(app.log)은 Windows 사용자 프로필의 `%LOCALAPPDATA%\DreyBrowser-UserData` 에 저장된다. 지우려면 앱을 지운 뒤 이 폴더를 지운다.
- **웹 엔진**: 웹 페이지는 Microsoft Edge WebView2 런타임으로 연다. 방문한 사이트는 일반 브라우저처럼 그 사이트의 정책에 따라 정보를 받는다. WebView2 런타임에는 Microsoft 의 조건이 적용된다.
- **기능이 동작하는 동안 생기는 외부 연결**:
  - 번역: 기본은 Google 번역 웹 주소(`translate.googleapis.com`)로 번역할 글을 보낸다. DeepL·Papago·Google Cloud 를 고르면 사용자가 넣은 키로 그 서비스에 보낸다.
  - 질문 창·AI Agent: 이 PC 에 사용자가 설치한 Claude Code·Codex 가 각자의 계정으로 해당 회사(Anthropic·OpenAI)에 보낸다. 보내는 범위는 사용자가 쓴 입력, 질문한 페이지 내용, 첨부, 그 도구가 작업 폴더에서 읽은 자료, 도구 실행 결과다. 그 대화 기록은 이 PC 에도 남지만(위 저장 항목) 앱 개발자 서버로는 보내지 않는다.
  - 웹 챗봇(ChatGPT·Copilot): 사이드뷰에서 그 웹사이트를 그대로 연다.
  - 한글 편집기 글꼴: 처음 한 번 `cdn.jsdelivr.net` 에서 받아 이 PC 에 보관한다.
  - 업데이트 확인: 앱이 시작한 뒤 약 30초에(확인에 성공하면 하루에 한 번까지) 그리고 사용자가 직접 확인할 때(자동 확인은 설정에서 끌 수 있음), 공개 GitHub 저장소(`github.com/TRpop/DreyBrowserRelease`)의 Release 정보를 읽는다. 방문 기록·대화·작업 파일은 보내지 않는다. IP 주소 등 일반 통신 정보는 GitHub 정책에 따른다.
- **문의**: [github.com/TRpop/DreyBrowserRelease/issues](https://github.com/TRpop/DreyBrowserRelease/issues) 에 이슈를 연다.
