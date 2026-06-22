const skillElemet = document.querySelectorAll('.skills-list li');

skillElemet.forEach(function(skill) {
    skill.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});

const textElement = document.getElementById('typing-text');
const text = "Kezdő szoftverfejlesztő portfóliója...";
let index = 0;

function typeWriter() {
    if (textElement && index < text.length) {
        textElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

window.onload = typeWriter;

const themeBtn = document.getElementById('themeToggle');

if (themeBtn) {
    themeBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            themeBtn.textContent = "Világos mód";
        } else {
            themeBtn.textContent = "Sötét mód";
        }
    });
}