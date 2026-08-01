
(() => {
  "use strict";

  let deferredPrompt = null;
  const installButtons = () => Array.from(document.querySelectorAll("[data-install-app]"));
  const installHelp = () => document.querySelector("[data-install-help]");

  function setButtonState(available) {
    installButtons().forEach(button => {
      button.hidden = false;
      button.disabled = !available;
      button.dataset.installReady = String(available);
      if (!available && !button.dataset.originalLabel) {
        button.dataset.originalLabel = button.textContent.trim();
      }
      button.textContent = available
        ? (button.dataset.installLabel || "Install App")
        : (button.dataset.instructionsLabel || "Installation Help");
    });
  }

  function showInstructions() {
    const message = [
      "Install this app from your browser:",
      "",
      "• Android / Chrome: browser menu → Install app or Add to Home screen",
      "• Windows / Edge: browser menu → Apps → Install this site as an app",
      "• macOS / Safari: File → Add to Dock",
      "• iPhone / iPad / Safari: Share → Add to Home Screen",
      "",
      "Installation options vary by browser and operating system."
    ].join("\n");

    const help = installHelp();
    if (help) {
      help.hidden = false;
      help.textContent = message;
    } else {
      alert(message);
    }
  }

  window.addEventListener("beforeinstallprompt", event => {
    event.preventDefault();
    deferredPrompt = event;
    setButtonState(true);
  });

  window.addEventListener("appinstalled", () => {
    deferredPrompt = null;
    installButtons().forEach(button => {
      button.textContent = "Installed";
      button.disabled = true;
    });
  });

  document.addEventListener("click", async event => {
    const button = event.target.closest("[data-install-app]");
    if (!button) return;

    if (!deferredPrompt) {
      showInstructions();
      return;
    }

    button.disabled = true;
    deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice.catch(() => null);
    deferredPrompt = null;

    if (choice?.outcome === "accepted") {
      button.textContent = "Installing…";
    } else {
      button.disabled = false;
      button.textContent = button.dataset.installLabel || "Install App";
    }
  });

  if (window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone) {
    installButtons().forEach(button => button.hidden = true);
  } else {
    setButtonState(false);
  }
})();
