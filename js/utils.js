// Utility functions to sort and filter articles

// Sort articles by date (newest/oldest) or title (alphabetical)
function sortArticles(articles, criteria) {
    return articles.slice().sort((a, b) => {
        if (criteria === "newest") {
            return new Date(b.date) - new Date(a.date);
        } else if (criteria === "oldest") {
            return new Date(a.date) - new Date(b.date);
        } else if (criteria === "alphabetical") {
            return a.title.localeCompare(b.title);
        }
    });
}

// Filter articles by category, source, and search query
function getCategory(article) {
    const title = article.title.toLowerCase();

    if (title.includes("mars")) return "Mars";
    if (title.includes("spacex")) return "SpaceX";
    if (title.includes("nasa")) return "NASA";
    if (title.includes("astronomy") || title.includes("telescope") || title.includes("galaxy") || title.includes("star")) return "Astronomy";
    if (title.includes("moon") || title.includes("artemis")) return "Moon Exploration";
    if (title.includes("launch") || title.includes("rocket")) return "Rocket Launch";
    if (title.includes("planet") || title.includes("venus") || title.includes("jupiter")) return "Planetary Science";
    
    return "General"; // Default category if no match
}

function filterArticles(articles, category, source, searchQuery) {
    return articles.filter(article => {
        const assignedCategory = getCategory(article); // Assign category dynamically

        const matchesCategory = category === "" || assignedCategory === category;
        const matchesSource = source === "" || article.news_site.toLowerCase() === source.toLowerCase();
        const matchesSearch = searchQuery === "" || article.title.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesSource && matchesSearch;
    });
}


