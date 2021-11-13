class DiaryScheduler extends HTMLElement {
    constructor() {
        super();
        this.init();
    }

    init() {
        this.addEventListener("click", this.onClick.bind(this));
    }

    onClick() {
        alert("working");
    }
}

customElements.define("diary-scheduler", DiaryScheduler);
