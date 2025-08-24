const { MongoClient } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://root:root@mongodbpractice.mo27xtt.mongodb.net/";

// Create a new client and connect to MongoDB
const client = new MongoClient(uri);

async function main() {
  try {
    // Connect to the "mongodbpractice" database and access its "users" collection
    const database = client.db("mongodbpractice");
    const users = database.collection("users");

    // Create a document to insert
    const data = {
      firstName: "Rajesh",
      lastName: "Ranjan",
      age: 29,
      hobbies: ["Coding", "Gaming"],
    };

    // Insert the defined document into the "users" collection
    const result = await users.insertOne(data);

    // Print the ID of the inserted document
    console.log(`A document was inserted : ${result.insertedId}`);

    // Find all data in "User" collection
    const findResult = await users.find({}).toArray();

    // Print data of the document
    console.log(`Found documents : ${JSON.stringify(findResult, null, 2)}`);

    // Find all documents with a filter of firstName: "Rajesh"
    const countResult = await users.countDocuments({ firstName: "Rajesh" });

    console.log(`Found ${countResult} documents with firstName : "Rajesh".`);
  } finally {
    // Close the MongoDB client connection
    await client.close();
  }
}
// Run the function and handle any errors
main().catch(console.dir);
