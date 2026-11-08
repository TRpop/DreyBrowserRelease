# Drey Browser 1.0.3

## 한국어

- 사이드뷰의 AI 질문 창에서 **현재 페이지 본문 포함**을 선택할 수 있습니다. 기본으로 켜져 있으며, 사용자가 해제하면 페이지 본문을 새로 읽지 않고 질문합니다. 화면 첨부는 별도로 선택합니다.
- 펼친 세로탭의 새 탭 버튼 오른쪽에 **보관된 그룹** 바로가기를 추가했습니다.
- **설정 → 개인정보 → 사이트 권한 → 외부 앱 열기**에서 사이트와 프로토콜별 실행 허용을 관리합니다. 항상 허용·차단·다시 묻기와 모두 다시 묻기를 제공합니다.
- 외부 앱 요청은 Drey의 새 권한 관리가 처리하므로 이전에 엔진에서 항상 허용했던 사이트도 처음에는 다시 물을 수 있습니다. 쿠키·로그인·방문 기록은 삭제하지 않습니다.

이 배포는 코드 서명 없이 제공됩니다. 설치 전에 SHA256SUMS.txt와 파일 해시를 대조할 수 있습니다.

## English

- The side-view AI question pane now has an **Include current page text** option. It starts enabled and changes only when you choose. Turn it off to ask without extracting the page again. Screenshot attachment remains a separate option.
- Added an **Archived groups** shortcut beside the new-tab button in the expanded vertical tab bar.
- Manage external app permissions by site and protocol under **Settings → Privacy → Site permissions → Open external apps**. Choose always allow, block, or ask again, or reset all managed permissions to ask again.
- Drey now handles external app permission requests, so sites previously allowed by the engine may ask once more. Cookies, sign-ins, and browsing history are preserved.

This release is unsigned. You can verify the installer against SHA256SUMS.txt before installing.
