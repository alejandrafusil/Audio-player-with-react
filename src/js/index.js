//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "../styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

//render your react application
ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.querySelector("#app")
);
