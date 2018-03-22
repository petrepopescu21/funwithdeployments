var Express = require('express')
var app = Express()

app.use((req,res)=>{
    console.log('Hello from console 2')
    res.send(req.headers)
})



app.listen(process.env.WEBSITES_PORT || 80)