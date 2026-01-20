// DATA SECTION
// Add your movies and series here. 
// 'file' must match the filename inside your Movies or Series folder.
const myData = [
    { name: "The Shawshank Redemption", type: "movie", rating: 5, file: "shawshank-redemption.html" },
    { name: "Prison Break", type: "series", rating: 5, file: "prison-break.html" },
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