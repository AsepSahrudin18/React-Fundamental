import React from "react";
import NotFoundImage from  "../assets/images/not-found.svg"

function NotFound() {
  return (
    <main>
      <div className="not-found">
        <img src={NotFoundImage} alt='Not Found' />
        <h1>Buddy, it looks like you got lost...</h1>
      </div>
    </main>
  );
}

export default NotFound;
