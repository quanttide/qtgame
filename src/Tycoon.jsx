import './tycoon.css'

import qrOpen from './assets/tycoon/qr-open.png'
import heroPhone from './assets/tycoon/hero-phone.jpg'
import step1News from './assets/tycoon/step1-news.jpg'
import step2Scout from './assets/tycoon/step2-scout.jpg'
import step3Price from './assets/tycoon/step3-price.jpg'
import step4Reveal from './assets/tycoon/step4-reveal.jpg'
import revealBig from './assets/tycoon/reveal-big.jpg'
import qrPlay from './assets/tycoon/qr-play.png'

const mascotFiles = import.meta.glob('./assets/mascots/*.svg', { eager: true, import: 'default' })
const mascots = {}
for (const [path, url] of Object.entries(mascotFiles)) {
  mascots[path.replace('./assets/mascots/', '').replace('.svg', '')] = url
}

// 玩法页截图点击放大（照原型脚本逻辑）
const zoom = (event) => {
  const im = event.currentTarget
  const w = window.open('')
  if (!w) return
  w.document.write(
    '<title>' + (im.alt || '玩法截图') + '</title>' +
    '<style>body{margin:0;background:#1b1030;display:grid;place-items:center;min-height:100vh}img{max-width:100%;max-height:96vh}</style>' +
    '<img src="' + im.src + '">'
  )
}

