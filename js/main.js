document.addEventListener("DOMContentLoaded", async () => {
    let articles = await fetchArticles(); // Fetch from data.json
    let filteredArticles = [...articles];

    const blogContainer = document.getElementById("blog-container");
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const sortDropdown = document.getElementById("sortDropdown");
    const categoryDropdown = document.getElementById("categoryDropdown");
    const sourceDropdown = document.getElementById("sourceDropdown");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const pageNumber = document.getElementById("page-number");

    let currentPage = 1;
    const articlesPerPage = 30;

    function displayArticles() {
        blogContainer.innerHTML = "<p class='loading'>Loading articles...</p>";

        setTimeout(() => {
            blogContainer.innerHTML = "";

            if (filteredArticles.length === 0) {
                blogContainer.innerHTML = "<p class='no-news'>No news found. Try a different search or filter.</p>";
                return;
            }

            const start = (currentPage - 1) * articlesPerPage;
            const end = start + articlesPerPage;
            const articlesToShow = filteredArticles.slice(start, end);

            articlesToShow.forEach(article => {
                const category = getCategory(article); // Assign category dynamically
                const articleCard = document.createElement("div");
                articleCard.classList.add("blog-card");
                articleCard.innerHTML = `
                    <h4>${category}</h4>
                    <img src="${article.image_url}" alt="${article.title}">
                    <h2>${article.title}</h2>
                    <p>${article.summary}</p>
                    <div class="pub-date-author">
                        <span class="pub-date">${new Date(article.published_at).toLocaleDateString()}</span>
                        <span class="author">${article.news_site}</span>
                    </div>
                    <button onclick="showArticleDetails('${article.id}')">Read More</button>
                `;
                blogContainer.appendChild(articleCard);
            });

            updatePagination();
        }, 500);
    }

    function updatePagination() {
        pageNumber.innerText = `Page ${currentPage}`;
        prevBtn.disabled = currentPage === 1;
        nextBtn.disabled = currentPage * articlesPerPage >= filteredArticles.length;
    }

    // ✅ Add event listener for category dropdown
    categoryDropdown.addEventListener("change", () => {
        filteredArticles = filterArticles(articles, categoryDropdown.value, sourceDropdown.value, searchInput.value);
        displayArticles();
    });

    sourceDropdown.addEventListener("change", () => {
        filteredArticles = filterArticles(articles, categoryDropdown.value, sourceDropdown.value, searchInput.value);
        displayArticles();
    });

    searchButton.addEventListener("click", () => {
        const query = searchInput.value.toLowerCase();
        filteredArticles = filterArticles(articles, categoryDropdown.value, sourceDropdown.value, query);
        displayArticles();
    });

    sortDropdown.addEventListener("change", () => {
        filteredArticles = sortArticles(filteredArticles, sortDropdown.value);
        displayArticles();
    });

    prevBtn.addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            displayArticles();
        }
    });

    nextBtn.addEventListener("click", () => {
        if (currentPage * articlesPerPage < filteredArticles.length) {
            currentPage++;
            displayArticles();
        }
    });

    // ✅ Populate Category Dropdown Dynamically
    function populateCategoryDropdown() {
        const uniqueCategories = [...new Set(articles.map(article => getCategory(article)))]; // Get unique categories
        categoryDropdown.innerHTML = `<option value="">All Categories</option>`; // Default option

        uniqueCategories.forEach(category => {
            const option = document.createElement("option");
            option.value = category;
            option.textContent = category;
            categoryDropdown.appendChild(option);
        });
    }

    // ✅ Populate Source Dropdown Dynamically
    function populateSourceDropdown() {
        const sources = [...new Set(articles.map(article => article.news_site))]; // Get unique sources
        sourceDropdown.innerHTML = `<option value="">All Sources</option>`; // Default option

        sources.forEach(source => {
            const option = document.createElement("option");
            option.value = source;
            option.textContent = source;
            sourceDropdown.appendChild(option);
        });
    }

    populateCategoryDropdown();
    populateSourceDropdown();
    displayArticles(); // Initial render
});




