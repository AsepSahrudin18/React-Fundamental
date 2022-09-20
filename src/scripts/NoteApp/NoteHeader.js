import React from "react";
import NoteLogo from "../NoteHeader/NoteLogo";
import NoteSearchBar from "../NoteHeader/NoteSearchBar";
import NoteSignInBtn from "../NoteHeader/NoteSignInBtn";
import { AiFillHome } from "react-icons/ai";
import { FaArchive } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";

import { useNavigate } from "react-router-dom";

function NoteHeader({ query, onQuery }) {
  const navigate = useNavigate();

  return (
    <header>
      <NoteLogo />
      <div className="header-middle">
        <ul>
          <li
            onClick={() => {
              navigate("/");
            }}
          >
            <AiFillHome />
          </li>
          <li
            onClick={() => {
              navigate("/archives");
            }}
          >
            <FaArchive />
          </li>
          <li
            onClick={() => {
              navigate("/add");
            }}
          >
            <IoIosAddCircle />
          </li>
        </ul>
      </div>
      <div className="header-right">
        <NoteSearchBar query={query} onQuery={onQuery} />
        <NoteSignInBtn />
      </div>
    </header>
  );
}

export default NoteHeader;
