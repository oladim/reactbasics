# Intro to JS Frameworks & React Basics — interactive lessons

A self-paced React app that teaches every slide of Module 2, "Intro to JS Frameworks & Libraries"
(Hadiza A. Umar, eHA Academy), with simple explanations, visual demos, live React editors and quick checks.

## Run it

This is a Create React App project. You need [Node.js](https://nodejs.org) 18 or newer.

```bash
npm install
npm start
```

The app opens at http://localhost:3000. (npm install prints some "deprecated" warnings; that's normal for Create React App and safe to ignore.)

To build a static version you can host anywhere:

```bash
npm run build      # output goes to the build/ folder
```

## What's inside

| # | Lesson | Slide |
|---|--------|-------|
| 1 | Welcome | 1 |
| 2 | What is a JS framework? | 2 |
| 3 | Why use a framework? | 3 |
| 4 | Framework vs library | 4 |
| 5 | Features & capabilities | 5 |
| 6 | React, Angular and Vue | 6 |
| 7 | What is React? | 7 |
| 8 | React's key features (JSX, props, hooks, Context API) | 8 |
| 9 | Installing React | 9 |
| 10 | Components | 10 |
| 11 | Props & state | 11 |
| 12 | Event handling | 12 |
| 13 | The useEffect hook | 13 |
| 14 | Without vs with React | 14 |
| 15 | Your first React app (installation demo checklist) | 15 |
| 16 | Summary and Q&A | 16–17 |

Each lesson has:
- **Demos** (boxes with a teal shadow): interactive visuals, all built in React.
- **Live React boxes**: edit React code and see the component render instantly. JSX is compiled in the browser with Babel,
  so `import`/`export` lines are optional and `useState`, `useEffect`, `useContext`, `createContext`, `useRef` etc. are available automatically.
  The component shown is the one in `export default` (or one named `App`).
- **"More precisely…" notes**: gentle corrections where the slide simplifies something.
- **Teaching tips**: suggestions for the instructor.
- **Quick check**: passing it marks the lesson done (progress is saved in the browser).

Note: slide 9 teaches creating a project with Vite. The lessons keep the slide's commands and also show the Create React App equivalent.

## Project layout

```
public/
  index.html            the page shell
src/
  index.js              entry point
  App.jsx               sidebar, routing (#/lesson-id), progress
  styles.css            all styling and design tokens
  components/
    ReactTryIt.jsx      live React editor + preview + console
    babel.js            loads Babel on demand to compile JSX
    TryIt.jsx           plain JavaScript editor (used for the "without React" demo)
    Code.jsx            highlighted code blocks
    Quiz.jsx            multiple-choice quick checks
    Bits.jsx            Note, Panel, Tabs
  lessons/
    index.js            lesson order and titles (edit here to reorder)
    *.jsx               one file per lesson
```
