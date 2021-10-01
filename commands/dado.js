module.exports = {
    name: 'dado',
    description: 'É um dado de 1 a 6.',

    execute(message, args){

        message.channel.send('Você tirou ' + (Math.floor(Math.random() * (6 - 1 + 1)) + 1) + ' no dado!');
        
    }
}