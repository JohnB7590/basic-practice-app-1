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
  return answer7();
  ReactDOM.render(element, document.getElementById('root'));
}


const renderAnswer7 = () => {
    ReactDOM.render(
      answer7()
    );
}

links.push({
  label: "Question 7 Answer",
  clickHandler: renderAnswer7
});
