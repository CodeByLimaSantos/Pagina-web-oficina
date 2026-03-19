import { useEffect, useState } from "react";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Nunito:wght@400;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Nunito', sans-serif;
    background: linear-gradient(135deg, #061311, #0f2f2a, #061311);
    min-height: 100vh;
  }

  .container {
    max-width: 1200px;
    margin: auto;
    padding: 0 20px;
  }

  /* ── NAVBAR ── */
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 40px;
    background: rgba(6, 19, 17, 0.92);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    position: sticky;
    top: 0;
    z-index: 1000;
    border-bottom: 1px solid rgba(255, 215, 0, 0.15);
  }

  .navbar h2 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.8rem;
    color: #FFD700;
    letter-spacing: 2px;
  }

  .navbar nav {
    display: flex;
    gap: 24px;
    align-items: center;
  }

  .navbar nav a {
    text-decoration: none;
    color: #ccc;
    font-weight: 600;
    font-size: 0.95rem;
    transition: color 0.3s;
  }

  .navbar nav a:hover {
    color: #FFD700;
  }

  .btn-nav {
    background: linear-gradient(135deg, #FFD700, #b89600);
    color: #000 !important;
    padding: 9px 20px;
    border-radius: 20px;
    font-weight: 700 !important;
    transition: transform 0.3s, box-shadow 0.3s;
  }

  .btn-nav:hover {
    transform: scale(1.05);
    box-shadow: 0 0 18px rgba(255, 215, 0, 0.5);
  }

  /* Hamburger */
  .hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
    background: none;
    border: none;
    padding: 4px;
  }

  .hamburger span {
    display: block;
    width: 26px;
    height: 2px;
    background: #FFD700;
    border-radius: 2px;
    transition: 0.3s;
  }

  /* Mobile Menu */
  .mobile-menu {
    display: none;
    flex-direction: column;
    gap: 16px;
    padding: 20px 40px;
    background: rgba(6, 19, 17, 0.97);
    border-top: 1px solid rgba(255,215,0,0.1);
  }

  .mobile-menu.open {
    display: flex;
  }

  .mobile-menu a {
    text-decoration: none;
    color: #ccc;
    font-weight: 600;
    font-size: 1rem;
    transition: color 0.3s;
  }

  .mobile-menu a:hover {
    color: #FFD700;
  }

  .mobile-menu .btn-nav {
    align-self: flex-start;
  }

  /* ── HERO ── */
  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    background: transparent;
    padding: 60px 0;
  }

  .hero .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
  }

  .hero-text {
    max-width: 560px;
  }

  .hero-text h1 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(2.6rem, 6vw, 4.2rem);
    color: #FFD700;
    line-height: 1.1;
    letter-spacing: 2px;
  }

  .hero-text p {
    margin: 20px 0 30px;
    color: #aaa;
    font-size: 1.1rem;
    line-height: 1.6;
  }

  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(255,215,0,0.08);
    border: 1px solid rgba(255,215,0,0.25);
    color: #FFD700;
    padding: 6px 14px;
    border-radius: 50px;
    font-size: 0.82rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 18px;
  }

  .hero-icon {
    width: 340px;
    max-width: 100%;
    opacity: 0.92;
    animation: float 3.5s ease-in-out infinite;
    filter: drop-shadow(0 20px 40px rgba(255,215,0,0.15));
  }

  /* ── BUTTON ── */
  .btn-primary {
    display: inline-block;
    padding: 14px 32px;
    background: linear-gradient(135deg, #FFD700, #b89600);
    color: #000;
    border-radius: 40px;
    font-weight: 700;
    text-decoration: none;
    font-size: 1rem;
    transition: transform 0.3s, box-shadow 0.3s;
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.35);
  }

  .btn-primary:hover {
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0 0 35px rgba(255, 215, 0, 0.75);
  }

  /* ── BENEFITS ── */
  .benefits {
    background: rgba(6, 19, 17, 0.8);
    padding: 60px 0;
    border-top: 1px solid rgba(255,215,0,0.1);
    border-bottom: 1px solid rgba(255,215,0,0.1);
  }

  .benefits .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    text-align: center;
  }

  .benefit-icon {
    font-size: 2rem;
    margin-bottom: 10px;
  }

  .benefit h3 {
    color: #FFD700;
    font-size: 1rem;
    margin-bottom: 8px;
    font-weight: 700;
  }

  .benefit p {
    color: #aaa;
    font-size: 0.9rem;
    line-height: 1.5;
  }

  /* ── SERVICES ── */
  .services {
    padding: 90px 0;
    text-align: center;
  }

  .services h2 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(2rem, 5vw, 3rem);
    color: #fff;
    letter-spacing: 2px;
    margin-bottom: 12px;
  }

  .services .subtitle {
    color: #aaa;
    margin-bottom: 50px;
    font-size: 1rem;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  .card {
    background: linear-gradient(145deg, #0f2f2a, #061311);
    border: 1px solid rgba(255, 215, 0, 0.12);
    padding: 28px 24px;
    border-radius: 16px;
    transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
    text-align: left;
    position: relative;
    overflow: hidden;
  }

  .card::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 4px;
    background: linear-gradient(to bottom, #FFD700, #b89600);
    border-radius: 4px 0 0 4px;
  }

  .card-icon {
    font-size: 1.8rem;
    margin-bottom: 14px;
    display: block;
    color: #FFD700;
  }

  .card h3 {
    color: #FFD700;
    margin-bottom: 10px;
    font-size: 1rem;
    font-weight: 700;
  }

  .card p {
    color: #aaa;
    font-size: 0.9rem;
    line-height: 1.65;
  }

  .card:hover {
    transform: translateY(-8px);
    border-color: rgba(255, 215, 0, 0.4);
    box-shadow: 0 12px 30px rgba(255, 215, 0, 0.2);
  }

  /* ── CTA ── */
  .cta {
    background: linear-gradient(135deg, #0f2f2a, #061311);
    text-align: center;
    padding: 90px 20px;
    border-top: 1px solid rgba(255,215,0,0.1);
  }

  .cta h2 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(2rem, 5vw, 3rem);
    color: #fff;
    letter-spacing: 2px;
    margin-bottom: 16px;
  }

  .cta p {
    color: #aaa;
    margin-bottom: 36px;
    font-size: 1rem;
  }

  /* ── ABOUT ── */
  .about {
    padding: 90px 20px;
    text-align: center;
    color: #ccc;
    max-width: 720px;
    margin: 0 auto;
  }

  .about h2 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(2rem, 5vw, 3rem);
    color: #FFD700;
    letter-spacing: 2px;
    margin-bottom: 20px;
  }

  .about p {
    font-size: 1rem;
    line-height: 1.8;
    color: #aaa;
  }

  /* ── FOOTER ── */
  .footer {
    text-align: center;
    padding: 24px 20px;
    background: #061311;
    border-top: 1px solid rgba(255, 215, 0, 0.15);
    color: #666;
    font-size: 0.85rem;
  }

  .footer span {
    color: #FFD700;
  }

  /* ── ANIMATIONS ── */
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-16px); }
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(30px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .fade-up {
    animation: fadeUp 0.8s ease forwards;
  }

  .fade-up-delay {
    animation: fadeUp 0.8s ease 0.2s forwards;
    opacity: 0;
  }

  .fade-up-delay2 {
    animation: fadeUp 0.8s ease 0.4s forwards;
    opacity: 0;
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 960px) {
    .cards {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    .navbar {
      padding: 16px 20px;
    }

    .navbar nav {
      display: none;
    }

    .hamburger {
      display: flex;
    }

    .hero .container {
      flex-direction: column;
      text-align: center;
    }

    .hero-text {
      max-width: 100%;
    }

    .hero-icon {
      width: 220px;
      order: -1;
    }

    .hero-badge {
      margin: 0 auto 18px;
    }

    .benefits .container {
      grid-template-columns: 1fr;
      gap: 24px;
    }

    .cards {
      grid-template-columns: 1fr;
    }

    .services {
      padding: 60px 0;
    }

    .cta {
      padding: 60px 20px;
    }
  }

  @media (max-width: 480px) {
    .navbar {
      padding: 14px 16px;
    }

    .mobile-menu {
      padding: 20px 16px;
    }

    .hero {
      padding: 40px 0;
    }

    .hero-text h1 {
      font-size: 2.2rem;
    }
  }
`;

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">

      {/* NAVBAR */}
      <header className="navbar">
        <h2>Bosle Garagem</h2>

        <nav>
          <a href="#home">Home</a>
          <a href="#servicos">Serviços</a>
          <a href="#sobre">Quem Somos</a>
          <a href="#diferenciais">Diferencial</a>
          <a href="#contato" className="btn-nav">Fale Conosco</a>
        </nav>

        <button
          className="hamburger"
          aria-label="Abrir menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="#home"          onClick={closeMenu}>Home</a>
        <a href="#servicos"      onClick={closeMenu}>Serviços</a>
        <a href="#sobre"         onClick={closeMenu}>Quem Somos</a>
        <a href="#diferenciais"  onClick={closeMenu}>Diferencial</a>
        <a href="#contato"       onClick={closeMenu} className="btn-nav">Fale Conosco</a>
      </div>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-text">
            <div className="hero-badge fade-up">Oficina de Confiança</div>
            <h1 className="fade-up">Seu carro em boas mãos</h1>
            <p className="fade-up-delay">
              Manutenção completa com qualidade, diagnóstico preciso e atendimento que respeita você e seu veículo.
            </p>
            <a
              href="https://wa.me/557998886328"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary fade-up-delay2"
            >
              Agendar agora
            </a>
          </div>

          {/* SVG Car Illustration */}
          <div style={{ flexShrink: 0 }}>
            <svg
              className="hero-icon"
              viewBox="0 0 340 200"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <rect x="20" y="110" width="300" height="55" rx="12" fill="#0f2f2a" stroke="#FFD700" strokeWidth="1.5"/>
              <path d="M80 110 L110 65 L230 65 L260 110 Z" fill="#0d2a26" stroke="#FFD700" strokeWidth="1.5"/>
              <path d="M118 110 L140 74 L200 74 L222 110 Z" fill="#061311" stroke="rgba(255,215,0,0.4)" strokeWidth="1"/>
              <line x1="170" y1="73" x2="170" y2="110" stroke="rgba(255,215,0,0.3)" strokeWidth="1"/>
              <circle cx="95"  cy="165" r="28" fill="#061311" stroke="#FFD700" strokeWidth="1.5"/>
              <circle cx="245" cy="165" r="28" fill="#061311" stroke="#FFD700" strokeWidth="1.5"/>
              <circle cx="95"  cy="165" r="20" fill="#0a1a18" stroke="rgba(255,215,0,0.3)" strokeWidth="1"/>
              <circle cx="245" cy="165" r="20" fill="#0a1a18" stroke="rgba(255,215,0,0.3)" strokeWidth="1"/>
              <circle cx="95"  cy="165" r="9"  fill="#FFD700" opacity="0.6"/>
              <circle cx="245" cy="165" r="9"  fill="#FFD700" opacity="0.6"/>
              <rect x="305" y="122" width="14" height="10" rx="3" fill="#FFD700" opacity="0.9"/>
              <rect x="21"  y="122" width="12" height="10" rx="3" fill="#FF4444" opacity="0.8"/>
              <line x1="170" y1="110" x2="170" y2="165" stroke="rgba(255,215,0,0.15)" strokeWidth="1"/>
              <rect x="125" y="132" width="22" height="5" rx="2.5" fill="rgba(255,215,0,0.25)"/>
              <rect x="193" y="132" width="22" height="5" rx="2.5" fill="rgba(255,215,0,0.25)"/>
              <ellipse cx="170" cy="198" rx="130" ry="6" fill="rgba(255,215,0,0.06)"/>
            </svg>
          </div>
        </div>
      </section>

      {/* BENEFITS STRIP */}
      <section className="benefits">
        <div className="container">
          <div className="benefit">
            <div className="benefit-icon">—</div>
            <h3>Atendimento Rápido</h3>
            <p>Diagnóstico ágil e serviço sem enrolação para você voltar logo à estrada.</p>
          </div>
          <div className="benefit">
            <div className="benefit-icon">—</div>
            <h3>Diagnóstico Preciso</h3>
            <p>Equipamentos modernos e técnicos experientes identificando o problema na raiz.</p>
          </div>
          <div className="benefit">
            <div className="benefit-icon">—</div>
            <h3>Garantia do Serviço</h3>
            <p>Todo serviço realizado com garantia e transparência total no orçamento.</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicos" className="services">
        <div className="container">
          <h2>Nossos Serviços</h2>
          <p className="subtitle">Tudo que seu veículo precisa em um só lugar</p>

          <div className="cards">
            <div className="card">
              <span className="card-icon">[ ]</span>
              <h3>Diagnóstico</h3>
              <p>
                Não sabe o problema do seu carro? Nossa equipe altamente especializada fará um estudo
                completo para entender de vez como resolver o que não está em perfeito estado no veículo.
              </p>
            </div>

            <div className="card">
              <span className="card-icon">[ ]</span>
              <h3>Serviços Mecânicos</h3>
              <p>Motor, suspensão, freios e manutenção geral com peças de qualidade e mão de obra certificada.</p>
            </div>

            <div className="card">
              <span className="card-icon">[ ]</span>
              <h3>Serviços Elétricos</h3>
              <p>Correção de falhas elétricas, sistemas eletrônicos e injeção eletrônica com scanner profissional.</p>
            </div>

            <div className="card">
              <span className="card-icon">[ ]</span>
              <h3>Revisão e Troca de Óleo</h3>
              <p>
                Troca de óleo e substituição de filtro de combustível, filtro de ar e filtro de óleo com
                produtos de primeira linha.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="sobre" className="about">
        <h2>Quem Somos</h2>
        <p>
          A <strong style={{ color: "#FFD700" }}>Bosle Garagem</strong> nasceu da paixão por automóveis e do compromisso com a honestidade.
          Há anos atuando no mercado, nossa equipe cuida do seu veículo com a mesma dedicação que cuidaria do nosso.
          Transparência, qualidade e respeito pelo seu tempo são nossos valores fundamentais.
        </p>
      </section>

      {/* CTA */}
      <section id="contato" className="cta">
        <h2>Pronto para agendar?</h2>
        <p>Entre em contato agora mesmo pelo WhatsApp e garanta seu horário.</p>
        <a
          href="https://wa.me/557998886328"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Falar no WhatsApp
        </a>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} <span>Bosle Garagem</span> · Todos os direitos reservados</p>
      </footer>
    </div>
  );
}