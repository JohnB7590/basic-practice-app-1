const NumberTypeLabel = (props) => {
  if(props.number % 12 === 0) {
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
    <NumberTypeLabel number={24} />,
    document.getElementById("root")
  );
};

addLink(
  "Elements 11 Rendering",
  renderConditionalRendering
);
