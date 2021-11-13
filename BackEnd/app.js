const express = require('express');
const path = require("path");
const calendar = require("./public/scripts/calendar-config");
const app = express()

app.set("view engine", "ejs");
app.use("/static", express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    // res.redner('상민님 만나서 반갑습니다. 짧은 시간이지만 화이팅해요! :)');
    res.render("home");
})

app.get('/calendar', (req, res) => {
    const year = req.query.year || 2021;
    const months = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];
    
    res.render("calendar", {calendar: calendar(year),months,year});
})

app.listen(5000, () => {
    console.log('서버 실행 중')
})
