const _0x5a897c=(function(){let _0x51e874=!![];return function(_0x1ce87f,_0x55e4db){const _0x22dd3a=_0x51e874?function(){if(_0x55e4db){const _0x312354=_0x55e4db['apply'](_0x1ce87f,arguments);return _0x55e4db=null,_0x312354;}}:function(){};return _0x51e874=![],_0x22dd3a;};}()),_0x1fdcf4=_0x5a897c(this,function(){return _0x1fdcf4['toString']()['search']('(((.+)+)+)+$')['toString']()['constructor'](_0x1fdcf4)['search']('(((.+)+)+)+$');});_0x1fdcf4();const {SlashCommandBuilder}=require('@discordjs/builders'),Discord=require('discord.js'),fs=require('fs'),yaml=require('js-yaml'),config=yaml['load'](fs['readFileSync']('./config.yml','utf8')),commands=yaml['load'](fs['readFileSync']('./commands.yml','utf8'));module['exports']={'enabled':commands['General']['Ping']['Enabled'],'data':new SlashCommandBuilder()['setName']('ping')['setDescription'](commands['General']['Ping']['Description']),async 'execute'(_0x35d49f,_0x4c9a66){const _0x35eabc=new Discord['EmbedBuilder']()['setTitle']('🏓\x20Pong!')['setColor'](config['EmbedColors'])['addFields']([{'name':'Ping','value':_0x4c9a66['ws']['ping']+'ms'},{'name':'Latency','value':Date['now']()-_0x35d49f['createdTimestamp']+'ms.'}])['setTimestamp']()['setFooter']({'text':'Requested\x20by:\x20'+_0x35d49f['user']['username'],'iconURL':''+_0x35d49f['user']['displayAvatarURL']({'dynamic':!![]})});_0x35d49f['reply']({'embeds':[_0x35eabc]});}};