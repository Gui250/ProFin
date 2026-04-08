import Cards from "../Cards/Cards";
import VectorIcon from "../../assets/Vector.svg";
import TargetIcon from "../../assets/Target.svg";
import GroupIcon from "../../assets/Group 2.svg";

//Area 2 
export default function TextCards() {
  return (
    <section className="bg-[#F5F4F1] font-outfit text-center py-[3.125rem] px-4">
      <p className="text-[#3D8A5A] text-[1rem] font-semibold">Como funciona?</p>
      <h1 className="text-[2rem] md:text-[3.73rem] font-bold leading-tight">
        Se Organize em 3 Passos Simples
      </h1>
      <p className="text-[#6D6C6A] text-[1rem] max-w-xl mx-auto">
        Configure em minutos e comece a entender para onde vai o seu dinheiro de
        lazer.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-start gap-6 mt-[4.75rem] px-4">
        <Cards
          source={VectorIcon}
          title="Conecte suas contas "
          text="Conecte com segurança suas contas bancárias e cartões. Detectamos automaticamente transações de lazer e entretenimento."
        />

        <Cards
          source={TargetIcon}
          title="Coloque Metas Divertidas"
          text="Crie orçamentos personalizados para alimentação, viagens, entretenimento e muito mais. Defina limites que combinem com seus objetivos de estilo de vida."
        />

        <Cards
          source={GroupIcon}
          title="Consiga Insights Valiosos"
          text="Nosso Agente de IA irá avaliar suas métricas e dizer quanto você deve gastar por mês, para você gastar com seu lazer!"
        />
      </div>
    </section>
  );
}
