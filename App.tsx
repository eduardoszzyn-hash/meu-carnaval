
import React, { useState } from 'react';
import { 
  CheckCircle, 
  Clock, 
  ShieldCheck, 
  ChevronDown, 
  Package, 
  Gift, 
  AlertCircle,
  Smartphone,
  Briefcase,
  Lock,
  ArrowRight,
  TrendingDown,
  Zap
} from 'lucide-react';

// --- Configuration ---
// ADICIONE SEU LINK DE CHECKOUT AQUI
const CHECKOUT_URL = "https://pay.cakto.com.br/z4bgk8c_757597"; 

// --- Reusable Components ---

const scrollToOffer = () => {
  const el = document.getElementById('oferta');
  el?.scrollIntoView({ behavior: 'smooth' });
};

const CTAButton: React.FC<{ 
  text: string; 
  subtext?: string; 
  className?: string; 
  id?: string;
  onClick?: () => void;
  href?: string;
}> = ({ text, subtext, className, id, onClick, href }) => {
  const baseClasses = `w-full max-w-md mx-auto flex flex-col items-center justify-center cta-premium text-white py-5 px-8 rounded-2xl font-bold transition-all duration-500 transform hover:scale-[1.02] active:scale-95 ${className}`;
  
  if (href) {
    return (
      <a 
        href={href}
        id={id}
        className={baseClasses}
      >
        <span className="text-lg md:text-xl uppercase tracking-wider flex items-center gap-2">
          {text}
        </span>
        {subtext && <span className="text-xs opacity-90 mt-1 font-normal tracking-wide">{subtext}</span>}
      </a>
    );
  }

  return (
    <button 
      id={id}
      onClick={onClick || scrollToOffer}
      className={baseClasses}
    >
      <span className="text-lg md:text-xl uppercase tracking-wider flex items-center gap-2">
        {text}
      </span>
      {subtext && <span className="text-xs opacity-90 mt-1 font-normal tracking-wide">{subtext}</span>}
    </button>
  );
};

const Section: React.FC<{ children: React.ReactNode; className?: string; id?: string; noPadding?: boolean }> = ({ children, className, id, noPadding }) => (
  <section id={id} className={`${noPadding ? '' : 'py-20 md:py-32'} px-6 md:px-12 ${className}`}>
    <div className="max-w-4xl mx-auto">
      {children}
    </div>
  </section>
);

const BenefitCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-all duration-500 group">
    <div className="flex items-start gap-5">
      <div className="bg-emerald-50 p-2 rounded-lg group-hover:bg-emerald-100 transition-colors">
        <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
      </div>
      <div>
        <h4 className="font-bold text-slate-900 text-lg mb-2">{title}</h4>
        <p className="text-slate-600 leading-relaxed text-sm md:text-base">{description}</p>
      </div>
    </div>
  </div>
);

