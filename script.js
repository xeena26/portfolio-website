function toggleCard(card) {
    const fullArticle = card.querySelector('.full-article');
    const shortDescription = card.querySelector('.short-description');
    if (fullArticle.classList.contains('d-none')) {
        fullArticle.classList.remove('d-none');
        shortDescription.classList.add('d-none');
    } else {
        fullArticle.classList.add('d-none');
        shortDescription.classList.remove('d-none');
    }
}
