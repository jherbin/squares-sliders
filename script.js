// define starting values for white
let whiteSquareMaxWidth = screen.availWidth;
let whiteSquareMaxHeight = screen.availHeight * 1.5;
let whiteSquareWidth = whiteSquareMaxWidth / 2;
let whiteSquareHeight = whiteSquareMaxHeight / 2;

// define starting values for red
let redSquareMaxWidth = whiteSquareWidth;
let redSquareMaxHeight = whiteSquareHeight;
let redSquareWidth = redSquareMaxWidth / 4;
let redSquareHeight = redSquareMaxHeight / 4;

// white square min. size is red square size
let whiteSquareMinWidth = redSquareWidth;
let whiteSquareMinHeight = redSquareHeight;

// Setup starting displays for white square
document.getElementById('whiteSquare').style.width = `${whiteSquareWidth}px`;
document.getElementById('whiteSquare').style.height = `${whiteSquareHeight}px`;

document.getElementById('whiteWidthSlider').max = whiteSquareMaxWidth;
document.getElementById('whiteHeightSlider').max = whiteSquareMaxHeight;
document.getElementById('whiteWidthSlider').value = whiteSquareWidth;
document.getElementById('whiteHeightSlider').value = whiteSquareHeight;

document.getElementById(
  'whiteHeightCounter'
).innerHTML = `${whiteSquareHeight}px`;
document.getElementById(
  'whiteWidthCounter'
).innerHTML = `${whiteSquareWidth}px`;

// Setup starting displays for red square
document.getElementById('redSquare').style.width = `${redSquareWidth}px`;
document.getElementById('redSquare').style.height = `${redSquareHeight}px`;

document.getElementById('redWidthSlider').max = redSquareMaxWidth;
document.getElementById('redHeightSlider').max = redSquareMaxHeight;
document.getElementById('redWidthSlider').value = redSquareWidth;
document.getElementById('redHeightSlider').value = redSquareHeight;

document.getElementById('redHeightCounter').innerHTML = redSquareMaxHeight;
document.getElementById('redWidthCounter').innerHTML = redSquareMaxWidth;

document.getElementById('redHeightCounter').innerHTML = `${redSquareHeight}px`;
document.getElementById('redWidthCounter').innerHTML = `${redSquareWidth}px`;

// square selection
function squareSelection(square) {
  if (square.target.id === 'whiteIcon') {
    document.getElementById('whiteSize').style.display = 'inline-block';
    document.getElementById('redSize').style.display = 'none';
  } else if (square.target.id === 'redIcon') {
    document.getElementById('whiteSize').style.display = 'none';
    document.getElementById('redSize').style.display = 'inline-block';
  }
}

function changeSize(slider) {
  if (slider.target.id === 'whiteHeightSlider') {
    whiteSquareHeight = `${
      document.getElementById('whiteHeightSlider').value
    }px`;
    document.getElementById('whiteSquare').style.height = whiteSquareHeight;
    document.getElementById('whiteHeightCounter').innerHTML = whiteSquareHeight;
  } else if (slider.target.id === 'whiteWidthSlider') {
    whiteSquareWidth = `${document.getElementById('whiteWidthSlider').value}px`;
    document.getElementById('whiteSquare').style.width = whiteSquareWidth;
    document.getElementById('whiteWidthCounter').innerHTML = whiteSquareWidth;
  } else if (slider.target.id === 'redHeightSlider') {
    redSquareHeight = `${document.getElementById('redHeightSlider').value}px`;
    document.getElementById('redSquare').style.height = redSquareHeight;
    document.getElementById('redHeightCounter').innerHTML = redSquareHeight;
  } else if (slider.target.id === 'redWidthSlider') {
    redSquareWidth = `${document.getElementById('redWidthSlider').value}px`;
    document.getElementById('redSquare').style.width = redSquareWidth;
    document.getElementById('redWidthCounter').innerHTML = redSquareWidth;
  }
}

function updateSliders() {
  document.getElementById('redWidthSlider').max = whiteSquareWidth;
  document.getElementById('redHeightSlider').max = whiteSquareHeight;
}
