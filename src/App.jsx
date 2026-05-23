const whatsapp = "https://wa.me/5518981601801";

function Header() {
  return (
    <header className="header">
      <div className="brand">Confere</div>
      <nav>
        <a href="#como-funciona">Como funciona</a>
        <a href="#seguranca">Segurança</a>
        <a href="#parceiros">Parceiros</a>
        <a href="#cotacao">Cotação</a>
      </nav>
      <a className="btn btn-dark" href={whatsapp} target="_blank" rel="noreferrer">
        Falar no WhatsApp
      </a>
    </header>
  );
}

function Card({ title, text }) {
  return (
    <div className="card">
      <div className="icon">✓</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function Step({ number, title, text }) {
  return (
    <div className="step">
      <span>{number}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function FAQ({ question, answer }) {
  return (
    <details className="faq">
      <summary>{question}</summary>
      <p>{answer}</p>
    </details>
  );
}

export default function App() {
  return (
    <>
      <Header />

      <main>
        <section className="hero">
          <p className="eyebrow">Confere Via — compra assistida segura</p>
          <h1>Compre de longe com tudo conferido.</h1>
          <p className="hero-text">
            A Confere conecta clientes a lojas parceiras, operadores locais verificados
            e pontos parceiros, com processo documentado, produto conferido e envio rastreado.
          </p>
          <div className="hero-actions">
            <a className="btn btn-dark" href={whatsapp} target="_blank" rel="noreferrer">
              Pedir cotação
            </a>
            <a className="btn btn-light" href={whatsapp} target="_blank" rel="noreferrer">
              Ser parceiro
            </a>
          </div>
          <p className="hero-note">O caminho seguro da loja até você.</p>
        </section>

        <section className="section">
          <div className="section-title center">
            <h2>Quatro camadas de segurança</h2>
            <p>Um processo criado para reduzir riscos antes, durante e depois da compra.</p>
          </div>

          <div className="grid four">
            <Card
              title="Loja confirmada"
              text="Produto, preço, disponibilidade e condição verificados antes da aprovação."
            />
            <Card
              title="Operador verificado"
              text="Apoio local cadastrado, com regras claras e atuação documentada."
            />
            <Card
              title="Produto conferido"
              text="Fotos, vídeos, comprovantes e checklist conforme o tipo de pedido."
            />
            <Card
              title="Envio rastreado"
              text="Registro de embalagem, envio e código de rastreio quando aplicável."
            />
          </div>
        </section>

        <section className="section problem">
          <p className="tag">O desafio</p>
          <h2>Comprar de longe pode compensar. O problema é confiar em quem você nunca viu.</h2>
          <p>
            Muitas pessoas querem comprar em lojas distantes ou regiões de fronteira,
            mas têm medo de golpe, produto errado, falta de comprovante, envio sem rastreio
            ou negociação informal.
          </p>
        </section>

        <section className="section" id="como-funciona">
          <div className="section-title center">
            <h2>Como funciona</h2>
            <p>Processo documentado, da cotação ao envio.</p>
          </div>

          <div className="grid three">
            <Step number="01" title="Cliente pede cotação" text="Você envia o produto que procura." />
            <Step number="02" title="A Confere analisa" text="Avaliamos loja, produto, risco e viabilidade." />
            <Step number="03" title="Loja confirma informações" text="A Confere valida as informações com a loja ou parceiro autorizado." />
            <Step number="04" title="Cliente aprova o custo final" text="Você decide se compensa prosseguir." />
            <Step number="05" title="Produto é conferido" text="Fotos, vídeos, comprovantes e checklist quando aplicável." />
            <Step number="06" title="Envio é registrado" text="Registro de envio, embalagem e rastreio." />
          </div>
        </section>

        <section className="section" id="seguranca">
          <div className="section-title">
            <p className="tag">Segurança</p>
            <h2>Segurança por processo, não por promessa.</h2>
          </div>

          <div className="grid three">
            <Card title="Comunicação oficial" text="Cliente não fala direto com operador local." />
            <Card title="Pagamento controlado" text="Operador não recebe pagamento direto do cliente." />
            <Card title="Confirmação prévia" text="Produto e preço são confirmados antes da aprovação." />
            <Card title="Mais provas" text="Pedidos de maior valor exigem mais documentação." />
            <Card title="Produtos recusados" text="Produtos irregulares, falsificados ou sem origem não são aceitos." />
            <Card title="Tudo documentado" text="Conversas, aprovações, fotos, vídeos e rastreios ficam organizados." />
          </div>
        </section>

        <section className="section" id="parceiros">
          <div className="section-title">
            <p className="tag">Parceiros</p>
            <h2>Faça parte da rede Confere Via</h2>
            <p>
              Estamos cadastrando lojas, operadores locais e pontos parceiros para criar
              uma rede mais segura de compra assistida.
            </p>
          </div>

          <div className="grid three">
            <Card
              title="Lojas Parceiras"
              text="Confirmam produto, preço, disponibilidade, comprovante e retirada autorizada."
            />
            <Card
              title="Operadores Locais Verificados"
              text="Ajudam a cotar, verificar lojas, enviar fotos e vídeos e apoiar pedidos autorizados."
            />
            <Card
              title="Pontos Parceiros"
              text="Podem receber, conferir, embalar e enviar produtos com rastreio."
            />
          </div>

          <div className="center">
            <a className="btn btn-dark" href={whatsapp} target="_blank" rel="noreferrer">
              Quero ser parceiro
            </a>
          </div>
        </section>

        <section className="cta" id="cotacao">
          <h2>Quer comprar de longe, mas não sabe em quem confiar?</h2>
          <p>
            Envie o produto que procura. A Confere analisa se a compra é possível,
            se compensa e qual nível de proteção faz sentido.
          </p>
          <a className="btn btn-light" href={whatsapp} target="_blank" rel="noreferrer">
            Chamar no WhatsApp
          </a>
        </section>

        <section className="section faq-section">
          <div className="section-title center">
            <h2>Perguntas frequentes</h2>
            <p>Tire suas dúvidas sobre como a Confere funciona.</p>
          </div>

          <div className="faq-list">
            <FAQ
              question="A Confere vende os produtos?"
              answer="Em regra, não. A Confere atua como intermediadora de compra assistida, organizando a comunicação entre cliente, loja, operador local e ponto parceiro dentro de um processo documentado."
            />
            <FAQ
              question="O cliente pode falar direto com o operador?"
              answer="Não. Para manter a segurança da operação, a comunicação deve ocorrer pelos canais oficiais da Confere."
            />
            <FAQ
              question="O operador recebe pagamento direto do cliente?"
              answer="Não. O cliente deve pagar apenas pelos canais oficiais definidos pela Confere. O operador atua dentro do processo autorizado e documentado."
            />
            <FAQ
              question="A Confere garante que sempre será mais barato?"
              answer="Não. A Confere analisa se a compra compensa antes de seguir. Se o custo final ficar alto ou o risco não compensar, a recomendação pode ser não comprar."
            />
            <FAQ
              question="Lojas podem se cadastrar?"
              answer="Sim. Lojas confiáveis podem se cadastrar para confirmar produto, preço, disponibilidade, condição, comprovantes, garantia e retirada autorizada."
            />
            <FAQ
              question="A Confere trabalha com qualquer produto?"
              answer="Não. Produtos falsificados, proibidos, sem origem, sem comprovação mínima ou com risco irregular podem ser recusados."
            />
          </div>
        </section>
      </main>

      <footer>
        <div>
          <h2>Confere Via</h2>
          <p>Compre de longe com tudo conferido.</p>
          <p>Loja confirmada, operador verificado, produto conferido e envio rastreado.</p>
        </div>

        <div>
          <h3>Contato</h3>
          <p>WhatsApp: (18) 98160-1801</p>
          <p>Site: conferevia.com.br</p>
        </div>

        <div>
          <h3>Navegação</h3>
          <a href="#como-funciona">Como funciona</a>
          <a href="#seguranca">Segurança</a>
          <a href="#parceiros">Parceiros</a>
          <a href="#cotacao">Cotação</a>
        </div>

        <p className="legal">
          A Confere Via atua como intermediadora de compra assistida. Disponibilidade,
          preço, garantia, envio e condições finais dependem da loja, parceiro, produto
          e análise do pedido.
        </p>
      </footer>
    </>
  );
}
