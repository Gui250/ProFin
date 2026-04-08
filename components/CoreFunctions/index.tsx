import FeatureCard from "../FeatureCard";

export default function CoreFunctions() {
    return (
        <section className="mt-[7.56rem]">
            <div className="flex flex-col items-center justify-center">
                <p className="text-[#3D8A5A] font-bold text-center font-outfit text-[1rem]">
                    Principais Funcionalidades
                </p>
                <h1 className="font-bold font-outfit text-[2.25rem] text-center">Tudo o que você precisa para aproveitar mais</h1>
                <p className="text-[1rem] text-[#6D6C6A] text-center">
                    Ferramentas poderosas projetadas para ajudar você a aproveitar ao máximo o seu orçamento de lazer.
                </p>
            </div>

        <div className="mt-20 flex flex-col gap-20">
            <FeatureCard
                title="CATEGORIZAÇÃO iNTELIGENTE"
                description="O ProFin categoriza automaticamente seus gastos de lazer — alimentação, viagens, shows, cinema, 
                hobbies e vida noturna.Não é necessário fazer classificações manuais. Basta conectar e ver seus padrões de gastos ganharem vida."
            />
            <FeatureCard
                title="IA QUE INDENTIFICA ONDE VOCÊ PODE ECONOMIZAR"
                description="Analise seus gastos de lazer automaticamente e receba sugestões inteligentes para reduzir
                 desperdícios sem abrir mão do que você gosta."
                reverse
            />
            <FeatureCard
                title="DESCISÕES MAIS INTELIGENTES NO SEU DIA A DIA"
                description="OTenha uma visão clara dos seus hábitos e entenda como pequenas escolhas impactam seu orçamento
                 ao longo do tempo."
            />
        </div>
        </section>
    )
}