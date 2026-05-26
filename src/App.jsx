import "./index.css";

const whatsappLink =
  "https://wa.me/5518981601801?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Confere.%20Quero%20fazer%20uma%20cota%C3%A7%C3%A3o.";

const parceiroLink =
  "https://wa.me/5518981601801?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Confere.%20Tenho%20interesse%20em%20ser%20parceiro.";

function App() {
  const pilares = [
    {
      title: "Loja confirmada",
      text: "Produto, preço, disponibilidade e condição verificados antes da aprovação.",
      icon: "🏬",
    },
    {
      title: "Operador verificado",
      text: "Apoio local cadastrado, com atuação orientada e documentada.",
      icon: "🛡️",
    },
    {
      title: "Produto conferido",
      text: "Fotos, vídeos, comprovantes e checklist quando aplicável.",
      icon: "📷",
    },
    {
      title: "Envio rastreado",
      text: "Registro de embalagem, envio e código de rastreio.",
      icon: "🚚",
    },
  ];

  const passos = [
    {
      title: "Cliente pede cotação.",
      text: "Você envia o produto que procura.",
    },
    {
      title: "A Confere analisa se a compra é possível e segura.",
      text: "Avaliamos loja, produto, valor, prazo, risco e viabilidade.",
    },
    {
      title: "Loja ou fornecedor confirma produto, preço e disponibilidade.",
      text: "A confirmação ocorre antes da aprovação final.",
    },
    {
      title: "Cliente aprova o custo final.",
      text: "Você decide se compensa prosseguir.",
    },
    {
      title: "Produto é conferido quando aplicável.",
      text: "Fotos, vídeos, comprovantes e registros do pedido.",
    },
    {
      title: "Envio é registrado e rastreado.",
      text: "Do ponto parceiro, courier ou transportadora até você.",
    },
  ];

  const seguranca = [
    "Cliente não fala direto com operador local.",
    "Operador não recebe pagamento direto do cliente.",
    "Produto, preço e disponibilidade são confirmados antes da aprovação.",
    "Pedidos de maior valor exigem mais provas.",
    "Produtos irregulares, falsificados ou sem origem não são aceitos.",
    "Tudo fica documentado.",
  ];

  const parceiros = [
    {
      title: "Lojas parceiras",
      text: "Confirmam produto, preço, disponibilidade, comprovante, garantia e retirada autorizada.",
      icon: "🏬",
    },
    {
      title: "Operadores locais verificados",
      text: "Ajudam a cotar, verificar lojas, enviar fotos e vídeos e apoiar pedidos autorizados.",
      icon: "👤",
    },
    {
      title: "Pontos parceiros",
      text: "Podem receber, conferir, embalar e enviar produtos com rastreio.",
      icon: "📍",
    },
  ];

  const importacoes = [
    {
      title: "Compra internacional assistida",
      text: "O cliente informa o produto desejado e a Confere analisa loja, preço, disponibilidade, prazo estimado, frete, taxas e riscos antes de recomendar a continuidade.",
    },
    {
      title: "Courier e redirecionamento",
      text: "Quando aplicável, a operação pode ser feita com empresas courier, redirecionadores ou parceiros logísticos que atuam no recebimento, preparação e envio do produto.",
    },
    {
      title: "Viabilidade antes da compra",
      text: "Produtos de maior valor passam por análise mais rigorosa. Se impostos, frete, taxas ou riscos tornarem a compra inviável, a Confere pode recomendar não prosseguir.",
    },
  ];

  const faq = [
    {
      q: "A Confere vende os produtos?",
      a: "Em regra, não. A Confere atua como intermediadora de compra assistida, organizando cliente, loja, fornecedor, operador local, courier ou ponto parceiro dentro de um processo documentado.",
    },
    {
      q: "O cliente pode falar direto com o operador?",
      a: "Não. Para manter a proteção da operação, a comunicação deve ocorrer pelos canais oficiais da Confere.",
    },
    {
      q: "O operador recebe pagamento direto do cliente?",
      a: "Não. O cliente deve pagar apenas pelos canais oficiais definidos pela Confere.",
    },
    {
      q: "A Confere garante que sempre será mais barato?",
      a: "Não. A Confere analisa se a compra compensa antes de seguir. Se o custo final ficar alto, a recomendação pode ser não comprar.",
    },
    {
      q: "A Confere faz importações dos EUA e China?",
      a: "A Confere pode auxiliar na análise e organização de compras internacionais, quando viável, por meio de empresas courier, redirecionadores ou parceiros logísticos. Cada caso depende do produto, valor, frete, impostos, prazo, risco e regras aplicáveis.",
    },
    {
      q: "A Confere promete importação sem imposto?",
      a: "Não. A Confere não promete isenção de impostos, não orienta práticas irregulares e não realiza operações sem documentação. Cada pedido deve respeitar as regras aplicáveis.",
    },
    {
      q: "Lojas podem se cadastrar?",
      a: "Sim. Lojas confiáveis podem se cadastrar para confirmar produtos, preços, disponibilidade, garantia e retirada autorizada.",
    },
  ];

  return (
    <div className="site">
      <header className="header">
        <a href="#inicio" className="logo">
          Confere
        </a>

        <nav className="nav">
          <a href="#como-funciona">Como funciona</a>
          <a href="#seguranca">Segurança</a>
          <a href="#importacoes">Importações</a>
          <a href="#parceiros">Parceiros</a>
          <a href="#cotacao">Cotação</a>
        </nav>

        <a className="header-button" href={whatsappLink} target="_blank">
          Falar no WhatsApp
        </a>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-bg-left"></div>
          <div className="hero-bg-right"></div>

          <div className="hero-content">
            <div className="eyebrow">Confere Via — compra assistida segura</div>

            <h1>Compre de longe com tudo conferido.</h1>

            <p>
              A Confere conecta clientes a lojas parceiras, fornecedores,
              operadores locais verificados, empresas courier e pontos parceiros,
              com processo documentado, produto conferido e envio rastreado.
            </p>

            <div className="hero-actions">
              <a className="button primary" href={whatsappLink} target="_blank">
                Pedir cotação
              </a>

              <a className="button secondary" href={parceiroLink} target="_blank">
                Ser parceiro
              </a>
            </div>

            <span className="hero-note">O caminho seguro da loja até você.</span>
          </div>
        </section>

        <section className="section" id="pilares">
          <div className="container">
            <div className="section-center">
              <h2>Nossos pilares</h2>
              <p>Quatro camadas de verificação para sua compra ficar mais segura.</p>
            </div>

            <div className="grid four">
              {pilares.map((item) => (
                <div className="card" key={item.title}>
                  <div className="icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="problem">
          <div className="container narrow">
            <div className="pill">O desafio</div>

            <h2>
              Comprar de longe pode compensar. O problema é confiar em quem você
              nunca viu.
            </h2>

            <p>
              Muitas pessoas querem comprar em lojas distantes, regiões de
              fronteira, Estados Unidos ou China, mas têm medo de golpe, produto
              errado, falta de comprovante, envio sem rastreio, custos ocultos ou
              negociação informal.
            </p>
          </div>
        </section>

        <section className="section" id="como-funciona">
          <div className="container">
            <div className="section-center">
              <h2>Como funciona</h2>
              <p>Processo documentado, do primeiro contato até o recebimento.</p>
            </div>

            <div className="grid three">
              {passos.map((item, index) => (
                <div className="step-card" key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section gray" id="seguranca">
          <div className="container">
            <div className="section-left">
              <div className="pill">Segurança</div>
              <h2>Segurança por processo, não por promessa.</h2>
            </div>

            <div className="security-grid">
              {seguranca.map((item) => (
                <div className="security-card" key={item}>
                  <div className="check">✓</div>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="importacoes">
          <div className="container">
            <div className="section-center">
              <div className="pill">Importações</div>
              <h2>Importações dos EUA e China com análise de viabilidade.</h2>
              <p>
                A Confere também pode auxiliar clientes que desejam comprar
                produtos dos Estados Unidos ou da China, utilizando empresas
                courier, redirecionadores e parceiros logísticos quando a operação
                fizer sentido.
              </p>
            </div>

            <div className="grid three">
              {importacoes.map((item) => (
                <div className="card" key={item.title}>
                  <div className="icon">🌍</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>

            <div className="notice">
              <strong>Importante:</strong> a Confere não promete isenção de
              impostos, não realiza operações irregulares e não garante que toda
              importação será mais barata. Cada pedido depende da legislação
              aplicável, da empresa courier, do produto, do valor declarado, do
              frete, dos tributos, do prazo e da análise de risco.
            </div>
          </div>
        </section>

        <section className="section gray" id="parceiros">
          <div className="container">
            <div className="section-left">
              <div className="pill">Parceiros</div>
              <h2>Faça parte da rede Confere.</h2>
            </div>

            <div className="grid three">
              {parceiros.map((item) => (
                <div className="card" key={item.title}>
                  <div className="icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>

            <div className="center-action">
              <a className="button primary" href={parceiroLink} target="_blank">
                Quero ser parceiro
              </a>
            </div>
          </div>
        </section>

        <section className="cta" id="cotacao">
          <div className="container narrow">
            <h2>
              Quer comprar de outra cidade, fronteira, EUA ou China com mais
              segurança?
            </h2>

            <p>
              Envie o produto que procura. A Confere analisa preço, origem,
              disponibilidade, frete, taxas, prazo, risco e viabilidade antes de
              recomendar a compra.
            </p>

            <a className="button light" href={whatsappLink} target="_blank">
              Chamar no WhatsApp
            </a>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="container faq-container">
            <div className="section-center">
              <h2>Perguntas frequentes</h2>
              <p>Tire suas dúvidas sobre como a Confere funciona.</p>
            </div>

            <div className="faq-list">
              {faq.map((item) => (
                <details className="faq-item" key={item.q}>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <h2>Confere</h2>
            <p>Compre de longe com tudo conferido.</p>
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
            <a href="#importacoes">Importações</a>
            <a href="#parceiros">Parceiros</a>
            <a href="#cotacao">Cotação</a>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>
            A Confere atua como intermediadora de compra assistida.
            Disponibilidade, preço, garantia, envio, tributos, prazo e condições
            finais dependem da loja, fornecedor, courier, parceiro, produto e
            análise do pedido.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
