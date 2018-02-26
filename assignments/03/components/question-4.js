class InputComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        data: ''
      };

      this.updateState = this.updateState.bind(this);
    }

    updateState(e) {
       this.setState({data: e.target.value});
    }

    render() {
      return (
        <div>
          <input type="text" value={this.state.data} onChange={this.updateState}/>
          <p>
            The user typed '{this.state.data}'
          </p>
        </div>
      );
    }
  }

  const renderInputComponent = () => {
    ReactDOM.render(
      <div>
        <InputComponent />
      </div>,
      document.getElementById('root')
    );
  }

links.push({
  label: "Question 4 Answer",
  clickHandler: renderInputComponent
});
