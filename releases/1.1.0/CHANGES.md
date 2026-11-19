# Drey Browser 1.1.0

## English

### DREY AI (new)
- A **DREY AI** button left of the address bar opens one assistant that stays with you across the browser; press it again to return to your tab. All windows share one conversation, and moving it to another window keeps the draft and attachments. It is not available in private windows.
- It uses Claude Code or Codex installed on this PC and signed in with your own account (no Drey account). You can turn DREY AI on or off in Settings; by default it is on when one of the two is installed.
- The right panel has **Schedule**, **Tasks** and **Files** tabs and can be resized; the chat area keeps its minimum width.
- **Schedule**: add one-off and repeating events (daily/weekly/monthly/yearly, interval, end date or count) by asking or in the calendar. Edits and deletions of repeating events ask whether they apply to this one, following ones or all. The assistant can add up to 50 events at once on a single approval card; nothing is saved if you decline. When a repeating event's first occurrence differs from its start date, the real first date is shown. Reminders work while the browser is running; reminders after it closes are an optional setting (off by default).
- **Tasks**: multi-step work keeps its plan, decisions, open points and the results of actual runs, so you can continue without rereading the chat.
- **Files and documents**: read text in common encodings and the text layer of DOCX, XLSX, PPTX, HWPX and PDF; plan copy/move/rename/delete with one approval card and optional size/SHA256 checks; create and edit DOCX, XLSX and PPTX as new copies in the output folder (your originals are not overwritten). ZIP files can be listed, read, created and extracted with path and size safeguards.
- **Commands and scripts**: the assistant can run shell commands and Python scripts. They run with your normal Windows user rights and are **not** limited to the folders you approved for file work, so by default each command is shown for your approval; you can change this in Settings (always allow / off). Commands are refused when the browser runs as administrator.
- **Memory**: keeps what you ask it to remember and per-topic summaries, looks them up as a short index and reads only what it needs. Edited memories keep their last 5 versions so you can restore one; topics can be renamed or merged after a preview.
- **Other apps**: an AI app connected over MCP can ask to add events to your schedule; you approve or decline all of them on one card. It cannot see, change or delete your events.

### AI Agent
- **Favorites**: switch the Files tab between Files and Favorites. Add files, folders and web pages (right-click in the file tree, or Add with the Windows picker); give them an alias without renaming the original. Folders inside or outside the workspace expand in the same tree. Removing a favorite never deletes the original, and favorites do not widen the AI's file access. Claude and Codex can list and manage favorites too.
- **Scheduled send**: "Send at a time…" next to the Send button. At that time the message is sent right away — into the running reply if one is running, otherwise as a new request — and messages scheduled for the same time go out in order. "Send when the response ends" is a separate queue and is not blocked by future scheduled messages. Scheduled messages are sent only while the browser is running; missed ones wait for you to confirm.
- **Send now while a reply is running** adds a short note that the message is an additional or revised request, so earlier work is kept unless you cancel it.
- Commands run by Claude or Codex now appear as tool cards in the conversation; the bottom-right area shows only real sub-agents. Context and usage figures are calculated more accurately.
- Drop files onto the message box to attach them. Type "/" to pick an available skill.
- When the window is narrow, the preview and workspace open as an overlay so the chat keeps enough room.

### Browser
- **Explorer search**: press Ctrl+F (or the search button) in an Explorer folder window to search names under that folder, in a separate search window or inside the folder window (Settings). The original folder window keeps its name, home, history and view.
- **Optional file index** for faster name search: search on request (default), index while the browser runs, or always. The NTFS helper service is installed only if you choose it.
- **Tab groups**: drag a group header in the vertical tab list to reorder groups.
- **Middle-click** Back/Forward to open that page in a new background tab, or Reload to duplicate the tab.
- **Markdown**: Markdown tabs and the AI previews share one renderer (math, Mermaid, Graphviz, WaveDrom and Vega diagrams, callouts, code copy, themes).
- Page reading for AI features now includes visible same-origin nested frames and form content.
- "Open link in new window" in the link menu is now "Open link in new tab".
- Theme changes apply immediately to open AI screens.

