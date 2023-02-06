const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017/";
const mongoClient = new MongoClient(uri, { useUnifiedTopology: true });
async function run() {

    try {
        var client = await mongoClient.connect()

        var dbName = client.db("dxcdb");
        var searchObj = { empId: 204 };
        var searchManyObj = {
            empId: { $gt: 206 } };
        var collName = dbName.collection("employees");

        const cursor = collName.deleteOne(searchObj)
            .then((res) => {
                if (res.deletedCount > 0) {
                    console.log("deletedcount :" + res.deletedCount);
                    console.log("Document deleted successfully");
                }
                if (res.deletedCount == 0) {
                    console.log("Data to be deleted not found")
                }
                mongoClient.close();
            })
            .catch((err) => {
                console.log("Error during deletion ", err);
                mongoClient.close();
            })

        const cursorMany = collName.deleteMany(searchManyObj)
            .then((res) => {
                if (res.deletedCount > 0) {
                    console.log("deletedcount :" + res.deletedCount);
                    console.log("Document deleted successfully");
                }
                if (res.deletedCount == 0) {
                    console.log("Data to be deleted not found")
                }
                mongoClient.close();
            })
            .catch((err) => {
                console.log("Error during deletion ", err);
                mongoClient.close();
            })
    }
    catch (err) {
        console.log("Error", err)
    }
}
run();
