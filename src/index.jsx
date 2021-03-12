import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
import App from "./routes/index.jsx";
import { initFbSDK } from "./fb_event";
import reportWebVitals from "./reportWebVitals";

const runApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

initFbSDK()
  .then((res) => {
    console.info(res.message);
    runApp();
  })
  .catch(() => {
    console.warn("Your app have failed to load Facebook SDK");
    runApp();
  });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
