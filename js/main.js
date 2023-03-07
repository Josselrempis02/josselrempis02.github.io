const search = document.getElementById('search');
const matchList = document.getElementById('match-list');


// Search states.json and filter it

const searchStates = async searchText => {
    const res = await fetch('../data/states.json');
    const states = await res.json();

    // GET matches top current text iput
    let matches = states.filter(state => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return state.city.match(regex) || state.iso2.match(regex)
    });

    if(searchText.length === 0){
        matches = [];
        matchList.innerHTML = '';

    }
    outputHtml(matches);
};

const outputHtml = matches => {
    if(matches.length > 0) {
        const html = matches.map(match => `
       <div class="card card-body mb-4">
        <h4>${match.city} (${match.iso2}) <span class="text-danger">
        ${match.capital}
        </span></h4>
        <small>Lat: ${match.lat} / Long: ${match.long}</small>
       </div> `
       )
       .join('');

       matchList.innerHTML = html;
    }
}

search.addEventListener('input', () => searchStates(search.value));