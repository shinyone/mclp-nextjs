import React, { useState } from "react";
import Quicknav from "./Quicknav";

const Header = () => {
  const [copyStatus, setCopyStatus] = useState("Click to Copy IP ..");
  const serverName = process.env.NEXT_PUBLIC_SERVER_NAME || "ExampleServer";
  const serverIp = process.env.NEXT_PUBLIC_SERVER_IP || "example.com";
  const serverPort = process.env.NEXT_PUBLIC_SERVER_PORT || "25565";
  const serverDescription = process.env.NEXT_PUBLIC_SERVER_DESCRIPTION || "Minecraft Survival Server";
  const serverType = process.env.NEXT_PUBLIC_SERVER_TYPE || "Java Edition";
  const serverVersion = process.env.NEXT_PUBLIC_SERVER_VERSION || "1.21.4";

  const handleCopy = () => {
    const ipText = `${serverIp}:${serverPort}`;
    navigator.clipboard
      .writeText(ipText)
      .then(() => {
        setCopyStatus("✓✓ Yes!! Copied! ✓✓");
        setTimeout(() => {
          setCopyStatus("Click to Copy IP ..");
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy IP:", err);
      });
  };

  return (
    <header
      className="container mx-auto flex flex-col items-center justify-center text-center py-4"
      style={{ maxWidth: "1000px" }}
    >
      {/* Logo */}
      <div className="mb-3">
        <a href={`https://${serverIp}`}>
          <img src="/assets/logo.png" alt={`${serverName} Logo`} className="w-[420px] h-auto mx-auto" />
        </a>
      </div>

      {/* Quicknav */}
      <Quicknav />

      {/* Title */}
      <h1 className="mb-3 text-pastel-blue text-2xl font-bold">
        Welcome to the <strong>{serverName}</strong> Server
      </h1>

      {/* Server IP and Description */}
      <p className="mb-1">
        <strong>Server IP:</strong>
        <input
          type="text"
          className="border border-gray-300 rounded px-2 py-1 inline-block mx-2"
          value={`${serverIp}:${serverPort}`}
          readOnly
          onClick={handleCopy}
        />
        [
        <a href="#" id="copyBtn" onClick={handleCopy} className="text-blue-500 hover:text-blue-600">
          {copyStatus}
        </a>
        ]
      </p>
      <p className="server-subtitle mb-4 text-gray-400 text-sm">
        {serverDescription} ({serverType} {serverVersion})
      </p>
    </header>
  );
};

export default Header;
