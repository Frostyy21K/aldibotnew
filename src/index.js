require("dotenv").config();
const {
  Client,
  IntentsBitField,
  ActivityType,
  GatewayIntentBits,
} = require("discord.js");
const mongoose = require("mongoose");
const eventHandler = require("./handlers/eventHandler");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.GuildPresences,
    IntentsBitField.Flags.MessageContent,
  ],
});

(async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to DB.");

    eventHandler(client);

    client.on("ready", (c) => {
      let membersCount = client.guilds.cache
        .map((guild) => guild.memberCount)
        .reduce((a, b) => a + b, 0);
      client.user.setActivity({
        name: `${membersCount} Aldi Guilders`,
        type: ActivityType.Watching,
      });
    });

    client.login(process.env.TOKEN);
  } catch (error) {
    console.log(`Error Thrown: ${error}`);
  }
})();
