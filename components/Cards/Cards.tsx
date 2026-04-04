import Image, { StaticImageData } from "next/image";
import VectorIcon from "../../assets/Vector.svg";

type Props = {
  source: StaticImageData;
  title: string;
  text: string;
};

export default function Cards({ source, title, text }: Props) {
  return (
    <div className="ml-[3.3125rem] mt-[4.75rem] font-outfit bg-[#FFFFFF] w-[24rem] h-[17.56rem] rounded-[1rem] transition-transform duration-300 ease-in-out hover:scale-105 will-change-transform cursor-pointer">
      <div className="pl-4 pt-4">
        <div className="rounded-full bg-[#C8F0D8] w-[3.5rem] h-[3.5rem] flex items-center justify-center">
          <Image src={source} alt="Card 1" width={26} height={26} />
        </div>
      </div>
      <div className="w-[10.3125rem] h-[1.4375rem]">
        <h1 className="text-[1rem] font-semibold mt-[1rem] ml-[1rem]">
          {title}
        </h1>
      </div>
      <div className="w-full h-[3.75rem] text-left">
        <p className="text-[#6D6C6A] text-[1rem] mt-[1.2rem] ml-[1rem]">
          {text}
        </p>
      </div>
    </div>
  );
}
