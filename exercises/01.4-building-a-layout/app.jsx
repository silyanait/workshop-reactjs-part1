import React from "react"; //Main React.js library
import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM

const data = {
	image: "../../.learn/assets/Dylan.png?raw=true",
	cardTitle: "Bob Dylan",
	cardDescription:
		"Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
	button: {
		url: "https://en.wikipedia.org/wiki/Bob_Dylan",
		label: "Go to wikipedia",
	},
};

let content = <img src={data.image} />;

<div class="card m-5">
	<img class="card-img-top" src="..." alt="Card image cap" />
	<div class="card-body">
		<h5 class="card-title">Card title</h5>
		<p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
		<a href="#" class="btn btn-primary">
			Go somewhere</a>
	</div>
</div>;


/**
 * define the variable 'content' here and fill it with the
 * needed code to render the bootstrap card
 **/

ReactDOM.render(content, document.querySelector("#myDiv"));
