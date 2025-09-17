import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Layout from './components/Layout/Layout'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
      <section className="app">
        <div className="app__logos">
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        <div className="app__content">
          <h1 className="app__title">Vite + React</h1>
          <p className="app__subtitle">
            Начните с мобильной версии — дальше будет проще расширять интерфейс.
          </p>
        </div>

        <div className="app__card">
          <button onClick={() => setCount((value) => value + 1)}>
            count is {count}
          </button>
          <p>
            Редактируйте <code>src/App.tsx</code> и сохраняйте, чтобы увидеть изменения
            мгновенно.
          </p>
        </div>

        <p className="app__hint">
          Кликните по логотипам Vite и React, чтобы узнать больше.
        </p>
      </section>
    </Layout>
  )
}

export default App
