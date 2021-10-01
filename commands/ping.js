module.exports = {
    name: 'ping',
    description: 'Comando ping',

    execute(message, args){

        
        message.channel.send('Pong!');
        
    }
}