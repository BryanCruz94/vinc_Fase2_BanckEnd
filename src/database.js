import mongoose from "mongoose";
import config from './config'

//Correccion
mongoose.set('strictQuery', false);

(async () => {
    const db = await mongoose.connect(config.mongodbURL)
    console.log('Database is connected to: ',db.connection.name)
})();