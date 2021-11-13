class ActivityBtn extends HTMLElement {
  constructor() {
    super();

    this.activityId = this.dataset.activityId;
    this.ticketPopup = document.querySelector("ticket-popup");
    this.init();
  }

  init() {
    this.addEventListener("click", this.openEvent.bind(this));
  }

  openEvent() {
    const activity = window.activities[this.activityId];
    this.ticketPopup.renderTicket(activity)

    this.ticketPopup.openPopup();
  }
}

customElements.define("activity-btn", ActivityBtn);
