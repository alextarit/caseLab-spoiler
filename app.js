const button = document.getElementById('myBtn');
const spoiler = document.getElementById('spoiler');

// Функция для переключения видимости блока spoiler(мигание)
function toggleSpoiler() {
  spoiler.classList.toggle('closed');
}

function hideSpoilerOnEscape(event) {
  if (event.code === 'Escape') {
    spoiler.classList.add('closed');
  }
}

//обработчик клика на кнопку
button.addEventListener('click', toggleSpoiler);

// обработчик нажатия клавиши Esc
document.addEventListener('keydown', (event) => {
  if (!spoiler.classList.contains('closed')) {
    hideSpoilerOnEscape(event);
  }
});
