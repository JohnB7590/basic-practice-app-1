class TextComponent extends React.Component {
  render(){
    return(
      <div>
        <h1>This is the text for the document!</h1>
        <p>Submitted by John R. Baillargeon</p>
        <br />
        <hr />
        <br />
        <p>Student</p>
      </div>
    );
  }
}

const renderTextComponent = () => {
  ReactDOM.render(
    <div>
      <TextComponent />
    </div>,
    document.getElementById('root')
  );
};

links.push({
  label: "Elements 02 Rendering",
  clickHandler: renderTextComponent
});
