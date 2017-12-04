import airlines from '../data/airlines'
const R = require('ramda')


export function getAirlineName(code){
  const item = R.find(R.propEq('iata',code))(airlines)
  return item['name']
}
