import "./ControlPanel.css";

function ControlPanel({ onExport, onCopy }) {
  return (
    <div className="control-panel">
      <button onClick={onExport}>📥 Скачать PNG</button>
      <button onClick={onCopy}>📋 Копировать картинку</button>
    </div>
  );
}

export default ControlPanel;
