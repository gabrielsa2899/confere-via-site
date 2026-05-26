import React from "react";
import {
  Check,
  Store,
  ShieldCheck,
  Camera,
  Truck,
  MessageCircle,
  Briefcase,
  MapPin,
  ClipboardCheck,
  Globe2,
  SearchCheck,
  FileCheck,
  LockKeyhole,
} from "lucide-react";

const whatsapp = "https://wa.me/5518981601801";

function Header() {
  return (
    <header className="header">
      <a className="brand" href="#top">Confere</a>

      <nav className="nav">
        <a href="#como-funciona">Como funciona</a>
        <a href="#seguranca">Segurança</a>
        <a href="#parceiros">Parceiros</a>
        <a href="#cotacao">Cotação</a>
      </nav>

      <a className="btn btn-dark header-btn" href={whatsapp} target="_blank" rel="noreferrer">
        <MessageCircle size={18} />
        Falar no WhatsApp
      </a>
    </header>
  );
}

function Card({ icon: Icon, title, children }) {
  return (
    <div className="card">
      {Icon && (
        <div className="icon">
          <Icon size={25} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{children}</p>
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

function SecurityItem({ children }) {
  return (
    <div className="security-card">
      <div className="check">
        <Check size={19} />
      </div>
      <p>{children}</p>
    </div>
  );
}

function FAQ({ q, children }) {
  return (
    <details className="faq">
      <summary>{q}</summary>
      <p>{children}</p>
    </details>
  );
}

export default function App() {
  return (
    <main id="top">
      <Header />

      <section className="hero">
        <div className="eyebrow">CONFERE VIA — COMPRA ASSISTIDA SEGURA</div>

        <h1>Compre de longe com tudo conferido.</h1>

        <p className="hero-sub">
          A Confere ajuda clientes a comprarem produtos de lojas distantes, no Brasil ou no exterior,
          com análise de viabilidade, processo documentado, conferência do produto e acompanhamento até o envio.
        </p>

        <div className="hero-actions">
          <a className="btn btn-dark" href={whatsapp} target="_blank" rel="noreferrer">
            <ClipboardCheck size={18} />
            Pedir cotação
          </a>

          <a className="btn btn-light" href={whatsapp} target="_blank" rel="noreferrer">
            <Briefcase size={18} />
            Ser parceiro
          </a>
        </div>

        <p className="hero-note">O caminho seguro entre a oportunidade e a compra.</p>
      </section>

      <section className="section">
        <div className="section-title centered">
          <h2>Compra assistida com mais segurança.</h2>
          <p>
            A Confere organiza cada pedido com critérios claros para reduzir riscos de golpe,
            produto errado, falta de comprovação ou compra que não compensa.
          </p>
        </div>

        <div className="grid four">
          <Card icon={SearchCheck} title="Análise prévia">
            Avaliamos se o produto, a loja, o custo e o risco fazem sentido antes de avançar.
          </Card>

          <Card icon={Store} title="Loja verificada">
            Produto, preço, disponibilidade e condições são confirmados antes da aprovação.
          </Card>

          <Card icon={Camera} title="Produto conferido">
            Quando aplicável, o pedido passa por conferência com registros e comprovantes.
          </Card>

          <Card icon={Truck} title="Envio acompanhado">
            O envio é registrado, acompanhado e documentado dentro do processo da Confere.
          </Card>
        </div>
      </section>

      <section className="section problem">
        <span className="pill">O DESAFIO</span>

        <h2>Comprar de longe pode compensar. O problema é saber se vale o risco.</h2>

        <p>
          Muitas pessoas encontram boas oportunidades em outras cidades, regiões de fronteira ou mercados
          internacionais, mas não sabem se a loja é confiável, se o produto existe, se o preço final compensa
          ou se a operação pode gerar prejuízo.
        </p>
      </section>

      <section className="section" id="como-funciona">
        <div className="section-title centered">
          <h2>Como funciona</h2>
          <p>Um processo simples para o cliente, com análise e controle por trás.</p>
        </div>

        <div className="grid three">
          <Step
            number="01"
            title="Você envia o produto."
            text="Mande o link, foto, modelo ou descrição do item que deseja comprar."
          />

          <Step
            number="02"
            title="A Confere analisa."
            text="Verificamos viabilidade, risco, custo estimado e se a operação faz sentido."
          />

          <Step
            number="03"
            title="Recebe uma orientação."
            text="Você entende se vale seguir, se precisa de mais proteção ou se é melhor não comprar."
          />

          <Step
            number="04"
            title="Pedido aprovado."
            text="Após sua aprovação, a Confere conduz o pedido dentro do processo definido."
          />

          <Step
            number="05"
            title="Conferência e registros."
            text="Quando aplicável, o produto é conferido com registros, fotos, vídeos e comprovantes."
          />

          <Step
            number="06"
            title="Envio acompanhado."
            text="A Confere acompanha o envio e mantém o cliente informado até a conclusão."
          />
        </div>
      </section>

      <section className="section security" id="seguranca">
        <span className="pill">SEGURANÇA</span>

        <h2>Segurança por processo, não por promessa.</h2>

        <div className="security-grid">
          <SecurityItem>Cliente não negocia fora dos canais oficiais da Confere.</SecurityItem>

          <SecurityItem>Pedidos passam por análise antes de qualquer aprovação.</SecurityItem>

          <SecurityItem>Produtos sem origem, falsificados ou irregulares não são aceitos.</SecurityItem>

          <SecurityItem>Pedidos de maior valor exigem análise reforçada.</SecurityItem>

          <SecurityItem>Custos, riscos e limitações são explicados antes da decisão.</SecurityItem>

          <SecurityItem>Tudo que for relevante fica documentado no atendimento.</SecurityItem>
        </div>
      </section>

      <section className="section">
        <div className="section-title centered">
          <h2>Compras nacionais e internacionais.</h2>
          <p>
            A Confere pode auxiliar em pedidos de lojas distantes, regiões de fronteira e compras internacionais,
            sempre com análise de viabilidade antes de seguir.
          </p>
        </div>

        <div className="grid three">
          <Card icon={Globe2} title="Brasil e exterior">
            Avaliamos oportunidades de compra em diferentes mercados, sem prometer que todo pedido será aceito.
          </Card>

          <Card icon={FileCheck} title="Viabilidade primeiro">
            Antes de avançar, analisamos custo final, risco, prazo, documentação e possibilidade real da operação.
          </Card>

          <Card icon={LockKeyhole} title="Operação protegida">
            Detalhes operacionais, parceiros e rotas de execução são tratados apenas internamente pela Confere.
          </Card>
        </div>
      </section>

      <section className="section" id="parceiros">
        <span className="pill">PARCEIROS</span>

        <h2>Faça parte da rede Confere</h2>

        <p className="wide">
          Estamos estruturando uma rede de lojas, operadores e pontos de apoio para tornar compras assistidas
          mais seguras, organizadas e profissionais.
        </p>

        <div className="grid three">
          <Card icon={Store} title="Lojas Parceiras">
            Lojas confiáveis que desejam receber clientes, confirmar informações e vender com mais segurança.
          </Card>

          <Card icon={Briefcase} title="Operadores Verificados">
            Pessoas cadastradas para apoiar operações autorizadas, sempre dentro das regras da Confere.
          </Card>

          <Card icon={MapPin} title="Pontos Parceiros">
            Locais de apoio que podem auxiliar na conferência, recebimento ou envio quando houver autorização.
          </Card>
        </div>

        <div className="center-actions">
          <a className="btn btn-dark" href={whatsapp} target="_blank" rel="noreferrer">
            <Briefcase size={18} />
            Quero ser parceiro
          </a>
        </div>
      </section>

      <section className="cta" id="cotacao">
        <h2>Quer comprar de longe, mas não sabe se compensa?</h2>

        <p>
          Envie o produto que procura. A Confere analisa o pedido, os riscos, o custo estimado
          e informa se faz sentido avançar.
        </p>

        <a className="btn btn-white" href={whatsapp} target="_blank" rel="noreferrer">
          <MessageCircle size={20} />
          Chamar no WhatsApp
        </a>
      </section>

      <section className="section faq-section">
        <div className="section-title centered">
          <h2>Perguntas frequentes</h2>
          <p>Tire suas dúvidas sobre como a Confere funciona.</p>
        </div>

        <div className="faq-list">
          <FAQ q="A Confere vende os produtos?">
            Em regra, não. A Confere atua como plataforma de compra assistida, ajudando o cliente a avaliar,
            organizar e acompanhar pedidos feitos com lojas ou fornecedores terceiros.
          </FAQ>

          <FAQ q="A Confere garante que sempre será mais barato?">
            Não. A Confere analisa se a compra compensa. Se o custo final, o risco ou a logística não fizerem sentido,
            a recomendação pode ser não comprar.
          </FAQ>

          <FAQ q="A Confere faz compras internacionais?">
            A Confere pode analisar pedidos nacionais e internacionais, mas cada caso depende de viabilidade, custo,
            regras aplicáveis, prazo, documentação e risco da operação.
          </FAQ>

          <FAQ q="Posso comprar produtos de alto valor?">
            Pode solicitar a análise. Pedidos de maior valor passam por verificação reforçada e só seguem se a operação
            for considerada viável e segura.
          </FAQ>

          <FAQ q="O cliente pode falar direto com operadores ou parceiros?">
            Não. Para manter a segurança do processo, a comunicação deve ocorrer pelos canais oficiais da Confere.
          </FAQ>

          <FAQ q="A Confere aceita qualquer produto?">
            Não. Produtos proibidos, falsificados, sem origem, irregulares ou com risco jurídico, fiscal ou logístico
            podem ser recusados.
          </FAQ>

          <FAQ q="Lojas podem se cadastrar?">
            Sim. Lojas confiáveis podem entrar em contato para fazer parte da rede Confere e receber oportunidades
            de venda com mais organização.
          </FAQ>
        </div>
      </section>

      <footer className="footer">
        <div>
          <h2>Confere Via</h2>
          <p>Compre de longe com tudo conferido.</p>
          <p>Compra assistida, análise de viabilidade e processo documentado.</p>
        </div>

        <div>
          <h4>CONTATO</h4>
          <p>WhatsApp: (18) 98160-1801</p>
          <p>Site: conferevia.com.br</p>
        </div>

        <div>
          <h4>NAVEGAÇÃO</h4>
          <a href="#como-funciona">Como funciona</a>
          <a href="#seguranca">Segurança</a>
          <a href="#parceiros">Parceiros</a>
          <a href="#cotacao">Cotação</a>
        </div>

        <small>
          A Confere Via atua como plataforma de compra assistida. A aprovação de pedidos depende de análise interna.
          Preços, disponibilidade, prazos, garantias, tributos, envio e condições finais dependem da loja, fornecedor,
          produto, regras aplicáveis e viabilidade da operação.
        </small>
      </footer>
    </main>
  );
}
