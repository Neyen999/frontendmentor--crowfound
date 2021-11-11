// import "./button.js"

class Card extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: "open" })
  }

  static get observedAttributes() {
    return ["titulo", "subtitulo", "description", "money", "available", "btntext",];
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    if (oldVal !== newVal) {
      this[attr] = newVal;
    }
  }

  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
    <div class="card ${this.available}">
      <div class="card__title">
        <h3>${this.titulo}</h3>
        <h4>${this.subtitulo}</h4>
      </div>
      <p class="card__description">
        ${this.description} 
      </p>
      <p class="card__left"><span>${this.money}</span><span>left</span></p>
      <button>${this.btntext}</button>
      </div>
      ${this.getStyles()}
    `;
    return template;
  }
  getStyles() {
    return `
      <style>
      .card {
        position: relative;
        margin-top: 20px;
        height: 300px;
        padding: 16px 16px;
        border-radius: 20px;
        box-shadow: 0px 0px 7px rgb(129, 129, 129);
      }
      
      .card.not--available {
        opacity: .3;
      }

      .card.not--available button {
        opacity: .9;
        background-color: hsl(0, 0%, 48%);
      }

      .card .card__title {
        margin-bottom: 25px;
      }
      
      .card .card__title h3 {
        font-size: 1.3rem;
      }
      .card .card__title h4 {
        color: hsl(176, 50%, 47%);
        font-size: 1.2rem;
      }
      
      .card .card__description {
        width: 90%;
        font-size: 1.4rem;
        margin-bottom: 18px;
        color: hsl(0, 0%, 48%);
      }
      
      .card .card__left {
        display: flex;
        align-items: center;
      }

      .card .card__left span:nth-child(1) {
        margin-right: 5px;
        font-size: 3rem;
        font-weight: 700;
      }
      
      .card p {
        margin-bottom: 10px;
        
      }

      
      .card button {
        position: absolute;
        height: 40px;
        padding: 12px 16px;
        left: 20px;
        bottom: 20px;
        outline: none;
        border: none;
        cursor: pointer;
        color: white;
        border-radius: 20px;
        background-color: hsl(176, 50%, 47%);
      }

      @media (min-width: 1440px) {
        .card .card__title {
          display:flex;
          justify-content: space-between;
        }
      }
      </style>
    `
  }
  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
  }
  connectedCallback() {
    this.render();
  }
}

customElements.define("info-card", Card)
