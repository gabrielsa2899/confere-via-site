const whatsapp = "https://wa.me/5518981601801";

function Header() {
  return (
    <header className="header">
      <div className="brand">Confere</div>
      <nav>
        <a href="#como-funciona">Como funciona</a>
        <a href="#seguranca">Segurança</a>
        <a href="#modalidades">Modalidades</a>
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
            A Confere ajuda você a comprar de longe com mais segurança, seja em lojas
            de outras cidades, regiões de fronteira ou importações dos EUA e China via
            empresas courier e redirecionadoras.
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
              title="Origem verificada"
              text="Loja, fornecedor, anúncio ou canal de compra analisado antes da aprovação."
            />
            <Card
              title="Produto conferido"
              text="Fotos, vídeos, comprovantes, descrição e checklist conforme o tipo de pedido."
            />
            <Card
              title="Custo final estimado"
              text="Preço, taxa, frete, imposto provável e viabilidade analisados antes da decisão."
            />
            <Card
              title="Envio rastreado"
              text="Acompanhamento do envio, código de rastreio e registro do processo quando aplicável."
            />
          </div>
        </section>

        <section className="section" id="modalidades">
          <div className="section-title center">
            <h2>Modalidades da Confere</h2>
            <p>Escolha o caminho mais seguro para sua compra.</p>
          </div>

          <div className="grid three">
            <Card
              title="Confere Cotação"
              text="Para quem encontrou um produto e quer saber se compensa antes de pagar."
            />
            <Card
              title="Confere Fronteira"
              text="Para compras em lojas de regiões de fronteira, com análise, conferência e logística quando viável."
            />
            <Card
              title="Confere Import"
              text="Para compras dos EUA e China por meio de empresas courier e redirecionadoras, com simulação de custos, impostos e rastreio."
            />
          </div>
        </section>

        <section className="section problem">
          <p className="tag">O desafio</p>
          <h2>Comprar de longe pode compensar. O problema é confiar em quem você nunca viu.</h2>
          <p>
            Muitas pessoas querem comprar em lojas distantes, regiões de fronteira ou
            até importar produtos dos EUA e China, mas têm medo de golpe, produto errado,
            falta de comprovante, imposto inesperado, envio sem rastreio ou negociação informal.
          </p>
        </section>

        <section className="section" id="como-funciona">
          <div className="section-title center">
            <h2>Como funciona</h2>
            <p>Processo documentado, da cotação ao envio.</p>
          </div>

          <div className="grid three">
            <Step
              number="01"
              title="Cliente pede cotação"
              text="Você envia o produto que procura, loja, anúncio ou país de origem."
            />
            <Step
              number="02"
              title="A Confere analisa"
              text="Avaliamos loja, produto, risco, custo estimado, imposto provável e viabilidade."
            />
            <Step
              number="03"
              title="A origem da compra é verificada"
              text="A Confere valida loja, fornecedor, anúncio, produto, preço e condições, conforme a modalidade do pedido."
            />
            <Step
              number="04"
              title="Cliente aprova o custo final"
              text="Você decide se compensa prosseguir antes de qualquer etapa sensível."
            />
            <Step
              number="05"
              title="Produto é conferido"
              text="Fotos, vídeos, comprovantes e checklist são registrados quando aplicável."
            />
            <Step
              number="06"
              title="Envio é acompanhado"
              text="Quando aplicável, o envio é acompanhado por rastreio, comprovantes e atualizações do processo."
            />
          </div>
        </section>

        <section className="section" id="seguranca">
          <div className="section-title">
            <p className="tag">Segurança</p>
            <h2>Segurança por processo, não por promessa.</h2>
          </div>

          <div className="grid three">
            <Card
              title="Comunicação oficial"
              text="Cliente não fala direto com operador local sem autorização da Confere."
            />
            <Card
              title="Pagamento controlado"
              text="Operador não recebe pagamento direto do cliente."
            />
            <Card
              title="Confirmação prévia"
              text="Produto, preço e condições são confirmados antes da aprovação."
            />
            <Card
              title="Análise de taxas e impostos"
              text="Pedidos internacionais ou acima de determinados valores passam por análise especial de custo final."
            />
            <Card
              title="Produtos recusados"
              text="Produtos proibidos, falsificados, irregulares ou sem origem comprovada não são aceitos."
            />
            <Card
              title="Tudo documentado"
              text="Conversas, aprovações, fotos, vídeos, comprovantes e rastreios ficam organizados."
            />
          </div>
        </section>

        <section className="section" id="parceiros">
          <div className="section-title">
            <p className="tag">Parceiros</p>
            <h2>Faça parte da rede Confere</h2>
            <p>
              Estamos estruturando uma rede de fornecedores consultados, operadores locais,
              pontos parceiros e canais de importação para tornar compras de longe mais
              organizadas e seguras.
            </p>
          </div>

          <div className="grid three">
            <Card
              title="Lojas e fornecedores consultados"
              text="A Confere consulta preço, disponibilidade, condição, comprovante e forma de retirada quando necessário."
            />
            <Card
              title="Operadores locais verificados"
              text="Ajudam a cotar, verificar lojas, enviar fotos e vídeos e apoiar pedidos autorizados."
            />
            <Card
              title="Couriers e redirecionadores"
              text="Empresas e canais usados para importações dos EUA e China, conforme análise de viabilidade."
            />
          </div>

          <div className="center">
            <a className="btn btn-dark" href={whatsapp} target="_blank" rel="noreferrer">
              Quero ser parceiro
            </a>
          </div>
        </section>

        <section className="cta" id="cotacao">
          <h2>Quer comprar de longe ou importar, mas não sabe se compensa?</h2>
          <p>
            Envie o produto que procura. A Confere analisa se a compra é possível,
            se compensa, quais custos podem existir e qual nível de proteção faz sentido.
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
              answer="Em regra, não. A Confere atua como intermediadora de compra assistida, organizando a comunicação entre cliente, loja, fornecedor, operador local, courier ou ponto parceiro dentro de um processo documentado."
            />
            <FAQ
              question="O cliente pode falar direto com o operador?"
              answer="Não. Para manter a segurança da operação, a comunicação deve ocorrer pelos canais oficiais da Confere, salvo autorização específica."
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
              answer="Sim. Lojas confiáveis podem se cadastrar ou apenas ser consultadas para confirmar produto, preço, disponibilidade, condição, comprovantes, garantia e retirada autorizada."
            />
            <FAQ
              question="A Confere trabalha com qualquer produto?"
              answer="Não. Produtos falsificados, proibidos, sem origem, sem comprovação mínima ou com risco irregular podem ser recusados."
            />
            <FAQ
              question="A Confere também ajuda com compras dos EUA e China?"
              answer="Sim. A Confere pode apoiar compras internacionais por meio de empresas courier ou redirecionadoras, sempre com análise de viabilidade, custos, taxas, impostos, frete e rastreio."
            />
            <FAQ
              question="A Confere é importadora?"
              answer="Não necessariamente. A Confere atua como intermediadora de compra assistida e organização operacional. Quando houver importação, o processo depende da empresa courier ou redirecionadora, das regras aplicáveis, do produto e da aprovação do cliente."
            />
            <FAQ
              question="Produtos acima de US$ 500 podem ser comprados?"
              answer="Podem ser analisados, mas entram em análise especial. A Confere calcula custo final estimado, impostos, taxas, frete e compara com o preço no Brasil. Se não compensar, a recomendação pode ser não comprar."
            />
            <FAQ
              question="A Confere garante que importar será mais barato?"
              answer="Não. A Confere não promete economia garantida. O objetivo é verificar se a compra compensa antes do cliente seguir."
            />
          </div>
        </section>
      </main>

      <footer>
        <div>
          <h2>Confere Via</h2>
          <p>Compre de longe com tudo conferido.</p>
          <p>Compra assistida para lojas distantes, fronteira e importações via courier.</p>
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
          <a href="#modalidades">Modalidades</a>
          <a href="#cotacao">Cotação</a>
        </div>

        <p className="legal">
          A Confere atua como intermediadora de compra assistida e organização operacional.
          Disponibilidade, preço, garantia, envio, impostos, taxas e condições finais
          dependem da loja, fornecedor, courier, parceiro, produto e análise do pedido.
        </p>
      </footer>
    </>
  );
}
