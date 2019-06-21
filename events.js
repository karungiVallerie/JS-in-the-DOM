// Function to modify the text content of the paragraph
const changeText = () => {
    const p = document.querySelector('p');

    p.textContent = "I changed because of an inline event handler.";
}
const p = document.querySelector('p');
const button = document.querySelector('button');

const changeText = () => {
    p.textContent = "Will I change?";
}

const alertText = () => {
    alert('Will I alert?');
}

// Events can be overwritten
button.onclick = changeText;
button.onclick = alertText;