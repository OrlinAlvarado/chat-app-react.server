const { usuarioConectado, usuarioDesconectado } = require("../controllers/sockets");
const { comprobarJWT } = require("../helpers/jwt");


class Sockets {

    constructor( io ) {

        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', async ( socket ) => {
            
            const [ valido, uid ] = comprobarJWT( socket.handshake.query['x-token']);
            if( !valido ) {
                console.log('Socket no identificado');
                return socket.disconnect();
            }
            
            await usuarioConectado( uid );
            console.log('Cliente conectado');
            
           //TODO: Validar el JWT
           //Si el token no es valido, desconectarlo
           
           //TODO: Saber que usuario esta activo mediante el UID
           
           //TODO: Emitir todos los usuarios conectados
           
           //TODO: Socket join, uid
           
           //TODO: Escuchar cuando un cliente manda un mensaje
           //mensaje-personal
           
           //TODO: Disconnect 
           //Marcar en la base de datos que el usaurio se desconecto
           socket.on('disconnect', async() => {
               console.log('Usuario desconectado', uid );
               await usuarioDesconectado( uid );
           })
        
        });
    }


}


module.exports = Sockets;