const Accordion: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-6 text-left focus:outline-none group"
      >
        <span className="text-base md:text-lg font-semibold text-slate-800 group-hover:text-slate-600 transition-colors">{question}</span>
        <ChevronDown className={`w-5 h-5 text-slate-300 transition-transform duration-500 ${isOpen ? 'rotate-180 text-amber-500' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-slate-500 leading-relaxed text-base">{answer}</p>
      </div>
    </div>
  );
};

// --- Main Application ---

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      
      {/* 1. Hero Section */}
      <section className="bg-[#0F172A] text-white pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-emerald-600 rounded-full blur-[150px]"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-10 backdrop-blur-sm">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            <p className="text-emerald-400 font-medium tracking-wider uppercase text-[10px] md:text-xs">
              Renda extra sem investir e possível de executar em até 24h
            </p>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-10 tracking-tight">
            Precisa de dinheiro agora no Carnaval, mas não pode errar de novo?
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            <span className="text-white font-medium">Protocolo Zero Estoque – Carnaval</span> é um plano simples, direto e temporário para usar o Carnaval como oportunidade real de gerar renda extra sem investir dinheiro, sem estoque e sem experiência.
          </p>
          
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-slate-400 text-sm">
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> Plano temporário</span>
              <span className="hidden md:block opacity-20">|</span>
              <span className="flex items-center gap-2"><Briefcase className="w-4 h-4" /> Renda extra imediata</span>
            </div>
            <CTAButton text="👉 Quero acessar o Protocolo agora" />
            <p className="text-slate-500 text-sm italic">O Carnaval acontece uma vez por ano. A oportunidade de fazer caixa é agora.</p>
          </div>
        </div>
      </section>

      {/* 2. Seção de Empatia */}
      <Section className="bg-white">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
            Se você está aqui, provavelmente não é curiosidade. <span className="text-slate-900 font-bold border-b-2 border-amber-200">É necessidade.</span>
          </p>
          
          <div className="my-20 space-y-6">
            <p className="text-slate-400 uppercase tracking-widest text-sm font-bold">O cenário atual</p>
            <div className="flex flex-col gap-4">
               <h3 className="text-3xl md:text-4xl font-bold text-slate-800">O Carnaval está chegando.</h3>
               <h3 className="text-3xl md:text-4xl font-bold text-slate-800">A demanda explode.</h3>
            </div>
            
            <div className="relative pt-12">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 text-slate-100 text-8xl font-black -z-10 select-none">“</div>
              <p className="text-2xl md:text-3xl text-slate-800 font-medium italic leading-relaxed">
                “Eu preciso de dinheiro, mas não sei o que fazer sem arriscar tudo.”
              </p>
            </div>
          </div>
          
          <p className="text-lg text-slate-500">Esse protocolo foi criado exatamente para esse cenário.</p>
        </div>
      </Section>

      {/* 3. Seção de Explicação do Protocolo */}
      <Section className="bg-slate-50 rounded-[4rem] mx-4 md:mx-12 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-24">
          <div className="space-y-4">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto transition-transform hover:rotate-3">
              <CheckCircle className="w-8 h-8 text-emerald-500" />
            </div>
            <p className="text-lg font-bold text-slate-900">Nada de investir.</p>
          </div>
          <div className="space-y-4">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto transition-transform hover:-rotate-3">
              <Smartphone className="w-8 h-8 text-slate-400" />
            </div>
            <p className="text-lg font-bold text-slate-900">Nada de aparecer.</p>
          </div>
          <div className="space-y-4">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto transition-transform hover:rotate-3">
              <AlertCircle className="w-8 h-8 text-slate-400" />
            </div>
            <p className="text-lg font-bold text-slate-900">Nada de promessas irreais.</p>
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <p className="text-slate-600 leading-relaxed text-xl">
            Você recebe um plano claro, com checklists e scripts prontos, para intermediar serviços físicos e digitais que já têm demanda durante o Carnaval, em qualquer cidade.
          </p>
          <div className="p-1 w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent my-8"></div>
          <div className="space-y-2">
            <p className="text-slate-400 uppercase tracking-tighter text-sm font-bold">A lógica é simples</p>
            <p className="text-slate-500 text-lg">Você não fica estudando.</p>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900">
              Você entende rápido… e executa.
            </h3>
          </div>
        </div>
      </Section>

      {/* 4. O que muda quando você segue um plano simples */}
      <Section className="bg-white">
        <div className="text-center mb-20">
          <h2 className="text-sm font-black text-emerald-600 uppercase tracking-[0.3em] mb-4">Metodologia Zero Estoque</h2>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
            ✅ O QUE MUDA QUANDO VOCÊ SEGUE UM PLANO SIMPLES
          </h2>
        </div>

        <div className="space-y-8 text-center max-w-3xl mx-auto mb-20">
          <p className="text-slate-600 text-xl leading-relaxed">
            O maior problema de quem precisa de dinheiro agora não é falta de esforço. É falta de direção.
          </p>
          <p className="text-slate-600 text-xl leading-relaxed">
            Quando você não sabe exatamente o que fazer, qualquer coisa parece arriscada. E o medo de errar trava tudo.
          </p>
          <div className="inline-block py-3 px-8 bg-slate-50 rounded-full text-slate-900 font-bold text-lg">
            Os benefícios do Protocolo Zero Estoque – Carnaval começam aqui:
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <BenefitCard 
            title="✔ Clareza total do que fazer" 
            description="Nada de improvisar. O plano já está desenhado para o Carnaval. Você só segue." 
          />
          <BenefitCard 
            title="✔ Execução sem investimento" 
            description="A lógica é vender primeiro e executar depois, reduzindo o risco ao máximo." 
          />
          <BenefitCard 
            title="✔ Menos ansiedade, mais controle" 
            description="Quando você sabe o próximo passo, a pressão diminui. A cabeça para de rodar." 
          />
          <BenefitCard 
            title="✔ Possibilidade real de gerar caixa rápido" 
            description="O foco é o agora. Aproveitar a demanda do Carnaval." 
          />
          <div className="md:col-span-2">
            <BenefitCard 
              title="✔ Funciona para iniciantes" 
              description="Sem experiência, sem exposição, sem complicação." 
            />
          </div>
        </div>

        <div className="text-center bg-slate-900 text-white p-12 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-[50px]"></div>
          <p className="text-xl md:text-3xl font-light italic leading-relaxed relative z-10">
            Talvez o maior beneficio não seja só o dinheiro. É pensar: <br/>
            <span className="font-bold text-white mt-4 block text-2xl md:text-4xl not-italic">“Dessa vez, eu sei exatamente o que estou fazendo.”</span>
          </p>
        </div>
      </Section>

      {/* 5. Seção de Urgência */}
      <Section className="bg-[#F8FAFC]">
        <div className="text-center space-y-10">
          <div className="inline-flex items-center gap-4 text-slate-900 font-black text-3xl md:text-5xl tracking-tighter">
            <Clock className="w-10 h-10 text-amber-500 animate-pulse" />
            ⏰ O CARNAVAL NÃO ESPERA
          </div>
          <div className="space-y-4 text-slate-500 text-xl">
            <p>Enquanto muita gente só vai curtir,</p>
            <p>outras pessoas vão usar esses dias para fazer caixa.</p>
          </div>
          <p className="text-slate-900 font-bold text-2xl max-w-2xl mx-auto leading-tight">
            A diferença não é sorte. É ter um plano simples antes do Carnaval começar.
          </p>
          <CTAButton text="👉 Quero acessar o Protocolo agora" />
        </div>
      </Section>

      {/* 6. Público Ideal */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900">
            🎯 IDEAL PARA VOCÊ QUE DESEJA:
          </h2>
        </div>
        <div className="max-w-2xl mx-auto space-y-4">
          {[
            "Gerar renda extra no Carnaval sem investir dinheiro",
            "Resolver um aperto financeiro agora",
            "Aproveitar uma oportunidade real antes que acabe",
            "Ter clareza total do que fazer",
            "Não se expor ou aparecer",
            "Parar de errar tentando “adivinhar” ideias"
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-5 p-6 bg-slate-50 rounded-2xl border border-slate-100 transition-all hover:bg-white hover:shadow-md">
              <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0" />
              <span className="text-slate-700 font-semibold md:text-lg">✔ {item}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* 7. O que você vai receber */}
      <Section className="bg-slate-50 rounded-[4rem] mx-4 md:mx-12">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 flex flex-col items-center gap-6">
            <div className="bg-white p-6 rounded-3xl shadow-sm"><Package className="w-12 h-12 text-slate-300" /></div>
            📦 TUDO O QUE VOCÊ VAI RECEBER
          </h2>
          <p className="text-slate-400 mt-6 font-medium uppercase tracking-[0.2em] text-sm">Dentro do Protocolo Zero Estoque – Carnaval:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200/50 space-y-4 hover:border-amber-200 transition-colors">
            <p className="font-bold text-slate-900 text-xl">✔ Guia prático passo a passo</p>
            <p className="text-slate-500 leading-relaxed">Mostrando exatamente como identificar oportunidades reais no Carnaval e agir.</p>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200/50 space-y-4 hover:border-amber-200 transition-colors">
            <p className="font-bold text-slate-900 text-xl">✔ Checklist de execução em até 24h</p>
            <p className="text-slate-500 leading-relaxed">Para sair do zero sem travar.</p>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200/50 space-y-4 hover:border-amber-200 transition-colors">
            <p className="font-bold text-slate-900 text-xl">✔ Scripts prontos de abordagem (WhatsApp e DM)</p>
            <p className="text-slate-500 leading-relaxed">Você não precisa pensar no que dizer. É só usar.</p>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200/50 space-y-4 hover:border-amber-200 transition-colors">
            <p className="font-bold text-slate-900 text-xl">✔ Mapa de oportunidades do Carnaval</p>
            <p className="text-slate-500 leading-relaxed">Serviços e intermediações que já têm demanda nessa época.</p>
          </div>
          <div className="md:col-span-2 bg-white p-10 rounded-3xl shadow-sm border border-slate-200/50 space-y-4 hover:border-amber-200 transition-colors">
            <p className="font-bold text-slate-900 text-xl">✔ Lista de erros que fazem perder dinheiro</p>
            <p className="text-slate-500 leading-relaxed">Para você não repetir o que já deu errado antes.</p>
          </div>
        </div>
        
        <p className="text-center text-slate-400 font-medium italic">Tudo pensado para leitura rápida, entendimento imediato e execução prática.</p>
      </Section>

      {/* 8. Bônus */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase">
            🎁 BÔNUS EXCLUSIVOS
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { id: 1, title: "Checklist Diário de Execução", desc: "Para saber exatamente o que fazer em cada dia do Carnaval." },
            { id: 2, title: "Mensagens Prontas para WhatsApp e DM", desc: "Textos simples para abordar clientes e parceiros sem parecer vendedor." },
            { id: 3, title: "Mini-Guia de Adaptação para Qualquer Cidade", desc: "Funciona em capital, cidade média ou interior." }
          ].map((bonus) => (
            <div key={bonus.id} className="relative group">
              <div className="absolute inset-0 bg-amber-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div className="relative bg-emerald-50/50 p-8 rounded-3xl border border-emerald-100 h-full flex flex-col">
                <div className="bg-white w-10 h-10 rounded-xl flex items-center justify-center shadow-sm mb-6">
                  <Gift className="w-5 h-5 text-amber-500" />
                </div>
                <p className="text-emerald-700 font-black mb-3 uppercase text-[10px] tracking-[0.2em]">Bônus #{bonus.id}</p>
                <h4 className="text-lg font-bold text-slate-900 mb-3">{bonus.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{bonus.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 9. OFERTA ESPECIAL - REESTRUTURADA COM FOCO NO PREÇO E IMPACTO VISUAL */}
      <Section id="oferta" className="bg-[#020617] relative overflow-hidden py-32" noPadding>
        {/* Elementos de fundo dinâmicos */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-600/5 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10 py-32">
          <div className="text-center mb-16 space-y-6">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-6 py-2 rounded-full">
               <Zap className="w-4 h-4 text-emerald-400 fill-emerald-400" />
               <p className="text-emerald-400 font-black uppercase tracking-[0.3em] text-[10px]">Acesso Vitalício + Bônus Inclusos</p>
            </div>
            <h3 className="text-4xl md:text-7xl font-black text-white leading-none tracking-tighter">
              💼 OFERTA ESPECIAL
            </h3>
            <p className="text-slate-400 text-lg md:text-xl font-light max-w-2xl mx-auto">Garanta agora o seu plano completo do Protocolo Zero Estoque – Carnaval</p>
          </div>

          <div className="bg-white rounded-[3.5rem] shadow-[0_50px_100px_-30px_rgba(0,0,0,0.7)] overflow-hidden grid grid-cols-1 lg:grid-cols-12 border border-white/5">
            {/* Lado Esquerdo - Itens de Valor (60%) */}
            <div className="lg:col-span-7 p-8 md:p-20 space-y-12 bg-white">
              <div className="space-y-4">
                <p className="text-slate-400 uppercase text-[10px] font-black tracking-[0.4em]">Resumo do investimento:</p>
                <h4 className="text-3xl font-black text-slate-900 tracking-tight">O que você leva hoje:</h4>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12">
                {[
                  "Produto principal",
                  "Todos os bônus",
                  "Acesso imediato",
                  "Atualização simples e direta"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-5 group">
                    <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl group-hover:bg-emerald-500 group-hover:border-emerald-500 group-hover:text-white transition-all duration-500 text-emerald-600 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <span className="text-slate-800 font-bold text-lg leading-tight">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-12 border-t border-slate-100 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
                    <Lock className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-slate-900 font-bold text-sm uppercase tracking-wider">Ambiente Blindado</p>
                    <p className="text-slate-400 text-xs">Sua transação é processada com segurança bancária.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Lado Direito - O "Checkout" de Preço (40%) */}
            <div className="lg:col-span-5 bg-slate-50/50 p-10 md:p-16 flex flex-col justify-center items-center text-center border-l border-slate-100 relative overflow-hidden">
              
              {/* Badge Dinâmica */}
              <div className="absolute top-10 right-10 flex flex-col items-end gap-2">
                 <div className="bg-emerald-500 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-emerald-500/20">
                   -82% OFF
                 </div>
              </div>

              <div className="w-full space-y-12">
                <div className="space-y-6">
                   <p className="text-slate-400 font-black text-[10px] uppercase tracking-[0.4em] mb-4">Investimento Único</p>
                  
                  <div className="flex flex-col items-center">
                    {/* Ancoragem Visual */}
                    <div className="flex items-center gap-3 mb-4 opacity-40">
                      <span className="text-slate-400 text-2xl font-bold line-through tracking-tighter">R$ 97,00</span>
                      <span className="text-[10px] bg-slate-200 text-slate-500 px-2 py-0.5 rounded font-black uppercase tracking-widest">Original</span>
                    </div>
                    
                    {/* Preço Heroico */}
                    <div className="flex flex-col items-center relative">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-black text-slate-900 tracking-tighter">R$</span>
                        <div className="flex flex-col">
                          <span className="text-9xl font-black text-slate-900 leading-[0.8] tracking-[-0.05em] mb-2">
                            17<span className="text-5xl font-extrabold tracking-tighter">,90</span>
                          </span>
                        </div>
                      </div>
                      
                      {/* Destaque Pix */}
                      <div className="mt-8 inline-flex items-center gap-2 bg-[#F0FDF4] border border-[#DCFCE7] px-5 py-2.5 rounded-2xl shadow-sm">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
                        <p className="text-emerald-700 font-black text-[11px] uppercase tracking-[0.15em]">
                          Liberação Imediata via Pix
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <CTAButton 
                    text="Garantir meu acesso imediato" 
                    subtext="Vagas limitadas para o Carnaval"
                    href={CHECKOUT_URL}
                    className="!max-w-full !shadow-[0_20px_40px_-10px_rgba(217,119,6,0.4)] !py-6" 
                  />
                  
                  <div className="space-y-4">
                    <p className="text-slate-400 text-[11px] font-semibold leading-relaxed uppercase tracking-widest">
                      Sem mensalidade • Risco Zero
                    </p>
                    <div className="flex items-center justify-center gap-4 pt-4 border-t border-slate-200/50 grayscale opacity-40">
                       <div className="px-3 py-1 border border-slate-300 rounded font-black text-[9px] tracking-widest uppercase">PIX</div>
                       <div className="px-3 py-1 border border-slate-300 rounded font-black text-[9px] tracking-widest uppercase">CARD</div>
                       <div className="px-3 py-1 border border-slate-300 rounded font-black text-[9px] tracking-widest uppercase">BOLETO</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 10. Garantia */}
      <Section className="bg-white">
        <div className="max-w-3xl mx-auto glass-card border border-emerald-100 p-12 md:p-20 rounded-[4rem] text-center shadow-xl relative">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2">
             <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl border border-emerald-50">
                <ShieldCheck className="w-12 h-12 text-emerald-500" />
             </div>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase mt-4 mb-8">
            🔒 GARANTIA INCONDICIONAL DE 7 DIAS
          </h2>
          <div className="space-y-6 text-slate-600 text-xl leading-relaxed">
            <p>Você pode acessar todo o conteúdo com calma.</p>
            <p>Se dentro de 7 dias sentir que o protocolo não é para você, é só pedir o reembolso.</p>
          </div>
          <div className="grid grid-cols-3 gap-4 pt-10">
            {["Sem perguntas.", "Sem burocracia.", "Risco zero."].map((t, i) => (
              <div key={i} className="text-emerald-700 font-black text-sm md:text-lg uppercase tracking-tighter">{t}</div>
            ))}
          </div>
        </div>
      </Section>

      {/* 11. FAQ */}
      <Section className="bg-slate-50">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase">
            ❓ PERGUNTAS FREQUENTES
          </h2>
        </div>
        <div className="max-w-3xl mx-auto bg-white p-10 md:p-16 rounded-[3rem] shadow-sm border border-slate-100">
          {[
            { q: "Preciso investir dinheiro para começar?", a: "Não. O protocolo foi criado para quem não pode investir agora." },
            { q: "Funciona para iniciantes?", a: "Sim. Não exige experiência." },
            { q: "Preciso aparecer ou me expor?", a: "Não." },
            { q: "Serve para qualquer cidade?", a: "Sim. Capital, cidade média ou interior." },
            { q: "Dá tempo de aplicar antes do Carnaval?", a: "Sim. O plano foi pensado para execução rápida." },
            { q: "É curso em vídeo?", a: "Não. É um guia em PDF, direto ao ponto." },
            { q: "Quanto tempo leva para entender?", a: "Menos de 1 hora de leitura." },
            { q: "Existe garantia?", a: "Sim. Garantia incondicional de 7 dias." },
            { q: "O acesso é imediato?", a: "Sim, após a confirmação do pagamento." },
            { q: "É promessa de renda garantida?", a: "Não. Os resultados dependem da execução." }
          ].map((faq, idx) => (
            <Accordion key={idx} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </Section>

      {/* 12. Aviso Legal */}
      <footer className="bg-white py-24 px-6 border-t border-slate-100">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="inline-flex items-center justify-center gap-3 bg-slate-50 px-6 py-2 rounded-full text-slate-400 font-bold uppercase tracking-[0.3em] text-[10px]">
            <Lock className="w-3 h-3" /> ⚠️ AVISO LEGAL
          </div>
          <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-2xl mx-auto font-medium">
            Todos os direitos sobre a obra “Protocolo Zero Estoque – Carnaval” são reservados. <br/>
            A reprodução total ou parcial sem autorização é proibida nos termos da Lei nº 9.610/98.
          </p>
          <div className="section-divider"></div>
          <p className="text-slate-300 text-[10px] uppercase tracking-widest font-bold">
            Este site não faz parte do Google ou Facebook.
          </p>
        </div>
      </footer>

      {/* Mobile CTA Fixado */}
      <div className="md:hidden fixed bottom-0 left-0 w-full p-4 bg-white/90 backdrop-blur-xl border-t border-slate-100 z-50">
        <button 
          className="w-full cta-premium text-white py-4 px-6 rounded-2xl font-bold transition-all duration-300 shadow-xl text-base uppercase flex items-center justify-center gap-2"
          onClick={scrollToOffer}
        >
          Garantir Acesso Agora <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};

export default App;
