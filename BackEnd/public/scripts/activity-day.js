class ActivityDayBtn extends HTMLElement {
  constructor() {
    super();

    this.activityId = this.dataset.activityId;
    this.dayPopup = document.querySelector("day-popup");
    this.dayContainer = this.querySelector(".day-schedule");

    this.DAYNUMMAP = {
      "S": 0,
      "M": 1,
      "T": 2,
      "W": 3,
      "TH": 4,
      "F": 5,
      "ST": 6
    };
    this.init();
  }

  init() {
    this.renderEvents();
    this.addEventListener("click", this.openEvent.bind(this));
  }

  openEvent() {
    this.dayPopup.renderDay()

    this.dayPopup.openPopup();
  }

  renderEvents() {
    const myEvents = JSON.parse(localStorage.getItem("myEvents"));
    if(myEvents && myEvents.length > 0) {
      myEvents.forEach((evt) => {
        const dates = evt.activity_date.split(" ")[0].split("/");
        dates.forEach(date => {
          const dateIndex = this.DAYNUMMAP[date];
          if(dateIndex && dateIndex === parseInt(this.dataset.dayIndex)) {
            const dayElement = this.addSchedule(evt);
            this.dayContainer ? this.dayContainer.appendChild(dayElement) : "";
          }
        });
      });
    }
  }

  addSchedule(evt) {
    const newEvent = document.createElement("div");
    newEvent.setAttribute("class", "content-events");
    newEvent.setAttribute("data-color", evt.activity_color);
    newEvent.innerHTML = evt.activity_title;
    console.log("new Event", newEvent);
    return newEvent;
  }
}

customElements.define("activity-day", ActivityDayBtn);
