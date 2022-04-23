const express = require('express')
const MongoClient = require('mongodb').MongoClient


const app = express()

app.use(express.json())
var database

app.get('/', (req,resp) => {
	resp.send('Welcome to mongodb apii')
})
app.get('/api/users', (req, resp) =>{
	database.collection('users').find({}).toArray
((err, result)=>{
	if(err) throw error
	resp.send(result)
})})
app.listen(8080, () => {
	MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true}, (error, result) =>{
		if(error) throw error
		database = result.db('dew-point')
		console.log('COnnection sussesfull')
	})
})