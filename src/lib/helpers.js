import airlines from '../data/airlines'
import airports from '../data/airports'
import moment from 'moment'
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

export function formatIndexVals(arr){
 const formattedValues = arr.map((item)=>{
   const date = moment(item[0]).format().slice(0,10)
   const price = item[1]
   const scale = Math.floor((item[2] + 0.5)*5)
   const count = scale > 0 ?  scale : 0
   return {date: date,price: price, count: count, scale: item[2].toFixed(2)*100 }
 })
 return formattedValues
}
