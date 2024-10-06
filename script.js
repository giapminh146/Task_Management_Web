document.querySelectorAll('.navbar a').forEach(item => {
    item.addEventListener('click', event => {
        // Get data-target of the pressed item
        const target = event.currentTarget.getAttribute('data-target');

        const title = document.getElementById('content-title');
        const description = document.getElementById('content-description');


            switch (target) {
                case 'dashboard':
                    title.innerText = 'Dashboard';
                    description.innerText = 'Welcome to your dashboard, where you can see an overview of your tasks.';
                    break;
                case 'completed':
                    title.innerText = 'Completed Tasks';
                    description.innerText = 'These are the tasks you have completed.';
                    break;
                case 'pending':
                    title.innerText = 'Pending Tasks';
                    description.innerText = 'These tasks are pending and awaiting action.';
                    break;
                case 'in-progress':
                    title.innerText = 'Dashboard';
                    description.innerText = 'These tasks are in progress.';
                    break;
                    
                case 'deployed':
                    title.innerText = 'Deployed Tasks';
                    description.innerText = 'These tasks have been deployed successfully.';
                    break;
                case 'deferred':
                    title.innerText = 'Deferred Tasks';
                    description.innerText = 'These tasks have been deferred for later action.';
                    break;
                case 'add-new':
                    title.innerText = 'Add New Tasks';
                    description.innerText = 'Use this section to add new tasks to your list.';
                    break;
                case 'task-stats':
                    title.innerText = 'Task Stats';
                    description.innerText = 'Here you can view statistics about your tasks.';
                    break;
                default:
                    title.innerText = 'Task Management System';
                    description.innerText = 'Chọn một mục từ navigation bar bên trái để bắt đầu.';
            }
        }
)});



// Event when clicking on the menu icon
const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');
const content = document.querySelector('.content');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('show');
    content.classList.toggle('shift-right'); // Adjust content size when navbar is shown/hidden
});

const accountMenu = document.getElementById('account-menu');
const dropdownContent = accountMenu.querySelector('.dropdown-content');

// // Event when clicking on the account icon
accountMenu.addEventListener('click', function() {
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});

// Close menu when pressed out
window.addEventListener('click', function(event) {
    if (!accountMenu.contains(event.target)) {
        dropdownContent.style.display = 'none';
    }
});

