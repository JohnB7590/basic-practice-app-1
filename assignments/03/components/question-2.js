class BuggyComponent extends React.Component {
  render() {
    return (
      <div>
        a + b =
        {this.props.a + this.props.b}
      </div>
    );
  }
}

const renderBuggyComponent = () => {
  ReactDOM.render(
    <div>
      <BuggyComponent a={4} b={7}/>
    </div>,
    document.getElementById('root')
  );
}

addLink(
  "Question 2 Answer",
  renderBuggyComponent
);
