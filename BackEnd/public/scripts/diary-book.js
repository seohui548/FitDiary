class DiaryBook extends HTMLElement {
  constructor() {
    super();

    this.activeBtn = this.querySelector(".nav-btn.btnactive");
    this.navigationBtns = this.querySelectorAll(".nav-btn");
    this.activityListing = this.querySelector(".db-listing");
    this.listingContainer = this.querySelector(".db-listing__container");

    this.init()
  }

  init() {
    if(this.navigationBtns && this.navigationBtns.length > 0) {
      this.navigationBtns.forEach((btn) => {
        btn.addEventListener("click", this.switchActivities.bind(this, btn));
      });
    }
  }

  switchActivities(catBtn) {
    this.activeBtn.classList.remove("btnactive");
    catBtn.classList.add("btnactive");
    this.activeBtn = catBtn;

    const fitCategory = this.activeBtn.dataset.fitCategory;
    const fitColor = this.activeBtn.dataset.color;

    this.activityListing.style.backgroundColor = `#${fitColor}`;
    this.renderEvents(fitCategory);
  }

  renderEvents(fitCategory) {
    const activityData = window.activities[fitCategory];
    const listingHTML = activityData.map((activity) => {
      return `
        <div class="db-element">
          <activity-btn class="db-elem-btn" data-activity-id="${activity.id}" ${activity.current_capacity >= activity.max_capacity ? "disabled" : ""}>
            <div class="db-element__image">
              <img src="/static/images/${activity.imgurl}">
            </div>
            <div class="db-element__text">
              <h3>${activity.title}</h3>
              <p>${activity.date}</p>
            </div>
          </activity-btn>
        </div>
      `
    }).join("");

    this.listingContainer.innerHTML = listingHTML;
  }
}

customElements.define("diary-book", DiaryBook);
