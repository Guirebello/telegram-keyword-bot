require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");

const token = process.env.TELEGRAM_BOT_TOKEN;
const alertChatId = Number(process.env.ALERT_CHAT_ID || 0);

// monta lista de palavras
const KEYWORDS = (process.env.KEYWORDS || "")
  .toLowerCase()
  .split(",")
  .map((k) => k.trim())
  .filter(Boolean);

if (!token) {
  console.error("Erro: TELEGRAM_BOT_TOKEN não definido no .env");
  process.exit(1);
}

if (!alertChatId) {
  console.error("Erro: ALERT_CHAT_ID não definido ou inválido no .env");
  process.exit(1);
}

if (KEYWORDS.length === 0) {
  console.warn(
    "Aviso: nenhuma palavra em KEYWORDS. Edite o .env para adicionar.",
  );
}

const bot = new TelegramBot(token, { polling: true });

console.log("🤖 Bot de promoções iniciado...");
console.log("Palavras-chave:", KEYWORDS);

// comando simples pra testar no privado
bot.onText(/\/ping/, (msg) => {
  bot.sendMessage(msg.chat.id, "pong 🏓");
});

// escuta todas as mensagens
bot.on("message", (msg) => {
  const rawText = msg.text || msg.caption;

  if (!rawText) return;

  const chatType = msg.chat.type;
  // só queremos monitorar grupos/supergrupos
  if (chatType !== "group" && chatType !== "supergroup") return;

  const textLower = rawText.toLowerCase();
  const matched = KEYWORDS.filter((k) => k && textLower.includes(k));

  if (matched.length === 0) return;

  const groupName = msg.chat.title || msg.chat.username || msg.chat.id;
  const sender =
    [msg.from.first_name, msg.from.last_name].filter(Boolean).join(" ") ||
    msg.from.username ||
    msg.from.id;

  let linkInfo = "";
  // se o grupo for público (tem @username), dá pra montar link da mensagem
  if (msg.chat.username && msg.message_id) {
    linkInfo = `\n🔗 Link: https://t.me/${msg.chat.username}/${msg.message_id}`;
  }

  const alertText =
    `🔔 Palavra-chave encontrada!\n` +
    `👥 Grupo: ${groupName}\n` +
    `👤 De: ${sender}\n` +
    `🔎 Bateu em: ${matched.join(", ")}\n\n` +
    `💬 Mensagem:\n${msg.text}${linkInfo}`;

  bot.sendMessage(alertChatId, alertText);
});
