import airlines from '../data/airlines'
import airports from '../data/airports'
const R = require('ramda')

const easyAirports = []

for(let key in airports){
  const obj = airports[key]
  if(obj['iata'] !== ""){
    const easyObj = {iata: obj['iata'], city: obj['city'], name: obj['name']}
    easyAirports.push(easyObj)
  }
}

export function getAirlineName(code){
  const item = R.find(R.propEq('iata',code))(airlines)
  return item['name']
}

export function getCityName(code){
  const item = R.find(R.propEq('iata', code))(easyAirports)
  return item['city']
}

export function getAirportName(code){
  const item = R.find(R.propEq('iata', code))(easyAirports)
  return item['name']
}
