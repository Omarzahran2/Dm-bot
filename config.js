import dotenv from "dotenv";
if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

export const config = {
  token: process.env.DISCORD_TOKEN || process.env.TOKEN,
  clientId: process.env.DISCORD_CLIENT_ID || process.env.CLIENT_ID,
  guildId: process.env.GUILD_ID,
  adminRoleId: process.env.ADMIN_ROLE_ID,
  modRoleId: process.env.MOD_ROLE_ID,
  allowedChannels: process.env.ALLOWED_CHANNELS?.split(",") || [],
  enableLogging: process.env.ENABLE_LOGGING === "true",
  logChannelId: process.env.LOG_CHANNEL_ID,
  maxMessageLength: parseInt(process.env.MAX_MESSAGE_LENGTH) || 2000,
  cooldownSeconds: parseInt(process.env.COOLDOWN_SECONDS) || 30,
  dailyLimitPerUser: parseInt(process.env.DAILY_LIMIT_PER_USER) || 10,
  messages: {
    success: "✅ تم إرسال الرسالة بنجاح إلى",
    dmClosed: "❌ فشل إرسال الرسالة. المستخدم قد يكون أغلق الرسائل الخاصة",
    noPermission: "🚫 ليس لديك صلاحية لاستخدام هذا الأمر",
    cooldown: "⏰ يجب الانتظار {} ثانية قبل استخدام الأمر مرة أخرى",
    dailyLimit: "📊 وصلت للحد الأقصى اليومي ({} رسائل)",
    messageTooLong: "📝 الرسالة طويلة جداً (الحد الأقصى {} حرف)",
    wrongChannel: "📍 هذا الأمر متاح فقط في القنوات المحددة"
  }
};
