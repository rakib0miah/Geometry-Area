
function tringleCalculateArea(){

    // get tringle base value
    const tringleBaseInput = document.getElementById('tringle-base');
    const tringleBaseText = tringleBaseInput.value;
    const base = parseFloat(tringleBaseText)

    // get tringle height value
    const tringleheightInput =document.getElementById('Tringle-height')
    const tringleheightText = tringleheightInput.value;
    const height = parseFloat(tringleheightText)

    // Area Calculate
    const area = 0.5 * base * height
    const tringleAreaDisplay = document.getElementById('tringle-area');
    tringleAreaDisplay.innerText = area
}