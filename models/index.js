const {
    MongoClient,ObjectId
} = require('mongodb')
const url = 'mongodb://localhost:27017'
const dbName = 'Booklibrary'
let client = null

class Book {
    constructor(obj){
        this.id = obj._id
        this.isbn = obj.isbn,
        this.title = obj.title,
        this.author = obj.author,
        this.category = obj.category,
        this.stock = obj.stock


    }
    static findAll() {
        return new Promise((resolve, reject) => {
            client = new MongoClient(url, {
                useNewUrlParser: true
            })
            client.connect()
                .then(() => {
                    let db = client.db(dbName)
                    const collection = db.collection('books')
                    return collection.find({}).toArray()
                })
                .then(books => {
                    
                    let arr = []
                    books.map(book=>arr.push(new Book(book)))
                    
                    resolve(arr)
                })
                .catch((err) => {
                    reject(err)

                })
        })
    }
    static create(input) {
        return new Promise((resolve, reject) => {
            client = new MongoClient(url, {
                useNewUrlParser: true
            })
            client.connect()
                .then(() => {
                    let db = client.db(dbName)
                    const collection = db.collection('books')
                    return collection.insertOne(input)
                })
                .then(books => {
                    resolve(books)
                })
                .catch((err) => {
                    reject(err)

                })
        })


    }

    static update(input,data){
        return new Promise((resolve, reject) => {
            client = new MongoClient(url, {
                useNewUrlParser: true
            })
            client.connect()
                .then(() => {
                    
                    let db = client.db(dbName)
                    const collection = db.collection('books')
                    return collection.updateOne({_id:ObjectId(input),$set:{data}})
                })
                .then(books => {
                    resolve('berhasil mengupdate')
                    // console.log('gak error')
                })
                .catch((err) => {
                    reject(err)

                })
        })

    }

    static delete(input){
        return new Promise((resolve, reject) => {
            client = new MongoClient(url, {
                useNewUrlParser: true
            })
            client.connect()
                .then(() => {
                    let db = client.db(dbName)
                    const collection = db.collection('books')
                    return collection.deleteOne({_id:ObjectId(input)})
                })
                .then(books => {
                    resolve('berhasil menghapus')
                })
                .catch((err) => {
                    reject(err)

                })
        })

    }
}

module.exports = Book