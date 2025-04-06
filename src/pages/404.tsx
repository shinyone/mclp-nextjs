import React from "react";

const NotFoundPage = () => {
  const serverIp = process.env.NEXT_PUBLIC_SERVER_IP || "localhost";

  return (
    <div id="main-content" className="container my-4 text-start" style={{ maxWidth: "1000px" }}>
      <h1>404: Page Not Found</h1>
      <p>Looks like you made a typo.</p>
      <p>
        <a href={`https://${serverIp}`}>TRY AGAIN | HOME</a>
      </p>
    </div>
  );
};

export default NotFoundPage;
