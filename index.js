const {Client,GatewayIntentBits,ActionRowBuilder,ButtonBuilder,ButtonStyle,ModalBuilder,TextInputBuilder,TextInputStyle} = require('discord.js');
const client = new Client({intents:[GatewayIntentBits.Guilds,GatewayIntentBits.GuildMembers]});
const token=process.env.DISCORD_BOT_TOKEN;
const resultWhitelist=process.env.DISCORD_WHITELIST_RESULT_CHANNEL_ID;
const resultStaff=process.env.DISCORD_STAFF_RESULT_CHANNEL_ID;

client.on('interactionCreate', async interaction=>{
  if(!interaction.isButton()) return;
  if(!interaction.customId.endsWith('_accept') && !interaction.customId.endsWith('_deny')) return;

  const type=interaction.customId.startsWith('whitelist_')?'whitelist':'staff';
  const denied=interaction.customId.endsWith('_deny');
  const modal=new ModalBuilder().setCustomId(`decision:${type}:${denied?'deny':'accept'}:${interaction.message.id}`).setTitle(denied?'Reject Application':'Accept Application');
  const reason=new TextInputBuilder().setCustomId('reason').setLabel('Reason').setStyle(TextInputStyle.Paragraph).setRequired(true).setPlaceholder('Write the reason...');
  modal.addComponents(new ActionRowBuilder().addComponents(reason));
  await interaction.showModal(modal);
});

client.on('interactionCreate', async interaction=>{
  if(!interaction.isModalSubmit() || !interaction.customId.startsWith('decision:')) return;
  const [,type,decision]=interaction.customId.split(':');
  const reason=interaction.fields.getTextInputValue('reason');
  const channelId=type==='whitelist'?resultWhitelist:resultStaff;
  const ch=await client.channels.fetch(channelId).catch(()=>null);
  if(!ch) return interaction.reply({content:'Result channel is not configured/found.',ephemeral:true});
  const original=interaction.message;
  const applicant=original.embeds?.[0]?.footer?.text || 'Applicant';
  const text=decision==='accept'
    ? `${applicant} **Your whitelist Application has been accepted ✅ You may proceed to the interview!**\\nReason: ${reason}`
    : `${applicant} **${type==='whitelist'?'Whitelist application has been rejected':'Staff application has been rejected'} ❌**\\nReason: ${reason}`;
  await ch.send(text);
  await interaction.reply({content:'Decision sent.',ephemeral:true});
});
client.once('ready',()=>console.log(`Legend RolePlay bot online as ${client.user.tag}`));
client.login(token);