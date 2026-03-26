// Аналог переменной из Flask
const title = "Тур. карта Амурской области";

// Вставляем заголовок в HTML (аналог render_template)
document.addEventListener('DOMContentLoaded', function() {
    // Устанавливаем заголовок страницы
    document.title = title;

    // Если есть элемент с id 'page-title', вставляем туда заголовок
    const titleElement = document.getElementById('page-title');
    if (titleElement) {
        titleElement.textContent = title;
    }

    // Здесь можно добавить другую логику инициализации
    console.log('Сайт загружен:', title);
});

// Если вам нужны маршруты (разные страницы) — используем роутинг на клиенте
const routes = {
    '/': 'Главная страница',
    '/about': 'О проекте',
    '/map': 'Карта'
};

function navigateTo(path) {
    history.pushState({}, '', path);
    updateContent(path);
}

function updateContent(path) {
    const contentDiv = document.querySelector('.content');
    if (contentDiv) {
        switch(path) {
            case '/':
                contentDiv.innerHTML = '<h2>Добро пожаловать!</h2><p>Туристическая карта Амурской области</p>';
                break;
            case '/about':
                contentDiv.innerHTML = '<h2>О проекте</h2><p>Интерактивная карта для туристов</p>';
                break;
            case '/map':
                contentDiv.innerHTML = '<h2>Карта</h2><div id="map"></div>';
                // Здесь можно инициализировать карту (например, Leaflet или Яндекс.Карты)
                break;
            default:
                contentDiv.innerHTML = '<h2>404</h2><p>Страница не найдена</p>';
        }
    }
}

// Обработка навигации браузера
window.addEventListener('popstate', () => updateContent(window.location.pathname));