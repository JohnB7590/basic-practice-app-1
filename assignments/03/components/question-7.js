function answer7() {
  var myObject = {
    x: 8,
    y: 3
  };

  function addXtoY() {
    return this.x + this.y;
  }

  try {
    return addXtoY();
  } catch(e) {
    return String(e);
  }
}
