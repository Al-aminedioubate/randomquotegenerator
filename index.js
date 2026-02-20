//Debut de script
let quotes = document.getElementById("randomQuote");
let authors = document.getElementById("author");

let btn = document.getElementById("getQuote");

const URL = `https://api.quotable.io/random`;

async function getQuotes() {
	const response = await fetch(URL, {
		method: "GET",
	});

	if (!response.ok) {
		alert("un probleme est survenu veuillez ressayer SVP!!!");
	} else {
		let data = await response.json();
		quotes.innerHTML = data.content;
		authors.textContent = data.author;
	}
}

btn.addEventListener("click", getQuotes);
