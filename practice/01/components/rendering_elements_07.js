class LifeCycle extends React.Component {
  constructor(props){
    super(props);

    this.getNextCount = this.getNextCount.bind(this);
    this.getMinusCount = this.getMinusCount.bind(this);
    this.state = {
      count: 0,
      minus: 0
    }
  }

  getNextCount() {
    const newCount = this.state.count + 5;
    this.setState({
      count: newCount
    });

    return newCount;
  }

  getMinusCount() {
    const lowerCount = this.state.minus - 5;
    this.setState({
      minus: lowerCount
    });
  }

  componentWillMount() {
    console.log(
      "I'm about to be born! count: " +
      this.getNextCount()
    );
  }

  componentWillMountTwo() {
    console.log(
      "I'm about to die again! " +
      this.getMinusCount()
    )
  }
  componentDidMount() {
    console.log(
      "I am born! count: " +
      this.getNextCount()
    );
  }

  componentDidMountTwo() {
    console.log(
      "I am dead! count: " +
      this.getMinusCount()
    );
  }

  componentDidUpdate() {
    console.log(
      "I have a whole new outlook on life!! count: " +
      this.state.count
    );
  }

  componentDidUpdateTwo() {
    console.log(
      "I'm terrified in a dimented newly surreal reality of hellish proportions. Help me! TRUMMMPPP!!!!" +
      this.state.minus
    );
  }

  render() {
    return (
      <div>
        <p>
          I am alive!! Count: {this.state.count}
        </p>
        <p>
          I am dead!! Count: {this.state.minus}
        </p>
        <button onClick={this.getNextCount}>
          Click to update me
        </button>
        <button onClick={this.getMinusCount}>
          Click to kill me
        </button>
      </div>
    );
  }
}

const renderLifeCycle = () => {
  ReactDOM.render(
    <div>
      <LifeCycle/>
    </div>,
    document.getElementById('root')
  );
}

links.push({
  label: 'Elements 07 Rendering',
  clickHandler: renderLifeCycle
});
