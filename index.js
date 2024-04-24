// Sample menu items data
const menuItems = [
    { item: 'Spaghetti Bolognese', price: 10 },
    { item: 'Caesar Salad', price: 8 },
    { item: 'Grilled Salmon', price: 15 },
    { item: 'Margherita Pizza', price: 12 },
    { item: 'Chicken Alfredo Pasta', price: 11 }
];

// Function to populate the table with menu items
function populateMenu() {
    const menuTableBody = document.querySelector('#menuTable tbody');

    menuItems.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.item}</td>
            <td>${item.price}</td>
        `;
        menuTableBody.appendChild(row);
    });
}

// Call the function to populate the menu
populateMenu();

// Search functionality
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', function() {
    const searchValue = this.value.toLowerCase();
    const rows = document.querySelectorAll('#menuTable tbody tr');

    rows.forEach(row => {
        const item = row.cells[0].textContent.toLowerCase();
        const isVisible = item.includes(searchValue);

        row.style.display = isVisible ? 'table-row' : 'none';
    });
});
