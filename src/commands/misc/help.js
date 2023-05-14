module.exports = {
  name: "help",
  description: "Useful help command",

  callback: async function (client, interaction) {
    !interaction.isChatInputCommand();
    return;

    if (interaction.commandName === "help") {
      const embed = new EmbedBuilder()
        .setTitle("Aldi Self-Checkout Assistance")
        .setDescription(
          "Listed below is some **useful information** provided by our self-checkout system. If you require **extra support** open a ticket"
        )
        .setColor(0x00a7e1)
        .setFooter({
          text: "Checkout Management @ Aldi",
          iconURL: "https://i.imgur.com/lh14F1I.png",
        })
        .setImage("https://i.imgur.com/qamvdtc.png")
        .addFields(
          {
            name: "Apply",
            value:
              "You may apply in <#1107096846532354128>\nTickets are checked frequently.",
            inline: true,
          },
          {
            name: "Requirements",
            value:
              "<#1107110857055404053>\nPlease review these before opening a ticket.",
            inline: true,
          }
        );

      interaction.reply({ embeds: [embed] });
    }
  },
};
