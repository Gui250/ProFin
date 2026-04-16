import Image, { StaticImageData } from "next/image";

type Props = {
  source: StaticImageData;
  title: string;
  text: string;
};

export default function Card({ source, title, text }: Props) {
  return (
    <article className="flex h-full w-full cursor-pointer flex-col rounded-[1.75rem] border border-white/60 bg-[#FFFFFF] px-8 py-9 text-left font-outfit transition-transform duration-300 ease-out hover:scale-[1.03]">
      <div>
        <div className="flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full bg-[#C8F0D8]">
          <Image src={source} alt={title} width={26} height={26} />
        </div>
      </div>

      <div className="mt-8 flex flex-1 flex-col">
        <h1 className="text-[1.95rem] font-semibold leading-tight">{title}</h1>
        <p className="mt-7 flex-1 text-[1rem] leading-[1.6] text-[#6D6C6A]">
          {text}
        </p>
      </div>
    </article>
  );
}
