import { forwardRef } from "react";
import "./StrictResume.css";

const StrictResume = forwardRef(({ data }, ref) => {
  return (
    <div ref={ref} className="resume classic">
      <section>
        <h1>
          {data.surname} {data.name}
        </h1>
      </section>

      <section>
        <h2>
          <img
            src="/ResumeDecorator/icons/person.svg"
            className="section-icon"
          />
          Личная информация
        </h2>

        <div className="info-bar">
          <div className="info-icon">
            <img src="/ResumeDecorator/icons/mail.svg" />
          </div>

          <span>{data.email}</span>
        </div>

        <div className="info-bar">
          <div className="info-icon">
            <img src="/ResumeDecorator/icons/location.svg" />
          </div>

          <span>{data.city}</span>
        </div>
      </section>

      <section>
        <h2>
          <img src="/ResumeDecorator/icons/key.svg" className="section-icon" />
          Навыки
        </h2>

        <p>{data.skills}</p>
      </section>

      <section>
        <h2>
          <img src="/ResumeDecorator/icons/work.svg" className="section-icon" />
          Опыт работы
        </h2>

        {data.experience.map((job, index) => (
          <p key={index}>
            {job.company}, {job.position}, {job.duration}
          </p>
        ))}
      </section>

      <section>
        <h2>
          <img
            src="/ResumeDecorator/icons/education.svg"
            className="section-icon"
          />
          Образование
        </h2>

        {data.education.map((job, index) => (
          <p key={index}>
            {job.level}, {job.direction}, {job.year}
          </p>
        ))}
      </section>

      <section>
        <h2>
          <img src="/ResumeDecorator/icons/info.svg" className="section-icon" />
          Дополнительная информация
        </h2>

        <p>{data.about}</p>
      </section>
    </div>
  );
});

export default StrictResume;
