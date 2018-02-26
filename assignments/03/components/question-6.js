function answer6() {
  function convertMeToArrowSyntax(a, b, c){
    var sum = a * (b - c);
    return(sum);
  }

  return convertMeToArrowSyntax(3, 7, 5);

  return answer6();
  ReactDOM.render(element, document.getElementById('root'));
}


const renderAnswer6 = () => {
    ReactDOM.render(
        answer6()
    );
}

links.push({
  label: "Question 6 Answer",
  clickHandler: renderAnswer6
});
