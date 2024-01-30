// import fs from 'fs'; // так не работает, не стала этим заниматься
// import path from 'path'; 

function makeFortuneCards() {
    // const dataPath = path.resolve('lib', 'data.json');

    const fortune_cards = [
        "Вас ждут замечательные потери: утрата вредных заблуждений, вредных людей и вредных привычек",
        "Удача придет откуда не ждете",
        "Получите хорошую новость",
        "Интуиция на этот раз не подведет вас. Используйте это",
        "Однажды в вашей жизни появится имя, которое превратиит в пыль имя предыдущее",
        "Раздражающая бытовая неисправность в квартире будет устранена",
        "Узнаете что-то новое об окружающих вас людях",
        "Ваш разум поможет взять под контроль инстинкты",
        "Вам представится шанс создать нечто бессмертное",
        "Рядом появится человек, которому можно без стеснения рассказывать свои сны",
        "Вкус к жизни будет жить в вас всегда",
        "Вам не стать идеальным и это - здорово... есть куда стремиться", 
        "Тебя ожидает интересная поездка",
        "Готовься к романтическому свиданию",
        "Сможете съесть все, что вам хочется, и не думать о лишнем весе",
        "Давние дела завершатся выгодной сделкой"
    ];
    const container = document.getElementsByClassName('container')[0];
    const cardsContainer = document.createElement('div');
    cardsContainer.classList.add('cardsContainer');
    container.appendChild(cardsContainer);
    
    for(let i = 0; i < 8; i++) {
        let num = 0;
        const card = document.createElement('div');
        card.classList.add('card', 'closedCard');
        cardsContainer.appendChild(card);
        const prediction = document.createElement('p');
        prediction.classList.add('predictionText');
        card.appendChild(prediction);
        card.addEventListener('click', () => {
            num++;
            if(num <= 1) {
                card.classList.remove('closedCard');
                card.classList.add('openCard');
                prediction.innerText = fortune_cards[Math.floor(Math.random() * 16)];
            }
        })
    }
}

makeFortuneCards();