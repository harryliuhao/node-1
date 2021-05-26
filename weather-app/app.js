const request=require('request')

const url='http://api.weatherstack.com/current?access_key=e3a4c5a4a3e28673e4aaf0706bf1aa69&query=37.8267,-122.4233'

request({url: url}, (error, response)=>{
    const data=JSON.parse(response.body)
    console.log(data.current)
})
