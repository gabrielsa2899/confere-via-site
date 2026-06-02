import "./index.css";

const WHATSAPP_URL =
  "https://wa.me/5518981601801?text=Ol%C3%A1%2C%20quero%20solicitar%20uma%20An%C3%A1lise%20Confere.";

const ANALISE_URL = WHATSAPP_URL;

function App() {
  const path = window.location.pathname;

  if (path === "/termos") return <LegalPage type="termos" />;
  if (path === "/privacidade") return <LegalPage type="privacidade" />;
  if (path === "/reembolso") return <LegalPage type="reembolso" />;

  return <Home />;
}

function Header() {
  return (
    <header className="header">
      <a href="/" className="brand">
        <div className="brand-mark">✓</div>
        <span>Confere</span>
      </a>

      <nav className="nav">
        <a href="/#como-funciona">Como funciona</a>
        <a href="/#seguranca">O que analisamos</a>
        <a href="/#servicos">Serviços</a>
        <a href="/#cotacao">Cotação</a>
      </nav>

      <a
        className="header-button"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
      >
        Falar no WhatsApp
      </a>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>Confere</strong>
        <p>Compre de longe com tudo conferido.</p>
      </div>

      <div className="footer-links">
        <a href="/termos">Termos de Uso</a>
        <a href="/privacidade">Política de Privacidade</a>
        <a href="/reembolso">Cancelamento e Reembolso</a>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <div className="site">
      <Header />

      <main>
        <section className="hero">
          <div className="eyebrow">Confere Compra Assistida</div>

          <h1>Compre de longe com tudo conferido.</h1>

          <p className="hero-subtitle">
            A Confere ajuda você a analisar, validar e acompanhar compras feitas
            de outros lugares com mais segurança, antes de fechar negócio.
          </p>

          <p className="hero-text">
            Analisamos fornecedor, produto, preço, risco, custo estimado, envio,
            impostos, rastreio e possibilidade de conferência.
          </p>

          <div className="hero-actions">
            <a
              className="primary-button"
              href={ANALISE_URL}
              target="_blank"
              rel="noreferrer"
            >
              Solicitar análise
            </a>

            <a
              className="secondary-button"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
            >
              Falar no WhatsApp
            </a>
          </div>
        </section>

        <section className="section" id="o-que-faz">
          <div className="section-header">
            <span className="section-label">O que a Confere faz</span>
            <h2>Antes de comprar, a Confere analisa por você.</h2>
            <p>
              Organizamos informações importantes para reduzir incertezas antes
              da decisão de compra.
            </p>
          </div>

          <div className="grid six">
            <Card title="Validação do fornecedor" text="Análise inicial de confiabilidade, presença, histórico e sinais de risco." />
            <Card title="Análise do produto" text="Verificação das informações do produto, compatibilidade, condição e possíveis inconsistências." />
            <Card title="Estimativa de custo final" text="Avaliação de preço, frete, taxas, impostos possíveis e custo total aproximado." />
            <Card title="Avaliação de risco" text="Identificação de pontos críticos antes do cliente seguir com a compra." />
            <Card title="Conferência e evidências" text="Quando aplicável, organizamos registros, comprovantes, fotos, vídeos e atualizações." />
            <Card title="Acompanhamento da operação" text="Apoio durante o processo, com registros e comunicação organizada." />
          </div>
        </section>

        <section className="section soft" id="como-funciona">
          <div className="section-header">
            <span className="section-label">Como funciona</span>
            <h2>Um processo simples, claro e documentado.</h2>
          </div>

          <div className="steps">
            <Step number="01" title="Você envia o produto, link ou fornecedor." />
            <Step number="02" title="A Confere analisa os riscos e custos." />
            <Step number="03" title="Você recebe uma recomendação clara." />
            <Step number="04" title="Se quiser, seguimos com a compra assistida." />
            <Step number="05" title="A operação é acompanhada com registros e atualizações." />
          </div>
        </section>

        <section className="section" id="servicos">
          <div className="section-header">
            <span className="section-label">Serviços</span>
            <h2>Escolha o nível de apoio que faz sentido para sua compra.</h2>
          </div>

          <div className="grid three">
            <Card title="Análise Confere" text="Receba uma análise sobre fornecedor, preço, risco, custo estimado, impostos, prazo e viabilidade antes de comprar." />
            <Card title="Compra Assistida Confere" text="Além da análise, a Confere acompanha a operação, organiza comprovantes, rastreios, atualizações e evidências." />
            <Card title="Confere para Lojistas" text="Para pequenos revendedores que compram com frequência e precisam validar fornecedores, calcular margem e reduzir riscos." />
          </div>
        </section>

        <section className="section soft" id="validra">
          <div className="split">
            <div>
              <span className="section-label">Método interno</span>
              <h2>Validação inteligente por trás da operação.</h2>
            </div>

            <p>
              A Confere utiliza o método Validra para avaliar riscos,
              inconsistências, fornecedores, documentos, custos, pagamentos e
              logística antes de recomendar uma operação.
            </p>
          </div>
        </section>

        <section className="section" id="para-quem">
          <div className="section-header">
            <span className="section-label">Para quem é</span>
            <h2>Para quem precisa decidir melhor antes de comprar.</h2>
          </div>

          <div className="grid six">
            <Card title="Produto caro de longe" text="Para quem quer mais segurança antes de pagar por um item de maior valor." />
            <Card title="Medo de golpe" text="Para quem quer evitar decisões baseadas apenas em conversa informal." />
            <Card title="Importação com critério" text="Para quem precisa entender custo, risco, taxas e viabilidade." />
            <Card title="Pequenos lojistas" text="Para revendedores que precisam validar oportunidades e fornecedores." />
            <Card title="Comparação de custo final" text="Para quem quer analisar preço real, margem, frete e possíveis encargos." />
            <Card title="Acompanhamento organizado" text="Para quem quer registros, atualizações e evidências da operação." />
          </div>
        </section>

        <section className="section soft" id="seguranca">
          <div className="section-header">
            <span className="section-label">O que analisamos</span>
            <h2>Critérios que ajudam a reduzir incertezas.</h2>
          </div>

          <div className="check-list">
            {[
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
            ].map((item) => (
              <div className="check-item" key={item}>
                <span>✓</span>
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="section important">
          <div className="important-box">
            <span className="section-label">Importante</span>
            <p>
              A Confere não garante lucro, liberação aduaneira, ausência de
              impostos, entrega por terceiros ou inexistência total de riscos.
              Nosso papel é analisar, orientar, validar informações, organizar
              evidências e acompanhar a operação para reduzir incertezas.
            </p>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="section-header">
            <span className="section-label">FAQ</span>
            <h2>Perguntas frequentes</h2>
          </div>

          <div className="faq">
            <details>
              <summary>A Confere vende produtos?</summary>
              <p>Não. A Confere atua como serviço de análise, validação e compra assistida.</p>
            </details>

            <details>
              <summary>A Confere garante que não haverá risco?</summary>
              <p>Não. Toda compra pode ter riscos. A Confere trabalha para identificar, organizar e reduzir incertezas.</p>
            </details>

            <details>
              <summary>Vocês trabalham com importação?</summary>
              <p>A Confere pode analisar compras nacionais ou internacionais quando houver viabilidade.</p>
            </details>

            <details>
              <summary>O pagamento é feito diretamente ao operador?</summary>
              <p>Não. A comunicação e os pagamentos devem seguir os canais oficiais definidos pela Confere.</p>
            </details>

            <details>
              <summary>O serviço serve para lojistas?</summary>
              <p>Sim. Pequenos lojistas podem usar a Confere para analisar fornecedores, custo final, margem e risco.</p>
            </details>
          </div>
        </section>

        <section className="final-cta" id="cotacao">
          <h2>Quer comprar de longe com mais segurança?</h2>
          <p>
            Envie o produto, fornecedor ou link que você está analisando. A
            Confere avalia antes de você fechar negócio.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href={ANALISE_URL} target="_blank" rel="noreferrer">
              Solicitar Análise Confere
            </a>

            <a className="secondary-button" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              Falar no WhatsApp
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function LegalPage({ type }) {
  const content = legalContent[type];

  return (
    <div className="site">
      <Header />

      <main className="legal-page">
        <section className="legal-hero">
          <span className="section-label">{content.label}</span>
          <h1>{content.title}</h1>
          <p>{content.description}</p>
        </section>

        <section className="legal-content">
          {content.sections.map((section) => (
            <div className="legal-block" key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          ))}

          <div className="legal-actions">
            <a className="primary-button" href="/">
              Voltar ao início
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

const legalContent = {
  termos: {
    label: "Termos de Uso",
    title: "Termos de Uso da Confere",
    description:
      "Condições gerais para utilização dos serviços de análise, validação e acompanhamento da Confere.",
    sections: [
      {
        title: "1. Sobre a Confere",
        paragraphs: [
          "A Confere atua como serviço de análise, validação e acompanhamento de compras feitas de longe. A empresa não é loja, marketplace, e-commerce ou revendedora direta de produtos.",
          "O objetivo da Confere é ajudar o cliente a tomar decisões mais seguras por meio da análise de fornecedor, produto, preço, risco, custo estimado, envio, rastreio, documentos e possibilidade de conferência.",
        ],
      },
      {
        title: "2. Limites do serviço",
        paragraphs: [
          "A Confere não garante lucro, economia, ausência de impostos, liberação aduaneira, entrega por terceiros ou inexistência total de riscos.",
          "A decisão final de comprar ou não é sempre do cliente. A Confere fornece informações, organização e acompanhamento para reduzir incertezas, mas não elimina todos os riscos de uma operação.",
        ],
      },
      {
        title: "3. Responsabilidades do cliente",
        paragraphs: [
          "O cliente deve fornecer informações verdadeiras, completas e atualizadas sobre o produto, fornecedor, link, valores, cidade, forma de pagamento e demais dados necessários para análise.",
          "O cliente não deve realizar pagamentos, acordos ou tratativas fora dos canais oficiais definidos pela Confere quando estiver utilizando o serviço de compra assistida.",
        ],
      },
      {
        title: "4. Terceiros envolvidos",
        paragraphs: [
          "Lojas, fornecedores, transportadoras, couriers, operadores, plataformas de pagamento e órgãos públicos são terceiros independentes.",
          "A Confere não se responsabiliza por atos, atrasos, recusas, falhas, bloqueios ou decisões tomadas por terceiros fora do controle direto da operação combinada.",
        ],
      },
      {
        title: "5. Uso adequado",
        paragraphs: [
          "O serviço deve ser utilizado apenas para operações lícitas e compatíveis com as regras aplicáveis.",
          "A Confere poderá recusar análises, produtos, fornecedores ou operações que apresentem risco elevado, suspeita de irregularidade ou incompatibilidade com suas políticas internas.",
        ],
      },
    ],
  },

  privacidade: {
    label: "Política de Privacidade",
    title: "Política de Privacidade",
    description:
      "Como a Confere pode coletar, usar e proteger informações enviadas por clientes durante uma solicitação.",
    sections: [
      {
        title: "1. Informações coletadas",
        paragraphs: [
          "A Confere pode coletar informações fornecidas pelo cliente, como nome, WhatsApp, cidade, produto de interesse, link, fornecedor, valor aproximado e mensagens adicionais.",
          "Essas informações são utilizadas para analisar a solicitação, organizar o atendimento e acompanhar a operação quando contratado.",
        ],
      },
      {
        title: "2. Uso das informações",
        paragraphs: [
          "Os dados enviados podem ser usados para comunicação com o cliente, elaboração de análise, organização de evidências, envio de atualizações e registro interno da operação.",
          "A Confere não deve vender dados pessoais de clientes a terceiros.",
        ],
      },
      {
        title: "3. Compartilhamento necessário",
        paragraphs: [
          "Em algumas operações, informações podem precisar ser compartilhadas com parceiros operacionais, fornecedores, pontos de conferência, transportadores ou prestadores relacionados à operação.",
          "Esse compartilhamento deve ocorrer apenas quando necessário para análise, validação, conferência, acompanhamento ou execução do serviço solicitado.",
        ],
      },
      {
        title: "4. Segurança",
        paragraphs: [
          "A Confere busca adotar cuidados razoáveis para proteger as informações recebidas e evitar acesso indevido.",
          "Mesmo assim, nenhum sistema ou canal digital é totalmente imune a riscos, e o cliente deve evitar enviar informações sensíveis desnecessárias.",
        ],
      },
      {
        title: "5. Solicitações do cliente",
        paragraphs: [
          "O cliente pode solicitar correção, atualização ou exclusão de informações, conforme aplicável e dentro dos limites necessários para cumprimento de obrigações operacionais, legais ou de registro.",
        ],
      },
    ],
  },

  reembolso: {
    label: "Cancelamento e Reembolso",
    title: "Política de Cancelamento e Reembolso",
    description:
      "Regras gerais para cancelamento de solicitações, análises e serviços de acompanhamento.",
    sections: [
      {
        title: "1. Antes do início da análise",
        paragraphs: [
          "Quando uma análise ainda não tiver sido iniciada, o cliente poderá solicitar cancelamento conforme as condições informadas no momento da contratação.",
          "Valores, prazos e formas de reembolso podem variar conforme o meio de pagamento utilizado e o estágio do atendimento.",
        ],
      },
      {
        title: "2. Após início da análise",
        paragraphs: [
          "Após o início da análise, validação, pesquisa, organização de informações ou contato operacional, o serviço poderá ser considerado em execução.",
          "Nesses casos, o reembolso poderá ser parcial ou não aplicável, conforme o trabalho já realizado e as condições combinadas previamente.",
        ],
      },
      {
        title: "3. Compra assistida",
        paragraphs: [
          "Na compra assistida, podem existir custos de terceiros, taxas, fretes, reservas, pagamentos a fornecedores ou despesas operacionais que não dependem exclusivamente da Confere.",
          "Valores pagos a terceiros seguem as regras desses terceiros e podem não ser reembolsáveis pela Confere.",
        ],
      },
      {
        title: "4. Operações não recomendadas",
        paragraphs: [
          "A Confere pode recomendar que o cliente não siga com determinada compra caso identifique custo alto, risco elevado, inconsistência, baixa viabilidade ou suspeita de problema.",
          "Essa recomendação faz parte do serviço de análise e não significa falha na prestação do serviço.",
        ],
      },
      {
        title: "5. Como solicitar",
        paragraphs: [
          "Solicitações de cancelamento ou reembolso devem ser feitas pelos canais oficiais da Confere, com identificação do cliente e informações da solicitação.",
          "A Confere analisará o caso conforme o estágio do serviço, registros existentes e condições previamente informadas.",
        ],
      },
    ],
  },
};

function Card({ title, text }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function Step({ number, title }) {
  return (
    <div className="step">
      <span>{number}</span>
      <p>{title}</p>
    </div>
  );
}

export default App;
