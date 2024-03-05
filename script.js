// Sample exam data
const exams = [
    { name: "Luyện tập", status: "free" },
    { name: "Giữa kỳ", status: "scheduled" },
    { name: "Cuối kỳ", status: "scheduled" },
    { name: "Bài kiểm tra số 1", status: "free" },
    { name: "Bài kiểm tra số 2", status: "free" }
];

const examList = document.getElementById('examList');
const searchInput = document.getElementById('searchInput');
const statusFilter = document.getElementById('statusFilter');

// Function to filter exams based on search input and status
function filterExams() {
    const searchText = searchInput.value.toLowerCase();
    const selectedStatus = statusFilter.value;

    const filteredExams = exams.filter(exam => {
        const nameMatch = exam.name.toLowerCase().includes(searchText);
        const statusMatch = selectedStatus === 'all' || exam.status === selectedStatus;
        return nameMatch && statusMatch;
    });

    renderExams(filteredExams);
}

// Function to render exams
function renderExams(exams) {
    examList.innerHTML = '';
    exams.forEach(exam => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = "baithi.html"; // Chuyển hướng đến trang bài thi
        link.textContent = exam.name;
        listItem.appendChild(link);
        examList.appendChild(listItem);
    });
}

// Event listeners for search input and status filter
searchInput.addEventListener('input', filterExams);
statusFilter.addEventListener('change', filterExams);

// Initial rendering of exams
renderExams(exams);

const user = {
    username: "JohnDoe"
};

// Function to show user info modal
function showUserInfo() {
    var modal = document.getElementById("userModal");
    modal.style.display = "block";
    // Assume username is stored in a variable named 'username'
    document.getElementById("userInfoDisplay").innerText = "Tên người dùng: " + user.username; // Sửa 'username' thành 'user.username'
}

// Function to hide user info modal
function hideUserInfo() {
    var modal = document.getElementById("userModal");
    modal.style.display = "none";
}

// Function to handle logout
function logout() {
    // Perform logout operations here
    // For example, redirect to logout page or clear session/local storage
}
