module.exports = {
    name: 'ajuda',
    description: 'Mostra os comandos do bot.',

    execute(message, args){

        message.channel.send('***** LISTA DE COMANDOS *****\n-ajuda\n-dado\n-leave\n-play\n-ping\n-youtube');
        
    }
}