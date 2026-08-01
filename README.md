# 333.github.io — Root Package

Upload the contents of this folder directly to the root of:

```text
vervenveda/333.github.io
```

The repository root should look like this:

```text
333.github.io/
├── index.html
├── manifest.webmanifest
├── service-worker.js
├── offline.html
├── install-app.js
├── register-service-worker.js
└── assets/
    └── icons/
        ├── icon-192.png
        ├── icon-512.png
        ├── icon-maskable-512.png
        └── icon-source.svg
```

## Publishing

1. Replace the current root `index.html` with the included file.
2. Upload every other file and the complete `assets/icons/` directory.
3. Commit the files to the default branch.
4. Confirm GitHub Pages is publishing from the repository root.
5. Visit the public page once while online.
6. Reload and test the offline page.
7. Test the **Install 333 Network** button.

## Updating the app

Whenever the interface changes, increment this value in `service-worker.js`:

```js
const CACHE_VERSION = "333-333-network-pwa-v2";
```

Using a new version removes stale cached files after the updated service worker activates.

## Important

The installable application remains local-first. Installing the app does not yet create shared accounts, cross-device messages, live KANSEE rooms, or synchronized Bazaar Art content. Those require the production 333 backend.
