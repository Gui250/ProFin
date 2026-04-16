import FeatureCard from "../shared/feature-card";

export default function CoreFunctionsSection() {
  return (
    <section className="px-4 py-20 font-outfit md:px-6" id="funcionalidades">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[1rem] font-bold text-[#3D8A5A]">
            Principais funcionalidades
          </p>
          <h1 className="mt-2 text-[2.25rem] font-bold leading-tight md:text-[3.5rem]">
            Tudo o que você precisa para aproveitar mais
          </h1>
          <p className="mt-4 text-[1rem] leading-7 text-[#6D6C6A]">
            Ferramentas pensadas para transformar seus gastos de lazer em
            planejamento claro, metas saudáveis e decisões mais inteligentes.
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-8">
          <FeatureCard
            title="Categorização inteligente"
            description="O ProFin identifica automaticamente seus gastos com alimentação, viagens, shows, cinema, hobbies e vida noturna. Você conecta suas contas e começa a enxergar seus padrões sem trabalho manual."
          />
          <FeatureCard
            title="IA que mostra onde economizar"
            description="Analise seus gastos de lazer automaticamente e receba recomendações práticas para reduzir desperdícios, ajustar metas e manter o que realmente importa na sua rotina."
            reverse
          />
          <FeatureCard
            title="Decisões melhores no dia a dia"
            description="Entenda como pequenas escolhas impactam seu orçamento ao longo do mês e tome decisões com mais contexto, previsibilidade e confiança."
          />
        </div>
      </div>
    </section>
  );
}
