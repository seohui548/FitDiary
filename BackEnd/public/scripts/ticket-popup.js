class TicketPopup extends HTMLElement {
  constructor() {
    super();

    this.diaryBook = document.querySelector("diary-book");

    this.init();
  }

  init() {
    this.activityId = this.dataset.activityId;
    this.addButton = this.querySelector(".ticket-btn");
    this.addEventListener("click", this.popupClick.bind(this));
    this.addButton.addEventListener("click", this.addActivity.bind(this));
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
  renderTicket({id, imgurl, title, date, address, max_capacity, current_capacity}, eventExists) {
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
          <button class="ticket-btn" ${eventExists ? "disabled" : ""}>Add to my schedule</button>
        </div>
      </div>
    `;
    this.innerHTML = ticketHTML;
    this.dataset.activityId = id;

    this.init();
  }

  addActivity() {
    const chosenEvent = window.activities[this.diaryBook.activeBtn.dataset.fitCategory]
                        .filter((activity) => activity.id === this.activityId)[0];
    this.addActivityToSchedule(chosenEvent);
    chosenEvent.current_capacity += 1;
    alert(`The activity "${chosenEvent.title}" has been added to your schedule!`);
    this.closePopup();
  }

  addActivityToSchedule(chosenEvent) {
    const eventToAdd = {
      activity_id: chosenEvent.id,
      activity_title: chosenEvent.title,
      activity_date: chosenEvent.date,
      recurring: chosenEvent.recurring,
      activity_color: this.diaryBook.activeBtn.dataset.color
    };

    if(!localStorage.getItem("myEvents")) {
      const myEvents = [
        eventToAdd
      ];
      localStorage.setItem("myEvents", JSON.stringify(myEvents));
    } else {
      const myEvents = JSON.parse(localStorage.getItem("myEvents"));
      myEvents.push(eventToAdd);
      localStorage.setItem("myEvents", JSON.stringify(myEvents));
    }
  }
}

customElements.define("ticket-popup", TicketPopup);
