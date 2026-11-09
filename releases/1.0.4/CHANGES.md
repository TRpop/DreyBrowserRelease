# Drey Browser 1.0.4

## 한국어

탐색기와 탭·그룹 사용성을 개선하고 Markdown 편집의 외부 변경 충돌을 수정한 패치입니다.

- 탐색기에서 이름 줄바꿈을 켜고, 오른쪽 속성 영역을 접거나 너비를 조절할 수 있습니다. 속성은 수정한 날짜·크기·파일 버전·만든 날짜 순서입니다.
- 경로의 폴더를 우클릭해 해당 위치 또는 현재 위치의 경로를 복사하거나, 같은 탐색기 데스크톱 안에 새 폴더 창으로 열 수 있습니다.
- 탐색기 앞뒤·상위 폴더 이동과 Ctrl+Shift+N 새 폴더 단축키, 빈 공간 드래그 선택, 상단 폴더 창 목록 순서 변경을 지원합니다.
- 빈 그룹을 기존처럼 자동 정리하거나, 창별로 보존하거나, 여러 창에서 그룹 목록을 공유할 수 있습니다. 공유하는 것은 그룹 목록이며 열린 웹페이지가 복제되지는 않습니다.
- 새 탭도 이전 탭 복원에 포함됩니다. 대상이 따로 지정되지 않은 외부 파일 열기는 기본 그룹을 사용합니다.
- 웹 요소 고르기를 Esc로 취소하고, 주소창에서 붙여넣고 바로 이동할 수 있습니다. 다른 창으로 탭을 끌어오면 세로탭이 받을 준비를 합니다.
- AI Agent 화면 준비와 세션 목록 로딩 안내를 개선했습니다.
- 페이지 로딩이 오래 걸리면 기다림·중지·재시도와 진단 상세를 제공하는 안내가 표시됩니다. 경과 시간만으로 네트워크나 서버 문제라고 단정하지 않습니다.
- Markdown 보기/고치기 전환 후 오래된 편집본이 외부 변경을 조용히 덮어쓸 수 있던 문제를 수정했습니다. 저장하지 않은 사용자 편집은 유지하며 충돌 시 선택을 요청합니다.

Windows x64용입니다. 설치 파일은 코드 서명되지 않았습니다. 실행 전 이 Release의 SHA256SUMS.txt로 파일을 확인할 수 있습니다. 업데이트는 기존 설정과 작업 자료를 보존합니다.

## English

A maintenance update for Explorer, tab/group workflows, and Markdown editing.

- Wrap long Explorer names and collapse or resize the properties pane. Properties are ordered: modified date, size, file version, created date.
- Right-click a breadcrumb to copy that folder's or the current folder's path, or open either in a new folder window on the same Explorer desktop.
- Explorer navigation shortcuts, Ctrl+Shift+N for a new folder, drag selection on empty space, and reordering folder-window buttons.
- Choose automatic removal of empty groups, per-window retention, or a shared group catalog across windows. Live web tabs are not duplicated.
- New tabs are included in session restoration. External file opens without an explicit destination use the default group.
- Cancel element picking with Esc, paste and navigate from the address bar, and reveal the receiving tab rail during cross-window tab dragging.
- Clearer AI Agent preparation and session-list loading feedback.
- A nonblocking slow-page notice offers waiting, stopping, retrying, and diagnostic details. Elapsed time alone is not presented as proof of a server or network fault.
- Fixes an old Markdown draft silently overwriting an external edit after switching between preview and editing. Unsaved local changes remain protected by conflict handling.

Windows x64. The installer is unsigned. SHA256SUMS.txt is provided with this release. Updating preserves existing settings and workspace data.
