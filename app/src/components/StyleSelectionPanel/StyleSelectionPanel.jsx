import "./StyleSelectionPanel.css";

function StyleSelectionPanel({ selectedStyle, setSelectedStyle }) {
  const styles = [
    {
      id: "modern",
      name: "Modern",
      description: "Современный",
    },
    {
      id: "classic",
      name: "Classic",
      description: "Классический",
    },
    {
      id: "creative",
      name: "Creative",
      description: "Яркий",
    },
    {
      id: "strict",
      name: "Strict",
      description: "Строгий",
    },
  ];

  return (
    <div className="style-panel">
      <h2>Выберите стиль</h2>

      <div className="style-list">
        {styles.map((style) => (
          <button
            key={style.id}
            className={
              selectedStyle === style.id ? "style-card active" : "style-card"
            }
            onClick={() => setSelectedStyle(style.id)}
          >
            <div className="style-preview">
              <span></span>
            </div>

            <strong>{style.name}</strong>

            <small>{style.description}</small>
          </button>
        ))}
      </div>
    </div>
  );
}

export default StyleSelectionPanel;
