# Book Details Finder

## Project Overview

Book Details Finder is a simple web application that allows users to search for books and view basic information such as title, author, and cover image. The application fetches real-time data using the Open Library API.

---

## Features

* Search for books using keywords
* Sort books alphabetically (A–Z)
* Add or remove books from favorites
* Live filtering while typing
* Press Enter to search quickly

---

## Technologies Used

* HTML
* CSS
* JavaScript
* Open Library API

---

## Concepts Used

This project demonstrates the use of JavaScript Higher-Order Functions:

* `forEach()` – rendering book data
* `filter()` – searching/filtering books
* `sort()` – sorting book results
* `some()` – checking favorites
* `find()` – retrieving specific book data

---

## How It Works

1. User enters a book name
2. Application fetches data from the API
3. Results are displayed as cards
4. User can sort, filter, and favorite books

---

## Project Structure

```
project-folder/
│
├── index.html
├── index.css
├── index.js
└── README.md
```

---

## Limitations

* Only top 10 results are displayed
* Favorites are not saved permanently (no database/localStorage)
* Some books may not have images or author data

---

## Future Improvements

* Add localStorage for saving favorites
* Improve UI design
* Add book descriptions and more details

---

Developed as part of Web Development project.
