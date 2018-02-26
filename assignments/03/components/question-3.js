class AddAPropToMeComponent extends React.Component {
  render() {
    return (
      <div>
        {this.props.one}
        {this.props.two}
        {this.props.three}
        is a sort of fun game!
      </div>
    );
  }
}

const renderAddAPropToMeComponent = () => {
  ReactDOM.render(
    <div>
      <AddAPropToMeComponent
        one={'Tic '}
        two={'tac '}
        three={'toe '}/>
    </div>,
    document.getElementById('root')
  );
};

links.push({
  label: "Question 3 Answer",
  clickHandler: renderAddAPropToMeComponent
});
