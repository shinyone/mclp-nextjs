import React from "react";

const VoteSection = () => {
  const serverName = process.env.NEXT_PUBLIC_SERVER_NAME || "ExampleServer";
  const voteRewards = process.env.NEXT_PUBLIC_SERVER_VOTE_REWARDS || "a diamond";
  const voteSites = [
    { url: process.env.NEXT_PUBLIC_SERVER_VOTE_SITE1_URL, short: process.env.NEXT_PUBLIC_SERVER_VOTE_SITE1_SHORT },
    { url: process.env.NEXT_PUBLIC_SERVER_VOTE_SITE2_URL, short: process.env.NEXT_PUBLIC_SERVER_VOTE_SITE2_SHORT },
    { url: process.env.NEXT_PUBLIC_SERVER_VOTE_SITE3_URL, short: process.env.NEXT_PUBLIC_SERVER_VOTE_SITE3_SHORT },
    { url: process.env.NEXT_PUBLIC_SERVER_VOTE_SITE4_URL, short: process.env.NEXT_PUBLIC_SERVER_VOTE_SITE4_SHORT },
  ];

  return (
    <section id="vote-section" className="page-section">
      <h2 className="text-4xl font-bold mb-4">Vote for {serverName}</h2>
      <p>
        <strong>Show your support and help our community grow by voting on these sites every 24 hours!</strong>
      </p>
      <p>We currently reward early adopters with {voteRewards} for voting, this will change in the near future.</p>
      <ul>
        {voteSites.map((site, index) => (
          <li key={index}>
            <span className="me-1">🗳️</span>
            <a href={site.url} target="_blank" rel="noopener noreferrer" className="text-primary">
              <strong>Vote Site: {site.short}</strong>
            </a>
          </li>
        ))}
      </ul>
      <p>Every vote helps us get discovered by more players – thank you!</p>
    </section>
  );
};

export default VoteSection;
