// Parse the query parameters from the URL
const urlParams = new URLSearchParams(window.location.search);
// Get the value of the 'superheroInfo' parameter and parse it as JSON
const superheroInfo = JSON.parse(
  decodeURIComponent(urlParams.get("superheroInfo"))
);

// Now you can use 'superheroInfo' to display information about the selected superhero
console.log(superheroInfo);

//DISPLAY CHARACTERSTICS ABOUT CHARACTERS
const favList = document.querySelector("#favList");

//NAME
const nameDiv = document.createElement("div");
nameDiv.classList = "name";

const name = document.createElement("p");
name.classList = "name";
name.textContent = "name";

const nameValue = document.createElement("p");
name.classList = "name";
nameValue.textContent = superheroInfo.name;

favList.append(nameDiv);
nameDiv.append(name);
nameDiv.append(nameValue);
//comic
const comicDiv = document.createElement("div");
comicDiv.classList = "name";

const comicName = document.createElement("p");
comicName.classList = "name";
comicName.textContent = "comic  ";

const comicNameValue = document.createElement("p");
comicNameValue.classList = "name";
comicNameValue.textContent = superheroInfo.comics.available;

favList.append(comicDiv);
nameDiv.append(comicName);
nameDiv.append(comicNameValue);

//event

const eventDiv = document.createElement("div");
eventDiv.classList = "name";

const eventName = document.createElement("p");
eventName.classList = "name";
eventName.textContent = "event";

const eventNameValue = document.createElement("p");
eventNameValue.classList = "name";
eventNameValue.textContent = superheroInfo.series.available;

favList.append(eventDiv);
nameDiv.append(eventName);
nameDiv.append(eventNameValue);

//series
const seriesDiv = document.createElement("div");
seriesDiv.classList = "name";

const seriesName = document.createElement("p");
seriesName.classList = "name";
seriesName.textContent = "series";

const seriesNameValue = document.createElement("p");
seriesNameValue.classList = "name";
seriesNameValue.textContent = superheroInfo.series.available;

favList.append(seriesDiv);
nameDiv.append(seriesName);
nameDiv.append(seriesNameValue);

//STORIES

const storiesDiv = document.createElement("div");
storiesDiv.classList = "name";

const storiesName = document.createElement("p");
storiesName.classList = "name";
storiesName.textContent = "stories";

const storiesNameValue = document.createElement("p");
storiesNameValue.classList = "name";
storiesNameValue.textContent = superheroInfo.series.available;

favList.append(storiesDiv);
nameDiv.append(storiesName);
nameDiv.append(storiesNameValue);
