// News array
let newsColumn = document.querySelector(".news_product");
let newsArray = [...NEWS];
let column = [];

const NEWS_NUMBER = 3;
const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря"
]

let randomNews = (array) => {
    while(column.length !== NEWS_NUMBER) {
        let item = array[Math.floor(Math.random()*array.length)];
        if(!column.includes(item)) {
            column.push(item);
        }
    }
    return column;
}

for (let i = 0; i <= NEWS_NUMBER; i++) {
    let elementForNewsColumn = randomNews(newsArray)[i];
    //news element (содержит изображение и текст)
    let newsElement = document.createElement("div");
    newsElement.classList.add("news");

    //1 news-image element (содержит изображение и дату)
    let newsImageElement = document.createElement("div");
    newsImageElement.classList.add("news_img");

    //image
    let newsImage = document.createElement("img");
    newsImage.setAttribute("src", elementForNewsColumn.img.toString());

    //news date

    //day
    let newsDay = document.createElement("p");
    newsDay.classList.add("release_date");
    let newsDayText = document.createTextNode(
        elementForNewsColumn.date.substring(8, 10));
    newsDay.appendChild(newsDayText);
    //month
    let newsMonth = document.createElement('p');
    let newsMonthText = document.createTextNode(
        months[+elementForNewsColumn.date.substring(5, 7) - 1]);
    newsMonth.appendChild(newsMonthText);

    newsImageElement.appendChild(newsImage);
    newsImageElement.appendChild(newsDay);
    newsImageElement.appendChild(newsMonth);

    //2 news-text
    let newsTextElement = document.createElement("div");
    newsTextElement.classList.add("text_for_image");

    //href
    let linkElement = document.createElement('p');
    let link = document.createElement('a');
    link.setAttribute('href', '#');
    let linkText = document.createTextNode(elementForNewsColumn.title)
    link.appendChild(linkText);
    linkElement.appendChild(link);
    //text
    let textElement = document.createElement('p');
    textElement.classList.toggle('text_new_disble');
    let text = document.createTextNode(elementForNewsColumn.description);

    textElement.appendChild(text);
    newsTextElement.appendChild(linkElement);
    newsTextElement.appendChild(textElement)

    let border = document.createElement('div');
    border.classList.toggle('border_for_news');

    newsElement.appendChild(newsImageElement);
    newsElement.appendChild(newsTextElement);
    newsColumn.appendChild(newsElement);
    if (i === 2) continue;
    newsColumn.appendChild(border);
}