class ActivityDayBtn extends HTMLElement {
  constructor() {
    super();

    this.activityId = this.dataset.activityId;
    this.dayPopup = document.querySelector("day-popup");
    this.init();
  }

  init() {
    this.addEventListener("click", this.openEvent.bind(this));
  }

  openEvent() {
    this.dayPopup.renderDay()

    this.dayPopup.openPopup();
  }
}

customElements.define("activity-day", ActivityDayBtn);
