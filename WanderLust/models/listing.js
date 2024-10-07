const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        require: true,
    },
    description: String,
    image: {
        type: String,
        default: "https://png.pngtree.com/thumb_back/fh260/background/20230704/pngtree-3d-illustration-of-a-stunning-beach-sunset-image_3738541.jpg",
        set: (v) => 
            v === "" 
        ? "https://png.pngtree.com/thumb_back/fh260/background/20230704/pngtree-3d-illustration-of-a-stunning-beach-sunset-image_3738541.jpg" 
        : v,
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;