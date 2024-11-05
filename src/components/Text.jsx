import React, { useState } from "react";
import { FaBold, FaItalic, FaUnderline } from "react-icons/fa";

function Text() {
  const [text, setText] = useState(" ");
  const [boldStyle, setBoldStyle] = useState(false);
  const [italicStyle, setItalicStyle] = useState(false);
  const [underlineStyle, setUnderline] = useState(false);
  const [capitalized, setCapitalized] = useState(false);

  const boldText = () => {
    setBoldStyle(!boldStyle);
  };

  const italicText = () => {
    setItalicStyle(!italicStyle);
  };

  const underline = () => {
    setUnderline(!underlineStyle);
  };

  const uppercasetext = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  const lowercasetext = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };

  const capitalizeHandle = () => {
    setCapitalized(!capitalized);
  };

  const sentenceCaseText = () => {
    const newtext = text
      .toLowerCase()
      .replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
    setText(newtext);
  };

  const copyText = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Copied");
      })
      .catch((error) => {
        console.error("Failed to copy text:", error);
      });
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const trimSentence = () => {
    const trimmedString = text.trim().replace(/\s+/g, " ");
    setText(trimmedString);
  };

  const clear = () => {
    setText("");
    setBoldStyle(false);
    setItalicStyle(false);
    setUnderline(false);
    setCapitalized(false);
  };

  const textStyle = {
    fontWeight: boldStyle ? "bold" : "normal",
    fontStyle: italicStyle ? "italic" : "normal",
    textDecoration: underlineStyle ? "underline" : "none",
    textTransform: capitalized ? "capitalize" : "none",
  };

  return (
    <>
      <section className="pt-8">
        <div className="mx-2 md:mx-40 lg:mx-60">
          <h1 className="text-4xl font-bold text-center pt-4">Text Analyzer</h1>
          <p className="font-bold text-2xl">Enter Your Text Here</p>
          <textarea
            onChange={handleTextChange}
            style={textStyle}
            value={text}
            placeholder="Enter your text"
            className="border-4 w-full h-60 mt-4 rounded-lg border-gray-600 pt-2 pl-2"
          ></textarea>

          <div className="mx-auto space-x-2 my-2 grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-10 gap-2">
            <button
              className="bg-gray-600 text-white rounded-md p-2 flex justify-center items-center"
              onClick={boldText}
            >
              <FaBold />
            </button>
            <button
              className="bg-gray-600 text-white rounded-md p-2 flex justify-center items-center"
              onClick={italicText}
            >
              <FaItalic />
            </button>
            <button
              className="bg-gray-600 text-white rounded-md p-2 flex justify-center items-center"
              onClick={underline}
            >
              <FaUnderline />
            </button>

            <button
              className="bg-gray-600 text-white rounded-md p-2 flex justify-center items-center"
              onClick={uppercasetext}
            >
              ABC
            </button>

            <button
              className="bg-gray-600 text-white rounded-md p-2 flex justify-center items-center"
              onClick={lowercasetext}
            >
              abc
            </button>

            <button
              className="bg-gray-600 text-white rounded-md p-2 flex justify-center items-center"
              onClick={capitalizeHandle}
            >
              Title Case
            </button>

            <button
              className="bg-gray-600 text-white rounded-md p-2 flex justify-center items-center"
              onClick={sentenceCaseText}
            >
              Sentence Case
            </button>

            <button
              className="bg-gray-600 text-white rounded-md p-2 flex justify-center items-center"
              onClick={trimSentence}
            >
              Trim
            </button>
            <button
              className="bg-gray-600 text-white rounded-md p-2 flex justify-center items-center"
              onClick={copyText}
            >
              Copy Text
            </button>
            <button
              className="bg-gray-600 text-white rounded-md p-2 flex justify-center items-center"
              onClick={clear}
            >
              Clear Text
            </button>
          </div>

          <div>
            <h1 className="text-xl font-bold pt-4">Preview:</h1>
            <p style={textStyle}>{text}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Text;
