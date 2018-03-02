class Tick extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render(){
    return(
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

const renderTick = () => {
  ReactDOM.render(
    <div>
      <Tick />
    </div>,
    document.getElementById('root')
  );
};

links.push({
  label: "Elements 01 Rendering",
  clickHandler: renderTick
});
