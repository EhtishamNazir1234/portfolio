import { useEffect, useState } from "react";
import { skills } from "../data/portfolioData";

const Skills = () => {
  const [openId, setOpenId] = useState(
    skills.find((s) => s.open)?.id ?? skills[0]?.id
  );
  const [animatedValues, setAnimatedValues] = useState({});

  const toggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  useEffect(() => {
    if (!openId) return undefined;

    const activeGroup = skills.find((group) => group.id === openId);
    if (!activeGroup) return undefined;

    const duration = 900;
    let rafId;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);

      const nextValues = activeGroup.items.reduce((acc, item) => {
        acc[item.name] = Math.round(item.percent * easeOut);
        return acc;
      }, {});

      setAnimatedValues((prev) => ({
        ...prev,
        [openId]: nextValues,
      }));

      if (progress < 1) rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [openId]);

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        {skills.map((group) => {
          const isOpen = openId === group.id;
          return (
            <div
              key={group.id}
              className={`skills__content skills__${isOpen ? "open" : "close"}`}
            >
              <div className="skills__header" onClick={() => toggle(group.id)}>
                <i className={`${group.icon} skills__icon`}></i>
                <div>
                  <h3 className="skills__title">{group.title}</h3>
                  <span className="skills__subtitle">{group.subtitle}</span>
                </div>
                <i className="uil uil-angle-down skills__arrow"></i>
              </div>

              <div className="skills__list grid">
                {group.items.map((item) => {
                  const animatedPercent = isOpen
                    ? animatedValues[group.id]?.[item.name] ?? 0
                    : 0;

                  return (
                    <div key={item.name} className="skills__data">
                      <div className="skills__titles">
                        <h3 className="skills__name">{item.name}</h3>
                        <span className="skills__number">{animatedPercent}%</span>
                      </div>
                      <div className="skills__bar">
                        <span
                          className={`skills__percentage ${item.class}`}
                          style={{ width: `${animatedPercent}%` }}
                        ></span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
