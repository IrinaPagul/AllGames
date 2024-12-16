$(document).ready(function () {
    const games = [
        { name: "Гра 'Гадалка'", url: "https://irinapagul.github.io/Gadalka_Lr7/" ,
        image:"./pictures/lr7-.png", hoverImage: "./pictures/lr7_hover.png"},
        { name: "Гра 'Числа'", url: "https://irinapagul.github.io/Numbers-lr8/",
        image:"./pictures/lr8.jpg", hoverImage: "./pictures/lr8-hover.png"},
        { name: "Гра '21'", url: "https://irinapagul.github.io/Game21-lr9/" ,
        image:"./pictures/lr9.jpg", hoverImage: "./pictures/lr9-hover.png"},
        { name: "Гра 'Однорукий бандит'", url: "https://irinapagul.github.io/OneHandedBandit-lr10/",
        image:"./pictures/Lr10.png", hoverImage: "./pictures/lr10-hover.png"},
        { name: "Гра 'Вивчаємо слова'", url: "https://irinapagul.github.io/LearningWords-lr11/",
        image:"./pictures/Lr11.jpg", hoverImage: "./pictures/Lr11-hover.png"},
        { name: "Гра 'Вивчаємо слова(складний)'", url: "https://irinapagul.github.io/LearningWordsAdvanced-lr12/",
        image:"./pictures/Lr12.jpg", hoverImage: "./pictures/Lr12-hover.png"},
    ];
    const $container = $('.game-container');

    function preloadImages(images) {
        images.forEach(src => $('<img>').attr('src', src)); 
    }

    function generateGameBlock({ name, url, image, hoverImage }) {
        const $gameBlock = $(`
            <div class="game">
                <img src="${image}" alt="${name}">
                <a href="${url}" target="_blank">${name}</a>
            </div>
        `);

        $gameBlock.hover(
            function () {
                $(this).find('img').attr('src', hoverImage);
            },
            function () {
                $(this).find('img').attr('src', image);
            }
        );
        return $gameBlock;
    }

    function renderGames(games) {
        const hoverImages = games.map(game => game.hoverImage); 
        preloadImages(hoverImages); 
        games.forEach(game => $container.append(generateGameBlock(game)));
    }

    renderGames(games);
});
