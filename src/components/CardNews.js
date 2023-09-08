class CardNews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.style());
  }

  build() {
    const componentRoot = document.createElement("div"); // criando a div
    componentRoot.setAttribute("class", "card"); // add atributo class a div

    //div Card_Left
    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card_left");

    const author = document.createElement("span");
    author.textContent = "By " + (this.getAttribute("author") || "Anonymous");

    const linktitle = document.createElement("a");
    linktitle.textContent = '📰 ' + this.getAttribute("title");
    linktitle.href = this.getAttribute("url-link");

    const newsContent = document.createElement("p");
    newsContent.textContent = this.getAttribute("content");

    cardLeft.appendChild(author);
    cardLeft.appendChild(linktitle);
    cardLeft.appendChild(newsContent);

    //Div Card_Right
    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card_right");

    const imgCard = document.createElement("img");
    imgCard.src = this.getAttribute("img-card") || "assets/default-img.png";
    imgCard.alt = "card image";
    cardRight.appendChild(imgCard);

    // Adiciona as divs card_left e card_right como filhas da div card
    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    return componentRoot;
  }
  style() {
    const style = document.createElement("style");
    style.textContent = ` 
        .card {
            width: 100%;
            border: 1px solid #fff8;
            border-radius: 8px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            -webkit-box-shadow: 13px 11px 24px -7px rgba(0, 0, 0, 0.61);
            -moz-box-shadow: 13px 11px 24px -7px rgba(0, 0, 0, 0.61);
            box-shadow: 13px 11px 24px -7px rgba(0, 0, 0, 0.61);
            background-color: #fff;
          }
          .card_left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 1.5rem;
          }
          .card_left > a {
            color: black;
            font-weight: 900;
            margin-top: 1rem;
            margin-bottom: .5rem;
            font-size: 1.5rem;
            text-decoration: none;
          }
          .card_left > p {
            color: rgba(93, 92, 92, 0.975);
          }
          .card_left > span {
            font-weight: 400;
          }
          .card_right{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .card_right > img {
            padding: 0.5rem;
            margin-right: 1rem;
            width: 15rem;
            border-radius: 1rem;
          }
          
        `;
    return style;
  }
}

customElements.define("card-news", CardNews);
