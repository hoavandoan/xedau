import _ from 'lodash'

export function getData() {
    const spreadsheetId = '1dWcQSzmeFpVPNno01WXovj6072xW0JbRQzg0IVjYFbQ'
    const range = 'Sheet1!E5:N6'
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=AIzaSyA-UXoZqJhkIXOK0RaGOQXAubeX1QXAUSM`
    const data = []
    return fetch(url)
        .then(response=> response.json())
        .then(res=>{
            const data = res.values
            const infoCar = ['carOwner','phoneNumber','address','price','timeStart','timeEnd','image','category','note','favorite']
            return data.map(item =>{
                return _.zipObject(infoCar,item)
            })
        })
}
