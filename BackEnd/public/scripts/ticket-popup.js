class TicketPopup extends HTMLElement {
  constructor() {
    super();

    this.init();
  }

  init() {
    this.addEventListener("click", this.popupClick.bind(this));
  }

  popupClick(event) {
    if(event.target.classList.contains("active")) {
      this.closePopup();
    }
  }

  openPopup() {
    this.classList.add("active");
  }
  closePopup() {
    this.classList.remove("active");
  }
  renderTicket({imgurl, title, date, address, max_capacity, current_capacity}) {
    const ticketHTML = `
      <div class="ticket__popup-wrapper ticket-format">
        <div class="ticket__image">
          <img src="/static/images/${imgurl}">
        </div>
        <div class="ticket__information">
          <div class="ticket-gradient"></div>
          <div class="ticket-textcontent">
            <h3>${title}</h3>
            <p>${date}</p>
            <p>${address}</p>
            <p>${current_capacity}/${max_capacity}</p>
          </div>
          <div class="ticket-gradient"></div>
        </div>
        <div class="ticket__action">
          <button class="ticket-btn">Add to my schedule</button>
        </div>
      </div>
    `;
    this.innerHTML = ticketHTML;
  }
}

customElements.define("ticket-popup", TicketPopup);
