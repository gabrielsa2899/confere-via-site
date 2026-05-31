import "./index.css";

const WHATSAPP_URL =
  "https://wa.me/5518981601801?text=Ol%C3%A1%2C%20quero%20solicitar%20uma%20An%C3%A1lise%20Confere.";

// Futuramente, quando tiver formulário:
// const ANALISE_URL = "/formulario";
// ou:
// const ANALISE_URL = "https://forms.gle/seu-formulario";

const ANALISE_URL = WHATSAPP_URL;

function App() {
  return (
    <div className="site">
      <header className="header">
        <a href="#" className="brand">
          <div className="brand-mark">✓</div>
          <span>Confere</span>
        </a>

        <nav className="nav">
          <a href="#como-funciona">Como funciona</a>
          <a href="#seguranca">O que analisamos</a>
          <a href="#servicos">Serviços</a>
          <a href="#cotacao">Cotação</a>
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
            <Card
              title="Validação do fornecedor"
              text="Análise inicial de confiabilidade, presença, histórico e sinais de risco."
            />
            <Card
              title="Análise do produto"
              text="Verificação das informações do produto, compatibilidade, condição e possíveis inconsistências."
            />
            <Card
              title="Estimativa de custo final"
              text="Avaliação de preço, frete, taxas, impostos possíveis e custo total aproximado."
            />
            <Card
              title="Avaliação de risco"
              text="Identificação de pontos críticos antes do cliente seguir com a compra."
            />
            <Card
              title="Conferência e evidências"
              text="Quando aplicável, organizamos registros, comprovantes, fotos, vídeos e atualizações."
            />
            <Card
              title="Acompanhamento da operação"
              text="Apoio durante o processo, com registros e comunicação organizada."
            />
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
            <Card
              title="Análise Confere"
              text="Receba uma análise sobre fornecedor, preço, risco, custo estimado, impostos, prazo e viabilidade antes de comprar."
            />
            <Card
              title="Compra Assistida Confere"
              text="Além da análise, a Confere acompanha a operação, organiza comprovantes, rastreios, atualizações e evidências."
            />
            <Card
              title="Confere para Lojistas"
              text="Para pequenos revendedores que compram com frequência e precisam validar fornecedores, calcular margem e reduzir riscos."
            />
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
            <Card
              title="Produto caro de longe"
              text="Para quem quer mais segurança antes de pagar por um item de maior valor."
            />
            <Card
              title="Medo de golpe"
              text="Para quem quer evitar decisões baseadas apenas em conversa informal."
            />
            <Card
              title="Importação com critério"
              text="Para quem precisa entender custo, risco, taxas e viabilidade."
            />
            <Card
              title="Pequenos lojistas"
              text="Para revendedores que precisam validar oportunidades e fornecedores."
            />
            <Card
              title="Comparação de custo final"
              text="Para quem quer analisar preço real, margem, frete e possíveis encargos."
            />
            <Card
              title="Acompanhamento organizado"
              text="Para quem quer registros, atualizações e evidências da operação."
            />
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
              <p>
                Não. A Confere atua como serviço de análise, validação e compra
                assistida. A venda do produto depende do fornecedor.
              </p>
            </details>

            <details>
              <summary>A Confere garante que não haverá risco?</summary>
              <p>
                Não. Toda compra pode ter riscos. A Confere trabalha para
                identificar, organizar e reduzir incertezas antes da decisão.
              </p>
            </details>

            <details>
              <summary>Vocês trabalham com importação?</summary>
              <p>
                A Confere pode analisar compras nacionais ou internacionais
                quando houver viabilidade, sempre considerando custo final,
                risco, taxas, envio e documentação.
              </p>
            </details>

            <details>
              <summary>O pagamento é feito diretamente ao operador?</summary>
              <p>
                Não. A comunicação e os pagamentos devem seguir os canais
                oficiais definidos pela Confere.
              </p>
            </details>

            <details>
              <summary>O serviço serve para lojistas?</summary>
              <p>
                Sim. Pequenos lojistas podem usar a Confere para analisar
                fornecedores, custo final, margem e risco antes de comprar.
              </p>
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
            <a
              className="primary-button"
              href={ANALISE_URL}
              target="_blank"
              rel="noreferrer"
            >
              Solicitar Análise Confere
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
      </main>

      <footer className="footer">
        <div>
          <strong>Confere</strong>
          <p>Compre de longe com tudo conferido.</p>
        </div>

        <div className="footer-links">
          <a href="#">Termos de Uso</a>
          <a href="#">Política de Privacidade</a>
          <a href="#">Cancelamento e Reembolso</a>
        </div>
      </footer>
    </div>
  );
}

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
