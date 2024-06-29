window.onload = function () {
    fetch("https://api.github.com/users/kkkjjoao/repos")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const reposContainer = document.getElementById('cardcarrosel');
            data.forEach(repo => {
                const card = document.createElement('div');
                card.className = 'repo-card';

                const title = document.createElement('h3');
                const link = document.createElement('a');
                link.href = repo.html_url;
                link.textContent = repo.name;
                title.appendChild(link);

                const description = document.createElement('p');
                description.textContent = repo.description || 'Sem descrição';

                const language = document.createElement('span');
                language.textContent = repo.language || 'Desconhecida';

                card.appendChild(title);
                card.appendChild(description);
                card.appendChild(language);

                reposContainer.appendChild(card);
            });
            comecoCarrossel()
        })
        .catch(error => console.error('Erro:', error));
};

function comecoCarrossel() {
    const botaoanterior = document.getElementById('botaoanterior');
    const botaoproximo = document.getElementById('botaoproximo');
    const carouselContainer = document.getElementById('cardcarrosel');
    const slides = document.querySelectorAll('.repo-card');
    let index = 0;

    botaoproximo.addEventListener('click', () => {
        const slideWidth = slides[0].clientWidth + 30; // Incluindo a margem
        if (index < slides.length - 1) {
            index++;
            carouselContainer.style.transform = `translateX(${-index * slideWidth}px)`;
        }
    });

    botaoanterior.addEventListener('click', () => {
        const slideWidth = slides[0].clientWidth + 30; // Incluindo a margem
        if (index > 0) {
            index--;
            carouselContainer.style.transform = `translateX(${-index * slideWidth}px)`;
        }
    });
}
