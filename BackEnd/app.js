const express = require('express');
const path = require("path");

const app = express()

app.set("view engine", "ejs");
app.use("/static", express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    // res.redner('상민님 만나서 반갑습니다. 짧은 시간이지만 화이팅해요! :)');
    res.render("home");
})

app.get('/api/user', (req, res) => {
    res.json('hi, user')
})

app.listen(5000, () => {
    console.log('서버 실행 중')
})
