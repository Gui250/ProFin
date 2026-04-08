import Image, { StaticImageData } from "next/image";
import VectorIcon from "../../assets/Vector.svg";

type Props = {
  source: StaticImageData;
  title: string;
  text: string;
};

export default function Cards({ source, title, text }: Props) {
  return (
    <div className="p-6 font-outfit bg-[#FFFFFF] w-full max-w-[24rem] min-h-[260px] rounded-[1rem] transition-transform duration-300 ease-in-out hover:scale-105 will-change-transform cursor-pointer ">
      <div className="pl-4 pt-4">
        <div className="rounded-full bg-[#C8F0D8] w-[3.5rem] h-[3.5rem] flex items-center justify-center">
          <Image src={source} alt="Card 1" width={26} height={26} />
        </div>
      </div>
      <div className="text-left">
        <h1 className="text-[1rem] font-semibold mt-[1rem] ml-[1rem]">
          {title}
        </h1>
      </div>
      <div className="text-left pb-4">
        <p className="text-[#6D6C6A] text-[1rem] mt-[1.2rem] ml-[1rem] mr-[1rem] break-words">
          {text}
        </p>
      </div>
    </div>
  );
}
