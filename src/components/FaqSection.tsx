import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

const FaqSection = () => {

  const serverIp = process.env.NEXT_PUBLIC_SERVER_IP || 'example.com';
  const serverType = process.env.NEXT_PUBLIC_SERVER_TYPE || 'Java Edition';
  const serverVersion = process.env.NEXT_PUBLIC_SERVER_VERSION || '1.21.4';
  const serverNameShort = process.env.NEXT_PUBLIC_SERVER_NAME_SHORT || 'MCES';
  const discordLink = process.env.NEXT_PUBLIC_SERVER_DISCORD_LINK || 'discord.gg/example';

  const faqs = [
    {
      id: 'faqOne',
      question: 'What is the server IP?',
      answer: `The IP is ${serverIp}. You can connect on ${serverType} by clicking “Add Server” and pasting the IP in the “Server Address” field, then just click on join!`,
    },
    {
      id: 'faqTwo',
      question: 'What server version is this?',
      answer: `We are currently on ${serverVersion}.`,
    },
    {
      id: 'faqThree',
      question: 'Java or Bedrock Edition?',
      answer: `This is a ${serverType} only server. You can join with the above IP and version.`,
    },
    {
      id: 'faqFour',
      question: 'What is spawn about?',
      answer: `This is where you end up on first join, and where you can take a breather to learn about the server without being targeted by others. PVP is turned off here. From here you can pick where to go next.`,
    },
    {
      id: 'faqFive',
      question: `What is ${serverNameShort} world about?`,
      answer: `This is the main reason for our server: play, survive, or die trying!`,
    },
    {
      id: 'faqSix',
      question: 'How do I respawn?',
      answer: `When you die, you go to the spawn world, or your last bed, or your home.`,
    },
    {
      id: 'faqSeven',
      question: 'Can I set a home?',
      answer: `Try /sethome or sleep in a bed.`,
    },
    {
      id: 'faqEight',
      question: 'Can I tp or tpa to others?',
      answer: `No, you cannot /tp to a coordinate, but yes, you can send a teleport request to another player using /tpa theirname. Note that it's up to them to decline it.`,
    },
    {
      id: 'faqNine',
      question: 'Wait, the worlds get reset?',
      answer: `Yes, we plan seasons. We reset worlds periodically and consider your suggestions and feedback to make a better experience with newer Minecraft versions. We might let existing players access old seasons, while new members join the fresh season worlds.`,
    },
    {
      id: 'faqTen',
      question: 'Are there kits?',
      answer: `Yes, use /kits.`,
    },
    {
      id: 'faqEleven',
      question: 'Voting?',
      answer: `Yes, type /vote to support the server.`,
    },
    {
      id: 'faqTwelve',
      question: 'Can I link my Minecraft to the Discord?',
      answer: `Yes! Go in-game and type /discord link. You'll receive a code - send that code in a Direct Message to our bot on Discord, and you'll be all linked up!`,
    },
    {
      id: 'faqThirteen',
      question: 'I seriously have more questions than I started...',
      answer: `No worries! On our ${discordLink} channel #support, community members and sometimes our staff will gladly help you when we have the time.`,
    },
  ];

  return (
    <section id="faq-section" className="my-8 page-section">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <hr className="border-gray-700 mb-4" />
      <div className="accordion" id="faqAccordion">
        {faqs.map((faq) => (
          <AccordionItem key={faq.id} id={faq.id} question={faq.question} answer={faq.answer} parentId="faqAccordion" />
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
