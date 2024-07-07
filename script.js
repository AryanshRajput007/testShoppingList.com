// function showButtons() {
//     // document.getElementById("specificDeleteButton").style.display = "block";

//     // document.getElementById("specificDeleteButton").addEventListener('click', function() {
//     //     const result = confirm("Are you sure you want to delete this item?");
//     //     if (result) {
//     //         this.parentElement.remove();
//     //     }
//     // });    
// }

let deleteButtonVisible = false;
let updateButtonVisible = false;
var ul = document.querySelector('ul');

function toggleDeleteButton() {
    deleteButtonVisible = !deleteButtonVisible;
    const specificDeleteButtons = document.querySelectorAll('.specificDeleteButton');
    specificDeleteButtons.forEach(button => {
        button.style.display = deleteButtonVisible ? 'block' : 'none';
    });
}

document.querySelector('.specificDeleteButton').addEventListener('click', function() {
    const result = confirm('Are you sure you want to delete this item?');
    if (result) {
        this.parentElement.remove();
    }
});

function toggleUpdateButton() {
    updateButtonVisible = !updateButtonVisible;
    const specificUpdateButtons = document.querySelectorAll('.specificUpdateButton');
    specificUpdateButtons.forEach(button => {
        button.style.display = updateButtonVisible ? 'block' : 'none';
    });
}

// document.querySelector('.specificUpdateButton').addEventListener('click', function() {
//     const result = confirm('Are you sure you want to update this item?');
//     if (result) {
//         const input = prompt('Enter the new value:');
//         if (input !== null && input.trim() !== '') {
//             this.parentElement.querySelector('.specificValue').textContent = input;
//         }
//     }
// });

function createListElement(userInput) {
    var li = document.createElement('li');
    var delButton = document.createElement('button');
    var updateButton = document.createElement('button');
    var value = document.createTextNode(userInput);
    li.appendChild(value);
    ul.appendChild(li);
    li.appendChild(delButton);
    li.appendChild(updateButton);
    delButton.classList.add('specificDeleteButton');
    delButton.classList.add('right-button');
    updateButton.classList.add('specificUpdateButton');
    updateButton.classList.add('right-update-button');
    delButton.innerHTML = 'Delete';
    updateButton.innerHTML = 'Update';

    delButton.addEventListener('click', deleteData);
    updateButton.addEventListener('click', updateData);

    const firstItem = ul.children[0];
    const initialText = "Add a element to remove the element";
    if (firstItem && firstItem.textContent.trim().startsWith(initialText)) {
        ul.removeChild(firstItem);
    }
}

var ul = document.getElementById('list');
document.getElementById('add-button').addEventListener('click', function() {
    var userInput = window.prompt('Enter a value:');

    if (userInput) {
        createListElement(userInput);
    }

    if (deleteButtonVisible || updateButtonVisible) {
        toggleDeleteButton();
        toggleUpdateButton();
    }
});

function updateData() {
    var userInput = prompt('Enter the new value:');
    if (userInput !== null && userInput.trim() !== '') {
        const listItem = event.target.closest('li');
        listItem.firstChild.textContent = userInput;
    }
}

function deleteData() {
    var result = confirm('Are you sure you want to delete this item?');
    if (result) {
        const listItem = event.target.closest('li');
        listItem.remove();
    }
}
