import { forwardRef } from "react";
import "./StrictResume.css";

const StrictResume = forwardRef(({ data }, ref) => {
    return (
        <div ref={ref} className="resume classic">
            <section>
                <h2>
                    <img
                        src="/ResumeDecorator/icons/person.svg"
                        className="section-icon"
                    />
                    {" "}
                    Личная информация
                </h2>

                <p>{data.surname} {data.name}</p>

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
                    <img
                        src="/ResumeDecorator/icons/key.svg"
                        className="section-icon"
                    />
                    {" "}
                    Навыки
                </h2>

                <p>{data.skills}</p>
            </section>

            <>
                {data.experience.map((job, index) => (
                    <section key={index}>
                        <h2>
                            <img
                                src="/ResumeDecorator/icons/work.svg"
                                className="section-icon"
                            />
                            {" "}
                            Опыт работы
                            {data.experience.length > 1 ? ` ${index + 1}` : ""}
                        </h2>

                        <p>{job.company}</p>
                        <p>{job.position}</p>
                        <p>{job.duration}</p>
                    </section>
                ))}
            </>

            <>
                {data.education.map((edu, index) => (
                    <section key={index}>
                        <h2>
                            <img
                                src="/ResumeDecorator/icons/education.svg"
                                className="section-icon"
                            />
                            {" "}
                            Образование
                            {data.education.length > 1 ? ` ${index + 1}` : ""}
                        </h2>

                        <p>{edu.level}</p>
                        <p>{edu.direction}</p>
                        <p>{edu.year}</p>
                    </section>
                ))}
            </>

            <section>
                <h2>
                    <img
                        src="/ResumeDecorator/icons/info.svg"
                        className="section-icon"
                    />
                    {" "}
                    Дополнительная информация
                </h2>

                <p>{data.about}</p>
            </section>
        </div>
    );
});

export default StrictResume;