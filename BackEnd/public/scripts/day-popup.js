class DayPopup extends HTMLElement {
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
  renderDay() {
    const dayHTML = `
      <div class="memo">

        <div class="table-container">
        <div class="table-title" id="<%= id[id] %>">11. 04  fri</div>
          <table class="timetable">
          <tr>
            <th scope="row">6</th>
            <td>
            </td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td id="events" rowspan="2">
            </td>
          </tr>
          <tr>
            <th scope="row">8</th>
          </tr>
          <tr>
            <th scope="row">9</th>
            <td> </td>
          </tr>
          <tr>
            <th scope="row">10</th>
            <td> </td>
          </tr>
          <tr>
            <th scope="row">11</th>
            <td> </td>
          </tr>
          <tr>
            <th scope="row">12</th>
            <td> </td>
          </tr>
          <tr>
            <th scope="row">13</th>
            <td> </td>
          </tr>
          <tr>
            <th scope="row">14</th>
            <td id="events2" rowspan="2"> </td>
          </tr>
          <tr>
            <th scope="row">15</th>
          </tr>
          <tr>
            <th scope="row">16</th>
            <td> </td>
          </tr>
          <tr>
            <th scope="row">17</th>
            <td> </td>
          </tr>
          <tr>
            <th scope="row">18</th>
            <td> </td>
          </tr>
          <tr>
            <th scope="row">19</th>
            <td> </td>
          </tr>
          <tr>
          <th scope="row">20</th>
          <td> </td>
          </tr>
          <tr>
            <th scope="row">21</th>
            <td> </td>
          </tr>
        </table>
        </div>
      </div>
    `;
    this.innerHTML = dayHTML;
  }
}

customElements.define("day-popup", DayPopup);
