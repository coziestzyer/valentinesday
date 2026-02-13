document.addEventListener('DOMContentLoaded', () => {
    const name = prompt("Enter your girlfriend's name:");
    if (name) document.getElementById('name').textContent = name;
    
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const responseDiv = document.getElementById('response');
    const popup = document.getElementById('kittyPopup');
    const closePopup = document.getElementById('closePopup');
    
    const messages = [
        "Maybe?",
        "Are you sure?",
        "Think again 😏",
        "Please say yes 🥺",
        "Don’t break my heart 💔",
        "I promise it’ll be fun! 🎉",
        "Just say Yes! 🙏",
    ];
    let msgIndex = 0;
    
    yesBtn.addEventListener('click', () => {
        responseDiv.innerHTML = "YAY! 💖 I can't wait to celebrate with you!";
        createHearts(25);

        // Show Hello Kitty popup
        popup.style.display = 'flex';
    });
    
    noBtn.addEventListener('click', () => {
        if (msgIndex < messages.length - 1) {
            noBtn.textContent = messages[msgIndex];
            msgIndex++;
        } else {
            noBtn.textContent = "YES!";
            responseDiv.innerHTML = "I knew you'd say yes! 😘";
            createHearts(40);

            popup.style.display = 'flex';
        }
    });

    closePopup.addEventListener('click', () => {
        popup.style.display = 'none';
    });
    
    function createHearts(count) {
        const heartsContainer = document.querySelector('.hearts');
        for (let i = 0; i < count; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerHTML = '❤️';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.top = '-5vh';
            heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
            heart.style.animationDelay = Math.random() * 3 + 's';
            heart.style.animationDuration = (Math.random() * 3 + 5) + 's';
            heartsContainer.appendChild(heart);
            setTimeout(() => heart.remove(), 9000);
        }
    }
    
    setInterval(() => createHearts(3), 1500);
});
