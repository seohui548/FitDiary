const express = require('express');

const app = express()

app.get('/', (req, res) => {
    res.send('상민님 만나서 반갑습니다. 짧은 시간이지만 화이팅해요! :)');
})

app.get('/api/user', (req, res) => {
    res.json('hi, user')
})

app.listen(5000, () => {
    console.log('서버 실행 중')
})
