const request = require('request')

const forecastcode = (longitude, latitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=a1abbecf95e10cd0d021b1e7fa198544&query='+ latitude +','+ longitude +''

    request({url, json: true}, (error, { body }) => {
        if(error){
            callback('Unable to connect to weather services', undefined)
        }else if(body.error){
            callback('Unable to find location', undefined)
        }else{
            callback(undefined, `Weather descriptions: ${body.current.weather_descriptions[0]}. Temperature is ${body.current.temperature} C degress`)
        }
    })
}

module.exports = forecastcode

