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
    <section className="mx-auto w-full max-w-6xl px-6">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className={reverse ? "md:order-2" : ""}>
          <div className="bg-[#C8F0D8] w-[3rem] h-[3rem] rounded-[1rem] flex items-center justify-center">
            <Image src={category1} alt="Ícone da funcionalidade" width={28} height={28} />
          </div>

          <h3 className="mt-5 font-outfit text-[1rem] font-bold uppercase text-[#111111]">
            {title}
          </h3>

          <p className="mt-3 max-w-[28rem] text-[0.95rem] leading-6 text-[#6D6C6A]">
            {description}
          </p>
        </div>

        <div className={reverse ? "md:order-1" : ""}>
          {image ? (
            <div className="relative h-[220px] w-full overflow-hidden rounded-[1.25rem] bg-[#D9D9D9] md:h-[260px]">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div className="h-[220px] w-full rounded-[1.25rem] bg-[#D9D9D9] md:h-[260px]" />
          )}
        </div>
      </div>
    </section>
  );
}