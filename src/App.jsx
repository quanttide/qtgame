import './App.css'
import Tycoon from './Tycoon'

const games = [
  {
    name: '模拟经营',
    code: 'qtgame-tycoon',
    desc: '量潮模拟经营游戏',
    repo: '/tycoon',
  },
  {
    name: '战旗',
    code: 'qtgame-war',
    desc: '量潮战旗游戏——想定、规则与裁决的棋盘推演',
    repo: 'https://github.com/quanttide/qtgame-war',
  },
]

function Home() {
  return (
    <main className="page">
      <header>
        <h1>量潮游戏</h1>
        <p>游戏业务入口：产品在下面两家，领域工程与内容在 quanttide-game。</p>
      </header>
      <section className="games">
        {games.map((g) => (
          <article key={g.code} className="card">
            <h2>{g.name}</h2>
            <p>{g.desc}</p>
            <a href={g.repo} target="_blank" rel="noreferrer">{g.code}</a>
          </article>
        ))}
      </section>
      <footer>
        <a href="https://github.com/quanttide/quanttide-game">领域仓库 quanttide-game</a>
      </footer>
    </main>
  )
}

export default App

function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  if (path === '/tycoon') return <Tycoon />
  return <Home />
}
