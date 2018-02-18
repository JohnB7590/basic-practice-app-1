const FunctionalComponent = (props) => (
  <div>
    {props.four}
    {props.seven}
  </div>
);


class NumbersComponent extends React.Component {
  constructor(props) {
    super(props);

    this.onInput = this.onInput.bind(this);
    this.four = {
      name: 4
    };
    this.seven = {
      name: 7
    }
  }
  render() {
    return (
      <div>
        {this.four}
        {this.seven}
      </div>
    )
  }
}

class RenderComponent extends React.Component {
  constructor(props) {
    super(props);

    this.onInput = this.onInput.bind(this);
    this.a = {
      a: 4
    };
    this.b = {
      b: 7
    };
  }
  render() {
    return (
      <div>
        {this.a}
        {this.b}
      </div>
    );
  }
}

class renderNumbers extends React.Component {
  constructor(props) {
    super(props);

    this.onInput = this.onInput.bind(this);
    a + b = {this.props.four + this.props.seven}
  }
}

const renderQuestion2 = (props) => {
  ReactDOM.render(
    <div>
      <FunctionalComponent/>
      <NumbersComponent />
    </div>,
    document.getElementById('root')
  );
}

links.push({
  label: "Question 2 Answer",
  clickHandler: renderQuestion2
});
