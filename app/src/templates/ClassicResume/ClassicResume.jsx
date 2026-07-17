import { forwardRef } from "react";
import "./ClassicResume.css";

const ClassicResume = forwardRef(({ data }, ref) => {
    return (
        <div ref={ref} className="resume classic">
            <div className="resume-header">
                <h1>
                    {data.surname || "Фамилия отсутствует"} {data.name} {data.patronymic}
                </h1>

                <div className="position">
                    {data.position || "Желаемая должность отсутствует"}
                </div>
            </div>

            <section>
                <h2>Контакты</h2>

                <p>{data.email || "Почта отсутствует"}</p>
            </section>

            <section>
                <h2>О себе</h2>

                <p>{data.about || "Описание отсутствует"}</p>
            </section>

            <section>
                <h2>Навыки</h2>

                <p>{data.skills || "Навыки не указаны"}</p>
            </section>

            <section>
                <h2>Опыт работы</h2>

                <div className="jobs">
                    {data.experience.map((job, index) => (
                        <div className="job" key={index}>
                            <h3>{job.company}</h3>

                            <strong>{job.position}</strong>

                            <p>{job.duration}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2>Образование</h2>

                <div className="educations">
                    {data.education.map((edu, index) => (
                        <div className="education" key={index}>
                            <h3>{edu.level}</h3>

                            <strong>{edu.direction}</strong>

                            <p>{edu.year}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
});

export default ClassicResume;