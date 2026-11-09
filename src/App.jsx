import React, { useEffect, useState } from "react";
import { lessons } from "./lessons/index.js";

const STORE_KEY = "react-basics-progress-v1";

function loadDone() {
  try {
    return JSON.parse(localStorage.getItem(STORE_KEY)) || {};
  } catch {
    return {};
  }
}

function currentId() {
  const id = window.location.hash.replace(/^#\/?/, "");
  return lessons.some((l) => l.id === id) ? id : lessons[0].id;
}

export default function App() {
  const [id, setId] = useState(currentId);
  const [done, setDone] = useState(loadDone);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onHash = () => {
      setId(currentId());
      setMenuOpen(false);
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(done));
    } catch {
      /* storage blocked: progress just won't persist */
    }
  }, [done]);

  const index = lessons.findIndex((l) => l.id === id);
  const lesson = lessons[index];
  const prev = lessons[index - 1];
  const next = lessons[index + 1];
  const Lesson = lesson.component;
  const completed = lessons.filter((l) => done[l.id]).length;

  const markDone = () => setDone((d) => (d[lesson.id] ? d : { ...d, [lesson.id]: true }));
  const toggleDone = () => setDone((d) => ({ ...d, [lesson.id]: !d[lesson.id] }));

  let lastGroup = null;

  return (
    <div className="shell">
      <aside className={`sidebar ${menuOpen ? "open" : ""}`} aria-label="Lessons">
        <div className="brand">
          <div className="brand-mark" aria-hidden="true">⚛</div>
          <div>
            <div className="brand-name">React Basics</div>
            <div className="brand-sub">Module 2 · Self-paced lessons</div>
          </div>
        </div>

        <div className="progress">
          {completed} of {lessons.length} lessons done
          <div className="progress-bar" aria-hidden="true">
            <span style={{ width: `${(completed / lessons.length) * 100}%` }} />
          </div>
        </div>

        <ul className="nav">
          {lessons.map((l, i) => {
            const groupHeader = l.group !== lastGroup ? <li className="nav-group">{l.group}</li> : null;
            lastGroup = l.group;
            return (
              <React.Fragment key={l.id}>
                {groupHeader}
                <li>
                  <a href={`#/${l.id}`} className={l.id === id ? "active" : ""} aria-current={l.id === id ? "page" : undefined}>
                    <span className="num">{String(i + 1).padStart(2, "0")}</span>
                    <span>{l.title}</span>
                    <span className="tick" aria-label={done[l.id] ? "done" : undefined}>{done[l.id] ? "✓" : ""}</span>
                  </a>
                </li>
              </React.Fragment>
            );
          })}
        </ul>
      </aside>

      <div className="main">
        <button className="menu-btn" onClick={() => setMenuOpen((o) => !o)} aria-expanded={menuOpen}>
          ☰ <span>{index + 1}. {lesson.title}</span>
        </button>

        <main className="lesson" key={lesson.id}>
          <div className="lesson-meta">
            Lesson {index + 1} of {lessons.length} · From slide {lesson.slide}
          </div>
          <Lesson markDone={markDone} />

          <div className="lesson-foot">
            {prev ? <a className="btn" href={`#/${prev.id}`}>← {prev.title}</a> : <span />}
            <button className={`btn done-btn ${done[lesson.id] ? "is-done" : ""}`} onClick={toggleDone}>
              {done[lesson.id] ? "✓ Lesson done" : "Mark lesson done"}
            </button>
            {next ? <a className="btn primary" href={`#/${next.id}`}>{next.title} →</a> : <span />}
          </div>
        </main>
      </div>
      {menuOpen && <div onClick={() => setMenuOpen(false)} style={{ position: "fixed", inset: 0, zIndex: 15, background: "rgba(27,31,36,.25)" }} />}
    </div>
  );
}
