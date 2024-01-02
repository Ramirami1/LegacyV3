export default {
  name: "owner",
  command: ["owner", "creator"],
  tags: ["info"],
  run: async (m, { conn }) => {
    const delay = time => new Promise(res => setTimeout(res, time));
    conn.sendContact(m.from, config.options.owner, m)
    await delay(1000)
    return m.reply('hello, thats the number My owner')
  }
}
