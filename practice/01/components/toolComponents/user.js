const user = (props) => {
  return(<li>
    <span>name: {props.children}, age= {props.age}</span>
  </li>);
}

export default user;
