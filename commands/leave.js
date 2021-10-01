module.exports = {
    name: 'leave',
    description: 'Para o que o bot está fazendo e sai do canal.',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;
 
        if(!voiceChannel) return message.channel.send("Você precisa estar num canal de voz pra parar a música!");
        await voiceChannel.leave();
        await message.channel.send('Saindo do canal.')
 
    }
}