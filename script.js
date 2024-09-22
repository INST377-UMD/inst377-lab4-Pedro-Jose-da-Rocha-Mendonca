// Alert Me functionality
document.getElementById('alert-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    if (name) {
        alert(`Hi ${name}!`);
    }
});

// Change Color functionality
let isBlue = true;
document.getElementById('color-btn').addEventListener('click', function() {
    if (isBlue) {
        document.body.style.backgroundColor = 'green';
    } else {
        document.body.style.backgroundColor = 'blue';
    }
    isBlue = !isBlue;
});

// Text Tester functionality
document.getElementById('text-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const text = document.getElementById('text-input').value;
    const validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if (validation.test(text)) {
        alert('The text contains special characters!');
    } else {
        alert('The text is valid!');
    }
});

// Add Text functionality
document.getElementById('add-text-btn').addEventListener('click', function() {
    const heading = document.getElementById('heading');
    heading.innerText += " Add Text";
});
