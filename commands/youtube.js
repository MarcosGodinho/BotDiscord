module.exports = {
    name: 'youtube',
    description: 'Mostra na tela um link para a tela principal do YouTube!',
    execute(message, args){

        if(message.member.roles.cache.has('891075099615191090')){
            message.channel.send('http://www.youtube.com');
        


        } else {
            message.channel.send('Você não tem permissão, vou ajudar com isso!');
            message.member.roles.add('891075099615191090').catch(console.error);
        }

    }
}