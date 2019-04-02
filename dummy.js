const {
    MongoClient,ObjectId
} = require('mongodb')
const url = 'mongodb://localhost:27017'
const dbName = 'Booklibrary'

let client = new MongoClient(url,{ useNewUrlParser: true } )

client.connect()
.then(()=>{
    console.log('berhasil')
    let db = client.db(dbName)
    const collection = db.collection('books')
     return collection.insertOne({isbn:"2451431",title:'mencari juki',
    author:'juki',category:'kesenian',stok:12})
})
.then((result)=>{
    console.log('berhasil diinput')
    client.close()

})
.catch(err=>{
    console.log(err)
})


