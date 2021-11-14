class TicketPopup extends HTMLElement {
  constructor() {
    super();

    this.diaryBook = document.querySelector("diary-book");

    this.init();
  }

  init() {
    this.activityId = this.dataset.activityId;
    this.featureButton = this.querySelector(".ticket-btn");
    this.addEventListener("click", this.popupClick.bind(this));
    if(this.featureButton) this.featureButton.addEventListener("click", this.actionChoice.bind(this));
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
            ${eventExists ? `<p class="disclaimer">You are registered to this event!</p>` : ""}
          </div>
          <div class="ticket-gradient"></div>
        </div>
        <div class="ticket__action">
          ${eventExists ? `<button class="ticket-btn" data-feature-type="remove">Remove Activity</button>` :
            `<button class="ticket-btn" data-feature-type="add">Add Activity</button>`
          }
        </div>
      </div>
    `;
    this.innerHTML = ticketHTML;
    this.dataset.activityId = id;

    this.init();
  }

  actionChoice() {
    const chosenEvent = window.activities[this.diaryBook.activeBtn.dataset.fitCategory]
                        .filter((activity) => activity.id === this.activityId)[0];

    const featureType = this.featureButton.dataset.featureType;
    switch(featureType) {
      case "add":
        this.addActivity(chosenEvent);
        break;
      case "remove":
        this.removeActivity(chosenEvent);
        break;
    }
  }

  addActivity(chosenEvent) {
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

    chosenEvent.current_capacity += 1;
    alert(`The activity "${chosenEvent.title}" has been added to your schedule!`);
    this.closePopup();
  }

  removeActivity(chosenEvent) {
    if(localStorage.getItem("myEvents")) {
      const myEvents = JSON.parse(localStorage.getItem("myEvents"));
      const updatedEvents = myEvents.filter((evt) => {
        return evt.activity_id !== chosenEvent.id;
      });

      localStorage.setItem("myEvents", JSON.stringify(updatedEvents));
      chosenEvent.current_capacity -= 1;
      alert(`The activity "${chosenEvent.title}" has been removed from your schedule!`);
      this.closePopup();
    }
  }
}

customElements.define("ticket-popup", TicketPopup);
