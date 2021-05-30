const request=require('request')

const placeInput='Oakton VA'
// const weatherUrl='http://api.weatherstack.com/current?access_key=e3a4c5a4a3e28673e4aaf0706bf1aa69&query=38.8873249,-77.350638&units=f'

const mapUrl='https://api.mapbox.com/geocoding/v5/mapbox.places/'+placeInput+'.json?access_token=pk.eyJ1IjoiaGFycnlsaXVoYW8iLCJhIjoiY2twYTBucDNwMGxtYzJ2b2ZoZ2RxaTJqOSJ9.s9j22OFzmKPvJtca6Nhlig&limit=1'

// request({url: weatherUrl, json: true}, (error, response)=>{
//     const loc=response.body.location.name
//     const temp=response.body.current.temperature 
//     const rainChance=response.body.current.precip*100
//     const condition=response.body.current.weather_descriptions[0]
//     console.log(condition+'. Current temperature at location',loc,'is', temp,'F and chance of rain is', rainChance,'%')
// })

request({url: mapUrl}, (error, response)=>{
    
    const body=JSON.parse(response.body)
    const place=body.features[0].place_name
    const longitude=body.features[0].center[0]
    const latitude=body.features[0].center[1]

    console.log('Coordinate for',place, 'is',longitude,',',latitude)
})
