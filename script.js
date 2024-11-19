const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const maxInput = document.getElementById("max-input");
let max = 2;
maxInput.value = urlParams.get("max") || max;
max = Math.max(maxInput.value, 2);

generateNumber();

if (urlParams.get("close") == "close") {
    window.close()
}

function generateNumber() {
    max = Math.max(maxInput.value, 2);
    urlParams.set("max", max);
    var rand = Math.round(Math.random() * Math.max(max, 2));
    document.getElementById("out").innerText = rand;
    setClipboard(rand);
}

async function setClipboard(text) {
    const type = "text/plain";
    const blob = new Blob([text], { type });
    const data = [new ClipboardItem({ [type]: blob })];
    await navigator.clipboard.write(data);
}
