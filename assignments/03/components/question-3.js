function answer3() {
  function AddAPropToMe(someProps) {
    return (
      <div>
        {someProps.one}
        , {someProps.two}
        ,
        is a sort of fun game!
      </div>
    );
  }

  return (
    <AddAPropToMe
      one={'Tic'}
      two={'tac'}
    />
  );
}
