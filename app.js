const express = require('express')
const bodyParser = require('body-parser')
const port = 8069

const app = express()
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static((__dirname+ '/static')))

app.get('/', (req, res) =>{
    res.render("body")
})

app.post('/', (req, res) =>{
    res.redirect('/')
})

app.listen(process.env.PORT || port, () => {
    console.log(`Listening on port ${port}`)
})
