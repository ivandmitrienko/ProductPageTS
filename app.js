const MongoClient = require("mongodb").MongoClient;
   
const url = "mongodb://127.0.0.1:27018/";
const mongoClient = new MongoClient(url);
 
async function run() {
    try {
        await mongoClient.connect();
        const db = mongoClient.db("usersdb");
        const collection = db.collection("users");
        const result = await collection.updateOne({name: "Tom"}, { $set: {name: "Tom Junior", age:33}});
        console.log(result);
         
    }catch(err) {
        console.log(err);
    } finally {
        await mongoClient.close();
    }
}
run().catch(console.error);
