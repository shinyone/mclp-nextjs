import React from 'react';

const Footer = () => {
  const serverNameShort = process.env.NEXT_PUBLIC_SERVER_NAME_SHORT || 'MCES';
  const serverIp = process.env.NEXT_PUBLIC_SERVER_IP || 'example.com';
  const serverName = process.env.NEXT_PUBLIC_SERVER_NAME || 'ExampleServer';
  const serverWebsiteVersion = process.env.NEXT_PUBLIC_SERVER_WEBSITE_VERSION || '0.4.0';

  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center py-3" style={{ color: '#aaa', fontSize: '0.85rem' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <small>
          <p className="mb-2">
            Copyright &copy; {serverNameShort} - {serverIp} 1977 - {currentYear}
          </p>
          <p className="mb-1">
            Please note that the team members nor {serverIp} claim or pretend to be, nor are associated with, and are not supported by Mojang or Microsoft, Discord, or any other brand name.
            / Server owner: {serverName} (<a href={`mailto:info@${serverIp}`} style={{ color: '#aaa' }}>info@{serverIp}</a>)
            / website version {serverWebsiteVersion}
          </p>
        </small>
      </div>
    </footer>
  );
};

export default Footer;