const mongoose = require('mongoose')
const { Schema } = mongoose

const TourSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        require: true,
    },
    description: {
        type: String,
    },
    transport: {
        type: String,
        required: true,
        enum: ["Bus", "train", 'plane', 'Ship'],
        default: "plane"
    },
    destination: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    startingDate: {
        type: String,
        required: true
    }, views: {
        type: Number,
    }

})

module.exports.tourCollection = mongoose.model('tours', TourSchema)


module.exports.tourSchema = TourSchema