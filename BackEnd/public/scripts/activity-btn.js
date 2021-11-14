class ActivityBtn extends HTMLElement {
  constructor() {
    super();

    this.activityId = this.dataset.activityId;
    this.ticketPopup = document.querySelector("ticket-popup");
    this.activeCategory = this.closest("diary-book").querySelector(".nav-btn.btnactive");

    this.init();
  }

  init() {
    if(this.getAttribute("disabled") === null) {
      this.addEventListener("click", this.openEvent.bind(this));
    }
  }

  openEvent() {
    const category = this.activeCategory ? this.activeCategory.dataset.fitCategory : "yoga";
    const activityListing = window.activities[category];

    const activity = activityListing.filter((al) => { console.log(al.id); return al.id === this.activityId })[0];

    this.ticketPopup.renderTicket(activity, this.inMyEventList(activity));

    this.ticketPopup.openPopup();
  }

  inMyEventList(currentActivity) {
    const userEvents = JSON.parse(localStorage.getItem("myEvents"));
    if(!userEvents) {
      return false;
    } else {
      const eventExists = userEvents.filter((ue) => ue.activity_id === currentActivity.id)[0];
      return eventExists ? true : false;
    }
  }
}

customElements.define("activity-btn", ActivityBtn);
