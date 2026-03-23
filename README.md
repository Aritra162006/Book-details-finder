# 📚 Book Details Finder

A web application that allows users to search, explore, and discover detailed information about books using the Google Books API.

---

## 🌟 Project Overview

**Book Details Finder** is a frontend web application that lets users search for any book and instantly view rich details — including the author, description, ratings, publisher, genre, and more. Whether you're a casual reader or a book enthusiast, this app makes it easy to find and explore books in one place.

---

## 🔌 API Used

**Google Books API**
- **Base URL:** `https://www.googleapis.com/books/v1/volumes`
- **Docs:** https://developers.google.com/books/docs/v1/using
- **Authentication:** API Key (free tier available)
- **Why this API?** It provides comprehensive book data including titles, authors, descriptions, cover images, ratings, categories, page count, publisher, and preview links.

---

## ✨ Planned Features

| Feature | Description |
|---|---|
| 🔍 **Book Search** | Search for books by title, author, or keyword |
| 📖 **Book Detail View** | View full details of a selected book (cover, description, author, publisher, etc.) |
| 🔽 **Filter by Category** | Filter search results by genre/category (e.g., Fiction, Science, History) |
| 🔃 **Sort Results** | Sort books by relevance, newest, or rating |
| 📑 **Pagination** | Browse through multiple pages of search results |
| ❤️ **Favourites** | Save favourite books locally using localStorage |
| 📱 **Responsive Design** | Works seamlessly on desktop and mobile devices |

---

## 🛠️ Technologies Used

- **HTML5** — Page structure and semantics
- **CSS3** — Styling and responsive layout
- **JavaScript (Vanilla JS)** — Application logic and API integration
- **Google Books API** — Book data source
- **localStorage** — Persisting user favourites on the browser
- **Git & GitHub** — Version control and project hosting

---

## 🗂️ Project Structure
```
book-details-finder/
│
├── index.html          # Main HTML file
├── style.css           # Stylesheet
├── app.js              # Main JavaScript logic
├── api.js              # API call functions
├── README.md           # Project documentation
└── assets/
    └── images/         # Icons and static images
```

---

## ⚙️ Setup & Installation

Follow these steps to run the project locally:

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/book-details-finder.git
cd book-details-finder
```

### 2. Get a Google Books API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable the **Books API**
4. Generate an **API Key** from the Credentials section

### 3. Configure the API Key

Open `api.js` and replace the placeholder with your key:
```javascript
const API_KEY = "YOUR_GOOGLE_BOOKS_API_KEY";
```

### 4. Run the Project

Since this is a pure frontend project, simply open `index.html` in your browser:
```bash
# Option 1: Open directly
open index.html

# Option 2: Use Live Server (VS Code extension recommended)
# Right-click index.html → "Open with Live Server"
```

No installations or build tools are required.

---

## 🚀 Future Improvements (Post-Milestone)

- Add a "Reading List" feature with progress tracking
- Dark mode toggle
- Book comparison view
- Integration with Open Library API as a fallback

---

## 👨‍💻 Author

**Your Name**
- GitHub: Aritra162006

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
