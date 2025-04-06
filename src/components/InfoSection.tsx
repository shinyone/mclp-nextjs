import React from "react";

const InfoSection = () => {
  const serverName = process.env.NEXT_PUBLIC_SERVER_NAME || "ExampleServer";
  const serverNameShort = process.env.NEXT_PUBLIC_SERVER_NAME_SHORT || "MCES";
  const serverIp = process.env.NEXT_PUBLIC_SERVER_IP || "example.com";
  const serverType = process.env.NEXT_PUBLIC_SERVER_TYPE || "Java Edition";
  const serverVersion = process.env.NEXT_PUBLIC_SERVER_VERSION || "1.21.4";
  const serverSeasonZero = process.env.NEXT_PUBLIC_SERVER_SEASON_ZERO || "Founders Era";
  const serverSeasonVersion = process.env.NEXT_PUBLIC_SERVER_SEASON_VERSION || "0.0.1";

  return (
    <section id="info-section" className="page-section">
      <h2 className="text-4xl font-bold mb-4">About {serverName}</h2>
      <p>
        We are a very new community of survival Minecraft gamers that love to hang out, make friends, and try to survive
        in a <strong>{serverName}</strong>.
      </p>
      <ul>
        <li>server feature 1</li>
        <li>server feature 2</li>
        <li>server feature 3</li>
        <li>server feature 4</li>
      </ul>

      <h2 className="text-4xl font-bold mb-4">How to Join</h2>
      <ol>
        <li>
          Copy our {serverNameShort} server IP (see top of the page), it is {serverIp}
        </li>
        <li>
          Make sure you are on{" "}
          <em>
            {serverType} {serverVersion} (or newer)
          </em>{" "}
          to connect.
        </li>
        <li>Once in-game, explore spawn and read the available info.</li>
        <li>
          In-game, type <code>/rules</code>, and then <code>/rtp</code> when you're ready to begin your adventure!
        </li>
        <li>
          Other in-game commands: <code>/discord</code>, <code>/rankup</code>, <code>/kits</code>, and{" "}
          <code>/vote</code>
        </li>
      </ol>

      <h2 className="text-4xl font-bold mb-4">Seasons!</h2>
      <p>
        The {serverNameShort} does have seasons, but we're not rushing to reset anything. In fact, as you can read on
        our FAQ page, we actually will keep the existing world if we reset for a new season. So legacy players can visit
        it.
      </p>
      <p>
        We're currently in season "zero", {serverSeasonZero}, version {serverSeasonVersion}. We consider this our
        private and public alpha, and are now in our first public beta. We are taking our time to set things up.
      </p>
    </section>
  );
};

export default InfoSection;
