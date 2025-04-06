import React from "react";

const ContactSection = () => {
  const serverIp = process.env.NEXT_PUBLIC_SERVER_IP || "example.com";
  const discordLink = process.env.NEXT_PUBLIC_SERVER_DISCORD_LINK || "discord.gg/example";
  const discordOwner1 = process.env.NEXT_PUBLIC_SERVER_DISCORD_OWNER1 || "@owner1";
  const discordOwner2 = process.env.NEXT_PUBLIC_SERVER_DISCORD_OWNER2 || "@owner2";

  return (
    <section id="contact-section" className="page-section">
      <h2 className="text-4xl font-bold mb-4">Contact & Community</h2>
      <p>
        <strong>Have more questions?</strong> Feel free to reach out on our Discord or send us an email at{" "}
        <a href={`mailto:info@${serverIp}`}>info@{serverIp}</a>.
      </p>
      <p>
        <em>
          By the way, if you give us your Minecraft in-game username when contacting us, our admins will know it’s you
          (and not a random new player)!
        </em>
      </p>

      <h2 className="text-4xl font-bold mb-4">
        <a href={`https://${discordLink}`} target="_blank" rel="noopener noreferrer" className="title-link">
          💬 Join Our {discordLink}
        </a>
      </h2>
      <p>You can also check out our Discord channel again for quick questions, live chat, and news.</p>
      <p>
        Feel free to <code>{discordOwner1}</code> or <code>{discordOwner2}</code> to ask a question, but we do have a
        community category where it's perhaps more appropriate to discuss ban-appeals, ask support questions, or apply
        for staff, etc. We invite you to explore our Discord community server.
      </p>
    </section>
  );
};

export default ContactSection;
