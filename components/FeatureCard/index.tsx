import category1 from "../../assets/category 1.svg"
import Image from "next/image"

export default function FeatureCard() {
    return (
        <section>
            <div className="bg-[#C8F0D8] w-[3rem] h-[3rem] rounded-[1rem] flex items-center justify-center">
                <Image src={category1} alt="Category 1" width={28} height={28} />
            </div>
        </section>
    )
}