const body = document.querySelector("body");
const find = document.querySelector("#search");
const myFavBtn = document.querySelector("#favBtn");
const listEl = document.querySelector("#listsh");
const divEL = document.querySelector("#hero");

// DATA REQUIRE FOR API CALL
const publicKey = "7b18a3689ea42835dcb9c85c946c88eb";
const privateKey = "657229eed920cbea5ab1aca33c9886ca33abb0a4";
const hash = "006797d5550858956869e34474efb1bb";

// DEFININF GLOBAL VARIABLE
let favArr = [];

//........................ FUNCTION.......................................................
function listSuperHero(superHero) {
  const div = document.createElement("div");
  div.setAttribute("class", "list");
  div.style.borderColor = "green";

  const divList = document.createElement("p");
  divList.setAttribute("class", "superHeroEl");
  divList.textContent = `${superHero.name}`;

  listEl.append(div);
  div.append(divList);

  const likeBtn = document.createElement("button");
  likeBtn.textContent = "Fav Me";
  likeBtn.style.backgroundColor = "green";

  listEl.append(div);
  div.append(likeBtn);

  likeBtn.addEventListener("click", () => {
    if (likeBtn.style.backgroundColor == "green") {
      favArr.push(superHero);
      likeBtn.style.backgroundColor = "yellow";
      div.style.borderColor = "yellow";
      console.log(favArr);
    } else if (likeBtn.style.backgroundColor == "yellow") {
      const index = favArr.indexOf(superHero.name);
      if (index !== -1) {
        favArr.splice(index, 1);
        likeBtn.style.backgroundColor = "green";
        div.style.borderColor = "green";
        console.log(favArr);
      }
    }
  });

  divList.addEventListener("click", () => {
    // Encode superhero's data as JSON and pass it as a query parameter
    const superheroData = encodeURIComponent(JSON.stringify(superHero));
    window.location.href = `superhero.html?superheroData=${superheroData}`;
  });
}

function displayHero(superHeroes) {
  superHeroes.forEach((superHero) => {
    listSuperHero(superHero);
  });
}

function displayHero2(superHero) {
  listSuperHero(superHero);
}

function filter(superHeroes) {
  superHeroes.filter((superHero) => {
    const super1 = superHero.name.toLowerCase();
    const search = find.value.toLowerCase();
    if (super1.includes(search)) {
      displayHero2(superHero);
    }
  });
}

function addToFav(data) {
  favArr.push(data.name);
  console.log(favArr);
}

//CALLING FETCH
function getHeroName() {
  fetch(
    `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${publicKey}&hash=${hash}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let superHero = data.data.results;
      return superHero;
    })
    .then((data) => {
      console.log(data);
      displayHero(data);

      find.addEventListener("input", () => {
        listEl.textContent = " ";
        filter(data);
      });

      myFavBtn.addEventListener("click", () => {
        // Encode superhero data and favArr as JSON and pass them as query parameters
        const superheroData = encodeURIComponent(JSON.stringify(data));
        const favoritesData = encodeURIComponent(JSON.stringify(favArr));
        window.location.href = `favhero.html?superheroData=${superheroData}&favorites=${favoritesData}`;
      });
    })
    .catch((reject) => {
      console.log(reject);
    });
}

//............................main coding...................................

getHeroName();
