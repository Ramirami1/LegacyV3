export default {
  name: "sc",
  command: ["sc", "source"],
  tags: ["main"],
  run: async (m, { conn }) => {
    const delay = time => new Promise(res => setTimeout(res, time));
    await delay(3000)
    return m.reply('Check on Baron \n\n This script is to sell')
  }
}
