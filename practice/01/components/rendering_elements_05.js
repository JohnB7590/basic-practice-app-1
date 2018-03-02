import React from 'react';
import linkState from 'react-link-state';

export default MyForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      toggle: false
    };
  }

  render() {
    console.log(this.state);

    return (
      <form>
        <input type="text" valueLink={linkState(this, 'username')} />
        <input type="password" valueLink={linkState(this, 'password')} />
        <input type="checkbox" checkedLink={linkState(this, 'toggle')} />
      </form>
    );
  }
}

const renderMyForm = () => {
  ReactDOM.render(
    <div>
      <MyForm />
    </div>,
    document.getElementById('root')
  );
}

links.push({
  label: 'Elements 05 Rendering',
  clickHandler: renderMyForm
});
