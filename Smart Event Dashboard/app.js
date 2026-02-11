const form = document.querySelector('form');
const eventCards = document.querySelector('.cards');

const eventTitle = document.getElementById('eventTitle');
const eventDate = document.getElementById('eventDate');
const eventLocation = document.getElementById('eventLocation');
const eventDescription = document.getElementById('eventDescription');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const title = eventTitle.value;
    const date = eventDate.value;
    const location = eventLocation.value;
    const desc = eventDescription.value;

    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <h3>${title}</h3>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p>${desc}</p>
        <div class="deletecard">X</div>
    `;

    eventCards.appendChild(card);
    form.reset();

    // Delete button for this card
    card.querySelector('.deletecard').addEventListener('click', function () {
        card.remove();
    });

    // Select card when clicked
    card.addEventListener('click', function () {
        document.querySelectorAll('.card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
    });
});


// Delete selected card using keyboard
document.addEventListener('keydown', (event) => {
    if (event.key === 'Delete') {
        const selectedCard = document.querySelector('.card.selected');
        if (selectedCard) {
            selectedCard.remove();
        }
    }
});
