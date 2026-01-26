// DATA SECTION

const myData = [
    // Movies
    { name: "The Shawshank Redemption", type: "movie", rating: 9.3, genre: "Drama", status: "Completed", file: "shawshank-redemption.html" },
    { name: "The Lost Battalion", type: "movie", rating: 7.0, genre: "War", status: "Completed", file: "lost-battalion.html" },
    { name: "Now You See Me", type: "movie", rating: 7.2, genre: "Crime", status: "Completed", file: "now-you-see-me.html" },
    { name: "Miracle in Cell No 7", type: "movie", rating: 8.2, genre: "Drama", status: "Completed", file: "miracle-in-cell-no-7.html" },
    { name: "Mucize", type: "movie", rating: 7.6, genre: "Drama", status: "Completed", file: "mucize.html" },
    { name: "Top Gun: Maverick", type: "movie", rating: 8.3, genre: "Action", status: "Completed", file: "top-gun-maverick.html" },
    { name: "No Mercy", type: "movie", rating: 7.4, genre: "Crime", status: "Completed", file: "no-mercy.html" },

    // Serials
    { name: "Game of Thrones", type: "series", rating: 9.2, genre: "Fantasy", status: "Completed", file: "game-of-thrones.html" },
    { name: "Prison Break", type: "series", rating: 8.3, genre: "Action", status: "Completed", file: "prison-break.html" },
    { name: "Breaking Bad", type: "series", rating: 9.5, genre: "Crime", status: "Completed", file: "breaking-bad.html" },
    { name: "Mohanagar", type: "series", rating: 8.8, genre: "Crime", status: "Another season coming", file: "mohanagar.html"},
    { name: "The Family Man", type: "series", rating: 8.7, genre: "Action", status: "Another season coming", file: "the-family-man.html" },
    { name: "Suits", type: "series", rating: 8.4, genre: "Drama", status: "Completed", file: "suits.html" },
    { name: "Stranger Things", type: "series", rating: 8.7, genre: "Sci-Fi", status: "Completed", file: "stranger-things.html" },
    { name: "Spartacus", type: "series", rating: 8.5, genre: "Action", status: "Completed", file: "spartacus.html" },
    { name: "Arrow", type: "series", rating: 7.5, genre: "Action", status: "Completed", file: "arrow.html" },
    { name: "The Gifted", type: "series", rating: 7.2, genre: "Sci-Fi", status: "Completed", file: "the-gifted.html" }
];

function getHearts(rating) {
    let heartsHtml = '';
    for (let i = 1; i <= 10; i++) {
        if (i <= Math.floor(rating)) {
            heartsHtml += '<span class="heart filled">♥</span>';
        } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
            heartsHtml += '<span class="heart half">♥</span>';
        } else {
            heartsHtml += '<span class="heart">♥</span>';
        }
    }
    return heartsHtml;
}

function renderTable(data) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    const movies = data.filter(item => item.type === 'movie');
    const series = data.filter(item => item.type === 'series');
    const maxLength = Math.max(movies.length, series.length);

    for (let i = 0; i < maxLength; i++) {
        const row = document.createElement('tr');
        [movies[i], series[i]].forEach((item) => {
            const cell = document.createElement('td');
            if (item) {
                const folder = item.type === 'movie' ? 'Movies' : 'Series';
                cell.innerHTML = `
                    <div class="item-wrapper">
                        <a href="${folder}/${item.file}">${item.name}</a>
                        <div class="rating-container">
                            <span class="num-rating">${item.rating}</span>
                            <div class="hearts-row">${getHearts(item.rating)}</div>
                        </div>
                    </div>`;
            }
            row.appendChild(cell);
        });
        tableBody.appendChild(row);
    }
}

function filterList() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const genre = document.getElementById('genreFilter').value;
    const status = document.getElementById('statusFilter').value;
    const rating = document.getElementById('ratingFilter').value;

    const filtered = myData.filter(item => {
        return (item.name.toLowerCase().includes(query)) &&
               (genre === 'all' || item.genre === genre) &&
               (status === 'all' || item.status === status) &&
               (rating === 'all' || item.rating >= parseFloat(rating));
    });
    renderTable(filtered);
}

renderTable(myData);