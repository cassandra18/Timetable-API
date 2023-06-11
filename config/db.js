const mongoose = require('mongoose');


mongoose.set('strictQuery', true);

const connectDatabase = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI);
}


module.exports = connectDatabase;