### Reliability
- On first launch, including updates from earlier versions, review and accept the terms before the browser starts. Declining exits without recording acceptance. Ordinary updates retain your acceptance; only a required terms revision asks again. View the terms version and acceptance time in Settings > About.
- The diagnostics ZIP can include crash reports for Drey; after the ZIP is saved and checked, you are asked once whether to delete the included original dumps.
- Fixed tab icons getting mixed up between pages. When saving settings fails, the app no longer shows values that were not saved. The assistant screen is rebuilt, keeping the conversation, if its page process stops.

## 한국어

### DREY AI (새 기능)
- 주소창 왼쪽 **DREY AI** 단추로 브라우저 전체에서 이어 쓰는 비서를 엽니다. 다시 누르면 보던 탭으로 돌아갑니다. 모든 창이 대화 하나를 함께 쓰고, 다른 창으로 옮겨도 쓰던 초안·첨부가 이어집니다. 비공개 창에서는 열리지 않습니다.
- 이 PC에 설치하고 내 계정으로 로그인한 Claude Code 또는 Codex를 씁니다(Drey 계정 없음). 설정에서 DREY AI를 켜고 끌 수 있으며, 둘 중 하나가 설치되어 있으면 기본으로 켜집니다.
- 오른쪽 패널은 **일정·업무·자료** 탭이며 폭을 조절할 수 있습니다. 대화 영역은 최소 폭을 지킵니다.
- **일정**: 한 번·반복 일정(매일·매주·매월·매년, 간격, 종료 날짜·횟수)을 말로 또는 달력에서 넣습니다. 반복 일정을 고치거나 지울 때 이번/이후/전체를 고릅니다. 비서는 일정 최대 50개를 승인 카드 한 장으로 한 번에 넣으며, 거절하면 아무것도 저장하지 않습니다. 반복 일정의 첫 회차가 시작일과 다르면 실제 첫 날짜를 보여 줍니다. 알림은 브라우저가 켜져 있을 때 동작하고, 브라우저를 닫은 뒤의 알림은 설정에서 고르는 선택 기능입니다(기본 꺼짐).
- **업무**: 여러 단계 일의 계획·정한 것·미정인 것·실제 실행 결과를 함께 남겨, 긴 대화를 다시 훑지 않고 이어 합니다.
- **파일과 문서**: 흔한 인코딩의 글과 DOCX·XLSX·PPTX·HWPX·PDF의 텍스트 층을 읽습니다. 복사·이동·이름 바꾸기·삭제를 승인 카드 한 장으로 계획하고 크기·SHA256 확인을 고를 수 있습니다. DOCX·XLSX·PPTX를 결과물 폴더의 새 사본으로 만들고 고칩니다(원본을 덮어쓰지 않음). ZIP은 경로·크기 안전장치 안에서 목록·읽기·만들기·풀기를 합니다.
- **명령과 스크립트**: 비서가 셸 명령과 Python 스크립트를 실행할 수 있습니다. 일반 Windows 사용자 권한으로 실행되며 파일 작업에 허락한 폴더 범위에 **묶이지 않습니다**. 그래서 기본은 명령마다 내용을 보고 승인하는 방식이며, 설정에서 항상 허용·끄기로 바꿀 수 있습니다. 브라우저를 관리자 권한으로 실행하면 명령을 거절합니다.
- **기억**: 기억해 달라고 한 것과 주제별 요약을 남기고, 짧은 목차부터 찾아 필요한 것만 읽습니다. 고친 기억은 최근 5개 판을 남겨 되돌릴 수 있고, 주제는 미리 본 뒤 이름 바꾸기·합치기를 합니다.
- **다른 앱**: MCP로 연결한 AI 앱이 일정 추가를 요청할 수 있습니다. 카드 한 장에서 모두 승인하거나 거절하며, 그 앱은 일정을 보거나 고치거나 지울 수 없습니다.

