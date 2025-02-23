import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("");
  useEffect(() => {}, [markdown]);

  return (
    <div>
      <textarea
        className="textArea"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Type Markdown Here...."
      />
      <div className="preview">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownEditor;
