const express = require('express')
const cron = require('node-cron')
const app = express()
app.use(express.json())
const moment = require('moment')


app.post('/start/:text', async function(req,res){
   try {
    let data = req.params.text
     cron.schedule('*/7 * * * * * ', function(){
         console.log(data,moment().format("YYYY-MM-DD-hh:mm:ss"))
     })
     res.send("running")
   } catch (error) {
     res.send(error.message)
   }
})

app.listen(3000, function(req,res){
    console.log("server running")
})