### AI Agent
- **즐겨찾기**: 파일 탭 위에서 파일/즐겨찾기를 전환합니다. 파일·폴더·웹페이지를 등록하고(파일 트리 우클릭, 또는 [추가]에서 Windows 선택 창), 원본 이름은 그대로 둔 채 별칭을 붙입니다. 작업 공간 안·밖 폴더 모두 같은 트리로 펼칩니다. 즐겨찾기를 해제해도 원본은 지우지 않으며, 즐겨찾기가 AI의 파일 접근 권한을 늘리지 않습니다. Claude·Codex도 즐겨찾기를 조회·관리할 수 있습니다.
- **시간 지정 보내기**: 보내기 단추 옆 ▾의 "시간 지정해서 보내기". 그 시각에 바로 보냅니다 — 응답 중이면 지금 응답에, 쉬는 중이면 새 요청으로. 같은 시각 예약은 등록 순서대로 이어서 보냅니다. "응답 끝나면 보내기"는 따로인 대기열이며 미래 예약에 막히지 않습니다. 예약은 브라우저가 켜져 있을 때만 보내고, 놓친 예약은 확인을 기다립니다.
- **응답 중 바로 보내기**에는 추가·수정 요청이라는 짧은 안내가 붙어, 취소하지 않는 한 기존 작업을 이어 마무리하게 합니다.
- Claude·Codex가 실행한 명령은 대화 안 도구 카드로 보이고, 오른쪽 아래에는 실제 하위 에이전트만 보입니다. 문맥·사용량 표시가 더 정확해졌습니다.
- 입력창에 파일을 끌어 놓아 첨부합니다. "/"를 입력하면 쓸 수 있는 스킬을 고릅니다.
- 창이 좁으면 미리보기·작업 공간이 겹침 화면으로 열려 대화 공간을 지킵니다.

### 브라우저
- **탐색기 검색**: 탐색기 폴더 창에서 Ctrl+F(또는 검색 단추)로 그 폴더 아래 이름을 검색합니다. 결과는 별도 검색 창이나 폴더 창 안에서 봅니다(설정). 원래 폴더 창의 이름·홈·기록·보기는 그대로입니다.
- **선택형 파일 색인**으로 이름 검색을 빠르게: 요청 시 검색(기본)·브라우저 실행 중 색인·항상 색인. NTFS 도우미 서비스는 고를 때만 설치됩니다.
- **탭 그룹**: 세로 탭 목록에서 그룹 머리글을 끌어 그룹 순서를 바꿉니다.
- 뒤로/앞으로를 **가운데 클릭**하면 그 페이지를 새 배경 탭으로, 새로고침을 가운데 클릭하면 탭을 복제합니다.
- **Markdown**: Markdown 탭과 AI 미리보기가 같은 렌더러를 씁니다(수식, Mermaid·Graphviz·WaveDrom·Vega 다이어그램, 콜아웃, 코드 복사, 테마).
- AI 기능의 페이지 읽기가 보이는 같은 출처의 중첩 프레임과 폼 안 본문까지 읽습니다.
- 링크 메뉴의 "새 창에서 링크 열기"를 "새 탭에서 링크 열기"로 바꿨습니다.
- 테마를 바꾸면 열린 AI 화면에도 바로 반영됩니다.

### 안정성
- 처음 실행할 때(이전 버전에서 업데이트한 경우 포함) 약관을 확인하고 동의한 뒤 브라우저를 시작합니다. 거절하면 동의를 기록하지 않고 종료합니다. 일반 업데이트에서는 동의가 유지되고, 재동의가 필요한 약관 변경 때만 다시 묻습니다. 설정 > 정보에서 약관 버전과 동의 시각을 확인할 수 있습니다.
- 진단 ZIP에 Drey 충돌 보고서를 담을 수 있습니다. ZIP을 저장·확인한 뒤에만 담은 원본 덤프를 지울지 한 번 묻습니다.
- 페이지끼리 탭 아이콘이 섞이던 문제를 고쳤습니다. 설정 저장에 실패하면 저장되지 않은 값을 보여 주지 않습니다. 비서 화면의 페이지 프로세스가 멈추면 대화를 지킨 채 화면을 다시 만듭니다.

Windows x64용입니다. 설치 파일은 코드 서명되지 않았습니다. 실행 전 이 Release의 SHA256SUMS.txt로 파일을 확인할 수 있습니다. 타사 라이선스 고지는 앱에 포함되어 있습니다.

Windows x64. The installer is unsigned. SHA256SUMS.txt is provided with this release. Third-party license notices are bundled in the application.
