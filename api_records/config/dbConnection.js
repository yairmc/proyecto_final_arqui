const mongoose = require('mongoose')

const dbConnection = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/secretaria_salud', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Database connected');
    }
    catch (e) {
        process.exit(0);
    }
}
module.exports = dbConnection;
