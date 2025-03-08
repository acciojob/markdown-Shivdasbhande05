import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("");
  useEffect(() => {}, [markdown]);

  return (
    <div className="editor-container">
      <textarea
        className="textArea"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Type Markdown Here...."
      />
      <div className="preview">
        <Markdown>{markdown}</Markdown>
      </div>
    </div>
  );
};

export default MarkdownEditor;
