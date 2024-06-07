import { Button } from "@/components/ui/button";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Card({ title, description, workHref, githubHref, thumbnailUrl }: { title: string, description: string, workHref: string, githubHref: string, thumbnailUrl: string }) {
    return (
        <div className="border rounded-md">
          
                <Image src={thumbnailUrl} width={300} height={200} alt="" className="w-full object-cover"/>
            
            <div className="p-3">
                <h3 className="text-[20px] font-bold">{title}</h3>
                <p>{description}</p>
                <div className="flex justify-end">
                    <Button variant="ghost">
                        <Link href={workHref}>
                            <FontAwesomeIcon icon={faLink} className="w-[25px] h-[25px]" />
                        </Link>
                    </Button>
                    <Button variant="ghost">
                        <Link href={githubHref}>
                            <FontAwesomeIcon icon={faGithub} className="w-[25px] h-[25px]" />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}
