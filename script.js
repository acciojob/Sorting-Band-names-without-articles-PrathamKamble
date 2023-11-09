let bandNames = ['The Rolling Stones', 'Led Zeppelin', 'The Beatles', 'Pink Floyd'];

// Function to remove articles from band names
function removeArticles(name) {
    return name.replace(/^(a|an|the)\s+/i, '');
}

// Sorting the band names without articles
bandNames.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));

// Creating a list and adding band names to it
let bandList = document.getElementById('band');
bandNames.forEach(name => {
    let listItem = document.createElement('li');
    listItem.textContent = name;
    bandList.appendChild(listItem);
});