function Tycoon() {
  return (
    <div className="tycoon">
<div className="topbar">
  <div className="brand">滁州夜市 · <b>串串摊速玩版</b></div>
  <nav>
    <a href="#p1">封面</a><a href="#p2">怎么玩</a><a href="#p3">爽点</a><a href="#p4">奖励</a><a href="#p5">开玩</a>
  </nav>
  <div className="tag">3 分钟一局 · 扫码就玩</div>
</div>
<section className="page" id="p1">
  <div className="hero"><div className="wrap hero-grid">
    <div>
      <h1><span className="lg">滁 州 夜 市</span>串串摊 · <em>速玩版</em></h1>
      <p className="lead">3 分钟一局，点开张就能玩。<br />
        看几条<b>街头消息</b>、写个<b>价牌</b>、拖滑块<b>备几签</b>，<br />
        夜里客人一来——押得准就<b>开胡</b>，连准还有<b>满堂彩</b>。</p>
      <div className="kpis">
        <div className="kpi"><b>3′</b><span>一局时长</span></div>
        <div className="kpi"><b>¥50</b><span>开局消息金</span></div>
        <div className="kpi"><b>18</b><span>只吉祥物</span></div>
        <div className="kpi"><b>∞</b><span>周目无尽</span></div>
      </div>
      <div className="qrbox">
        <img src={qrOpen} alt="扫码进入滁州夜市速玩版"/>
        <div className="qt"><b>扫码立刻开摊</b>
          <p>手机扫码，或浏览器打开<br /><code>tycoon.game.quanttide.com</code></p>
        </div>
      </div>
    </div>
    <div className="phone-hero"><img src={heroPhone} alt="滁州夜市速玩版 · 游戏首页"/></div>
  </div></div>
</section>
<section className="page" id="p2"><div className="wrap section">
  <h2><span className="no">01</span>怎么玩 · 四步一局</h2>
  <div className="sub-t">下面每一张，都是游戏里的真实画面</div>
  <div className="flow">
    <div className="step">
      <div className="ph"><span className="badge">第 1 步 · 看情报</span><img src={step1News} onClick={zoom} alt="首页"/></div>
      <div className="body"><h3>开张前，先听听街上的说法</h3>
        <p>天气、街坊、军师、老摊主，四个人四个说法。有人报得多、有人报得少，<span className="hl">真真假假自己判断</span>。</p></div>
    </div>
    <div className="step">
      <div className="ph"><span className="badge">第 2 步 · 打听</span><img src={step2Scout} onClick={zoom} alt="打听线索"/></div>
      <div className="body"><h3>花 ¥50，把「猜」变成「算」</h3>
        <p>数人头、问口味、验街坊消息。花小钱买个准信，<span className="hl">最多打听 5 次</span>，值不值你来定。</p></div>
    </div>
    <div className="step">
      <div className="ph"><span className="badge">第 3 步 · 定价备签</span><img src={step3Price} onClick={zoom} alt="价牌与备签"/></div>
      <div className="body"><h3>写价牌、拖滑块、按开张</h3>
        <p>¥2~¥6 五档价牌，敢涨价卖得快也可能剩货。备 40~200 签，<span className="hl">押得越准赚得越多</span>。</p></div>
    </div>
    <div className="step">
      <div className="ph"><span className="badge">第 4 步 · 开张揭晓</span><img src={step4Reveal} onClick={zoom} alt="开张揭晓"/></div>
      <div className="body"><h3>锣鼓一响，数字当场炸开</h3>
        <p>「今晚开胡!!」+ 净利 + 连准 + 评星 + 夜市币。<span className="hl">零加载，立刻见分晓</span>。</p></div>
    </div>
  </div>
</div></section>
<section className="page" id="p3"><div className="wrap section">
  <h2><span className="no">02</span>爽点 · 数字当场炸</h2>
  <div className="sub-t">押准、连准、满堂彩——每一晚都有正反馈</div>
  <div className="hits">
    <div className="bigphone"><img src={revealBig} alt="开张揭晓大图"/></div>
    <div className="hitlist">
      <div className="hit"><div className="n">+¥</div><div><h4>押准就开胡</h4>
        <p>备签数贴近真实客流就「开胡」：净利当场落袋，最高净利还会记进你的战绩。</p></div></div>
      <div className="hit"><div className="n">×3</div><div><h4>连准拿满堂彩</h4>
        <p>连续押准触发连击与满堂彩，再叠称号、夜市币——越玩越上头。</p></div></div>
      <div className="hit"><div className="n">★</div><div><h4>评星 + 小目标</h4>
        <p>每晚一个够得着的小目标，达成就给星、给币，不用苦等 7 天大结算。</p></div></div>
      <div className="hit"><div className="n">∞</div><div><h4>周目无尽</h4>
        <p>三段全通进下一周目：目标更高、奖励更多，收下的吉祥物永久留摊。</p></div></div>
    </div>
  </div>
</div></section>
<section className="page" id="p4"><div className="wrap section">
  <h2><span className="no">03</span>奖励 · 18 只吉祥物陪你摆摊</h2>
  <div className="sub-t">游戏内「我的摊位」图鉴 · 按周目解锁，上下滑动看全部</div>
  <div className="cycle">
    <div className="copy">
      <h3>每通一段，收一只</h3>
      <p>吉祥物按<b>六个周目</b>分成六组，每组三只、对应三种元素。过一段收一只，三段全通进下一周目，已收下的永久留摊。</p>
      <table className="ctab"><tbody>
        <tr><th>周目</th><th>元素主题</th></tr>
        <tr><td>第 1 周目</td><td>灶火 · 起摊</td></tr>
        <tr><td>第 2 周目</td><td>五行 · 木水土</td></tr>
        <tr><td>第 3 周目</td><td>天气 · 风雷雪</td></tr>
        <tr><td>第 4 周目</td><td>夜市 · 串辣汤</td></tr>
        <tr><td>第 5 周目</td><td>街巷 · 猫犬鲤</td></tr>
        <tr><td>第 6 周目</td><td>夜色 · 月星玉</td></tr>
      </tbody></table>
      <p style={{marginTop: '12px', fontSize: '12px'}}>※ 每只都有专属 Q 版造型与一句走心话；「我的摊位」是奖励存放处，不是第四种玩法。</p>
      <div style={{textAlign: 'center'}}><span className="swipe-hint"><span className="arw">↕</span> 上滑查看全部 6 周目</span></div>
    </div>
    <div className="codex-phone">
      <div className="codex-screen">
        <div className="codex-top"><span>20:29</span><span className="sig">滁州夜市 · <b>我的摊位</b></span><span>45% ▰</span></div>
        <div className="codex-hd"><span className="dot"></span><b>吉祥物图鉴</b><span className="cnt">已收录 18 / 18</span></div>
        <div className="codex-scroll"><div className="codex-cycle"><div className="codex-ch"><span className="codex-cn">第 1 周目</span><span className="codex-ct">灶火 · 起摊</span></div><div className="codex-cards"><div className="codex-card"><div className="codex-av"><img className="mascot" src={mascots['小火苗阿灶']} alt='小火苗阿灶' /></div><div className="codex-nm">阿灶</div><div className="codex-el">小火苗</div></div><div className="codex-card"><div className="codex-av"><img className="mascot" src={mascots['灯笼崽阿灯']} alt='灯笼崽阿灯' /></div><div className="codex-nm">阿灯</div><div className="codex-el">灯笼崽</div></div><div className="codex-card"><div className="codex-av"><img className="mascot" src={mascots['金锅阿满']} alt='金锅阿满' /></div><div className="codex-nm">阿满</div><div className="codex-el">金锅</div></div></div></div>
<div className="codex-cycle"><div className="codex-ch"><span className="codex-cn">第 2 周目</span><span className="codex-ct">五行 · 木水土</span></div><div className="codex-cards"><div className="codex-card"><div className="codex-av"><img className="mascot" src={mascots['阿芽']} alt='阿芽' /></div><div className="codex-nm">阿芽</div><div className="codex-el">木 · 小苗</div></div><div className="codex-card"><div className="codex-av"><img className="mascot" src={mascots['阿汐']} alt='阿汐' /></div><div className="codex-nm">阿汐</div><div className="codex-el">水 · 水滴</div></div><div className="codex-card"><div className="codex-av"><img className="mascot" src={mascots['阿墩']} alt='阿墩' /></div><div className="codex-nm">阿墩</div><div className="codex-el">土 · 陶罐</div></div></div></div>
<div className="codex-cycle"><div className="codex-ch"><span className="codex-cn">第 3 周目</span><span className="codex-ct">天气 · 风雷雪</span></div><div className="codex-cards"><div className="codex-card"><div className="codex-av"><img className="mascot" src={mascots['阿风']} alt='阿风' /></div><div className="codex-nm">阿风</div><div className="codex-el">风 · 旋风</div></div><div className="codex-card"><div className="codex-av"><img className="mascot" src={mascots['阿雷']} alt='阿雷' /></div><div className="codex-nm">阿雷</div><div className="codex-el">雷 · 云闪</div></div><div className="codex-card"><div className="codex-av"><img className="mascot" src={mascots['阿雪']} alt='阿雪' /></div><div className="codex-nm">阿雪</div><div className="codex-el">雪 · 雪团</div></div></div></div>
<div className="codex-cycle"><div className="codex-ch"><span className="codex-cn">第 4 周目</span><span className="codex-ct">夜市 · 串辣汤</span></div><div className="codex-cards"><div className="codex-card"><div className="codex-av"><img className="mascot" src={mascots['阿串']} alt='阿串' /></div><div className="codex-nm">阿串</div><div className="codex-el">签 · 串串</div></div><div className="codex-card"><div className="codex-av"><img className="mascot" src={mascots['阿椒']} alt='阿椒' /></div><div className="codex-nm">阿椒</div><div className="codex-el">辣 · 红椒</div></div><div className="codex-card"><div className="codex-av"><img className="mascot" src={mascots['阿汤']} alt='阿汤' /></div><div className="codex-nm">阿汤</div><div className="codex-el">汤 · 暖碗</div></div></div></div>
<div className="codex-cycle"><div className="codex-ch"><span className="codex-cn">第 5 周目</span><span className="codex-ct">街巷 · 猫犬鲤</span></div><div className="codex-cards"><div className="codex-card"><div className="codex-av"><img className="mascot" src={mascots['阿喵']} alt='阿喵' /></div><div className="codex-nm">阿喵</div><div className="codex-el">橘猫</div></div><div className="codex-card"><div className="codex-av"><img className="mascot" src={mascots['阿汪']} alt='阿汪' /></div><div className="codex-nm">阿汪</div><div className="codex-el">垂耳狗</div></div><div className="codex-card"><div className="codex-av"><img className="mascot" src={mascots['阿鲤']} alt='阿鲤' /></div><div className="codex-nm">阿鲤</div><div className="codex-el">锦鲤</div></div></div></div>
<div className="codex-cycle"><div className="codex-ch"><span className="codex-cn">第 6 周目</span><span className="codex-ct">夜色 · 月星玉</span></div><div className="codex-cards"><div className="codex-card"><div className="codex-av"><img className="mascot" src={mascots['阿月']} alt='阿月' /></div><div className="codex-nm">阿月</div><div className="codex-el">月 · 圆月</div></div><div className="codex-card"><div className="codex-av"><img className="mascot" src={mascots['阿星']} alt='阿星' /></div><div className="codex-nm">阿星</div><div className="codex-el">星 · 星子</div></div><div className="codex-card"><div className="codex-av"><img className="mascot" src={mascots['阿玉']} alt='阿玉' /></div><div className="codex-nm">阿玉</div><div className="codex-el">玉 · 元宝</div></div></div></div></div>
        <div className="codex-foot">— 集齐 18 只 · 夜市摊主之名 —</div>
      </div>
    </div>
  </div>
</div></section>
<section className="page" id="p5">
  <div className="cta"><div className="wrap">
    <h2>今晚就开摊！</h2>
    <p>3 分钟一局，点开就玩。<br />看你能不能比军师更准。</p>
    <div className="qrwrap">
      <img src={qrPlay} alt="扫码进入游戏"/>
      <div className="t"><b>扫码开玩</b>
        <p>或浏览器打开<br /><code>tycoon.game.quanttide.com</code></p>
      </div>
    </div>
    <div className="foot">滁州夜市 · 串串摊速玩版 ｜ v2.8 · 消息版</div>
  </div></div>
</section>
    </div>
  )
}

export default Tycoon
