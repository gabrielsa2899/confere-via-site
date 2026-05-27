const whatsappLink = "https://wa.me/5518981601801";

const pillars = [
  {
    icon: "✓",
    title: "Análise prévia",
    text: "Cada oportunidade é avaliada antes de avançar, com foco em viabilidade, coerência e segurança.",
  },
  {
    icon: "◼",
    title: "Operação organizada",
    text: "A compra assistida é conduzida com mais clareza, critério e acompanhamento profissional.",
  },
  {
    icon: "▣",
    title: "Conferência documental",
    text: "Informações, evidências e etapas relevantes são registradas conforme a necessidade de cada pedido.",
  },
  {
    icon: "→",
    title: "Acompanhamento até a conclusão",
    text: "Do primeiro contato à entrega, a operação é conduzida com mais previsibilidade e controle.",
  },
];

const steps = [
  {
    number: "01",
    title: "Você nos apresenta a demanda.",
    text: "Produto, referência e contexto da compra são avaliados com atenção.",
  },
  {
    number: "02",
    title: "A Confere analisa viabilidade e risco.",
    text: "Nem toda oportunidade compensa. Nosso papel é filtrar o que faz sentido.",
  },
  {
    number: "03",
    title: "A operação é estruturada.",
    text: "Organizamos a condução do pedido de forma mais segura, clara e profissional.",
  },
  {
    number: "04",
    title: "A conferência é registrada.",
    text: "As validações relevantes são documentadas conforme o perfil da operação.",
  },
  {
    number: "05",
    title: "O cliente acompanha a conclusão.",
    text: "A compra segue com mais previsibilidade, comunicação e respaldo.",
  },
  {
    number: "06",
    title: "Decisão com mais confiança.",
    text: "Nosso objetivo é reduzir incertezas antes e durante a compra.",
  },
];

const securityItems = [
  "A Confere atua com análise prévia e não incentiva operações sem lógica econômica ou operacional.",
  "Pedidos sensíveis ou de maior valor exigem critério adicional e documentação proporcional.",
  "Produtos sem procedência clara, de origem duvidosa ou incompatíveis com a política da empresa não seguem.",
  "A operação é tratada com foco em organização, rastreabilidade e redução de exposição para todas as partes.",
  "Cada pedido é analisado individualmente, sem promessas genéricas ou irreais.",
  "Quando a compra não compensa, a recomendação pode ser simplesmente não prosseguir.",
];

const partnerCards = [
  {
    icon: "◻",
    title: "Lojas e fornecedores",
    text: "Buscamos relações comerciais sérias, com comunicação objetiva, clareza nas informações e postura profissional.",
  },
  {
    icon: "◎",
    title: "Operadores parceiros",
    text: "Pessoas e apoios operacionais que atuem com responsabilidade, discrição e padrão confiável de execução.",
  },
  {
    icon: "▵",
    title: "Rede de apoio logístico",
    text: "Estruturas de apoio que contribuam para uma operação mais organizada, previsível e bem documentada.",
  },
];

const faqs = [
  {
    q: "A Confere vende produtos diretamente?",
    a: "Não. A Confere atua como estrutura de compra assistida, análise e organização operacional.",
  },
  {
    q: "A Confere garante que toda compra será mais barata?",
    a: "Não. O compromisso da Confere não é prometer preço baixo a qualquer custo, e sim avaliar se a operação faz sentido. Em alguns casos, a melhor decisão é não comprar.",
  },
  {
    q: "Todo pedido pode ser atendido?",
    a: "Não. Cada demanda passa por análise de viabilidade, origem, nível de risco, custo total e coerência operacional.",
  },
  {
    q: "A Confere atende compras internacionais?",
    a: "Quando houver lógica econômica e operacional, sim. Compras internacionais são avaliadas caso a caso, sempre com foco em viabilidade e segurança.",
  },
  {
    q: "Como posso pedir uma análise ou cotação?",
    a: "Basta entrar em contato pelo WhatsApp e apresentar o produto ou a demanda. A Confere faz uma avaliação inicial antes de qualquer avanço.",
  },
];

