import { ArrowRight, BookOpen, BriefcaseBusiness, Compass, Download, GraduationCap, Layers3, Menu, Search, Sparkles, X } from 'lucide-react'
import { useState } from 'react'

const categories = [
  { icon: BookOpen, title: 'Notes', text: 'Clear, useful notes built for faster learning.' },
  { icon: GraduationCap, title: 'Skills', text: 'Practical resources to build skills that matter.' },
  { icon: BriefcaseBusiness, title: 'Career', text: 'Resources for work, growth and your next step.' },
  { icon: Compass, title: 'Guides', text: 'Simple guides that turn confusion into action.' },
  { icon: Layers3, title: 'Digital Assets', text: 'Useful digital files, templates and resources.' },
  { icon: Sparkles, title: 'Free Resources', text: 'Start learning with selected resources at ₹0.' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="site-shell">
      <header className="nav">
        <a className="brand" href="#">
          <span className="brand-mark">T</span>
          <span>talentmall<span className="brand-muted">bydeva</span></span>
        </a>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#explore" onClick={() => setMenuOpen(false)}>Explore</a>
          <a href="#categories" onClick={() => setMenuOpen(false)}>Categories</a>
          <a href="#free" onClick={() => setMenuOpen(false)}>Free</a>
        </nav>

        <div className="nav-actions">
          <button className="icon-button" aria-label="Search"><Search size={19}/></button>
          <button className="menu-button" aria-label="Menu" onClick={() => setMenuOpen(v => !v)}>
            {menuOpen ? <X size={22}/> : <Menu size={22}/>}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="explore">
          <div className="hero-glow glow-one" />
          <div className="hero-glow glow-two" />
          <div className="hero-copy">
            <div className="eyebrow"><Sparkles size={15}/> Learn. Build. Move forward.</div>
            <h1>Useful digital resources for your <em>next move.</em></h1>
            <p>Learn valuable skills, discover practical resources, and get digital products designed to help you move forward — simply.</p>
            <div className="hero-actions">
              <a className="button primary" href="#categories">Explore resources <ArrowRight size={17}/></a>
              <a className="button secondary" href="#free">Explore free <Download size={17}/></a>
            </div>
            <div className="trust-row">
              <span>✓ Instant digital access</span>
              <span>✓ Beginner-friendly</span>
              <span>✓ Built for real use</span>
            </div>
          </div>
          <div className="hero-card">
            <div className="orbit orbit-a"/>
            <div className="orbit orbit-b"/>
            <div className="hero-card-inner">
              <span className="mini-label">TALENTMALL</span>
              <strong>Learn something<br/>worth building.</strong>
              <span className="card-line">Digital knowledge • Skills • Resources</span>
            </div>
          </div>
        </section>

        <section className="section" id="categories">
          <div className="section-heading">
            <div><span className="section-kicker">EXPLORE</span><h2>Find what moves you forward.</h2></div>
            <p>Simple categories. Clear products. No unnecessary complexity.</p>
          </div>
          <div className="category-grid">
            {categories.map(({icon: Icon, title, text}) => (
              <a className="category-card" href="#" key={title}>
                <div className="category-icon"><Icon size={22}/></div>
                <div><h3>{title}</h3><p>{text}</p></div>
                <ArrowRight className="card-arrow" size={18}/>
              </a>
            ))}
          </div>
        </section>

        <section className="free-banner" id="free">
          <div><span className="section-kicker">START FREE</span><h2>Good resources shouldn't always start with a price.</h2><p>Explore selected digital resources available free to everyone.</p></div>
          <a className="button light" href="#">Browse free resources <ArrowRight size={17}/></a>
        </section>
      </main>

      <footer className="footer">
        <div><a className="brand" href="#"><span className="brand-mark">T</span><span>talentmall<span className="brand-muted">bydeva</span></span></a><p>Built for Your Next Move.</p></div>
        <span>© {new Date().getFullYear()} TalentMall. All rights reserved.</span>
      </footer>
    </div>
  )
}

export default App