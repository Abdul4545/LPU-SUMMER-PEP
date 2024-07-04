const { MongoClient, ServerApiVersion } = require('mongodb');



const uri = "mongodb+srv://<username>:<password>@cluster0.5skyy0a.mongodb.net/<dbname>?appName=Cluster0";

let dbURL = uri;
dbURL = dbURL.replace("<username>", process.env.DB_USERNAME);
dbURL = dbURL.replace("<password>", process.env.DB_PASSWORD);
dbURL = dbURL.replace("<dbname>", process.env.DB_NAME);



// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(dbURL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const database = client.db(process.env.DB_NAME);
const productsCollection = database.collection('products');


// async function run() {
//   try {

//     // const products = database.collection("products");
//     // await products.insertOne({
//     //     name:"Air Conditioner",
//     //     price:55000
//     // })


//     console.log("--------------- DB Connected -------------------");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }

// run().catch(console.dir);

module.exports = {
    database,
    productsCollection
}