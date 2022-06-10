import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";
const App = () => {
  const onClickButton = () => {
    alert();
  };

  const contentLadyStyle = {
    color: "pink",
    fontSize: "18px"
  };
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      {/* <ColorfulMessage color="blue" message="お元気ですか？" />
      <ColorfulMessage color="pink" message="元気です！" /> */}
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>

      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;

//コンポーネント内にJavaScriptを記述する場合は{}を使用する
//関数名やCSSのプロパティはキャメルケースで書く
