function answer4() {
  class InputComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        userInput: ''
      };
    }
    render() {
      return (
        <div>
          <input/>
          <p>
            The user typed `{this.state.userInput}`
          </p>
        </div>
      );
    }
  }

  return <InputComponent/>;
}
