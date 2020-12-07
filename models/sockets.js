

class Sockets {

    constructor( io ) {

        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {

           //TODO: Validar el JWT
           //Si el token no es valido, desconectarlo
           
           //TODO: Saber que usuario esta activo mediante el UID
           
           //TODO: Emitir todos los usuarios conectados
           
           //TODO: Socket join, uid
           
           //TODO: Escuchar cuando un cliente manda un mensaje
           //mensaje-personal
           
           //TODO: Disconnect 
           //Marcar en la base de datos que el usaurio se desconecto
           
        
        });
    }


}


module.exports = Sockets;