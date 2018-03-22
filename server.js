var Express = require('express')
var app = Express()

app.use((req,res)=>{
    res.send(req.headers)
})

app.listen(process.env.WEBSITES_PORT || 80)