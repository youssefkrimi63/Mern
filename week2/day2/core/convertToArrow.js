document.getElementById("button").onclick = () => {
    setBackgroundColorById("paragraph", "blue");
}

document.getElementById("alert").onclick = () => {
    alert(document.getElementById("popup-input").value);
}

document.getElementById("hover-this").onmouseover = () => {
    setBackgroundColorById("body", "red");
}

document.getElementById("hover-this").onmouseout = () => {
    setBackgroundColorById("body", "white");
}

const getValueFromId = (id) => {
    return document.getElementById(id).value;
}

const setBackgroundColorById = (id, color) => {
    document.getElementById(id).style = backgroundColor = color;
}

const mouseOverFunction = (el) => {
    el.style.backgroundColor = "black";
}
