import React from "react";

export default function App() {
  const whatsappLink =
    "https://wa.me/5518981601801?text=Olá,%20quero%20solicitar%20uma%20Análise%20Confere.";

  const cards = [
    "Validação do fornecedor",
    "Análise do produto",
    "Estimativa de custo final",
    "Avaliação de risco",
    "Conferência e evidências",
    "Acompanhamento da operação",
  ];

  const steps = [
    "Você envia o produto, link ou fornecedor.",
    "A Confere analisa riscos, custos e viabilidade.",
    "Você recebe uma recomendação clara.",
    "Se fizer sentido, seguimos com a compra assistida.",
    "A operação é acompanhada com registros e atualizações.",
  ];

  const services = [
    {
      title: "Análise Confere",
      text: "Receba uma análise sobre fornecedor, produto, preço, risco, custo estimado, impostos, prazo e viabilidade antes de comprar.",
    },
    {
      title: "Compra Assistida Confere",
      text: "Além da análise, a Confere acompanha a operação, organiza comprovantes, rastreios, atualizações e evidências.",
    },
    {
      title: "Confere para Lojistas",
      text: "Para pequenos revendedores que compram com frequência e precisam validar fornecedores, calcular margem e reduzir riscos.",
    },
  ];

  const audience = [
    "Quem quer comprar produto caro de longe",
    "Quem tem medo de golpe",
    "Quem quer importar com mais segurança",
    "Pequenos lojistas e revendedores",
    "Quem precisa comparar preço, risco e custo final",
    "Quem quer acompanhar melhor a operação",
  ];

  const analysis = [
    "Fornecedor",
    "Produto",
    "Preço",
    "Risco de golpe",
    "Custo final estimado",
    "Impostos e taxas possíveis",
    "Frete e rastreio",
    "Documentos e comprovantes",
    "Possibilidade de conferência",
    "Viabilidade da compra",
  ];

  return (
    <main className="site">
      <style>{`
        :root {
          --navy: #071f36;
          --navy-2: #0d2d4a;
          --text: #121417;
          --muted: #5f6b78;
          --line: #e7ebf0;
          --soft: #f6f8fb;
          --white: #ffffff;
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          color: var(--text);
          background: var(--white);
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .site {
          min-height: 100vh;
          background:
            radial-gradient(circle at 8% 20%, rgba(7, 31, 54, 0.055), transparent 28%),
            radial-gradient(circle at 90% 15%, rgba(7, 31, 54, 0.055), transparent 30%),
            linear-gradient(180deg, #ffffff 0%, #f9fbfd 100%);
        }

        .header {
          position: sticky;
          top: 0;
          z-index: 50;
          backdrop-filter: blur(16px);
          background: rgba(255,255,255,0.86);
          border-bottom: 1px solid var(--line);
        }

        .nav {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
          height: 82px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 900;
          letter-spacing: -0.04em;
          font-size: 30px;
          color: var(--navy);
        }

        .brand-mark {
          width: 38px;
          height: 38px;
          border: 1px solid rgba(7,31,54,0.18);
          border-radius: 999px;
          display: grid;
          place-items: center;
          font-size: 19px;
          font-weight: 900;
          color: var(--navy);
          background: #fff;
        }

        .links {
          display: flex;
          align-items: center;
          gap: 34px;
          font-size: 16px;
          color: #3e4650;
          font-weight: 550;
        }

        .links a:hover {
          color: var(--navy);
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 52px;
          padding: 0 24px;
          border-radius: 14px;
          border: 1px solid var(--line);
          font-weight: 800;
          font-size: 15px;
          transition: 0.2s ease;
          cursor: pointer;
          white-space: nowrap;
        }

        .btn-primary {
          background: var(--text);
          color: white;
          border-color: var(--text);
          box-shadow: 0 18px 42px rgba(7,31,54,0.16);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 22px 54px rgba(7,31,54,0.22);
        }

        .btn-secondary {
          background: white;
          color: var(--text);
        }

        .btn-secondary:hover {
          border-color: var(--navy);
          transform: translateY(-2px);
        }

        .hero {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
          padding: 120px 0 110px;
          text-align: center;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(7,31,54,0.16);
          border-radius: 999px;
          padding: 10px 20px;
          color: var(--navy);
          font-size: 13px;
          font-weight: 850;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          background: rgba(255,255,255,0.75);
        }

        .hero h1 {
          max-width: 980px;
          margin: 34px auto 24px;
          font-size: clamp(54px, 9vw, 118px);
          line-height: 0.9;
          letter-spacing: -0.085em;
          font-weight: 950;
          color: #111;
        }

        .hero-subtitle {
          max-width: 820px;
          margin: 0 auto;
          color: #28313a;
          font-size: clamp(19px, 2.2vw, 26px);
          line-height: 1.45;
          letter-spacing: -0.02em;
        }

        .hero-note {
          max-width: 760px;
          margin: 22px auto 0;
          color: var(--muted);
          font-size: 17px;
          line-height: 1.7;
        }

        .hero-actions {
          margin-top: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .section {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
          padding: 90px 0;
        }

        .section.center {
          text-align: center;
        }

        .section-label {
          color: var(--navy);
          font-size: 13px;
          font-weight: 850;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        .section h2 {
          margin: 0;
          color: #111;
          font-size: clamp(34px, 5vw, 64px);
          line-height: 1;
          letter-spacing: -0.06em;
          font-weight: 920;
        }

        .section-lead {
          max-width: 740px;
          margin: 22px auto 0;
          color: var(--muted);
          font-size: 20px;
          line-height: 1.55;
        }

        .grid {
          margin-top: 48px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .card {
          background: rgba(255,255,255,0.78);
          border: 1px solid var(--line);
          border-radius: 28px;
          padding: 30px;
          text-align: left;
          box-shadow: 0 18px 50px rgba(7,31,54,0.035);
        }

        .card:hover {
          border-color: rgba(7,31,54,0.26);
        }

        .icon {
          width: 42px;
          height: 42px;
          border-radius: 14px;
          background: var(--navy);
          color: white;
          display: grid;
          place-items: center;
          font-weight: 900;
          margin-bottom: 24px;
        }

        .card h3 {
          margin: 0 0 12px;
          font-size: 24px;
          line-height: 1.12;
          letter-spacing: -0.04em;
        }

        .card p {
          margin: 0;
          color: var(--muted);
          font-size: 17px;
          line-height: 1.55;
        }

        .steps {
          margin-top: 48px;
          display: grid;
          gap: 14px;
        }

        .step {
          display: grid;
          grid-template-columns: 70px 1fr;
          gap: 20px;
          align-items: center;
          background: white;
          border: 1px solid var(--line);
          border-radius: 24px;
          padding: 24px;
          text-align: left;
        }

        .step-number {
          width: 54px;
          height: 54px;
          border-radius: 18px;
          background: var(--soft);
          display: grid;
          place-items: center;
          color: var(--navy);
          font-weight: 900;
        }

        .step p {
          margin: 0;
          font-size: 21px;
          color: #1b1f23;
          font-weight: 650;
          letter-spacing: -0.025em;
        }

        .validra {
          background: var(--navy);
          color: white;
          border-radius: 36px;
          padding: 64px;
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 48px;
          align-items: center;
          box-shadow: 0 28px 90px rgba(7,31,54,0.22);
        }

        .validra h2 {
          color: white;
        }

        .validra p {
          margin: 0;
          color: rgba(255,255,255,0.78);
          font-size: 21px;
          line-height: 1.65;
        }

        .validra-badge {
          display: inline-flex;
          width: fit-content;
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 999px;
          padding: 10px 16px;
          font-size: 13px;
          font-weight: 850;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.75);
          margin-bottom: 18px;
        }

        .list-grid {
          margin-top: 44px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }

        .list-item {
          background: white;
          border: 1px solid var(--line);
          border-radius: 18px;
          padding: 20px 22px;
          display: flex;
          align-items: center;
          gap: 14px;
          font-size: 18px;
          font-weight: 650;
          color: #1a2027;
          text-align: left;
        }

        .dot {
          width: 9px;
          height: 9px;
          background: var(--navy);
          border-radius: 999px;
          flex: 0 0 auto;
        }

        .important {
          border: 1px solid rgba(7,31,54,0.16);
          border-radius: 34px;
          padding: 46px;
          background: linear-gradient(180deg, #ffffff, #f6f8fb);
          text-align: left;
        }

        .important h2 {
          font-size: clamp(30px, 4vw, 52px);
        }

        .important p {
          margin: 22px 0 0;
          color: #3a4652;
          font-size: 20px;
          line-height: 1.7;
        }

        .cta {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto 90px;
          border-radius: 40px;
          padding: 82px 40px;
          text-align: center;
          background:
            radial-gradient(circle at 20% 10%, rgba(255,255,255,0.2), transparent 24%),
            linear-gradient(135deg, #071f36, #0b2945);
          color: white;
          box-shadow: 0 30px 90px rgba(7,31,54,0.25);
        }

        .cta h2 {
          max-width: 760px;
          margin: 0 auto;
          font-size: clamp(38px, 6vw, 72px);
          line-height: 0.98;
          letter-spacing: -0.07em;
          font-weight: 930;
        }

        .cta p {
          max-width: 720px;
          margin: 22px auto 0;
          color: rgba(255,255,255,0.78);
          font-size: 20px;
          line-height: 1.6;
        }

        .cta-actions {
          margin-top: 34px;
          display: flex;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .cta .btn-secondary {
          background: white;
          color: #111;
        }

        .footer {
          border-top: 1px solid var(--line);
          background: white;
        }

        .footer-inner {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
          padding: 42px 0;
          display: flex;
          justify-content: space-between;
          gap: 30px;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.6;
        }

        .footer strong {
          display: block;
          color: var(--navy);
          font-size: 22px;
          margin-bottom: 6px;
        }

        @media (max-width: 900px) {
          .nav {
            height: auto;
            padding: 18px 0;
            align-items: flex-start;
          }

          .links {
            display: none;
          }

          .brand {
            font-size: 26px;
          }

          .hero {
            padding: 80px 0 70px;
          }

          .hero h1 {
            font-size: clamp(48px, 16vw, 78px);
            letter-spacing: -0.08em;
          }

          .grid {
            grid-template-columns: 1fr;
          }

          .validra {
            grid-template-columns: 1fr;
            padding: 38px 28px;
          }

          .list-grid {
            grid-template-columns: 1fr;
          }

          .footer-inner {
            flex-direction: column;
          }
        }

        @media (max-width: 520px) {
          .nav,
          .hero,
          .section,
          .footer-inner,
          .cta {
            width: min(100% - 26px, 1180px);
          }

          .btn {
            width: 100%;
          }

          .hero-actions,
          .cta-actions {
            width: 100%;
          }

          .step {
            grid-template-columns: 1fr;
          }

          .section {
            padding: 70px 0;
          }

          .card {
            padding: 24px;
          }

          .important {
            padding: 30px;
          }

          .cta {
            padding: 58px 24px;
            border-radius: 30px;
          }
        }
      `}</style>

      <header className="header">
        <nav className="nav">
          <a href="#top" className="brand" aria-label="Confere">
            <span className="brand-mark">S</span>
            <span>Confere</span>
          </a>

          <div className="links">
            <a href="#como-funciona">Como funciona</a>
            <a href="#servicos">Serviços</a>
            <a href="#validra">Validra</a>
            <a href="#seguranca">Segurança</a>
          </div>

          <a className="btn btn-primary" href={whatsappLink} target="_blank" rel="noreferrer">
            Falar no WhatsApp
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="eyebrow">Confere Via — Compra Assistida Segura</div>

        <h1>Compre de longe com tudo conferido.</h1>

        <p className="hero-subtitle">
          A Confere ajuda você a analisar, validar e acompanhar compras feitas de outros lugares com mais segurança, antes de fechar negócio.
        </p>

        <p className="hero-note">
          Analisamos fornecedor, produto, preço, risco, custo estimado, envio, impostos, rastreio e possibilidade de conferência.
        </p>

        <div className="hero-actions">
          <a className="btn btn-primary" href={whatsappLink} target="_blank" rel="noreferrer">
            Solicitar análise
          </a>
          <a className="btn btn-secondary" href={whatsappLink} target="_blank" rel="noreferrer">
            Falar no WhatsApp
          </a>
        </div>
      </section>

      <section className="section center">
        <div className="section-label">O que a Confere faz</div>
        <h2>Antes de comprar, a Confere analisa por você.</h2>
        <p className="section-lead">
          Uma camada de validação para reduzir incertezas em compras à distância, importações assistidas e operações com fornecedores externos.
        </p>

        <div className="grid">
          {cards.map((item, index) => (
            <div className="card" key={item}>
              <div className="icon">{index + 1}</div>
              <h3>{item}</h3>
              <p>
                Processo organizado para ajudar na tomada de decisão antes, durante e depois da compra.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section center" id="como-funciona">
        <div className="section-label">Como funciona</div>
        <h2>Um processo simples, claro e documentado.</h2>
        <p className="section-lead">
          A Confere não substitui sua decisão. Ela organiza informações, aponta riscos e acompanha a operação quando fizer sentido.
        </p>

        <div className="steps">
          {steps.map((step, index) => (
            <div className="step" key={step}>
              <div className="step-number">{String(index + 1).padStart(2, "0")}</div>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section center" id="servicos">
        <div className="section-label">Serviços</div>
        <h2>Soluções para comprar com mais critério.</h2>
        <p className="section-lead">
          Começamos com serviços práticos e personalizados, preparados para evoluir no futuro para tecnologia, IA, logística e comércio exterior.
        </p>

        <div className="grid">
          {services.map((service, index) => (
            <div className="card" key={service.title}>
              <div className="icon">{index + 1}</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="validra">
        <div className="validra">
          <div>
            <div className="validra-badge">Método interno</div>
            <h2>Validação inteligente por trás da operação.</h2>
          </div>

          <p>
            A Confere utiliza o método Validra para avaliar riscos, inconsistências, fornecedores, documentos, custos, pagamentos e logística antes de recomendar uma operação.
          </p>
        </div>
      </section>

      <section className="section center">
        <div className="section-label">Para quem é</div>
        <h2>Para quem quer decidir melhor antes de comprar.</h2>

        <div className="list-grid">
          {audience.map((item) => (
            <div className="list-item" key={item}>
              <span className="dot" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section center">
        <div className="section-label">O que analisamos</div>
        <h2>Os principais pontos da operação.</h2>
        <p className="section-lead">
          A análise considera fatores comerciais, operacionais e documentais para ajudar você a entender melhor o cenário antes de avançar.
        </p>

        <div className="list-grid">
          {analysis.map((item) => (
            <div className="list-item" key={item}>
              <span className="dot" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="seguranca">
        <div className="important">
          <div className="section-label">Importante</div>
          <h2>Reduzimos incertezas, não prometemos risco zero.</h2>
          <p>
            A Confere não garante lucro, liberação aduaneira, ausência de impostos, entrega por terceiros ou inexistência total de riscos. Nosso papel é analisar, orientar, validar informações, organizar evidências e acompanhar a operação para reduzir incertezas.
          </p>
        </div>
      </section>

      <section className="cta">
        <h2>Quer comprar de longe com mais segurança?</h2>
        <p>
          Envie o produto, fornecedor ou link que você está analisando. A Confere avalia antes de você fechar negócio.
        </p>

        <div className="cta-actions">
          <a className="btn btn-secondary" href={whatsappLink} target="_blank" rel="noreferrer">
            Solicitar Análise Confere
          </a>
          <a className="btn btn-secondary" href={whatsappLink} target="_blank" rel="noreferrer">
            Falar no WhatsApp
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div>
            <strong>Confere</strong>
            Compre de longe com tudo conferido.
          </div>

          <div>
            WhatsApp: (18) 98160-1801
            <br />
            Site: conferevia.com.br
          </div>
        </div>
      </footer>
    </main>
  );
}
