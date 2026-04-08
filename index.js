const button = document.getElementById("searchButton");
const input = document.getElementById("searchInput");
const results = document.getElementById("results");
const sortBtn = document.getElementById("sortBtn");

let booksData = [];
let favorites = [];



button.addEventListener("click", function () {
    const rawQuery = input.value.trim();

    if (rawQuery === "") {
        alert("Enter a book name");
        return;
    }

    const query = rawQuery.replaceAll(" ", "+");

    results.innerHTML = "<p style='color:white;'>Searching...</p>";

    fetch(`https://openlibrary.org/search.json?q=${query}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error fetching data");
            }
            return response.json();
        })
        .then((data) => {

            if (!data.docs || data.docs.length === 0) {
                results.innerHTML = "<p style='color:white;'>No results found</p>";
                return;
            }

            booksData = data.docs.slice(0, 10);
            renderBooks(booksData);
        })
        .catch((error) => {
            console.log(error);
            results.innerHTML = "<p style='color:red;'>Something went wrong</p>";
        });
});



function renderBooks(arr) {
    results.innerHTML = "";

    arr.map((book) => {

        const title = book.title || "No title";
        const author = book.author_name ? book.author_name[0] : "Unknown";

        const coverId = book.cover_i;
        const imgUrl = coverId
            ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`
            : "";

        const isFav = favorites.find((b) => b.key === book.key);

        results.innerHTML += `
            <div class="card">
                ${imgUrl ? `<img src="${imgUrl}">` : ""}
                <h2>${title}</h2>
                <p>${author}</p>
                <button onclick="toggleFav('${book.key}')">
                    ${isFav ? "💖" : "🤍"}
                </button>
            </div>
        `;
    });
}



function toggleFav(bookKey) {
    const book = booksData.find((b) => b.key === bookKey);

    const already = favorites.find((b) => b.key === bookKey);

    if (already) {
        favorites = favorites.filter((b) => b.key !== bookKey);
    } else {
        favorites.push(book);
    }

    renderBooks(booksData);
}



if (sortBtn) {
    sortBtn.addEventListener("click", function () {
        booksData = [...booksData].sort((a, b) => {
            return a.title.localeCompare(b.title);
        });

        renderBooks(booksData);
    });
}



input.addEventListener("input", function () {
    const value = input.value.toLowerCase();

    const filtered = booksData.filter((book) => {
        return book.title && book.title.toLowerCase().includes(value);
    });

    renderBooks(filtered);
});



input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        button.click();
    }
});
