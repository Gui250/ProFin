import Card from "../shared/card";
import GroupIcon from "../../assets/Group 2.svg";
import TargetIcon from "../../assets/Target.svg";
import VectorIcon from "../../assets/Vector.svg";

//Area 2 
export default function TextCardsSection() {
  return (
    <section className="px-4 py-8 font-outfit md:px-6" id="como-funciona">
      <div className="mx-auto max-w-7xl rounded-[2.25rem] bg-[#F5F4F1] px-6 py-14 md:px-10 md:py-18">
        <p className="text-[1rem] font-semibold text-[#3D8A5A] flex justify-center">
          Como funciona?
        </p>
        <h1 className="mt-2 text-[2.2rem] font-bold leading-tight md:text-[3.73rem] justify-center flex">
          Se Organize em 3 Passos Simples
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-[1rem] leading-7 text-[#6D6C6A] flex justify-center text-center">
          Configure em minutos e comece a entender para onde vai o seu dinheiro.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card
            source={VectorIcon}
            title="Conecte suas contas"
            text="Conecte com segurança suas contas bancárias e cartões. Detectamos automaticamente transações de lazer e entretenimento."
          />

          <Card
            source={TargetIcon}
            title="Coloque Metas Divertidas"
            text="Crie orçamentos personalizados para alimentação, viagens, entretenimento e muito mais. Defina limites que combinem com seus objetivos de estilo de vida."
          />

          <Card
            source={GroupIcon}
            title="Consiga Insights Valiosos"
            text="Nosso Agente de IA irá avaliar suas métricas e dizer quanto você deve gastar por mês, para você gastar com seu lazer!"
          />
        </div>
      </div>
    </section>
  );
}
