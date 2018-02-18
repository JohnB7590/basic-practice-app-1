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
}
