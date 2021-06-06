const path=require('path')
const express=require('express')

const app=express()
const pubDir=path.join(__dirname,'../public')

app.set('view engine','hbs')
app.use(express.static(pubDir))

app.get('', (req, res)=>{
    res.send('index')
})

app.get('/help',(req, res)=>{
    res.send({
        contact: 'fox',
        phone: 5432
    })
})

app.get('/weather', (req,res)=>{
    res.send({
        location: 'Oakton, VA',
        temporature: 79
    })
})
app.listen(3000, ()=>{
    console.log('server up at port 3000')
})