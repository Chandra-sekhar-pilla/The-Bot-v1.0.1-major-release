module.exports = {
    name: 'clear',
    description: "This is ping command",
    async execute(message, args){
        if(message.member.roles.cache.some(r => r.name === "king"))
        {
            if(!args[0]) return message.reply("please enter the number of messages you want to clear");
            if(isNaN(args[0])) return message.reply('please enter a real number');
    
            if(args[0] > 100) return message.reply('you cannot');
            if(args[0] < 1) return message.reply('you cant time travel');
    
            await message.channel.messages.fetch({list: args[0]}).then(messages =>{
                message.channel.bulkDelete(messages);
            });
        }
       else{
           message.reply('you have no permission to use this command');
       }
    }
}