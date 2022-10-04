const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const s = form.elements.query.value;
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${s}`);
    console.log(res.data);

})