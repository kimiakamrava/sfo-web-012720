// const siteTitle = document.createElement("h1");
// siteTitle.innerText = "Recipe List";

// const rootDiv = document.getElementById("root");
// rootDiv.appendChild(siteTitle);

const siteTitle = React.createElement("h1", {}, "Recipe List");

const rootDiv = document.getElementById("root");
ReactDOM.render(siteTitle, rootDiv);
