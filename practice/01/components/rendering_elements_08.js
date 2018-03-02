class ElementFunction extends React.Component {
  constructor(props){
    super(props);

    this.addText = this.addText.bind(this);
    this.state = {
      name: '',
      age: '',
      nationality: ''
    }
  }

  addText() {
    const newName = this.state.name
    this.setState({
      name: newName
    });

    return  newName

    const newAge = this.state.age
    this.setStateTwo({
      name: newAge
    });

    return  newAge

    const newNationality = this.state.nationality
    this.setStateThree({
      name: newNationality
    });

    return  newNationality
  }

  handleChange(event) {
    this.setState({name: event.target.name});
  }

  handleChangeTwo(event) {
    this.setStateTwo({age: event.target.age});
  }

  handleChangeThree(event) {
    this.setStateThree({nationality: event.target.nationality});
  }

  handleSubmit() {
    document.write('<h1>Name: </h1>' + this.state.name);
    document.write('<h1>Age: </h1>' + this.state.age);
    document.write('<h1>Nationality: </h1>' + this.state.nationality);
    event.preventDefault();
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name={this.state.name} onChange={this.handleChange}/>
        </label>
        <label>
          Age
          <input type="text" age={this.state.age} onChange={this.handleChangeTwo}/>
        </label>
        <label>
          Nationality
          <input type="text" nationality={this.state.nationality} onChange={this.handleChangeThree}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

const renderElementFunction = (props) => {
  ReactDOM.render(
    <div>
      <ElementFunction />
    </div>,
    document.getElementById('root')
  );
}

links.push({
  label: 'Elements 08 Rendering',
  clickHandler: renderElementFunction
});
