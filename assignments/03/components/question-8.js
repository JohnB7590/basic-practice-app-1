function answer8() {
  var myObject = {
    x: 8,
    y: 3,
    addXtoY: function() {
      return this.x + this.y;
    }
  };

  function Component(props) {
    return (
      <div>
        AddXtoY returned {props.callback()}
      </div>
    );
  }

  return (
    <Component callback={myObject.addXtoY}/>
  );
  return answer8();
  ReactDOM.render(element, document.getElementById('root'));
}


const renderAnswer8 = () => {
    ReactDOM.render(
        answer8()
    );
}

links.push({
  label: "Question 8 Answer",
  clickHandler: renderAnswer8
});
