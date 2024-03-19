document.addEventListener('DOMContentLoaded', function () {
    const prioritiesList = document.querySelector('ol');
    const newPriorityInput = document.getElementById('new-priority');
    const addPriorityButton = document.getElementById('add-priority');

    addPriorityButton.addEventListener('click', function () {
        const newPriority = newPriorityInput.value.trim();
        if (newPriority !== '') {
            const li = document.createElement('li');
            li.textContent = newPriority;
            prioritiesList.appendChild(li);
            newPriorityInput.value = '';
        }
    });

    prioritiesList.addEventListener('dblclick', function (event) {
        if (event.target.tagName === 'LI') {
            const newText = prompt('Edit the priority:', event.target.textContent);
            if (newText !== null && newText.trim() !== '') {
                event.target.textContent = newText.trim();
            }
        }
    });

    prioritiesList.addEventListener('contextmenu', function (event) {
        event.preventDefault();
        if (event.target.tagName === 'LI') {
            const confirmDelete = confirm('Are you sure you want to delete this priority?');
            if (confirmDelete) {
                event.target.remove();
            }
        }
    });
});
