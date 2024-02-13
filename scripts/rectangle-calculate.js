function rectangleAreaCalculate(){
    const rectangleWidthInput= document.getElementById('input-width');
    const rectangleWidthNumber = rectangleWidthInput.value;
    const Width = parseFloat(rectangleWidthNumber)

    const rectangleLanghtInput = document.getElementById('langht-input');
    const rectangleLangthNumber = rectangleLanghtInput.value;
    const langht = parseFloat(rectangleLangthNumber)

    const area = Width * langht;
    const rectangleAreaDisplay = document.getElementById('area-output')
    rectangleAreaDisplay.innerText= area
}