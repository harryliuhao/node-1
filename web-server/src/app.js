const path=require('path')
const express=require('express')
const hbs=require('hbs')

const app=express()
const pubDir=path.join(__dirname,'../public')
const viewDir=path.join(__dirname, '../templates/views')
const partialDir=path.join(__dirname, '../templates/partials')

//configurations
app.set('view engine','hbs')
app.set('views', viewDir)
hbs.registerPartials(partialDir)

app.use(express.static(pubDir))

app.get('', (req, res)=>{
    res.render('index', {
        title: "weather app",
        location: "Virginia"
    })
})

app.get('/help',(req, res)=>{
    res.render('help', {
        title: "help page",
        helpMsg: "reload your browser",
        location: "Maryland"
    })
})

app.get('/weather', (req,res)=>{
    res.send({
        title: 'weather info',
        location: 'Oakton, VA',
        temporature: 79
    })
})

app.get('*',(req, res)=>{
    res.render('help', {
        title: "page not found",
        helpMsg: "The page your are looking for does not exist."
    })
})
app.listen(3000, ()=>{
    console.log('server up at port 3000')
})