const elCountryList = selectElement(".hero-section__list");
const elCountryTemplate = selectElement(".template-class").content;
const elCountrysearch = selectElement("#input");
const elButton = selectElement("#mode")
const elBody = selectElement(".black-mode")


let dataCountry = []


fetch( "https://restcountries.com/v3.1/all")
.then(response => response.json())
.then(data =>{
    renderCountries(data)
    console.log(data);
})
function  renderCountries (NewArr) {
    elCountryList.innerHTML = null
    

    NewArr.forEach((Countries) => {
        const newTemp = elCountryTemplate.cloneNode(true)
        selectElement("#img", newTemp).src = Countries.flags.png
        selectElement("#title", newTemp).textContent =  Countries.altSpellings[0,1];
        selectElement("#population", newTemp).textContent ="Population:" + "  " + Countries.population
        selectElement("#region", newTemp).textContent ="Region:" + "  " + Countries.region
        selectElement("#capital", newTemp).textContent ="Capital:" + "  " + Countries.capital
        selectElement("#continents", newTemp).textContent ="continents:" + "  " + Countries.continents
        selectElement("#language", newTemp).textContent ="Languages:" + "  " + Countries.languages
        selectElement("#borders", newTemp).textContent ="Borders:" + "  " + Countries.borders
        selectElement("#area", newTemp).textContent ="Area:" + "  " + Countries.area
        elCountryList.append(newTemp)
    }); 
}
elCountrysearch.addEventListener("input", (e) =>{
    const elSearchList = new RegExp(e.target.value, "gi")
    const elFilterCountries = Countries.filter((country) => country.name.common.match(elSearchList))
    renderCountries(elFilterCountries)
})





elButton.addEventListener("click", () =>{
    elBody.classList.toggle("white-mode")
    console.log(elBody);
}); 