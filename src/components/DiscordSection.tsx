import React from "react";

const DiscordSection = () => {
  const discordLink = process.env.NEXT_PUBLIC_SERVER_DISCORD_LINK || "discord.gg/example";
  const discordOwner1 = process.env.NEXT_PUBLIC_SERVER_DISCORD_OWNER1 || "@owner1";
  const discordOwner2 = process.env.NEXT_PUBLIC_SERVER_DISCORD_OWNER2 || "@owner2";

  return (
    <section id="discord-section" className="page-section">
      <h2 className="text-4xl font-bold mb-4">
        <a href={`https://${discordLink}`} target="_blank" rel="noopener noreferrer" className="title-link">
          💬 Join Our {discordLink}
        </a>
      </h2>
      <p>
        Our Discord community is the perfect place to connect with players and staff, share your in-game experiences,
        and get updates.
      </p>
      <ul>
        <li>Get help from community members and staff</li>
        <li>Participate in Discord-exclusive events</li>
        <li>Stay in touch even if you can't log in to Minecraft right now</li>
      </ul>
      <p>
        Use <code>/discord link</code> in-game to link your Minecraft account with our Discord.
      </p>
      <p>
        Feel free to <code>{discordOwner1}</code> or <code>{discordOwner2}</code> to ask a question, but we do have a{" "}
        <strong>community</strong> category where it's perhaps more appropriate to discuss ban-appeals, ask support
        questions, or apply for staff, etc. We invite you to explore our Discord community server.
      </p>
    </section>
  );
};

export default DiscordSection;
