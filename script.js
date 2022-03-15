function figureSelection() {
  if (document.getElementById('figureSelector2').checked) {
    document.getElementById('size2').style.display = 'inline-block';
    document.getElementById('size1').style.display = 'none';
  } else {
    document.getElementById('size2').style.display = 'none';
    document.getElementById('size1').style.display = 'inline-block';
  }
}
