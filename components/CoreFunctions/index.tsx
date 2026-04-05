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

            <FeatureCard />
        </section>
    )
}