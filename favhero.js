//...............................................DEFINING VARIABLE...........................................

// Parse the query parameters from the URL
const urlParams = new URLSearchParams(window.location.search);
// Get the value of the 'superheroData' parameter and parse it as JSON
const superheroData = JSON.parse(
  decodeURIComponent(urlParams.get("superheroData"))
);
// Get the value of the 'favorites' parameter and parse it as JSON
const favoritesData = JSON.parse(
  decodeURIComponent(urlParams.get("favorites"))
);

// Display superhero data
console.log(superheroData);

// Display favArr
console.log(favoritesData);

const favList = document.querySelector("#favList");

//..............................FUNCTION..........................................................
function fav() {
  favoritesData.forEach((Element) => {
    const div = document.createElement("div");
    div.setAttribute("class", "list");
    div.style.borderColor = "green";

    const divList = document.createElement("div");
    divList.textContent = Element.name;

    favList.append(div);
    div.append(divList);

    // Add event listener to each div representing a superhero
    divList.addEventListener("click", () => {
      // Encode superhero's information as JSON and pass it as a query parameter
      const superheroInfo = encodeURIComponent(JSON.stringify(Element));
      window.location.href = `superhero2.html?superheroInfo=${superheroInfo}`;
    });

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "remove";
    removeBtn.style.backgroundColor = "red";

    favList.append(div);
    div.append(removeBtn);

    removeBtn.addEventListener("click", () => {
      // Remove the clicked superhero from favoritesData
      const index = favoritesData.indexOf(Element);
      if (index !== -1) {
        favoritesData.splice(index, 1);
        favList.innerHTML = "";
        fav(); // Re-render the favorites list after removing the superhero
        console.log(favoritesData);
      }
    });
  });
}

//....................................main coding..................................................

fav();
