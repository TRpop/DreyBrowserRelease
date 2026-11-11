# Drey Browser 1.0.6

## English

### Explorer desktop
- Clicking one selected item now leaves only that item selected, while dragging a selection still moves the whole selection together.
- Tiling starts with the most recently selected visible window and leaves minimized windows hidden.
- Back, Forward and Up restore the relevant selection and position. Each property cell exposes its full value in a tooltip.
- Drag feedback shows the file icon, a shortened name or item count, and the intended operation. Same-volume drops default to Move; cross-volume drops default to Copy. Ctrl requests Copy and Shift requests Move. An ordinary drop back in the original folder does nothing; invalid self/descendant drops are rejected.
- Reordering explorer taskbar items uses a floating item and smoothly shifting neighbors.
- Home returns immediately without a confirmation prompt; Back returns to the previous folder.
- Letter and number keys cycle through matching names. Standard Korean two-set consonants also match Hangul initials, with doubled and plain consonants grouped together. Supported punctuation and leading spaces match literally. Editing fields and existing shortcuts keep their behavior.

### Groups and side view
- Normal windows share group identities and names across all three group modes. Settings determine whether empty groups are deleted, hidden locally, or shown in every window.
- Hidden groups remain available in the tab’s Move to group menu. Empty groups can be removed there without temporarily adding a tab.
- Switching to automatic empty-group cleanup asks before removing existing empty groups. Restoring closed tabs preserves group identity and metadata.
- Click a side-view title to edit its address in place. Unsaved plugin changes are checked before leaving. Back can return from a plugin to the new-tab page; Forward opens the plugin’s start screen.
- Fixed the clipped main-page Find bar when a side view is open.

### AI Agent and settings
- Dot-prefixed files and folders are folded into the existing hidden-items section.
- Fixed extra blank space beneath prompts near line-wrap boundaries.
- Improved background-command status and protection against reclaiming a CLI process with active work.
- Clicking a settings category clears the search and opens that category.
- The user-script summary list is read-only. Use the management button to edit scripts in the large dialog, now with local JavaScript syntax highlighting.

## 한국어

### 탐색기
- 다중선택 중 한 항목을 클릭하면 그 항목만 선택하고, 끌기는 여러 항목을 함께 유지합니다.
- 바둑판 배치는 현재 보이는 탐색기를 최근 선택 순으로 놓으며 최소화한 탐색기는 복원하지 않습니다.
- 뒤로·앞으로·상위 폴더 이동의 선택과 위치를 복원하고, 속성별 전체 값 툴팁을 제공합니다.
- 끌기에는 아이콘·짧은 이름/개수·실제 복사/이동을 표시합니다. 같은 볼륨은 기본 이동, 다른 볼륨은 기본 복사이며 Ctrl·Shift로 지정할 수 있습니다. 원래 폴더로 일반 드롭하면 아무 동작도 하지 않습니다.
- 작업줄 순서 이동에 떠 있는 항목과 주변 이동 효과를 넣었습니다.
- 홈 버튼은 확인 없이 바로 이동하고 뒤로가기로 복귀할 수 있습니다.
- 영숫자·두벌식 초성 순회와 일반/쌍자음 통합, 지원 기호·선행 공백 찾기를 제공합니다. 입력칸과 기존 단축키는 보호합니다.

### 그룹·사이드뷰
- 세 그룹 모드 모두 창 간 ID·이름을 공유합니다. 모드에 따라 빈 그룹을 삭제하거나 이 창에서 숨기거나 모든 창에 표시합니다.
- 숨긴 그룹은 탭 이동 메뉴에서 고를 수 있고, 전체 창에서 빈 그룹은 그 메뉴에서 삭제할 수 있습니다.
- 기본 모드로 바꿀 때 기존 빈 그룹 삭제를 확인합니다. 닫은 탭 복구 시 그룹 ID와 정보를 보존합니다.
- 사이드뷰 제목을 눌러 같은 자리에서 주소를 편집할 수 있습니다. 플러그인 미저장 변경을 보호하고 뒤로 새 탭·앞으로 시작 화면 탐색을 지원합니다.
- 사이드뷰 사용 중 메인 찾기 막대가 잘리는 문제를 수정했습니다.

### AI Agent·설정
- dot 파일·폴더는 기존 숨긴 항목 안으로 접습니다.
- 줄바꿈 경계에서 프롬프트 아래 빈 공간이 생기는 문제를 수정했습니다.
- 백그라운드 명령 상태 표시와 작업 중인 CLI 프로세스 보호를 보완했습니다.
- 설정 메뉴를 누르면 검색어를 지우고 해당 설정으로 이동합니다.
- 유저 스크립트 목록은 읽기 전용이며, 관리 버튼으로 여는 큰 편집창에 로컬 JavaScript 구문 강조를 제공합니다.

## Known limitations / 알려진 제한

- A desktop tab restored from an older session may keep showing its previous internal address in the address bar until it navigates; the document, desktop and its data are restored correctly. / 옛 세션에서 복원한 데스크톱 탭은 이동하기 전까지 주소창에 이전 내부 주소가 보일 수 있습니다. 문서·데스크톱·자료 복원은 정상입니다.
- In a long automated test run, some keyboard input to Find and the address bar did not reach the app; the same checks pass when the app has focus. No product defect was confirmed, and the cause remains under investigation. / 긴 자동 시험 묶음에서 찾기·주소창 일부 입력이 앱에 닿지 않은 경우가 있었습니다. 앱이 앞창일 때 같은 검사는 통과하며, 제품 결함은 확인되지 않았고 원인은 계속 조사합니다.
- Korean input was verified with automated composition events, not with a physical Windows IME session. Cross-volume file drags and external applications were exercised with synthetic test data. / 한글 입력은 자동 조합 이벤트로 확인했으며 실제 Windows 입력기 세션 확인은 아닙니다. 다른 볼륨 끌기·외부 앱은 합성 시험 자료로 확인했습니다.

Windows x64용입니다. 설치 파일은 코드 서명되지 않았습니다. 실행 전 이 Release의 SHA256SUMS.txt로 파일을 확인할 수 있습니다. 업데이트는 기존 설정과 작업 자료를 보존합니다. 타사 라이선스 고지(Ace 1.45.2 포함)는 앱에 포함되어 있습니다.

Windows x64. The installer is unsigned. SHA256SUMS.txt is provided with this release. Updating preserves existing settings and workspace data. Third-party license notices, including Ace 1.45.2, are bundled in the application.
