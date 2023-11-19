import mongoose from 'mongoose';

const handleMongoError = (message: string, error: any) => {
    console.error(`${message}:`, error.message);
}

export const initMongoConnection = async () => {
    if (!process.env.MONGO_URI) {
        throw new Error('MONGO_URI is not defined');
    }


    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected');
    } catch (error) {
        handleMongoError('MongoDB connection error', error);
        // Optionally re-throw the error or handle it as needed
    }
}

export const closeMongoConnection = async () => {
    try {
        await mongoose.connection.close();
        console.log('MongoDB connection closed');
    } catch (error) {
        handleMongoError('MongoDB connection close error', error);
        // Optionally re-throw the error or handle it as needed
    }
}
