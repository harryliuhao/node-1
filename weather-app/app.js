const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')

const placeInput=process.argv[2]

geocode(placeInput,(error,data)=>{

    forecast(data.latitude,data.longitude,(error,weatherData)=>{
        console.log('Current weather for',data.place+':',weatherData.condition+'.', weatherData.temp+'F and chance of rain is', weatherData.rainChance+'%')
    })
})
