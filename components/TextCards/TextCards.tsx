import Cards from "../Cards/Cards";
import VectorIcon from "../../assets/Vector.svg";

export default function TextCards() {
  return (
    <section className="bg-[#F5F4F1] font-outfit text-center py-[3.125rem]">
      <p className="text-[#3D8A5A] text-[1rem] font-semibold">Como funciona?</p>
      <h1 className="text-[3.73rem] font-bold">
        Se Organize em 3 Passos Simples
      </h1>
      <p className="text-[#6D6C6A] text-[1rem]">
        Configure em minutos e comece a entender para onde vai o seu dinheiro de
        lazer.
      </p>

      <>
        <Cards
          source={VectorIcon}
          title="Conecte suas contas "
          text="Conecte com segurança suas contas bancárias e cartões. Detectamos automaticamente transações de lazer e entretenimento."
        />
      </>
    </section>
  );
}
