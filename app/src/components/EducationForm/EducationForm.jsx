import { useState } from "react";
import "./EducationForm.css";

function EducationForm({ education, setEducation }) {
  const [item, setItem] = useState({
    level: "",
    year: "",
    direction: "",
  });

  const educationLevels = [
    "Среднее",
    "Среднее профессиональное",
    "Бакалавриат",
    "Специалитет",
    "Магистратура",
    "Аспирантура",
  ];

  function addEducation() {
    if (!item.level || !item.year || !item.direction) {
      return;
    }

    setEducation([...education, item]);

    setItem({
      level: "",
      year: "",
      direction: "",
    });
  }

  function removeEducation(index) {
    setEducation(education.filter((_, i) => i !== index));
  }

  return (
    <div className="education-box">
      <h3>Образование</h3>

      <select
        value={item.level}
        onChange={(e) =>
          setItem({
            ...item,
            level: e.target.value,
          })
        }
      >
        <option value="">Выберите уровень образования</option>

        {educationLevels.map((level) => (
          <option key={level} value={level}>
            {level}
          </option>
        ))}
      </select>

      <input
        placeholder="Направление"

        value={item.direction}

        onChange={(e) =>
          setItem({
            ...item,
            direction: e.target.value,
          })
        }
      />

      <input
        placeholder="Год окончания"

        value={item.year}

        onChange={(e) =>
          setItem({
            ...item,
            year: e.target.value,
          })
        }
      />

      <button onClick={addEducation}>+ Добавить образование</button>

      <div className="education-list">
        {education.map((edu, index) => (
          <div className="education-item" key={index}>
            <div>
              <b>{edu.level}</b>

              <p>{edu.direction}</p>

              <span>{edu.year}</span>
            </div>

            <button onClick={() => removeEducation(index)}>✕</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EducationForm;
