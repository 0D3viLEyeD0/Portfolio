const skillElemet = document.querySelectorAll('.skills-list li');

skillElemet.forEach(function(skill) {
    skill.addEventListener('click', function() {
        
        this.classList.toggle('active');
    });
});