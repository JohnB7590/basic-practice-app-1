import User from './toolComponents/user'

class NumbersOne extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      users: [
        {name: 'pewdiepie', age:29},
        {name: 'Walter Kronkite', age:104},
        {name: 'Will Smith', age:51}
      ]
    }
  };
  return () {
    render(
      <div>
        <h4>Names List:</h4>
        <ul>
          {
            this.state.users.map((user)=>{
              return(<User age={user.age}>{user.name}</User>)
            })
          }
        </ul>
      </div>
    );
  }
}

const renderNumbersOne = () => {
  ReactDOM.render(
    <div>
      <NumbersOne />
    </div>,
    document.getElementById('root')
  );
}

links.push({
  label: 'Elements 06 Rendering',
  clickHandler: renderNumbersOne
});
