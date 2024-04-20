const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res)=> {
    res.send('wait yearr .how much time do i wait yet?, NOt too much,do not feel hesitage i will inform you very soon')
})

app.listen(port, ()=> {
    console.log(`my phone server is running on port ${port}`);
})