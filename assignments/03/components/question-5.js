function answer5() {
  class Dots extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0
      };
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

      return (
        <div>
          {dots}
        </div>
      );
    }
  }

  return <Dots/>;
}
