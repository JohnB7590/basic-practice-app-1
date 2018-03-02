class CityForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit() {
    document.write('<h1>A city profile was submitted</h1>' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const renderCityForm = () => {
  ReactDOM.render(
    <div>
      <CityForm />
    </div>,
    document.getElementById('root')
  );
}

links.push({
  label: 'Elements 04 Rendering',
  clickHandler: renderCityForm
});