function App() {
  return (
    <div className="site">
      <header className="header">
        <div className="header-inner">
          <a href="#top" className="logo">
            Confere
          </a>

          <nav className="nav">
            <a href="#como-funciona">Como funciona</a>
            <a href="#seguranca">Segurança</a>
            <a href="#parceiros">Parceiros</a>
            <a href="#cotacao">Cotação</a>
          </nav>

          <div className="header-actions">
            <a href={whatsappLink} target="_blank" rel="noreferrer">
              <button className="whatsapp-btn">Falar no WhatsApp</button>
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-content">
            <div className="badge">CONFERE VIA — COMPRA ASSISTIDA SEGURA</div>

            <h1>Compre de longe com tudo conferido.</h1>

            <p>
              A Confere conecta clientes a oportunidades de compra com mais
              segurança, organização e análise profissional, reduzindo
              incertezas antes da decisão.
            </p>

            <div className="hero-actions">
              <a href={whatsappLink} target="_blank" rel="noreferrer">
                <button className="primary-btn">Pedir cotação</button>
              </a>

              <a href={whatsappLink} target="_blank" rel="noreferrer">
                <button className="secondary-btn">Ser parceiro</button>
              </a>
            </div>

            <div className="hero-note">
              O caminho mais seguro entre a oportunidade e a decisão.
            </div>
          </div>
        </section>

        <section className="section section-light">
          <div className="container">
            <div className="section-header">
              <h2>Nossos pilares</h2>
              <p>
                Uma estrutura pensada para dar mais critério, clareza e
                tranquilidade à compra.
              </p>
            </div>

            <div className="grid-4">
              {pillars.map((item) => (
                <div className="card" key={item.title}>
                  <div className="card-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="problem">
              <h2>
                Comprar de longe pode ser uma ótima oportunidade. O problema é
                decidir sem segurança.
              </h2>
              <p>
                Muitas compras parecem vantajosas à primeira vista, mas se
                tornam arriscadas quando faltam critério, contexto e análise.
                A Confere nasce para reduzir essa zona de incerteza.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-light" id="como-funciona">
          <div className="container">
            <div className="section-header">
              <h2>Como funciona</h2>
              <p>
                Um processo simples na apresentação, mas criterioso na execução.
              </p>
            </div>

            <div className="grid-3">
              {steps.map((step) => (
                <div className="step-card" key={step.number}>
                  <div className="step-number">{step.number}</div>
                  <strong>{step.title}</strong>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="seguranca">
          <div className="container">
            <div className="section-header">
              <h2>Segurança por critério, não por promessa.</h2>
              <p>
                Nosso papel é proteger a qualidade da decisão e a consistência
                da operação.
              </p>
            </div>

            <div className="security-list">
              {securityItems.map((item, index) => (
                <div className="security-item" key={index}>
                  <div className="check">✓</div>
                  <div>{item}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-light">
          <div className="container">
            <div className="section-header">
              <h2>Compras internacionais, quando fizer sentido.</h2>
              <p>
                A Confere também pode avaliar demandas ligadas a compras
                internacionais, sempre com análise prévia de viabilidade, custo
                total e coerência operacional.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="parceiros">
          <div className="container">
            <div className="section-header">
              <h2>Rede Confere</h2>
              <p>
                Construímos relações com parceiros que valorizam seriedade,
                consistência e visão de longo prazo.
              </p>
            </div>

            <div className="grid-3">
              {partnerCards.map((item) => (
                <div className="card" key={item.title}>
                  <div className="card-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-dark" id="cotacao">
          <div className="container">
            <h2>Tem uma oportunidade de compra e quer analisá-la com mais segurança?</h2>
            <p>
              Envie sua demanda. A Confere faz uma avaliação inicial e indica se
              vale a pena avançar.
            </p>
            <a href={whatsappLink} target="_blank" rel="noreferrer">
              <button className="secondary-btn">Chamar no WhatsApp</button>
            </a>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2>Perguntas frequentes</h2>
              <p>Respostas objetivas para as dúvidas mais comuns.</p>
            </div>

            <div className="faq">
              {faqs.map((item) => (
                <div className="faq-item" key={item.q}>
                  <div className="faq-question">{item.q}</div>
                  <div className="faq-answer">{item.a}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-grid">
          <div>
            <h3>Confere</h3>
            <p>
              Compra assistida com mais critério, segurança e organização.
            </p>
          </div>

          <div>
            <h3>Contato</h3>
            <p>WhatsApp: (18) 98160-1801</p>
            <p>Site: conferevia.com.br</p>
          </div>

          <div>
            <h3>Navegação</h3>
            <p><a href="#como-funciona">Como funciona</a></p>
            <p><a href="#seguranca">Segurança</a></p>
            <p><a href="#parceiros">Parceiros</a></p>
            <p><a href="#cotacao">Cotação</a></p>
          </div>
        </div>

        <small>
          A Confere atua como estrutura de compra assistida e análise
          operacional. Cada demanda é avaliada individualmente, de acordo com
          contexto, viabilidade e nível de risco.
        </small>
      </footer>
    </div>
  );
}

export default App;
