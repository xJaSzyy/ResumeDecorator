import { useRef, useState } from "react";
import * as htmlToImage from "html-to-image";

import StyleSelectionPanel from "./components/StyleSelectionPanel/StyleSelectionPanel.jsx";
import InputForm from "./components/InputForm/InputForm.jsx";
import ControlPanel from "./components/ControlPanel/ControlPanel.jsx";
import ResumePreview from "./components/ResumePreview/ResumePreview.jsx";

import "./App.css";

function App() {
  const resumeRef = useRef(null);

  const [selectedStyle, setSelectedStyle] = useState("modern");

  const [resumeData, setResumeData] = useState({
    surname: "",
    name: "",

    position: "",
    about: "",

    skills: "",
    experience: [],
    education: [],
  });

  const exportPNG = async () => {
    if (!resumeRef.current) return;

    const node = resumeRef.current;
    const dataUrl = await htmlToImage.toPng(node, {
      cacheBust: true,
      pixelRatio: 2,
      style: {
        margin: "0",
      },
      backgroundColor: "#ffffff",
    });

    const link = document.createElement("a");
    link.download = "resume.png";
    link.href = dataUrl;
    link.click();
  };

  const copyImage = async () => {
    if (!resumeRef.current) return;

    const node = resumeRef.current;
    const dataUrl = await htmlToImage.toPng(node, {
      cacheBust: true,
      pixelRatio: 2,
      style: {
        margin: "0",
      },
      backgroundColor: "#ffffff",
    });

    const response = await fetch(dataUrl);
    const blob = await response.blob();

    await navigator.clipboard.write([
      new ClipboardItem({
        "image/png": blob,
      }),
    ]);
  };

  return (
    <div className="app">
      <h1>Оформление резюме</h1>

      <InputForm data={resumeData} setData={setResumeData} />

      <StyleSelectionPanel
        selectedStyle={selectedStyle}
        setSelectedStyle={setSelectedStyle}
      />

      <ResumePreview ref={resumeRef} data={resumeData} style={selectedStyle} />

      <ControlPanel onExport={exportPNG} onCopy={copyImage} />
    </div>
  );
}

export default App;
