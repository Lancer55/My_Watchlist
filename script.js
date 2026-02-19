// DATA SECTION (Keep your existing array here)
const myData = [
    // Movies
    { name: "The Shawshank Redemption", type: "movie", rating: 9.3, genre: "Drama", status: "Completed", file: "shawshank-redemption.html" },
    { name: "The Lost Battalion", type: "movie", rating: 7.0, genre: "War", status: "Completed", file: "lost-battalion.html" },
    { name: "Iron Man", type: "movie", rating: 9, genre: "Action", status: "Completed", file: "iron-man.html" },
    { name: "Now You See Me", type: "movie", rating: 7.2, genre: "Crime", status: "Completed", file: "now-you-see-me.html" },
    { name: "Miracle in Cell No 7", type: "movie", rating: 8.2, genre: "Drama", status: "Completed", file: "miracle-in-cell-no-7.html" },
    { name: "Mucize", type: "movie", rating: 7.6, genre: "Drama", status: "Completed", file: "mucize.html" },
    { name: "Top Gun: Maverick", type: "movie", rating: 8.3, genre: "Action", status: "Completed", file: "top-gun-maverick.html" },
    { name: "No Mercy", type: "movie", rating: 8.5, genre: "Crime", status: "Completed", file: "no-mercy.html" },
    { name: "Spider-Man", type: "movie", rating: 7.4, genre: "Action", status: "Completed", file: "spiderman.html" },
    { name: "Focus", type: "movie", rating: 8.5, genre: "Crime", status: "Completed", file: "focus.html" },
    { name: "Bram Stoker's Dracula", type: "movie", rating: 7.4, genre: "Horror", status: "Completed", file: "dracula.html" },
    { name: "The Fault in Our Stars", type: "movie", rating: 8.7, genre: "Romance", status: "Completed", file: "the-fault-in-our-stars.html" },
    { name: "RRR", type: "movie", rating: 8.8, genre: "Action", status: "Completed", file: "rrr.html" },
    { name: "K.G.F: Chapter 1", type: "movie", rating: 8.2, genre: "Action", status: "Completed", file: "kgf-chapter-1.html" },
    { name: "Stranger Things", type: "series", rating: 8.7, genre: "Sci-Fi", status: "Completed", file: "stranger-things.html" },
    { name: "Spartacus", type: "series", rating: 8.5, genre: "Action", status: "Another season coming", file: "spartacus.html" },
    { name: "Arrow", type: "series", rating: 7.5, genre: "Action", status: "Completed", file: "arrow.html" },
    { name: "K.G.F: Chapter 2", type: "movie", rating: 8.3, genre: "Action", status: "Completed", file: "kgf-chapter-2.html" },
    { name: "Prison Break", type: "series", rating: 8.3, genre: "Action", status: "Completed", file: "prison-break.html" },
    { name: "Game of Thrones", type: "series", rating: 9.2, genre: "Fantasy", status: "Completed", file: "game-of-thrones.html" },
    { name: "Goblin", type: "series", rating: 8.6, genre: "Fantasy", status: "Completed", file: "goblin.html" },
    { name: "Narcos", type: "series", rating: 8.8, genre: "Crime", status: "Completed", file: "narcos.html" },
    { name: "Da Vinci's Demons", type: "series", rating: 8, genre: "Adventure", status: "Completed", file: "da-vincis-demons.html" },
    { name: "One Piece", type: "series", rating: 8.9, genre: "Adventure", status: "Another season coming", file: "one-piece.html" },
    { name: "Breaking Bad", type: "series", rating: 9.5, genre: "Crime", status: "Completed", file: "breaking-bad.html" },
    { name: "Descendants of the Sun", type: "series", rating: 8.2, genre: "Romance", status: "Another season coming", file: "descendants-of-the-sun.html" },
    { name: "Moon Lovers: Scarlet Heart Ryeo", type: "series", rating: 8.6, genre: "Fantasy", status: "Completed", file: "moon-lovers.html" },
    { name: "My Love from the Star", type: "series", rating: 8.2, genre: "Romance", status: "Completed", file: "my-love-from-the-star.html" },
    { name: "My Girlfriend is a Gumiho", type: "series", rating: 8.2, genre: "Fantasy", status: "Completed", file: "my-girlfriend-is-a-gumiho.html" },
    { name: "Mohanagar", type: "series", rating: 8.8, genre: "Crime", status: "Another season coming", file: "mohanagar.html"},
    { name: "Dexter", type: "series", rating: 8.7, genre: "Crime", status: "Completed", file: "dexter.html" },
    { name: "Dark", type: "series", rating: 8.7, genre: "Sci-Fi", status: "Completed", file: "dark.html" },
    { name: "Suits", type: "series", rating: 8.4, genre: "Drama", status: "Completed", file: "suits.html" },
    { name: "Afterburn", type: "movie", rating: 4.5, genre: "Action", status: "Completed", file: "afterburn.html" },
    { name: "Dhurandhar", type: "movie", rating: 8.3, genre: "Spy Thriller", status: "Completed", file: "dhurandhar.html" },
    { name: "The Family Man", type: "series", rating: 8.7, genre: "Action", status: "Another season coming", file: "the-family-man.html" },
    { name: "Taskaree", type: "series", rating: 7.8, genre: "Action", status: "Completed", file: "taskaree.html" },
    { name: "The Gifted", type: "series", rating: 7.2, genre: "Sci-Fi", status: "Completed", file: "the-gifted.html" },
    { name: "Pharma", type: "series", rating: 7.2, genre: "Medical Thriller", status: "Completed", file: "pharma.html" },
    { name: "IT: Welcome to Derry", type: "series", rating: 8.0, genre: "Horror", status: "Completed", file: "it-welcome-to-derry.html" },
    { name: "Daldal", type: "series", rating: 7.1, genre: "Crime", status: "Completed", file: "daldal.html" },
    { name: "Anaconda", type: "movie", rating: 4, genre: "Horror", status: "Completed", file: "anaconda.html" },
    { name: "Homebound", type: "movie", rating: 8.1, genre: "Drama", status: "Completed", file: "homebound.html" },
    { name: "Crazy Rich Asians", type: "movie", rating: 6.9, genre: "Romance", status: "Completed", file: "crazy-rich-asians.html" },
    { name: "Nikita Roy and The Book of Darkness", type: "movie", rating: 7.4, genre: "Thriller", status: "Completed", file: "nikita-roy.html" },
    { name: "Highway", type: "movie", rating: 6.8, genre: "Thriller", status: "Completed", file: "highway-2022.html" },
    { name: "Me Before You", type: "movie", rating: 8, genre: "Romance", status: "Completed", file: "me-before-you.html" },
];

