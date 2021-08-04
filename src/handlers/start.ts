import { Composer, Markup } from 'telegraf';

export const Start = Composer.command('start', async (ctx) => {
    let text =
        `Hi <a href="tg://user?id=${ctx.from.id}">${ctx.from.first_name}</a>\n` +
        `I Play Songs in Group Voice Chats add me and my assistant @Nobiee_Plugin in your group to enjoying music.\n` +
        `I'm developed by <a href="https://t.me/Robo_Network">Robo Network</a>`
    await ctx.replyWithHTML(text, {
        ...Markup.inlineKeyboard([
            [Markup.button.url('➕𝗨𝗣𝗗𝗔𝗧𝗘𝗦 𝗖𝗛𝗔𝗡𝗡𝗘𝗟➕', 'https://t.me/Robo_Network')]
        ]),
        disable_web_page_preview: true
    })
})
