const NumberTypeLabel = (props) => {
  if(props.number % 5 === 0) {
    return (
      <div>
        {props.number} is a good number
      </div>
    );
  } else {
    return (
      <div>
        {props.number} is a bad number
      </div>
    );
  }
};

const renderConditionalRendering = () => {
  ReactDOM.render(
    // Try changing this value to a great number
    <NumberTypeLabel number={7}/>,
    document.getElementById("root")
  );
};

addLink(
  "Elements 10 Rendering",
  renderConditionalRendering
);
