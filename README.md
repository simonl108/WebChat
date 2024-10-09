<p align="center">
  <img src="https://github.com/molvqingtai/WebChat/blob/master/src/public/logo.png" width="200px"/>
</p>

# WebChat

[![GitHub License](https://img.shields.io/github/license/molvqingtai/WebChat)](https://github.com/molvqingtai/WebChat/blob/master/LICENSE) [![Chrome Web Store Version](https://img.shields.io/chrome-web-store/v/cpaedhbidlpnbdfegakhiamfpndhjpgf)](https://chromewebstore.google.com/detail/webchat/cpaedhbidlpnbdfegakhiamfpndhjpgf) [![GitHub Release](https://img.shields.io/github/v/release/molvqingtai/WebChat)](https://github.com/molvqingtai/WebChat/releases)

> Chat with anyone on any website

This is an anonymous chat browser extension that is decentralized and serverless, utilizing WebRTC for end-to-end encrypted communication. It prioritizes privacy, with all data stored locally.

The aim is to add chat room functionality to any website, enabling real-time messaging anytime, anywhere.

### Install

**Install from Store**

- [Chrome Web Store](https://chromewebstore.google.com/detail/webchat/cpaedhbidlpnbdfegakhiamfpndhjpgf)

**Manual Installation**

1. Go to the GitHub repository ([Releases](https://github.com/molvqingtai/WebChat/releases))
2. Click on the "Assets" button and select "web-chat-\*.zip"
3. Extract the ZIP file to a folder on your computer
4. Open the extension management page in your browser (usually chrome://extensions/)
   - Enable "Developer mode"
   - Click "Load unpacked" and select the folder you just extracted

### Video

https://github.com/user-attachments/assets/34890975-5926-4e38-9a5f-34a28e17ff36

### Standing on the Shoulders of Giants

In addition to the good idea of decentralized chat, it also leverages some fantastic technologies.

- **[remesh](https://github.com/remesh-js/remesh)**: A framework in JavaScript that implements DDD principles, achieving true separation of UI and logic, allowing for easy implementation of the UI part, such as rewriting it in Vue, due to its independence from the UI.

- **[shadcn/ui](https://ui.shadcn.com/)**: A beautiful UI library and a pioneer of the no-install concept, offering unmatched convenience in customizing styles.

- **[wxt](https://wxt.dev/)**: This is the best framework I’ve used for building browser extensions, bar none.

- **[trystero](https://github.com/dmotz/trystero)**: The core dependency for implementing decentralized communication, enabling connections to decentralized networks like IPFS, torrent, Nostr, etc.

- **[ugly-avatar](https://github.com/txstc55/ugly-avatar)**: Use it to create stunning random avatars.

### License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/molvqingtai/WebChat/blob/master/LICENSE) file for details
