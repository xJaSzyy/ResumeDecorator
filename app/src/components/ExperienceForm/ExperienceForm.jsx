import { useState } from "react";
import "./ExperienceForm.css";

function ExperienceForm({ experience, setExperience }) {
  const [item, setItem] = useState({
    company: "",
    position: "",
    duration: "",
  });

  function addExperience() {
    if (!item.company || !item.duration) {
      return;
    }

    setExperience([...experience, item]);

    setItem({
      company: "",
      position: "",
      duration: "",
    });
  }

  function removeExperience(index) {
    setExperience(experience.filter((_, i) => i !== index));
  }

  return (
    <div className="experience-box">
      <h3>Опыт работы</h3>

      <input
        placeholder="Компания"

        value={item.company}

        onChange={(e) =>
          setItem({
            ...item,
            company: e.target.value,
          })
        }
      />

      <input
        placeholder="Должность"

        value={item.position}

        onChange={(e) =>
          setItem({
            ...item,
            position: e.target.value,
          })
        }
      />

      <input
        placeholder="Срок работы (например: 2 года)"

        value={item.duration}

        onChange={(e) =>
          setItem({
            ...item,
            duration: e.target.value,
          })
        }
      />

      <button onClick={addExperience}>+ Добавить место работы</button>

      <div className="experience-list">
        {experience.map((job, index) => (
          <div className="experience-item" key={index}>
            <div>
              <b>{job.company}</b>

              <p>{job.position}</p>

              <span>{job.duration}</span>
            </div>

            <button onClick={() => removeExperience(index)}>✕</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperienceForm;
