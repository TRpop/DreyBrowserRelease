# Drey Browser — Terms of Use and Privacy Notice

**English** · [한국어](TERMS.ko.md)

Effective: 2026-11-07 · Questions: [GitHub Issues](https://github.com/TRpop/DreyBrowserRelease/issues) (issues are public — do not post personal information or passwords)

## Terms of use

1. **License to use**: Drey Browser (the "App") is free. You may install and use it for personal, work and commercial purposes.
2. **Source and redistribution**: The App's own source code is not public. If you redistribute the installer, redistribute it unmodified and keep the included notice files.
3. **Third-party components**: The App includes open-source and other third-party components. Each is governed by its own license, not by these terms. The list and license texts are in Settings > About > Open-source licenses and in `THIRD-PARTY-NOTICES.txt` in the App folder and in this repository. The built-in agent skills are licensed under the MIT License (Copyright (c) 2026 TRpop), and the parts based on obra/superpowers keep that project's MIT notice (Copyright (c) 2025 Jesse Vincent).
4. **External services**: Translation, AI and web chatbot features use external services you choose (Google, DeepL, NAVER, Anthropic, OpenAI, Microsoft, etc.). Their terms and fees apply; you provide your own accounts and keys.
5. **No warranty**: The App is provided "as is". To the extent permitted by law, the developer is not liable for damages arising from its use. Keep your own backups of important data.
6. **Unsigned installer**: The installer is not code-signed, so Windows may show a warning. Download it only from this repository's Releases page and check it against the published SHA-256 values.

## Privacy notice

- **No Drey account**: The App has no account, sign-in or sync of its own. It has no feature that sends usage records, statistics or conversations to a server run by the App's developer. What is listed under "Stored on this PC" stays on this PC.
- **Stored on this PC**: Tabs, groups, history, bookmarks, downloads, settings, passwords, plugin data, AI Agent conversations, tool runs, session records and workspace lists, and the App log (app.log) are stored in your Windows profile under `%LOCALAPPDATA%\DreyBrowser-UserData`. To remove them, uninstall the App and delete that folder.
- **Web engine**: Web pages are shown with the Microsoft Edge WebView2 Runtime. Sites you visit receive information under their own policies, as in any browser. Microsoft's terms apply to the WebView2 Runtime.
- **External connections while features run**:
  - Translation: by default the text is sent to Google Translate's web endpoint (`translate.googleapis.com`). If you choose DeepL, Papago or Google Cloud, it is sent to that service with the key you entered.
  - Ask window and AI Agent: Claude Code or Codex, installed by you on this PC, send data to their providers (Anthropic, OpenAI) under your own account: what you type, the page content you ask about, attachments, files the tool reads in your work folder, and tool results. Those conversation records are also kept on this PC (see above) but are not sent to the App developer's servers.
  - Web chatbots (ChatGPT, Copilot): the website itself is opened in the side view.
  - Hangul editor fonts: downloaded once from `cdn.jsdelivr.net` and kept on this PC.
  - Update check: the App reads release information from this public GitHub repository (`github.com/TRpop/DreyBrowserRelease`) about 30 seconds after it starts (at most once a day after a successful check) and when you check for updates yourself. You can turn the automatic check off in Settings. It does not send history, conversations or work files; ordinary connection data such as your IP address is handled under GitHub's policies.
- **Questions**: open an issue at [github.com/TRpop/DreyBrowserRelease/issues](https://github.com/TRpop/DreyBrowserRelease/issues).
