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
  renderDay(dayOfMonth) {
    const dayHTML = `
      <div class="memo">
        <div class="table-container">
          <div class="table-title" id="<%= id[id] %>"> 11.&nbsp;  ${dayOfMonth}.&nbsp;   Fri</div>
          <table class="timetable">
            <tr>
              <th scope="row">6</th>
              <td>
              </td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td id="events" rowspan="2">
              <div class="boxtitle"> Sally's yoga class </div>
              <div class="boxtitle2"> 7:00-:8:00 <br> Zebra Studio,  <br>
              23 AVE, NYC</div>
              <div class="boxtitle3"> <img src="/static/images/close_icon.png"></div>
              </td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td> </td>
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
              <td id="events2" rowspan="2">
              <div class="boxtitle4"> Group Pilates class </div>
              <div class="boxtitle5"> 14:00-: 15:00 <br> Ryerson Public Center,  <br>
              23 AVE, NYC</div>
              <div class="boxtitle3"> <img src="/static/images/close_icon.png"></div>
              </td>
            </tr>
            <tr>
              <th scope="row">15</th>
              <td></td>
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
    this.deleteAction();
  }

  deleteAction() {
    const deleteBtns = this.querySelectorAll(".boxtitle3");
    deleteBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const tab_row = btn.closest("td");
        tab_row.setAttribute("id", "");
        tab_row.innerHTML = "";
        alert("The event has been removed from your schedule!");
      });
    });
  }
}

customElements.define("day-popup", DayPopup);
