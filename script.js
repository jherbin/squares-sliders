// define starting values for white
const whiteSquareMaxWidth = screen.availWidth;
const whiteSquareMaxHeight = screen.availHeight * 1.5;
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

// random position of red square
let redTop = Math.floor(
  Math.random(whiteSquareHeight) * (whiteSquareHeight - redSquareHeight)
);
let redLeft = Math.floor(
  Math.random(whiteSquareWidth) * (whiteSquareHeight - redSquareHeight)
);

// Setup starting displays for white square
document.getElementById('whiteSquare').style.width = `${whiteSquareWidth}px`;
document.getElementById('whiteSquare').style.height = `${whiteSquareHeight}px`;

document.getElementById('whiteWidthSlider').max = whiteSquareMaxWidth;
document.getElementById('whiteHeightSlider').max = whiteSquareMaxHeight;
document.getElementById('whiteWidthSlider').value = whiteSquareWidth;
document.getElementById('whiteHeightSlider').value = whiteSquareHeight;
document.getElementById('whiteWidthSlider').min = redSquareWidth + redLeft;
document.getElementById('whiteHeightSlider').min = redSquareHeight + redTop;

document.getElementById(
  'whiteHeightCounter'
).innerHTML = `${whiteSquareHeight}px`;
document.getElementById(
  'whiteWidthCounter'
).innerHTML = `${whiteSquareWidth}px`;

document.getElementById(
  'screenSizeContainer'
).innerHTML = `Your screen maximum size is: ${whiteSquareMaxWidth}px x ${
  whiteSquareMaxHeight * 0.75
}px`;

// Setup starting displays for red square
document.getElementById('redSquare').style.width = `${redSquareWidth}px`;
document.getElementById('redSquare').style.height = `${redSquareHeight}px`;
document.getElementById('redSquare').style.top = `${redTop}px`;
document.getElementById('redSquare').style.left = `${redLeft}px`;

document.getElementById('redWidthSlider').max = redSquareMaxWidth;
document.getElementById('redHeightSlider').max = redSquareMaxHeight;
document.getElementById('redWidthSlider').value = redSquareWidth;
document.getElementById('redHeightSlider').value = redSquareHeight;

document.getElementById('redTopSlider').max =
  whiteSquareHeight - redSquareHeight;
document.getElementById('redLeftSlider').max =
  whiteSquareWidth - redSquareWidth;
document.getElementById('redTopSlider').value = redTop;
document.getElementById('redLeftSlider').value = redLeft;

document.getElementById('redHeightCounter').innerHTML = redSquareMaxHeight;
document.getElementById('redWidthCounter').innerHTML = redSquareMaxWidth;
document.getElementById('redTopCounter').innerHTML = `${redTop}px`;
document.getElementById('redLeftCounter').innerHTML = `${redLeft}px`;

document.getElementById('redHeightCounter').innerHTML = `${redSquareHeight}px`;
document.getElementById('redWidthCounter').innerHTML = `${redSquareWidth}px`;

// square selection
function squareSelection(square) {
  if (square.target.id === 'whiteIcon') {
    document.getElementById('whiteSize').style.display = 'inline-block';
    document.getElementById('redSize').style.display = 'none';
    document.getElementById('redMove').style.display = 'none';
    document.getElementById('screenSizeContainer').style.display =
      'inline-block';
  } else if (square.target.id === 'redIcon') {
    document.getElementById('whiteSize').style.display = 'none';
    document.getElementById('redSize').style.display = 'inline-block';
    document.getElementById('redMove').style.display = 'inline-block';
    document.getElementById('screenSizeContainer').style.display = 'none';
  }
}

function slide(slider) {
  if (slider.target.id === 'whiteHeightSlider') {
    whiteSquareHeight = document.getElementById('whiteHeightSlider').value;
    document.getElementById(
      'whiteSquare'
    ).style.height = `${whiteSquareHeight}px`;
    document.getElementById(
      'whiteHeightCounter'
    ).innerHTML = `${whiteSquareHeight}px`;
    updateSliders();
  } else if (slider.target.id === 'whiteWidthSlider') {
    whiteSquareWidth = document.getElementById('whiteWidthSlider').value;
    document.getElementById(
      'whiteSquare'
    ).style.width = `${whiteSquareWidth}px`;
    document.getElementById(
      'whiteWidthCounter'
    ).innerHTML = `${whiteSquareWidth}px`;
    updateSliders();
  } else if (slider.target.id === 'redHeightSlider') {
    redSquareHeight = document.getElementById('redHeightSlider').value;
    document.getElementById('redSquare').style.height = `${redSquareHeight}px`;
    document.getElementById(
      'redHeightCounter'
    ).innerHTML = `${redSquareHeight}px`;
    updateSliders();
  } else if (slider.target.id === 'redWidthSlider') {
    redSquareWidth = document.getElementById('redWidthSlider').value;
    document.getElementById('redSquare').style.width = `${redSquareWidth}px`;
    document.getElementById(
      'redWidthCounter'
    ).innerHTML = `${redSquareWidth}px`;
    updateSliders();
  } else if (slider.target.id === 'redTopSlider') {
    redTop = document.getElementById('redTopSlider').value;
    document.getElementById('redSquare').style.top = `${redTop}px`;
    document.getElementById('redTopCounter').innerHTML = `${redTop}px`;
    updateSliders();
  } else if (slider.target.id === 'redLeftSlider') {
    redLeft = document.getElementById('redLeftSlider').value;
    document.getElementById('redSquare').style.left = `${redLeft}px`;
    document.getElementById('redLeftCounter').innerHTML = `${redLeft}px`;
    updateSliders();
  }
}

function updateSliders() {
  document.getElementById('redHeightSlider').max = whiteSquareHeight - redTop;
  document.getElementById('redWidthSlider').max = whiteSquareWidth - redLeft;
  document.getElementById('whiteHeightSlider').min =
    Number(redSquareHeight) + Number(redTop);
  document.getElementById('whiteWidthSlider').min =
    Number(redSquareWidth) + Number(redLeft);
  document.getElementById('redTopSlider').max =
    whiteSquareHeight - redSquareHeight;
  document.getElementById('redLeftSlider').max =
    whiteSquareWidth - redSquareWidth;
}
