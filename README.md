

### 📌 **README.md**
```md
# 🚀 Space News Dashboard

An interactive web dashboard that displays and manages space-related news articles, fetched from a local `data.json` file. Users can search, filter, and sort news articles efficiently.

---

## 🌟 Features

✅ Display a collection of space news articles  
✅ Search functionality to find specific articles  
✅ Sort options: **Newest, Oldest, Alphabetical**  
✅ Filter by:
   - **News Source**
   - **Category** (Dynamically assigned based on title keywords)  
✅ Pagination (30 articles per page)  
✅ Click **"Read More"** to open the full article  

---

## 📂 **Project Structure**

```
space-news-dashboard/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── main.js
│   ├── data.js
│   ├── utils.js
├── assets/
│   └── images/
├── data.json
└── README.md
```

---

## 🔧 **Setup Instructions**

1️⃣ Clone the repository or download the files:
```sh
git clone https://platform.alem.school/git/azhuldas/js-crunch02.git
cd js-crunch02
```

2️⃣ Start a **local web server** (Required for `fetch()` to work with `data.json`):

**Using Python (Recommended)**
```sh
python3 -m http.server 8000
```
📌 Open **[http://localhost:8000](http://localhost:8000)** in your browser.

---

## 🛠 **How It Works**

- **Homepage (`index.html`)** displays the latest space articles.  
- **`data.json`** contains all the news articles.  
- **`main.js`** manages UI interaction, event listeners, and pagination.  
- **`data.js`** fetches articles from `data.json`.  
- **`utils.js`** provides helper functions for sorting & filtering.  

### 🔍 **Filtering & Sorting**
- **Search**: Type keywords to find relevant articles.
- **Sort**: Order articles by **newest, oldest, or alphabetically**.
- **Filter by Source**: Select a news source (e.g., Space.com, NASA, etc.).
- **Filter by Category**: Auto-assigned based on keywords in the title (e.g., SpaceX, Mars, Astronomy).

---

## 🚀 **Custom Categories (Auto-Generated)**
Since `data.json` **does not have categories**, the system automatically assigns one using **title keywords**.

| Keyword in Title | Category Assigned |
|-----------------|-----------------|
| "mars" | Mars |
| "spacex" | SpaceX |
| "nasa" | NASA |
| "astronomy", "telescope", "galaxy" | Astronomy |
| "moon", "artemis" | Moon Exploration |
| "launch", "rocket" | Rocket Launch |
| "planet", "venus", "jupiter" | Planetary Science |
| (No Match) | General |

---

## 🛠 **Contributing**
Want to improve this project? Follow these steps:

1. **Fork the repository**  
2. **Create a new branch** (`feature-xyz`)  
3. **Commit your changes**  
4. **Push to GitHub & create a Pull Request**  

---

## 📜 **License**
This project is open-source and available under the **MIT License**.

---



