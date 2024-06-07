import { type SkillIcon } from "@/data/skills";
import Image from "next/image";

export default function Card(
    { title, description, skillIcons }: { title: string, description: string, skillIcons: SkillIcon[] }
) {
    return (
        <div className="space-y-2">
            <h3 className="text-[20px]">{title}</h3>
            <p className="text-[15px] text-primary">{description}</p>
            <div className="flex gap-2 flex-wrap">
                {skillIcons.map((item, i) => (
                    <div key={i}>
                        <div className="border p-2 rounded-md bg-muted">
                            <Image width={50} height={50} src={item.icon.url} alt="" className="min-w-[50px] h-[50px]"/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}