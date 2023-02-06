const{MongoClient} =require('mongodb')

let dbConnection;
module.exports={
    ConnectToDb:(cb)=>{

        MongoClient.connect('mongodb://localhost:27017/ANIMUS',{
            useNewUrlParser: true,
         useUnifiedTopology: true
        })
        .then((client)=>{
            dbConnection=client.db()
            console.log("database connected");
            return cb()
        })
        .catch(err=>{
            console.log(err)
            return cb(err)

        })
    },
    getDb:() =>{
        dbConnection

    }
}