import React from "react";
import ReactDOM from "react-dom";

// Create your function here
const BootstrapCard = () => {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img
				className="card-img-top"
				src="https://github.com/4GeeksAcademy/react-tutorial-exercises/blob/master/.learn/assets/Dylan.png?raw=true"
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">Bod Dylan</h5>
				<p className="card-text">
					Bob Dylan (legally Robert Dylan;[3] born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter.
				</p>
				<a href="https://en.wikipedia.org/wiki/Bob_Dylan" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};

// Remember to use ReactDOM.render to include the component into the website
ReactDOM.render(<BootstrapCard />, document.querySelector("#myDiv"));
