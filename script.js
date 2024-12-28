document.addEventListener('DOMContentLoaded', () => {
    const greeting = document.createElement('p');
    const now = new Date();
    const hours = now.getHours();

    if (hours < 12) {
        greeting.textContent = 'Good morning, annaiah!';
    } else if (hours < 18) {
        greeting.textContent = 'Good afternoon, annaiah!';
    } else {
        greeting.textContent = 'Good evening, annaiah!';
    }

    document.body.insertBefore(greeting, document.querySelector('section'));
});
