const customVariables = [
    // You can add more color variables here
    "--colorTabBar",
    "--colorFg",
    "--colorFgAlpha",
    "--colorFgIntense",
    "--colorFgFaded",
    "--colorFgFadedMore",
    "--colorFgFadedMost",
    "--colorBg",
    "--colorBgAlpha",
    "--colorBgAlphaHeavy",
    "--colorBgAlphaHeavier",
    "--colorBgAlphaBlur",
    "--colorBgDark",
    "--colorBgDarker",
    "--colorBgLight",
    "--colorBgLighter",
    "--colorBgLightIntense",
    "--colorBgIntense",
    "--colorBgIntenser",
    "--colorBgIntserAlpha",
    "--colorBgInverse",
    "--colorBgInverser",
    "--colorBgFaded",
    "--colorHighlightBg",
    "--colorHighlightBgFaded",
    "--colorHighlightBgAlpha",
    "--colorHighlightBgDark",
    "--colorHighlightFg",
    "--colorHighlightFgAlpha",
    "--colorHighlightFgAlphaHeavy",
    "--colorAccentBg",
    "--colorAccentBgAlpha",
    "--colorAccentBgAlphaHeavy",
    "--colorAccentBgDark",
    "--colorAccentBgDarker",
    "--colorAccentBgFaded",
    "--colorAccentBgFadedMore",
    "--colorAccentBgFadedMost",
    "--colorAccentBorder",
    "--colorAccentBorderDark",
    "--colorAccentFg",
    "--colorAccentFgFaded",
    "--colorAccentFgAlpha",
    "--colorAccentFgAlphaHeavy",
    "--colorBorder",
    "--colorBorderDisabled",
    "--colorBorderSubtle",
    "--colorBorderIntense",
    "--colorSuccessBg",
    "--colorSuccessBgAlpha",
    "--colorSuccessFg",
    "--colorWarningBg",
    "--colorWarningBgAlpha",
    "--colorWarningFg",
    "--colorErrorBg",
    "--colorErrorBgAlpha",
    "--colorErrorFg",
    "--colorWindowBg",
    "--colorWindowFg",
    "--densityGap",
    "--radiusRound",
    "--radiusRounded",
    "--radiusRoundedLess",
    "--radius",
    "--radiusHalf",
    "--radiusCap",
    "--scrollbarWidth",
    "--uiZoomLevel"
];


function openWindow(element) {
    const modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(0,0,0,0.5)";
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    modal.style.zIndex = "9999";

    const window = document.createElement("div");
    window.style.position = "relative";
    window.style.background = "#fff";
    window.style.padding = "20px";
    window.style.borderRadius = "8px";
    window.style.minWidth = "300px";
    window.style.minHeight = "200px";
    window.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
    window.style.maxHeight = "80vh";
    window.style.overflowY = "auto";

    const close = document.createElement("button");
    close.textContent = "×";
    close.style.position = "absolute";
    close.style.top = "10px";
    close.style.right = "10px";
    close.style.background = "transparent";
    close.style.border = "none";
    close.style.fontSize = "20px";
    close.style.cursor = "pointer";
    close.style.lineHeight = "1";
    close.addEventListener("click", () => {
        document.body.removeChild(modal);
    });

    window.appendChild(close);

    // inputs to select color code
    customVariables.forEach(prop => {
        const label = document.createElement("label");
        label.textContent = prop;
        label.style.display = "block";
        label.style.marginTop = "10px";

        const input = document.createElement("input");
        input.type = "text";
        input.value = getComputedStyle(element).getPropertyValue(prop).trim() || "";
        input.style.width = "100%";
        input.style.marginTop = "4px";

        input.addEventListener("input", () => {
            element.style.setProperty(prop, input.value);
        });

        label.appendChild(input);
        window.appendChild(label);
    });

    modal.appendChild(window);
    document.body.appendChild(modal);
}

const observer = new MutationObserver((mutations) => {
    const settingsList = document.querySelector(".VivaldiList-Offset");
    if (!settingsList) return;

    if (settingsList.querySelector('[data-id="21"]')) return;

    const colorTab = document.createElement("div");
    colorTab.dataset.id = "21";
    colorTab.className = "tree-item";
    colorTab.style.height = "40px";

    settingsList.appendChild(colorTab);

    const treeRow = document.createElement("div");
    treeRow.className = "tree-row";
    colorTab.appendChild(treeRow);

    const buttonCategory = document.createElement("div");
    buttonCategory.className = "button-category spacer group_7";
    treeRow.appendChild(buttonCategory);

    const textNode = document.createTextNode("Custom Colors");
    buttonCategory.appendChild(textNode);

    colorTab.addEventListener("click", () => {
        const browser = document.querySelector("#browser");
        if (browser) {
            openWindow(browser);
        }
    });
});

observer.observe(document.body, {
    childList: true,
    subtree: true,
});
