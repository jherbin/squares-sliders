function squareSelection(square) {
  if (square.target.id == 'whiteIcon') {
    document.getElementById('whiteSize').style.display = 'inline-block';
    document.getElementById('redSize').style.display = 'none';
  } else if (square.target.id == 'redIcon') {
    document.getElementById('whiteSize').style.display = 'none';
    document.getElementById('redSize').style.display = 'inline-block';
  }
}
