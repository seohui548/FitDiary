const express = require('express');
const path = require("path");
const calendar = require("./public/scripts/calendar-config");
const app = express()

app.set("view engine", "ejs");
app.use("/static", express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    res.render("home");
})

app.get('/calendar', (req, res) => {
    const year = req.query.year || 2021;
    const months = ["01", "02", "03", "04", "05", "06", "07",
        "08", "09", "10", "11", "12"];
    const month = req.query.month || 11;
    
    res.render("calendar", {calendar: calendar(year),months,year});
})

app.listen(5000, () => {
    console.log('서버 실행 중')
})
