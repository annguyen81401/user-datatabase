/* module.exports = {
    db: 'mongodb://localhost/ecommerce-app'
}; */

module.exports = {
    db: 'mongodb+srv://mobileapp:mobileapp@cluster0.xhqjj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
};

/* const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://mobileapp:mobileapp@cluster0.xhqjj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
}); */