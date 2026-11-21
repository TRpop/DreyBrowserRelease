# Drey Browser 1.1.1

## English

- Improved WebView initialization and disposal boundaries, duplicate initialization prevention, and the error/retry path after initialization fails.
- Batched AI Agent output delivery while preserving event order, approvals, completion and replay. Output persistence failures remain visible.
- Improved serialized delegate-record saving, rollback after save failures and bounded shutdown draining. Codex session deletion and existing-instance activation now use asynchronous or bounded waits.
- Added WebView/engine lifetime and startup diagnostics and clearer timestamps, process IDs and incident relationships in diagnostic ZIPs. Lifetime diagnostics do not log tab titles, URLs or prompts.
- Right-click a local file link in an AI Agent conversation to add it to Favorites, using the same naming and duplicate policy as the file tree. Favorites do not grant broader AI file access.
- A delegate can select a model at creation and keep that model when resumed. Available models are queried from the installed CLI; the requested model and the model reported by the CLI are shown separately.

These are stability improvements and diagnostic changes. The root cause of the previously reported unresponsive incident remains unconfirmed; this release does not establish that the incident is permanently resolved. Model availability and account limits depend on the installed Claude Code/Codex CLI and the account.

Output spools may grow on disk during a session. Disk-full or access failures are reported as failures/gaps; not every transient event can be recovered from CLI history. Existing terms and third-party notices remain included in the installer.

## 한국어

- WebView 초기화·종료·중복 생성 방지와 실패 안내·재시도 경계를 보완했습니다.
- AI Agent 출력 전달을 묶어서 처리하고 사건 순서·승인·완료·이전 출력 재생을 보존하도록 보완했습니다. 저장 실패는 명시적으로 표시합니다.
- 하위 세션 기록의 순차 저장·실패 복구·종료 대기, Codex 세션 삭제와 기존 인스턴스 활성화 전달의 대기 경계를 개선했습니다.
- WebView·엔진 수명과 시작 단계 진단, 진단 ZIP의 시각·PID·사건 연결을 보강했습니다. 수명 진단에 탭 제목·URL·프롬프트를 기록하지 않습니다.
- AI Agent 대화의 로컬 파일 링크에서도 기존 파일 트리와 같은 정책으로 즐겨찾기에 등록할 수 있습니다. 파일 접근 권한은 확대하지 않습니다.
- 하위 담당 생성 시 모델을 지정하고 재개 시 유지합니다. 설치된 CLI에서 모델 목록을 조회하며 지정 모델과 실제 보고 모델을 구분합니다.

기존 응답 없음 사건의 근본 원인은 미확정이며, 이번 보완으로 완치되었다고 판단하지 않습니다. 실제 모델 지원·계정 한도는 CLI와 계정 상태에 따릅니다. 출력 스풀은 세션 동안 디스크 공간을 사용할 수 있고, 디스크 부족·접근 실패는 실패/누락으로 표시합니다. CLI 기록에서 모든 임시 사건을 복구할 수 있는 것은 아닙니다. 기존 사용 조건·제3자 고지를 설치본에 포함합니다.
