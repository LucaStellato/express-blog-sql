const express = require('express')
const app = express()
const port = 3000
const postsRouter = require('./routers/posts');
const notFound = require('./middleware/errorHandler');



app.use(express.json());


app.get('/', (req, res) => {
    res.send('post Api')
})
app.use("/posts", postsRouter)

app.listen(port, () => {
    console.log(`app listening on port http://localhost:${port}`)
})
/*
//index
app.get('/posts', function (req, res) {
    res.send('Lista dei post')
})

//show
app.get('/posts/:id', function (req, res) {
    res.send('Dettagli post')
})

//store
app.post('/posts', function (req, res) {
    res.send('creazione nuovo post')
})

//update
app.put('/posts/:id', function (req, res) {
    res.send('modifica dei post')
})

//modify
app.patch('/posts/:id', function (req, res) {
    res.send('modifica parziale del post')
})

//destroy
app.delete('/posts/:id', function (req, res) {
    res.send('eliminazione post')
})
    */

app.use(notFound)



