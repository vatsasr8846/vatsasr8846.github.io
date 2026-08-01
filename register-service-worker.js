
(() => {
  "use strict";
  if (!("serviceWorker" in navigator)) return;

  window.addEventListener("load", async () => {
    try {
      const registration = await navigator.serviceWorker.register("./service-worker.js", {scope:"./"});
      registration.addEventListener("updatefound", () => {
        const worker = registration.installing;
        if (!worker) return;
        worker.addEventListener("statechange", () => {
          if (worker.state === "installed" && navigator.serviceWorker.controller) {
            document.dispatchEvent(new CustomEvent("333-app-update-ready", {detail:{registration}}));
          }
        });
      });
    } catch (error) {
      console.warn("Service worker registration failed:", error);
    }
  });
})();
