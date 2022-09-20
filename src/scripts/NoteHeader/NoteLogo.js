import React from "react";
import { useNavigate } from "react-router-dom";

function NoteLogo() {
  const navigate = useNavigate();

  return (
    <div
      className="logo"
      onClick={() => {
        navigate("/");
      }}
    >
      <span className="material-symbols-outlined"> sticky_note_2 </span>
      Notes Me
    </div>
  );
}

export default NoteLogo;
