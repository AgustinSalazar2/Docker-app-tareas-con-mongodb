import { connect } from 'mongoose';

const dbConnect = ()=> {
    try {
        connect(process.env.MONGO_DB_URI);
        console.log('Conectado a la BD');
    } catch (error) {
        console.log('Error al conectar la BD');
        console.log(error.message);
    }
}

export default dbConnect;