const button = document.getElementById("searchButton");
const input = document.getElementById("searchInput");
const results = document.getElementById("results");

button.addEventListener("click", function () {
    const rawQuery = input.value.trim();
    let query = rawQuery;

    // 1. Validate input
    if (query === "") {
        alert("Enter a book name");
        return;
    }

    // 2. Clean query
    query = query.replaceAll(" ", "+");

    results.innerHTML = "<p style='color:white;'>Searching...</p>";

    // 3. Fetch data
    fetch(`https://openlibrary.org/search.json?q=${query}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Request failed: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {

            // 4. Handle no results
            if (!data.docs || data.docs.length === 0) {
                results.innerHTML = "<p style='color:white;'>No results found</p>";
                return;
            }

            // 5. Extract first book
            const book = data.docs[0];

            const title = data.q ? data.q : rawQuery;
            const author = (book.author_name && book.author_name.length > 0) ? book.author_name[0] : "Unknown";
            const coverKey = book.cover_edition_key;

            const imgUrl = coverKey
                ? `https://covers.openlibrary.org/b/olid/${coverKey}-L.jpg`
                : "";

            const coverMarkup = imgUrl
                ? `<img src="${imgUrl}" alt="Cover image">`
                : "";

            // 6. Render UI
            results.innerHTML = `
                <div class="card">
                    ${coverMarkup}
                    <h2>${title}</h2>
                    <p>${author}</p>
                </div>`
        })
        .catch((error) => {
            results.innerHTML = "<p style='color:red;'>Something went wrong</p>";
            console.error(error);
        });
});