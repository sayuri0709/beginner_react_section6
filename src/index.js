import React from "react";
import ReactDom from "react-dom";
//他ファイルからimport
//ReactのComponentとわかりやすいように拡張子をjsxにする方がよい
import App from "./App";

ReactDom.render(<App />, document.getElementById("root"));