let currentHomeTab = 'recent';

function switchHomeTab(tab) {
    currentHomeTab = tab;
    document.getElementById('recentTabBtn').classList.toggle('active', tab === 'recent');
    document.getElementById('top10TabBtn').classList.toggle('active', tab === 'top10');
    
    document.getElementById('recentWatchedSection').style.display = (tab === 'recent') ? 'block' : 'none';
    document.getElementById('top10Section').style.display = (tab === 'top10') ? 'block' : 'none';
    renderHome();
}

function getStarsHtml(rating) {
    const percentage = (rating / 10) * 100;
    return `
        <div class="star-rating">
            <span class="num-val">${rating}</span>
            <div class="stars-outer">
                ★★★★★★★★★★
                <div class="stars-inner" style="width: ${percentage}%">★★★★★★★★★★</div>
            </div>
        </div>`;
}

// HOME PAGE LOGIC
function renderHome() {
    const q = document.getElementById('searchInput').value.toLowerCase();
    
    if (currentHomeTab === 'recent') {
        const recentListBody = document.getElementById('recentListBody');
        if(!recentListBody) return;
        
        // This takes the absolute last 15 entries added to the array, 
        // regardless of if they are movies or series.
        const recentItems = [...myData]
                            .reverse() 
                            .filter(i => i.name.toLowerCase().includes(q))
                            .slice(0, 15);
        
        recentListBody.innerHTML = recentItems.map(item => {
            const folder = item.type === 'movie' ? 'Movies' : 'Series';
            return `
            <tr>
                <td style="text-transform: capitalize;">${item.type}</td>
                <td><a href="${folder}/${item.file}" class="recent-link">${item.name}</a></td>
                <td>${item.genre}</td>
                <td><span class="love-indicator">❤️</span> ${item.rating}/10</td>
            </tr>`;
        }).join('');
    } 
    else {
        const movieDiv = document.getElementById('topMoviesList');
        const seriesDiv = document.getElementById('topSeriesList');
        if(!movieDiv || !seriesDiv) return;

        const topMovies = myData.filter(i => i.type === 'movie' && i.name.toLowerCase().includes(q))
                                .sort((a,b) => b.rating - a.rating).slice(0, 10);
        const topSeries = myData.filter(i => i.type === 'series' && i.name.toLowerCase().includes(q))
                                .sort((a,b) => b.rating - a.rating).slice(0, 10);

        movieDiv.innerHTML = topMovies.map(item => `
            <div class="home-card">
                <a href="Movies/${item.file}">${item.name}</a>
                ${getStarsHtml(item.rating)}
            </div>`).join('');

        seriesDiv.innerHTML = topSeries.map(item => `
            <div class="home-card">
                <a href="Series/${item.file}">${item.name}</a>
                ${getStarsHtml(item.rating)}
            </div>`).join('');
    }
}

    

// LIST PAGE LOGIC (Remains exactly the same)
function filterList(type) {
    const q = document.getElementById('searchInput').value.toLowerCase();
    const g = document.getElementById('genreFilter').value;
    const s = document.getElementById('statusFilter').value;
    const r = document.getElementById('ratingFilter').value;

    const filtered = myData.filter(item => 
        item.type === type && 
        item.name.toLowerCase().includes(q) &&
        (g === 'all' || item.genre === g) &&
        (s === 'all' || item.status === s) &&
        (r === 'all' || item.rating >= parseFloat(r))
    );

    const tableBody = document.getElementById('tableBody');
    if(!tableBody) return;
    tableBody.innerHTML = '';

    for (let i = 0; i < filtered.length; i += 2) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${createCellContent(filtered[i])}</td>
            <td>${filtered[i+1] ? createCellContent(filtered[i+1]) : ''}</td>
        `;
        tableBody.appendChild(row);
    }
}

function createCellContent(item) {
    if (!item) return '';
    const folder = item.type === 'movie' ? 'Movies' : 'Series';
    return `
        <div class="cell-content">
            <a href="${folder}/${item.file}">${item.name}</a>
            ${getStarsHtml(item.rating)}
        </div>`;
}