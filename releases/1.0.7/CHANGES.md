# Drey Browser 1.0.7

## English

### AI Agent files and preview
- When Claude or Codex reads an image from a known path, the conversation shows a file link instead of a plain “[Image]” label. Clicking it opens the existing preview; no thumbnail, copy or extra Base64 is stored. Images returned without a path keep the previous display.
- Generated image files are linked and open in the preview like HTML and Markdown outputs. Ordinary web links behave as before.
- File types the preview cannot show (for example PPTX, DOCX, XLSX) are marked “Opens in default app” and open the original file in the Windows default application.
- Source and settings files (code, TOML/YAML/JSON/INI/XML/ENV and more) open read-only and can be switched to a simple editor with explicit Save. HTML, HTM, SVG, CSV and TSV keep their rendered view and also allow editing the source. IPYNB is shown as JSON; cells are never run. Images, PDF, audio and video stay view-only.
- Saving keeps the original encoding, BOM and line endings. Files that cannot be saved back exactly (mixed line endings, lossy encoding, binary or partially shown large files) stay read-only, and changes made by the agent while you are editing are reported as a conflict instead of being overwritten. Unsaved edits are protected when you switch or close.

### Updates
- New setting “Check for updates every 6 hours while running” (on by default). When it is off, the app still checks once at startup and you can check anytime with “Check for updates”. Downloading and installing are always your choice.

### Startup
- If the browser engine cannot start, the log now records a short diagnosis of the WebView2 runtime location (no personal paths).

## 한국어

### AI Agent 파일·미리보기
- Claude·Codex가 경로가 확인되는 그림을 읽으면 대화에 `[그림]` 대신 파일 링크가 보입니다. 누르면 기존 미리보기로 열리며 썸네일·사본·추가 Base64를 저장하지 않습니다. 경로 없이 돌아온 그림은 기존 표시를 유지합니다.
- 만든 그림 파일도 HTML·Markdown 산출물처럼 링크로 미리보기에서 엽니다. 일반 웹 링크 동작은 그대로입니다.
- 미리보기를 지원하지 않는 파일(PPTX·DOCX·XLSX 등)에는 “기본 앱으로 열기” 표시가 붙고, 원본을 Windows 기본 앱으로 엽니다.
- 코드·설정 파일(TOML/YAML/JSON/INI/XML/ENV 등)은 읽기 모드로 열리고, 고치기로 바꿔 명시적으로 저장할 수 있습니다. HTML·HTM·SVG·CSV·TSV는 기존 보기와 함께 원문 고치기를 제공합니다. IPYNB는 JSON 원문으로만 보여 주며 셀을 실행하지 않습니다. 그림·PDF·음성·영상은 보기 전용입니다.
- 저장할 때 원래 인코딩·BOM·줄바꿈을 지킵니다. 그대로 다시 저장할 수 없는 파일(줄바꿈 혼합·손실 인코딩·바이너리·일부만 표시한 큰 파일)은 읽기 전용이며, 고치는 중 에이전트가 파일을 바꾸면 덮어쓰지 않고 충돌로 알립니다. 저장하지 않은 고침은 전환·닫기 때 보호됩니다.

### 업데이트
- 새 설정 “실행 중 6시간마다 업데이트 확인”(기본 켜짐). 꺼도 앱을 시작할 때 한 번 확인하고, [업데이트 확인]으로 언제든 확인할 수 있습니다. 내려받기·설치는 직접 고릅니다.

### 시작
- 브라우저 엔진을 시작하지 못하면 WebView2 런타임 위치를 짧게 진단해 기록합니다(개인 경로 없음).

## Known limitations / 알려진 제한

- Korean input and agent conversations were verified with automated events and a mock CLI, not a physical Windows IME session or paid model accounts. / 한글 입력·에이전트 대화는 자동 이벤트와 모의 CLI로 확인했으며, 실제 Windows 입력기 세션·유료 모델 계정 확인은 아닙니다.
- The 6-hour interval itself was verified with a simulated clock; the startup check with the setting off was verified on the installed app. / 6시간 주기 자체는 가상 시계로, 설정을 끈 상태의 시작 확인은 설치본에서 확인했습니다.

Windows x64용입니다. 설치 파일은 코드 서명되지 않았습니다. 실행 전 이 Release의 SHA256SUMS.txt로 파일을 확인할 수 있습니다. 업데이트는 기존 설정과 작업 자료를 보존합니다. 타사 라이선스 고지는 앱에 포함되어 있습니다.

Windows x64. The installer is unsigned. SHA256SUMS.txt is provided with this release. Updating preserves existing settings and workspace data. Third-party license notices are bundled in the application.
