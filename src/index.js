import React from "react";
import ReactDom from "react-dom";

//JSX記法
//1つのタグの中にいれないといけない
//React.Fragmentを使うと不要な<div>を使用しなくてよい
//<React.Fragment>は<>で省略できる
const App = () => {
  return (
    <>
      <h1>こんにちは！</h1>
      <p>お元気ですか？</p>
    </>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
