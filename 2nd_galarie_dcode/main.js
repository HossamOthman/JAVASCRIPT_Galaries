document.querySelectorAll('.carousel').forEach(carousel => {
    const items = carousel.querySelectorAll('.carousel__item');
    const buttonsHtml = Array.from(items, () => {
        return `<span class="carousel__button"></span>`;
    });

    carousel.insertAdjacentHTML("beforeend", `
    <div class="carousel__nav">
        ${buttonsHtml.join("")}
    </div>
    `);
    
    const buttons = carousel.querySelectorAll('.carousel__button');
    buttons.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            // unselecet all the items
            items.forEach(item => item.classList.remove("carousel__item--selected"));
            buttons.forEach(xbtn => xbtn.classList.remove("carousel__button--selected"));

            items[i].classList.add('carousel__item--selected');
            btn.classList.add('carousel__button--selected');
        })
    });

    // select the first item on page load
    items[0].classList.add('carousel__item--selected');
    buttons[0].classList.add('carousel__button--selected');
});

