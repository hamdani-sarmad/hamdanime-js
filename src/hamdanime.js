
export function cursor(bgColor = "black", cursorWidth = 50, delay = 100, blendMode = 'difference') {
    const cursorDiv = document.createElement("div");
    cursorDiv.style.cssText = `position: absolute; background-color: ${bgColor}; height: ${cursorWidth}px; width: ${cursorWidth}px; border-radius: 50%; transition: ${delay}ms; mix-blend-mode: ${blendMode};`
    document.body.appendChild(cursorDiv);

    document.addEventListener('mousemove', (e) => {
        cursorDiv.style.left = e.x + 'px';
        cursorDiv.style.top = e.y + 'px';
    })
}

