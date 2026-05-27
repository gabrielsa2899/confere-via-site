import React, { useState } from "react";
import "./index.css";

const WHATSAPP_LINK = "https://wa.me/5518981601801";

function App() {
  const [openFaq, setOpenFaq] = useState(0);

  const goWhatsApp = () => {
    window.open(WHATSAPP_LINK, "_blank");
  };

  const pillars = [
    {
      title: "Compra assistida",
      text: "Acompanhamento profissional para quem deseja comprar com mais segurança, mesmo à distância.",
    },
    {
      title: "Análise prévia",
      text: "Antes de seguir, avaliamos se a operação faz sentido em custo, risco, prazo e viabilidade.",
    },
    {
      title: "Conferência documentada",
      text: "Quando aplicável, a compra pode contar com registros, comprovantes e evidências organizadas.",
    },
    {
      title: "Envio acompanhado",
      text: "O processo prioriza transporte rastreável, documentação e comunicação centralizada.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Você envia o que procura",
      text: "O cliente informa o produto, referência, cidade ou origem desejada e expectativa de compra.",
    },
    {
      number: "02",
      title: "A Confere avalia a viabilidade",
      text: "Analisamos se a compra compensa e se existe uma forma segura de conduzir o pedido.",
    },
    {
      number: "03",
      title: "Apresentamos uma orientação",
      text: "O cliente recebe uma visão clara de custos, riscos, prazos estimados e próximos passos.",
    },
    {
      number: "04",
      title: "O cliente decide se aprova",
      text: "Nenhuma compra segue sem aprovação prévia do cliente sobre as condições finais.",
    },
    {
      number: "05",
      title: "O pedido é acompanhado",
      text: "A operação é conduzida com processo, comunicação oficial e registros quando necessários.",
    },
    {
      number: "06",
      title: "Entrega com rastreio",
      text: "Sempre que possível, o envio é feito com rastreabilidade e documentação do andamento.",
    },
  ];

  const security = [
    "Atendimento centralizado pelos canais oficiais da Confere.",
    "Análise prévia antes de qualquer recomendação de compra.",
    "Produtos irregulares, falsificados ou sem origem não são aceitos.",
    "Pedidos de maior valor passam por critérios adicionais de segurança.",
    "O cliente recebe orientação antes de decidir seguir com a compra.",
    "A operação só avança quando houver viabilidade mínima identificada.",
  ];

  const partners = [
    {
      title: "Lojas e fornecedores",
      text: "Negócios confiáveis que desejam receber pedidos qualificados e atuar com mais organização.",
    },
    {
      title: "Operadores locais",
      text: "Pessoas previamente cadastradas para apoiar demandas autorizadas dentro do processo da Confere.",
    },
    {
      title: "Parceiros logísticos",
      text: "Estruturas de apoio para coleta, despacho, redirecionamento ou envio quando a operação permitir.",
    },
  ];

  const faq = [
    {
      question: "A Confere vende os produtos?",
      answer:
        "Em regra, não. A Confere atua como intermediadora de compra assistida, ajudando o cliente a avaliar, organizar e conduzir uma compra com mais segurança.",
    },
    {
      question: "A Confere garante que sempre será mais barato?",
      answer:
        "Não. O objetivo é analisar se a compra compensa. Quando o custo final, o risco ou a logística não fizerem sentido, a recomendação pode ser não seguir com a compra.",
    },
    {
      question: "Vocês trabalham apenas com Paraguai?",
      answer:
        "Não. A Confere pode avaliar compras em lojas distantes, regiões de fronteira e também operações internacionais, como Estados Unidos e China, quando houver viabilidade.",
    },
    {
      question: "Produtos acima de 500 dólares podem ser comprados?",
      answer:
        "Podem ser analisados, mas nem sempre compensam. Produtos de maior valor exigem mais cuidado, simulação de custos, análise tributária, logística adequada e aprovação clara do cliente.",
    },
    {
      question: "A Confere aceita qualquer produto?",
      answer:
        "Não. Produtos proibidos, falsificados, sem origem, irregulares ou com risco jurídico não são aceitos.",
    },
    {
      question: "Lojas e parceiros podem se cadastrar?",
      answer:
        "Sim. A Confere pode avaliar lojas, operadores e parceiros logísticos que desejem atuar de forma organizada, documentada e profissional.",
    },
  ];

  return (
    <div className="site">
      <header className="header">
        <div className="container header-content">
          <a href="#inicio" className="logo">
            Confere
          </a>

          <nav className="nav">
            <a href="#como-funciona">Como funciona</a>
            <a href="#seguranca">Segurança</a>
            <a href="#parceiros">Parceiros</a>
            <a href="#cotacao">Cotação</a>
          </nav>

          <button className="btn btn-dark header-btn" onClick={goWhatsApp}>
            Falar no WhatsApp
          </button>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="hero-bg hero-bg-left"></div>
          <div className="hero-bg hero-bg-right"></div>

          <div className="container hero-content">
            <span className="eyebrow">Confere Via — compra assistida segura</span>

            <h1>Compre de longe com tudo conferido.</h1>

            <p className="hero-subtitle">
              A Confere conecta clientes a oportunidades de compra com mais segurança,
              organização e análise profissional, reduzindo incertezas antes da decisão.
            </p>

            <div className="hero-actions">
              <button className="btn btn-dark" onClick={goWhatsApp}>
                Pedir cotação
              </button>

              <button className="btn btn-light" onClick={goWhatsApp}>
                Ser parceiro
              </button>
            </div>

            <p className="hero-note">O caminho seguro da loja até você.</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading center">
              <span className="tag">Confiança</span>
              <h2>Uma compra distante não precisa ser uma aposta.</h2>
              <p>
                A Confere nasceu para transformar compras incertas em processos mais claros,
                documentados e avaliados antes de qualquer decisão.
              </p>
            </div>

            <div className="grid four">
              {pillars.map((item, index) => (
                <div className="card pillar-card" key={index}>
                  <div className="icon-box">{index + 1}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section muted">
          <div className="container narrow">
            <div className="section-heading center">
              <span className="tag">O desafio</span>
              <h2>Comprar de longe pode compensar. O difícil é saber quando confiar.</h2>
              <p>
                Muitas pessoas encontram preços melhores, produtos específicos ou oportunidades
                em outras cidades, fronteiras e mercados internacionais. O problema começa quando
                falta clareza sobre origem, condição, envio, risco, custo final e responsabilidade.
              </p>
            </div>
          </div>
        </section>

        <section id="como-funciona" className="section">
          <div className="container">
            <div className="section-heading center">
              <span className="tag">Processo</span>
              <h2>Como funciona</h2>
              <p>
                Um fluxo simples para o cliente, com análise e organização antes da compra.
              </p>
            </div>

            <div className="grid three">
              {process.map((item) => (
                <div className="card step-card" key={item.number}>
                  <span className="step-number">{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="seguranca" className="section dark-section">
          <div className="container">
            <div className="section-heading">
              <span className="tag tag-dark">Segurança</span>
              <h2>Segurança por processo, não por promessa.</h2>
              <p>
                A Confere não trabalha com improviso. Cada operação precisa fazer sentido,
                respeitar critérios mínimos e preservar cliente, empresa e parceiros.
              </p>
            </div>

            <div className="security-grid">
              {security.map((item, index) => (
                <div className="security-item" key={index}>
                  <span>✓</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container narrow">
            <div className="section-heading center">
              <span className="tag">Importações</span>
              <h2>Compras nacionais e internacionais com análise de viabilidade.</h2>
              <p>
                A Confere também pode avaliar compras dos Estados Unidos e da China, considerando
                custo final, risco, prazo, documentação e logística. O foco não é prometer o menor
                preço, mas orientar quando a operação realmente faz sentido.
              </p>
            </div>
          </div>
        </section>

        <section id="parceiros" className="section muted">
          <div className="container">
            <div className="section-heading">
              <span className="tag">Rede</span>
              <h2>Faça parte da rede Confere</h2>
              <p>
                Buscamos parceiros confiáveis para construir uma operação segura, profissional
                e bem posicionada no mercado.
              </p>
            </div>

            <div className="grid three">
              {partners.map((item, index) => (
                <div className="card partner-card" key={index}>
                  <div className="icon-box">{index + 1}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>

            <div className="center action-space">
              <button className="btn btn-dark" onClick={goWhatsApp}>
                Quero ser parceiro
              </button>
            </div>
          </div>
        </section>

        <section id="cotacao" className="cta">
          <div className="container cta-content">
            <h2>Quer comprar de longe, mas não sabe em quem confiar?</h2>
            <p>
              Envie o produto que procura. A Confere analisa se a compra é possível,
              se compensa e qual nível de proteção faz sentido.
            </p>

            <button className="btn btn-white" onClick={goWhatsApp}>
              Chamar no WhatsApp
            </button>
          </div>
        </section>

        <section className="section">
          <div className="container faq-container">
            <div className="section-heading center">
              <span className="tag">Dúvidas</span>
              <h2>Perguntas frequentes</h2>
              <p>Informações importantes antes de solicitar uma cotação.</p>
            </div>

            <div className="faq-list">
              {faq.map((item, index) => (
                <div
                  className={`faq-item ${openFaq === index ? "active" : ""}`}
                  key={index}
                >
                  <button
                    className="faq-question"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span>{item.question}</span>
                    <strong>{openFaq === index ? "−" : "+"}</strong>
                  </button>

                  {openFaq === index && <p className="faq-answer">{item.answer}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <h2>Confere Via</h2>
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
            <a href="#parceiros">Parceiros</a>
            <a href="#cotacao">Cotação</a>
          </div>
        </div>

        <div className="container legal">
          <p>
            A Confere Via atua como intermediadora de compra assistida. Disponibilidade,
            preço, garantia, prazo, envio, tributação e condições finais dependem da loja,
            produto, parceiro logístico e análise do pedido.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
