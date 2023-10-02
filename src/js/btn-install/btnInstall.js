export default function () {
    installprompt()
}

let deferredPrompt; // Allows to show the install prompt
const installButton = document.getElementById("install_button");

function installprompt() {
    window.addEventListener("beforeinstallprompt", e => {
        e.preventDefault();
        deferredPrompt = e;
        installButton.hidden = false;
        installButton.classList.add('btn-intall')
        installButton.addEventListener("click", installApp);
    });
  
}

function installApp() {
   deferredPrompt.prompt();
   installButton.disabled = true;
    deferredPrompt.userChoice.then(choiceResult => {
        if (choiceResult.outcome === "accepted") {
            installButton.hidden = true;
            installButton.classList.remove('btn-intall')
        } else {
            console.log("PWA setup rejected");
        }
        installButton.disabled = false;
        deferredPrompt = null;
    });
}