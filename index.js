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
		quotes.innerHTML = `\u275D An error happen, try again... \u275E`;
		authors.textContent = `~ An error happen...`;
	} else {
		let data = await response.json();
		quotes.innerHTML = `\u275D ${data.content}  \u275E`;
		authors.textContent = ` ~  ${data.author}`;
	}
}

btn.addEventListener("click", getQuotes);
