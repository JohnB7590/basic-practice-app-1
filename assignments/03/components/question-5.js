function DotsBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">

    </div>
  );
}

class Dots extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0
      };
      this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentDidMount() {
      var counter = function() {
        console.log(this.state.count);
        this.setState({
          count: ((this.state.count + 1) % 3) + 1
        });
      }.bind(this);

      setInterval(counter, 1000);
    }
    render() {
      var dots = '...';
      var dotsTwo = '..';
      var dotsThree = '.';

      return (
        <div>
          <DotsBanner warn={this.state.count} />
          <button onClick={this.componentDidMount}>
            {this.state.count ? 'Hide' : 'Show'}
          </button>
          <div onChange={this.state.count}>
            {dots}
            {dotsTwo}
            {dotsThree}
          </div>
        </div>
      );
    }
  }

  const renderDots = () => {
    ReactDOM.render(
      <div>
        <Dots/>;
      </div>,
      document.getElementById('root')
    );
  }

  links.push({
    label: "Question 5 Answer",
    clickHandler: renderDots
  });
