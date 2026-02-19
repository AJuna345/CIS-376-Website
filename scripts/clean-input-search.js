const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const searchResults = document.getElementById("searchResults");

const jsArrayData = [
    "Acura", "Audi", "BMW", "Cadillac", "Chevrolet", "Chrysler", "Dodge", 
    "Ferrari", "Fiat", "Ford", "GMC", "Honda", "Hyundai", "Infiniti", 
    "Jaguar", "Jeep", "Kia", "Lamborghini", "Land Rover", "Lexus", 
    "Lincoln", "Mazda", "McLaren", "Mercedes-Benz", "Mitsubishi", 
    "Nissan", "Porsche", "Rivian", "Subaru", "Tesla", "Toyota", 
    "Volkswagen", "Volvo"
];

function renderSearchResults(items) {
  searchResults.innerHTML = "";
  console.log("Full array being rendered:", items);
  
  items.forEach(word => {
    console.log(`Processing item ${index}:`, word);
    const li = document.createElement("li");
    li.textContent = word;
    searchResults.appendChild(li);
  });
}

function handleSearch() {

  const query = searchInput.value.trim().toLowerCase();

  if (!query) {
    renderSearchResults(jsArrayData);
    return;
  }

  const results = jsArrayData.filter(word =>
    word.toLowerCase().includes(query)
  );

  renderSearchResults(results);
}

// Search as you type
searchInput.addEventListener("input", handleSearch);

// Search on button click
searchButton.addEventListener("click", handleSearch);
