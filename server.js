const express = require('express')
const app = express()
const PORT = 8000

const jedis = {
    'obiWan':{
    'name': 'Obi Wan Kanobi',
    'age': 'unknown',
    'birthPlace': 'Tatooine'
},
    'qaiGonJin':{
        'name': 'unknown',
        'age': 'unknown',
        'birthplace': 'unknown'
    }
    'unknown':{
        'name': 'unknown',
        'age': 'unknown',
        'birthplace': 'unknown'
    }
}


app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')  
})

app.get('/api/:name', (request, response)=>{
    const jedis = request.params.name.toLowerCase()

    if( jedis[jediNames])
    response.json(jedis[jediNames])
}else{
    response.json(jedis['unknown'])
    }

})

app.listen(PORT, ()=>{
    console.log(`The server is not running on port ${PORT}! Betta Go Catch It!`)
})