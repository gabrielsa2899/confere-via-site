const whatsappLink = "https://wa.me/5518981601801";

const pilares = [
  {
    numero: "01",
    titulo: "Análise antes da compra",
    texto: "Avaliamos se a oportunidade faz sentido antes de qualquer avanço.",
  },
  {
    numero: "02",
    titulo: "Processo documentado",
    texto: "As etapas importantes são registradas para dar mais clareza à operação.",
  },
  {
    numero: "03",
    titulo: "Critério operacional",
    texto: "Cada pedido é tratado conforme valor, risco, origem e viabilidade.",
  },
  {
    numero: "04",
    titulo: "Decisão mais segura",
    texto: "Quando não compensa, a recomendação pode ser simplesmente não comprar.",
  },
];

const passos = [
  {
    numero: "01",
    titulo: "Você envia a demanda",
    texto: "Produto, referência, valor aproximado e contexto da compra.",
  },
  {
    numero: "02",
    titulo: "A Confere analisa",
    texto: "Verificamos se a compra parece viável, segura e coerente.",
  },
  {
    numero: "03",
    titulo: "Organizamos a operação",
    texto: "Estruturamos o caminho mais adequado para conduzir o pedido.",
  },
  {
    numero: "04",
    titulo: "Registramos evidências",
    texto: "As informações relevantes são documentadas conforme a necessidade.",
  },
  {
    numero: "05",
    titulo: "Você aprova ou recusa",
    texto: "O cliente decide com base no custo final e no nível de segurança.",
  },
  {
    numero: "06",
    titulo: "Acompanhamento final",
    texto: "A operação segue com comunicação, registro e controle até a conclusão.",
  },
];

const seguranca = [
  "A Confere não promete preço baixo a qualquer custo.",
  "Produtos de origem duvidosa, falsificados ou irregulares não são aceitos.",
  "Pedidos de maior valor exigem análise e documentação reforçada.",
  "Cada operação é avaliada individualmente, sem promessas genéricas.",
  "A comunicação deve ocorrer pelos canais oficiais da Confere.",
  "Quando a operação não fizer sentido, a recomendação será não avançar.",
];

const parceiros = [
  {
    titulo: "Lojas e fornecedores",
    texto: "Relações comerciais sérias, com clareza de informação e postura profissional.",
  },
  {
    titulo: "Operadores parceiros",
    texto: "Apoio local ou operacional para demandas específicas, sempre com critério.",
  },
  {
    titulo: "Rede de apoio",
    texto: "Estrutura para tornar o processo mais organizado, previsível e documentado.",
  },
];

const perguntas = [
  {
    pergunta: "A Confere vende produtos diretamente?",
    resposta:
      "Não. A Confere atua como estrutura de compra assistida, análise e organização operacional.",
  },
  {
    pergunta: "A Confere garante que sempre será mais barato?",
    resposta:
      "Não. Nosso foco é avaliar se a compra compensa com segurança. Em alguns casos, a melhor decisão é não comprar.",
  },
  {
    pergunta: "Todo pedido pode ser atendido?",
    resposta:
      "Não. Cada demanda passa por análise de viabilidade, custo total, origem, risco e coerência operacional.",
  },
  {
    pergunta: "A Confere trabalha com compras internacionais?",
    resposta:
      "Sim, quando houver viabilidade. Demandas ligadas a compras internacionais são analisadas caso a caso.",
  },
  {
    pergunta: "Como peço uma cotação?",
    resposta:
      "Basta enviar a demanda pelo WhatsApp. A Confere faz uma análise inicial antes de qualquer avanço.",
  },
];

