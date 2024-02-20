// Выпадающие кнопки из #more
var textBlocks = document.querySelectorAll(".info-btn");

textBlocks.forEach(function(textBlock) {
  var moreInfo = textBlock.querySelector(".info");

  textBlock.addEventListener("click", function(event) {
    if (event.target.matches(".info-btn p")) {
        moreInfo.classList.toggle("show");
    }
  });
});

// Плавный скрол с ссылок с хедера
const links = document.querySelectorAll('.smooth-scroll');
links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href');
        const targetPosition = document.querySelector(targetId).offsetTop;
        window.scrollTo({
            top: targetPosition,
            left: 0,
            behavior: 'smooth'
        });
    });
});