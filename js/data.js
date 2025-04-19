async function fetchArticles() {
    try {
        const response = await fetch("./data.json"); // Ensure correct path
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        if (!data || typeof data !== "object" || !Array.isArray(data.results)) {
            throw new Error("Invalid JSON structure: 'results' key missing or not an array");
        }

        if (data.results.length === 0) {
            console.warn("No articles available in data.json.");
        }

        return data.results;
    } catch (error) {
        console.error("Error fetching articles:", error);
        return []; // Return empty array on error
    }
}


