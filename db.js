const mongoose = require('mongoose');

//the connectToDatabase function is an asynchronous function that uses 'mongoose.connect' to establish connection to my MongoDB batabase
const connectToDataBase = async () => {
    try {
            await mongoose.connect(process.env.MONGODB_URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
        
            console.log('Connected to MongoDB');
        
        } 
        catch (error) {
        console.error('Failed to connect to MongoDB:', error);
    };
};

module.exports = connectToDataBase;