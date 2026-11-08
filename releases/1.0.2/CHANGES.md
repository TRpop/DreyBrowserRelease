# Drey Browser 1.0.2

This patch improves file dragging, background-tab wake handling and local diagnostics.

- Handles optional file-drag preview failures without an unhandled application error. Cleans up the drag input overlay and pointer state after dragging, canceling or failing.
- Adds **Settings → About → Report a problem and diagnostics**, below Updates. Save a diagnostic ZIP locally or open the log folder. No automatic upload is performed.
- Keeps the diagnostics item in the top-right **…** menu hidden by default. Enable it from the same settings section when needed; it can save diagnostics even if web-page clicks are blocked.
- Uses one background-tab suspension policy. Your configured delay, disabled setting and existing exclusions remain in place. Tabs resume before being shown, and new logs help investigate wake failures.

The ZIP contains redacted copies of the two app logs, minimal environment information, cached tab/drag state, a collection manifest and instructions. Missing, changed or truncated files are reported. It does not collect the whole profile, cookies, passwords, AI conversations, source documents, screenshots or memory dumps. Redaction is best effort: inspect the ZIP before sharing it.

The drag-input failure was reproduced and corrected in Windows Sandbox. The original field incident involving ImageJ and the long-suspended GitHub-tab failure still need observation on affected PCs. Tabs hidden before the configured suspension time may use more memory than before; a quantitative resource comparison was not performed.

## Install or update

Validation: the earlier full Core run passed 1396/1396; the affected Core recheck passed 37/37, and final Release suspension/wake checks passed 36/36. Installed upgrade/data preservation, drag, diagnostics (Korean and English, 11/11 each) and settings checks were reused where their code was unchanged. Final package verification matched 852 packaged files and 308 source assets. Actual long-term field behavior and the native save-dialog cancellation UI were not verified.

Use **Settings → About → Check for updates**, or download **DreyBrowser-1.0.2-Setup.exe** below. The installer is unsigned. Verify its SHA-256 using SHA256SUMS.txt.

[English introduction](https://github.com/TRpop/DreyBrowserRelease#readme) · [한국어 소개](https://github.com/TRpop/DreyBrowserRelease/blob/main/README.ko.md) · [Issues](https://github.com/TRpop/DreyBrowserRelease/issues)

---

## 한국어

- 파일 끌기의 선택적 미리보기 오류가 앱 전체 미처리 오류로 나가지 않도록 했습니다. 끌기 완료·취소·실패 뒤 입력 덮개와 포인터 상태를 정리합니다.
- **설정 → 정보 → 업데이트 아래 ‘문제 신고 및 진단’**에서 진단 ZIP 저장과 로그 폴더 열기를 제공합니다. 자동 전송은 없습니다.
- 상단 **… 메뉴의 진단 항목은 기본 숨김**입니다. 같은 설정의 토글을 켜면 표시되며, 웹 화면 클릭이 막혀도 메뉴에서 직접 저장할 수 있습니다.
- 백그라운드 탭 절전 정책의 혼용을 없앴습니다. 사용자가 설정한 대기 시간·끄기와 기존 제외 조건을 유지하고, 표시 전에 절전을 해제하며 복귀 진단을 보강했습니다.

ZIP에는 민감정보를 치환한 앱 로그 두 개 사본, 최소 환경 정보, 앱에 남은 탭·끌기 상태, 수집 명세와 안내만 담습니다. 누락·변경·잘림을 안내하며 프로필 전체·쿠키·비밀번호·AI 대화·원본문서·스크린샷·덤프는 수집하지 않습니다. 개인정보가 모두 제거된다고 보장하지 않으므로 공유 전에 확인하세요.

드래그 입력 정지 경로는 Windows Sandbox에서 재현해 수정했습니다. 실제 ImageJ 관련 현장 재발 여부와 장시간 절전 후 GitHub 무응답 해결 여부는 추가 관찰이 필요합니다. 설정한 절전 시간 전에는 기존보다 메모리를 더 사용할 수 있으며, 정량 자원 비교는 하지 않았습니다.

설정의 업데이트 확인 또는 아래 설치 파일로 설치하세요. 설치기는 미서명이며 SHA256SUMS.txt로 해시를 확인할 수 있습니다.

검증: 앞선 Core 전체1396/1396, 수정 관련 Core37/37, 최종 Release 절전·복귀36/36 통과. 코드가 동일한 설치·자료 보존, 드래그, 진단 ZIP 한영 각11/11, 설정 검사는 기존 통과 근거를 재사용했습니다. 최종 패키지852파일·원본308항목을 대조했습니다. 현장 장시간 재발 여부와 기본 저장 창의 취소 화면은 미확인입니다.
