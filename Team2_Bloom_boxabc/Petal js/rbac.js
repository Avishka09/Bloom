// Sample data to start with
let users = [
    { id: 1, name: "John Doe", role: "Customer", status: "Active" },
    { id: 2, name: "Jane Smith", role: "Seller", status: "Inactive" },
    { id: 3, name: "Bob Johnson", role: "Customer", status: "Active" },
    { id: 4, name: "Alice Brown", role: "Seller", status: "Active" }
];

// Function to render the user table
function renderTable(filteredUsers) {
    const tableBody = document.getElementById("user-table-body");
    tableBody.innerHTML = ""; // Clear existing rows before adding new ones

    filteredUsers.forEach(user => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${user.id}</td>
            <td><input type="text" value="${user.name}" onchange="updateUser(${user.id}, 'name', this.value)"></td>
            <td>
                <select onchange="updateUser(${user.id}, 'role', this.value)">
                    <option value="Customer" ${user.role === "Customer" ? "selected" : ""}>Customer</option>
                    <option value="Seller" ${user.role === "Seller" ? "selected" : ""}>Seller</option>
                </select>
            </td>
            <td>
                <select onchange="updateUser(${user.id}, 'status', this.value)">
                    <option value="Active" ${user.status === "Active" ? "selected" : ""}>Active</option>
                    <option value="Inactive" ${user.status === "Inactive" ? "selected" : ""}>Inactive</option>
                </select>
            </td>
            <td>
                <button class="delete-btn" onclick="deleteUser(${user.id})">Delete</button>
            </td>
        `;

        tableBody.appendChild(row);
    });
}

// Function to add a new user
function addUser() {
    const newId = users.length + 1;
    const newUser = { id: newId, name: "New User", role: "Customer", status: "Active" };
    users.push(newUser);

    // Render the updated table
    renderTable(users);
}

// Function to delete a user
function deleteUser(id) {
    users = users.filter(user => user.id !== id);
    renderTable(users);
}

// Function to update a user's property (name, role, or status)
function updateUser(id, field, value) {
    const user = users.find(user => user.id === id);
    if (user) {
        user[field] = value;
    }
}

// Search users by name
function searchUser() {
    const searchQuery = document.getElementById("search-box").value.toLowerCase();
    const filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchQuery));
    renderTable(filteredUsers);
}

// Filter users by role and status
function filterUsers() {
    const roleFilter = document.getElementById("role-filter").value;
    const statusFilter = document.getElementById("status-filter").value;

    const filteredUsers = users.filter(user => {
        const roleMatches = roleFilter ? user.role === roleFilter : true;
        const statusMatches = statusFilter ? user.status === statusFilter : true;
        return roleMatches && statusMatches;
    });

    renderTable(filteredUsers);
}

// Initial render of the user table
renderTable(users);
