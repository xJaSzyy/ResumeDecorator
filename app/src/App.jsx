import { useState } from "react";

import StyleSelectionPanel from "./components/StyleSelectionPanel/StyleSelectionPanel.jsx";
import InputForm from "./components/InputForm/InputForm.jsx";
import ControlPanel from "./components/ControlPanel/ControlPanel.jsx";
import ResumePreview from "./components/ResumePreview/ResumePreview.jsx";

import "./App.css";

function App() {
  const [selectedStyle, setSelectedStyle] = useState("modern");

  const [resumeData, setResumeData] = useState({
    surname: "",
    name: "",
    patronymic: "",

    position: "",
    about: "",

    skills: "",
    experience: [],
    education: "",
  });

  return (
    <div className="app">
      <h1>Оформление резюме</h1>

      <InputForm data={resumeData} setData={setResumeData} />

      <StyleSelectionPanel
        selectedStyle={selectedStyle}
        setSelectedStyle={setSelectedStyle}
      />

      <ResumePreview
        data={resumeData}

        style={selectedStyle}
      />

      <ControlPanel
        onExport={() => {
          console.log("Экспорт PNG");
        }}

        onCopy={() => {
          console.log("Копирование картинки");
        }}
      />
    </div>
  );
}

export default App;
