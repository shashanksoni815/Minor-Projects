const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("../WanderLust/models/listing");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
    .then(() => {
        console.log("connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
};

app.get("/", (req, res) => {
    res.send("hi, i am root");
});

app.get("/listings", async(req, res) => {
    Listing.find({}).then((res) => {
        console.log(res);
    });
});

// app.get("/testListing", async(req, res) => {
//     let sampleListing = new Listing({
//         title: "My New Villa",
//         description: "By the beach",
//         price: 1200,
//         location: "Calangute, Goa",
//         country: "India",
//     });
//     await sampleListing.save();
//     console.log("sample was saved");
//     res.send("Successsful testing");
// });

app.listen(8080, () => {
    console.log("Server is listening to port 81080");
});