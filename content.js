(function () {
    const waitForEmailDiv = setInterval(() => {
        const emailDiv = document.getElementById("mectrl_currentAccount_secondary");

        if (!emailDiv) return;

        clearInterval(waitForEmailDiv);

        // deixa claro que é clicável
        emailDiv.style.cursor = "pointer";

        emailDiv.addEventListener("click", () => {
            const email = emailDiv.innerText.trim();
            if (!email) return;

            navigator.clipboard.writeText(email).catch(() => {
                // falha silenciosa (sem alert)
            });
        });
    }, 500);
})();
