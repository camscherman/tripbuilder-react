const BASE_URL = 'http://localhost:3000'

export const Query = {
  create (params) {

  const  {depCode,arrCode, length = 14 } = params;

  return fetch(`${BASE_URL}/query?depCode=${depCode}&arrCode=${arrCode}&length=${length}`,{
    "method": 'GET',
    "headers":{'Content-Type': 'application/json'}
  }).then((res)=> res.json() )

},
 getStored(params){
   const  {depCode,arrCode, length = 14 } = params;
   return fetch(`${BASE_URL}/query/deals?depCode=${depCode}&arrCode=${arrCode}&length=${length}`,
                {
                    method: 'GET',
                    headers: {'Content-Type': 'application/json'}

                }).then(res => res.json())
 },
 getIndex(params){
   const {depCode, arrCode} = params
   return fetch(`${BASE_URL}/query/show?depCode=${depCode}&arrCode=${arrCode}`,
                    {
                      method: 'GET',
                      headers: {'Content-Type': 'application/json'}
                    }).then(res => res.json())
 },
 getAllRoutes(params){
   const{startDate, endDate} = params
   return fetch(`${BASE_URL}/query/allroutes?startDate=${startDate}&endDate=${endDate}`,
                {
                  method:'GET',
                  headers: {'Content-Type': 'application/json'}
                }).then(res => res.json())
 }
}

export const User = {
  create (params) {
    debugger
    return fetch(`${BASE_URL}/users`,{
      "method": "POST",
      "headers": {"Content-Type" : "application/json"},
      "body": JSON.stringify(params)
    })
  }
}

export const Token = {
  create(params){
  return fetch(`${BASE_URL}/tokens`,{
    "method": "POST",
    "headers" : {"Content-Type" :"application/json"},
    "body": JSON.stringify(params)
  }).then( res =>{
    if (res.status === 200){
      return res.json()
    } else {
      return {error: "Something went wrong"}
    }
  })
  }
}
