// DATA SECTION
// Add your movies and series here. 
// 'file' must match the filename inside your Movies or Series folder.
const myData = [
    // Movies Name
    { name: "The Shawshank Redemption", type: "movie", rating: 5, file: "shawshank-redemption.html" },
    { name: "The Lost Battalion", type: "movie", rating: 4, file: "lost-battalion.html" },
    { name: "Now You See Me", type: "movie", rating: 5, file: "now-you-see-me.html" },
    { name: "Miracle in Cell No 7", type: "movie", rating: 5, file: "miracle-in-cell-no-7.html" },
    { name: "Mucize", type: "movie", rating: 4, file: "mucize.html" },
    { name: "Top Gun: Maverick", type: "movie", rating: 5, file: "top-gun-maverick.html" },


    // Series Name
    { name: "Game of Thrones", type: "series", rating: 5, file: "game-of-thrones.html" },
    { name: "Prison Break", type: "series", rating: 5, file: "prison-break.html" },
    { name: "Breaking Bad", type: "series", rating: 5, file: "breaking-bad.html" },
    { name: "Stranger Things", type: "series", rating: 4, file: "stranger-things.html" },
    { name: "The Family Man", type: "series", rating: 5, file: "the-family-man.html" },
    { name: "Suits", type: "series", rating: 5, file: "suits.html" },
    { name: "Taskaree: The Smuggler's Web", type: "series", rating: 4, file: "taskaree.html" },
    { name: "The Gifted", type: "series", rating: 2, file: "the-gifted.html" },
];

// RENDER LOGIC
function renderTable(data) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    // Split data into two lists
    const movies = data.filter(item => item.type === 'movie');
    const series = data.filter(item => item.type === 'series');

    // Find which list is longer to determine number of rows
    const maxLength = Math.max(movies.length, series.length);

    for (let i = 0; i < maxLength; i++) {
        const row = document.createElement('tr');

        // Movie Column (pointing to Movies/ folder)
        const movieCell = document.createElement('td');
        if (movies[i]) {
            movieCell.innerHTML = `
                <div class="item-wrapper">
                    <a href="Movies/${movies[i].file}">${movies[i].name}</a>
                    <span class="rating">${"♥".repeat(movies[i].rating)}</span>
                </div>`;
        }
        row.appendChild(movieCell);

        // Series Column (pointing to Series/ folder)
        const seriesCell = document.createElement('td');
        if (series[i]) {
            seriesCell.innerHTML = `
                <div class="item-wrapper">
                    <a href="Series/${series[i].file}">${series[i].name}</a>
                    <span class="rating">${"♥".repeat(series[i].rating)}</span>
                </div>`;
        }
        row.appendChild(seriesCell);

        tableBody.appendChild(row);
    }
}

// SEARCH FILTER LOGIC
function filterList() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filtered = myData.filter(item => 
        item.name.toLowerCase().includes(query)
    );
    renderTable(filtered);
}

// Initial display when page loads
renderTable(myData);