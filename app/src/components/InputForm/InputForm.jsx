import "./InputForm.css";
import ExperienceForm from "../ExperienceForm/ExperienceForm.jsx";
import EducationForm from "../EducationForm/EducationForm.jsx";

function InputForm({ data, setData }) {
  function handleChange(e) {
    const { name, value } = e.target;

    setData({
      ...data,

      [name]: value,
    });
  }

  return (
    <div className="form-container">
      <h2>Основная информация</h2>

      <div className="form-grid">
        <input
          name="surname"
          value={data.surname}
          onChange={handleChange}
          placeholder="Фамилия"
        />

        <input
          name="name"
          value={data.name}
          onChange={handleChange}
          placeholder="Имя"
        />

        <input
          className="full"
          name="position"
          value={data.position}
          onChange={handleChange}
          placeholder="Желаемая должность"
        />

        <textarea
          className="full"
          name="about"
          value={data.about}
          onChange={handleChange}
          placeholder="О себе"
        />

        <textarea
          className="full"
          name="skills"
          value={data.skills}
          onChange={handleChange}
          placeholder="Навыки"
        />

        <ExperienceForm
          experience={data.experience}

          setExperience={(value) =>
            setData({
              ...data,

              experience: value,
            })
          }
        />

        <EducationForm
          education={data.education}

          setEducation={(value) =>
            setData({
              ...data,

              education: value,
            })
          }
        />
      </div>
    </div>
  );
}

export default InputForm;