function App() {
  return (
    <div className="site">
      <header className="header">
        <div className="headerContent">
          <a className="brand" href="#inicio">
            Confere
          </a>

          <nav className="nav">
            <a href="#como-funciona">Como funciona</a>
            <a href="#seguranca">Segurança</a>
            <a href="#parceiros">Parceiros</a>
            <a href="#cotacao">Cotação</a>
          </nav>

          <a href={whatsappLink} target="_blank" rel="noreferrer">
            <button className="headerButton">Falar no WhatsApp</button>
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="heroInner">
            <span className="eyebrow">CONFERE VIA — COMPRA ASSISTIDA SEGURA</span>

            <h1>Compre de longe com tudo conferido.</h1>

            <p>
              A Confere ajuda clientes a analisarem oportunidades de compra com
              mais segurança, organização e critério antes da decisão.
            </p>

            <div className="heroButtons">
              <a href={whatsappLink} target="_blank" rel="noreferrer">
                <button className="primaryButton">Pedir cotação</button>
              </a>

              <a href="#parceiros">
                <button className="secondaryButton">Ser parceiro</button>
              </a>
            </div>

            <small>O caminho seguro entre a oportunidade e a decisão.</small>
          </div>
        </section>

        <section className="section light">
          <div className="container">
            <div className="sectionTitle">
              <span>Nossos pilares</span>
              <h2>Uma compra melhor começa antes do pagamento.</h2>
              <p>
                A Confere existe para reduzir incertezas, organizar informações
                e dar mais clareza para quem quer comprar com segurança.
              </p>
            </div>

            <div className="grid four">
              {pilares.map((item) => (
                <article className="pillarCard" key={item.numero}>
                  <span>{item.numero}</span>
                  <h3>{item.titulo}</h3>
                  <p>{item.texto}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container narrow">
            <div className="statement">
              <span>O desafio</span>
              <h2>
                Nem toda oferta boa é uma boa compra.
              </h2>
              <p>
                Comprar à distância pode abrir oportunidades, mas também aumenta
                riscos: produto errado, preço incompleto, falta de comprovação,
                envio incerto ou negociação informal. A Confere entra para
                analisar antes, organizar durante e reduzir problemas depois.
              </p>
            </div>
          </div>
        </section>

        <section className="section light" id="como-funciona">
          <div className="container">
            <div className="sectionTitle">
              <span>Como funciona</span>
              <h2>Simples para o cliente. Criterioso por trás.</h2>
              <p>
                O processo foi pensado para manter a experiência objetiva, mas
                com uma operação mais segura e documentada.
              </p>
            </div>

            <div className="grid three">
              {passos.map((item) => (
                <article className="stepCard" key={item.numero}>
                  <strong>{item.numero}</strong>
                  <h3>{item.titulo}</h3>
                  <p>{item.texto}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="seguranca">
          <div className="container">
            <div className="sectionTitle left">
              <span>Segurança</span>
              <h2>Segurança por processo, não por promessa.</h2>
              <p>
                Nosso objetivo é proteger a qualidade da decisão e a consistência
                da operação, sem vender ilusão.
              </p>
            </div>

            <div className="securityGrid">
              {seguranca.map((item) => (
                <div className="securityItem" key={item}>
                  <div className="check">✓</div>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section light">
          <div className="container narrow">
            <div className="statement">
              <span>Compras internacionais</span>
              <h2>Internacional, somente quando fizer sentido.</h2>
              <p>
                A Confere também pode analisar demandas envolvendo compras fora
                do Brasil. O foco não é expor o método da operação, mas avaliar
                se o custo total, o risco e a logística tornam a compra
                realmente viável para o cliente.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="parceiros">
          <div className="container">
            <div className="sectionTitle">
              <span>Parceiros</span>
              <h2>Uma rede construída com seriedade.</h2>
              <p>
                Buscamos relações com pessoas, lojas e apoios operacionais que
                valorizem confiança, clareza e visão de longo prazo.
              </p>
            </div>

            <div className="grid three">
              {parceiros.map((item) => (
                <article className="partnerCard" key={item.titulo}>
                  <div className="dot"></div>
                  <h3>{item.titulo}</h3>
                  <p>{item.texto}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cta" id="cotacao">
          <div className="container narrow">
            <span>Cotação</span>
            <h2>Tem uma oportunidade de compra?</h2>
            <p>
              Envie sua demanda. A Confere faz uma avaliação inicial e informa
              se vale a pena avançar.
            </p>

            <a href={whatsappLink} target="_blank" rel="noreferrer">
              <button className="lightButton">Chamar no WhatsApp</button>
            </a>
          </div>
        </section>

        <section className="section">
          <div className="container narrow">
            <div className="sectionTitle">
              <span>Dúvidas</span>
              <h2>Perguntas frequentes</h2>
              <p>Respostas objetivas sobre como a Confere funciona.</p>
            </div>

            <div className="faq">
              {perguntas.map((item) => (
                <details key={item.pergunta}>
                  <summary>{item.pergunta}</summary>
                  <p>{item.resposta}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footerContent">
          <div>
            <h3>Confere</h3>
            <p>Compra assistida com mais critério, segurança e organização.</p>
          </div>

          <div>
            <h4>Contato</h4>
            <p>WhatsApp: (18) 98160-1801</p>
            <p>Site: conferevia.com.br</p>
          </div>

          <div>
            <h4>Navegação</h4>
            <a href="#como-funciona">Como funciona</a>
            <a href="#seguranca">Segurança</a>
            <a href="#parceiros">Parceiros</a>
            <a href="#cotacao">Cotação</a>
          </div>
        </div>

        <div className="legal">
          A Confere atua como estrutura de compra assistida e análise
          operacional. Cada demanda é avaliada individualmente, conforme
          contexto, viabilidade e nível de risco.
        </div>
      </footer>
    </div>
  );
}

export default App;
