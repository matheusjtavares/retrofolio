import { useState } from "react";
import { Button, Card } from "pixel-retroui";
import { type Theme, themes } from "./objects/Themes";
import { books } from "./objects/Books";
import { groups } from "./objects/Groups";


function App() {
  const [theme, setTheme] = useState<Theme>("default");
  const [active, setActive] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const visible = books.filter((b) =>
    `${b[0]} ${b[1]}`.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className={`app-shell theme-${theme}`}>
      <header className="topbar">
        <div className="identity">
          <div className="avatar">{themes[theme].logo}</div>
          <div>
            <div className="name">MATHEUS TAVARES</div>
            <div className="role">SOFTWARE ENGINEER</div>
          </div>
        </div>
        <nav>
          <a href="#library">LIBRARY</a>
          <a href="#about">ABOUT</a>
          <a href="#projects">PROJECTS</a>
          <a href="#contact">CONTACT</a>
        </nav>
        <div className="theme-switcher">
          <span>THEME</span>
          {(Object.keys(themes) as Theme[]).map((t) => (
            <button
              key={t}
              className={theme === t ? "selected" : ""}
              onClick={() => setTheme(t)}
              title={themes[t].label}
            >
              {t === "default" ? "RETRO" : t === "snes" ? "SNES" : t === "ps2" ? "PS2": t === "n64" ? "N64": t === "gcb" ? "GCB": "PS1"}
            </button>
          ))}
        </div>
      </header>

      <main>
        <section className="hero">
          <div>
            <p className="eyebrow">
              {themes[theme].label} / {themes[theme].subtitle}
            </p>
            <p>
              MATHEUS TAVARES
            </p>
            <p className="hero-copy">
              Backend-heavy fullstack engineer. Pick a book to explore the
              technologies, engineering practices and systems I work with.
            </p>
            <div className="hero-actions">
              <Button
                bg={themes[theme].colors[0]}
                textColor="#151922"
                shadow="#151922"
                onClick={() =>
                  document
                    .querySelector("#library")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                OPEN LIBRARY
              </Button>
              <Button
                bg={themes[theme].colors[1]}
                textColor="#fff"
                shadow="#151922"
                onClick={() =>
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                VIEW PROJECTS
              </Button>
            </div>
          </div>
          <Card className="stats-card">
            <div className="stat">
              <span>EXP</span>
              <b>6+ YEARS</b>
            </div>
            <div className="stat">
              <span>MAIN CLASS</span>
              <b>PYTHON / DJANGO</b>
            </div>
            <div className="stat">
              <span>SECONDARY</span>
              <b>REACT / TYPESCRIPT</b>
            </div>
            <div className="stat">
              <span>STYLE</span>
              <b>BACKEND HEAVY</b>
            </div>
          </Card>
        </section>

        <section id="library" className="library">
          <div className="section-head">
            <div>
              <p className="eyebrow">SKILL LIBRARY</p>
            </div>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="SEARCH BOOKS..."
            />
          </div>
          {groups.map((group) => {
            const shelf = visible.filter((b) => b[1] === group);
            if (!shelf.length) return null;
            return (
              <section className="shelf" key={group}>
                <div className="shelf-label">{group}</div>
                <div className="books">
                  {shelf.map((b) => (
                    <button
                      className="book"
                      key={b[0]}
                      style={{ "--book": b[3] } as React.CSSProperties}
                      onClick={() => setActive(b[0])}
                    >
                      <div className="book-icon">{b[2]}</div>
                      <strong>{b[0]}</strong>
                      <span>OPEN</span>
                    </button>
                  ))}
                </div>
              </section>
            );
          })}
        </section>

        <section id="about" className="content-section">
          <p className="eyebrow">01 / ABOUT</p>
          <div className="two-col">
            <h2>
              THE PERSON
              <br />
              <span>BEHIND THE BOOKS</span>
            </h2>
            <Card>
              <p>
                I'm Matheus, a backend-heavy fullstack engineer focused on
                production systems with Python and Django, while working across
                React, data pipelines, cloud infrastructure and analytics.
              </p>
              <p>
                I like the problems that appear after the happy path: query
                performance, concurrency, authorization, multi-tenancy,
                background processing and reliable deployments.
              </p>
            </Card>
          </div>
        </section>

        <section id="projects" className="content-section">
          <p className="eyebrow">02 / PROJECTS</p>
          <h2>
            SELECTED <span>WORK</span>
          </h2>
          <div className="project-grid">
            {[
              [
                "W",
                "WIND ANALYTICS",
                "Analytics platform for wind-turbine operations, performance and KPIs.",
              ],
              [
                "AI",
                "AI INFERENCE",
                "Research direction around heterogeneous computing for accelerating model inference.",
              ],
              [
                "FS",
                "FULLSTACK SYSTEMS",
                "Production applications connecting APIs, interfaces, data and infrastructure.",
              ],
            ].map((p) => (
              <Card key={p[1]}>
                <div className="project-icon">{p[0]}</div>
                <h3>{p[1]}</h3>
                <p>{p[2]}</p>
                <Button
                  bg={themes[theme].colors[1]}
                  textColor="#fff"
                  shadow="#151922"
                >
                  READ CASE
                </Button>
              </Card>
            ))}
          </div>
        </section>

        <section id="contact" className="contact content-section">
          <p className="eyebrow">03 / CONTACT</p>
          <h2>
            READY TO <span>BUILD?</span>
          </h2>
          <p>Have a role, project or interesting engineering problem?</p>
          <div className="hero-actions">
            <Button
              bg={themes[theme].colors[0]}
              textColor="#151922"
              shadow="#151922"
            >
              EMAIL ME
            </Button>
            <Button
              bg={themes[theme].colors[1]}
              textColor="#fff"
              shadow="#151922"
            >
              GITHUB
            </Button>
          </div>
        </section>
      </main>

      <footer>
        <span>MATHEUS.JT / SOFTWARE ENGINEER</span>
        <span>THEME: {themes[theme].label}</span>
      </footer>

      {active && (
        <div className="modal-backdrop" onClick={() => setActive(null)}>
          <div className="book-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-top">
              <div>
                <p className="eyebrow">KNOWLEDGE VOLUME</p>
                <h2>{active}</h2>
              </div>
              <Button
                bg="#b84c4c"
                textColor="#fff"
                shadow="#151922"
                onClick={() => setActive(null)}
              >
                CLOSE
              </Button>
            </div>
            <div className="modal-page">
              <p className="page-number">PAGE 01 / 02</p>
              <h3>PRODUCTION EXPERIENCE</h3>
              <p>
                This book can contain the detailed story behind {active}:
                architecture decisions, production problems solved, trade-offs,
                examples and the technologies used.
              </p>
              <div className="tags">
                <span>{active}</span>
                <span>PRODUCTION</span>
                <span>ENGINEERING</span>
              </div>
            </div>
            <div className="modal-nav">
              <Button
                bg={themes[theme].colors[1]}
                textColor="#fff"
                shadow="#151922"
              >
                ← PREV
              </Button>
              <span>1 / 2</span>
              <Button
                bg={themes[theme].colors[1]}
                textColor="#fff"
                shadow="#151922"
              >
                NEXT →
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default App;
