const mongoose = require('mongoose');


mongoose.set('strictQuery', true);

const connectDatabase = async () => {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
}


module.exports = connectDatabase;
