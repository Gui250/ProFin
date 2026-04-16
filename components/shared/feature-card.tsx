import category1 from "../../assets/category 1.svg";
import Image from "next/image";

type FeatureCardProps = {
  title: string;
  description: string;
  image?: string;
  reverse?: boolean;
};

export default function FeatureCard({
  title,
  description,
  image,
  reverse = false,
}: FeatureCardProps) {
  return (
    <article className="cursor-pointer overflow-hidden rounded-[2rem] border border-[#E8DFD2] bg-white transition-transform duration-300 ease-out hover:scale-[1.03]">
      <div className="grid items-center gap-10 p-6 md:grid-cols-2 md:p-10">
        <div className={reverse ? "md:order-2" : ""}>
          <div className="flex h-[4rem] w-[4rem] items-center justify-center rounded-[1.2rem] bg-[#C8F0D8]">
            <Image
              src={category1}
              alt="Ícone da funcionalidade"
              width={28}
              height={28}
            />
          </div>

          <p className="mt-6 text-[0.82rem] font-semibold uppercase tracking-[0.16em] text-[#8B887F]">
            Recurso essencial
          </p>
          <h3 className="mt-3 font-outfit text-[2rem] font-bold leading-tight text-[#111111] md:text-[2.4rem]">
            {title}
          </h3>

          <p className="mt-5 max-w-[30rem] text-[1rem] leading-7 text-[#6D6C6A]">
            {description}
          </p>
        </div>

        <div className={reverse ? "md:order-1" : ""}>
          {image ? (
            <div className="relative h-[260px] w-full overflow-hidden rounded-[1.5rem] border border-[#E8DFD2] bg-[#D9D9D9] md:h-[320px]">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div className="relative overflow-hidden rounded-[1.5rem] border border-[#E8DFD2] bg-[#F5F4F1] p-6 md:p-8">
              <div className="rounded-[1.35rem] border border-white/80 bg-white p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[0.85rem] text-[#8B887F]">Meta mensal</p>
                    <p className="mt-1 text-[1.6rem] font-bold text-[#111111]">
                      R$ 1.200
                    </p>
                  </div>
                  <span className="rounded-full bg-[#C8F0D8] px-3 py-1 text-[0.8rem] font-semibold text-[#2C6C45]">
                    Estável
                  </span>
                </div>

                <div className="mt-6">
                  <div className="flex items-center justify-between text-[0.85rem] text-[#6D6C6A]">
                    <span>Restaurantes</span>
                    <span>R$ 320</span>
                  </div>
                  <div className="mt-2 h-3 rounded-full bg-[#EFEAE1]">
                    <div className="h-3 w-[58%] rounded-full bg-[#3D8A5A]" />
                  </div>
                </div>

                <div className="mt-5">
                  <div className="flex items-center justify-between text-[0.85rem] text-[#6D6C6A]">
                    <span>Viagens</span>
                    <span>R$ 420</span>
                  </div>
                  <div className="mt-2 h-3 rounded-full bg-[#EFEAE1]">
                    <div className="h-3 w-[71%] rounded-full bg-[#77B88E]" />
                  </div>
                </div>

                <div className="mt-5">
                  <div className="flex items-center justify-between text-[0.85rem] text-[#6D6C6A]">
                    <span>Entretenimento</span>
                    <span>R$ 180</span>
                  </div>
                  <div className="mt-2 h-3 rounded-full bg-[#EFEAE1]">
                    <div className="h-3 w-[36%] rounded-full bg-[#A3D7B7]" />
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-[1.25rem] bg-[#2C6C45] px-5 py-4 text-white">
                <p className="text-[0.82rem] uppercase tracking-[0.14em] text-white/70">
                  Insight da semana
                </p>
                <p className="mt-2 text-[1rem] leading-6">
                  Você ainda tem margem saudável para lazer neste mês.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
