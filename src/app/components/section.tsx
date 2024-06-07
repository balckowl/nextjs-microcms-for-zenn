import { ReactNode } from "react";

export default function Section({ title, children }: { title: string, children: ReactNode }) {
    return (
        <div className="py-[120px] border-t" id={title}>
            <div className="container w-full lg:w-[85%] xl:w-[70%]">
                <h2 className="font-bold text-[30px] mb-[10px]">{title}</h2>
                {children}
            </div>
        </div>
    )
}
