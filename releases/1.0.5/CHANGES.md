# Drey Browser 1.0.5

## 한국어

사용성 개선과 사용자 스크립트 관리 창, HWP 뷰어 엔진 업데이트를 담은 패치입니다.

- 주소창에서 벗어나면 자동완성 추천이 함께 닫힙니다.
- 외부 링크는 기본 그룹에서 열립니다. 기본 그룹은 언어에 따라 **기본 / Default**로 표시되며 이름을 바꿀 수 없습니다.
- 세로탭에 스크롤이 생길 때만 닫기 버튼과 겹치지 않도록 공간을 확보합니다. 하위탭 자동 펼치기를 설정에서 끌 수 있으며 수동 펼치기는 유지됩니다. 보관함 탭 아이콘도 통일했습니다.
- 탐색기에서 이름 줄바꿈·속성 접기 버튼 위치와 속성 구분선을 정리했습니다. 이름과 속성 사이의 구분선을 끌어 너비를 바꿀 수 있습니다.
- 텍스트 편집기에 열린 파일 선택 행과 미저장 표시가 항상 보입니다. Markdown·텍스트 편집 중 커서 아래에 여유 공간을 확보합니다.
- 사용자 스크립트는 설정 안의 큰 관리 창에서 편집합니다. 저장해도 창이 닫히지 않으며, 이름·버전이 바뀌어도 기존 항목을 유지합니다. 저장 실패와 지연된 응답으로 다른 스크립트의 편집 내용이 바뀌는 문제를 보완했습니다.
- AI Agent의 HTML 미리보기에 새로고침 버튼을 추가했습니다. 미리보기만 다시 읽으며 작성 중인 채팅은 유지합니다. 세션 목록의 보관 기간 안내를 눌러 기존 설정 창을 열 수 있습니다. 이 기간 설정은 Claude 전용입니다.
- 외부 앱 실행 허용 창의 버튼 잘림을 줄이고 요청 페이지·대상 정보를 확인할 수 있게 했습니다. 요청 탭이 닫혀도 같은 창에서 허용 여부를 결정할 수 있습니다. 시간이 지난 요청은 즉시 실행하지 않고 다음 요청의 허용만 저장합니다.
- 다른 창의 탭을 끌어오면 대상 창의 세로탭이 펼쳐집니다. 실제 놓기는 세로탭 영역에서 합니다.
- HWP 뷰어를 0.9.0 기반 공식 후속 빌드로 업데이트하고 글꼴·라이선스 고지를 갱신했습니다. 일부 문서의 사진끼리 겹치는 배치는 상류 엔진의 제한으로 남아 있습니다.
- 닫힌 창의 늦은 이벤트와 탭 응답 검사 사이의 경합을 방어하고, 장시간 정지 후 미응답을 조사할 진단 정보를 보완했습니다. 원인이 확인되지 않은 YouTube 미응답을 해결했다고 판정하지는 않았습니다.
- 숨은 AI 질문 창의 웹뷰 종료·초기화 실패 후 정리를 보완했습니다. 진단 ZIP에 주소·제목 없이 탭·지연 탭·웹뷰·엔진 프로세스 수를 추가했습니다. 복원 탭의 엔진 생성 방식은 유지하며, about:blank 항목 자체를 누수로 판정하지 않습니다.

## English

A usability update with a new user-script manager and an HWP viewer engine update.

- Address suggestions close when the address bar loses focus.
- External links open in the default group. Its localized name, **기본 / Default**, is fixed.
- Vertical tabs reserve space for the scrollbar only when needed, keeping close buttons clear. Automatic expansion of plugin subtabs can be disabled; manual expansion remains available. Archived groups use the archive icon consistently.
- Explorer has clearer controls for name wrapping and the properties panel. Drag the divider between names and properties to resize the panel.
- The text editor keeps its open-file selector and unsaved indicator visible. Markdown and text editing leave space below the cursor.
- User scripts are edited in a large manager within Settings. Saving keeps the manager open, and changes to script metadata retain the existing item. Failed writes and delayed save responses are handled more safely.
- AI Agent HTML previews have a refresh button that reloads only the preview and preserves the chat draft. The retention notice on the session list opens its existing settings dialog; this retention setting applies to Claude.
- External-app permission prompts show the requesting page and destination, fit their actions more reliably, and remain available after the requesting tab closes. Expired requests can only save permission for a future request.
- Dragging a tab over another browser window temporarily expands its vertical tabs. Drop the tab in the tab rail to move it.
- The HWP viewer uses an official build based on 0.9.0, with updated fonts and license notices. Some image-to-image layout overlaps remain an upstream limitation.
- Added guards against late events from closed windows and stale tab-response checks, plus diagnostics for unresponsive tabs after long suspension. The reported YouTube hang has no confirmed root cause and is not claimed as resolved.
- Improved cleanup of the hidden AI question webview, including initialization failures. Diagnostic ZIPs include tab, pending-navigation, webview, and engine-process counts without page addresses or titles. Restored tabs keep their existing engine creation policy; about:blank entries alone are not evidence of a leak.

---

Windows x64용입니다. 설치 파일은 코드 서명되지 않았습니다. 실행 전 이 Release의 SHA256SUMS.txt로 파일을 확인할 수 있습니다. 업데이트는 기존 설정과 작업 자료를 보존합니다. 타사 라이선스 고지는 앱에 포함되어 있습니다.

Windows x64. The installer is unsigned. SHA256SUMS.txt is provided with this release. Updating preserves existing settings and workspace data. Third-party license notices are bundled in the application.
