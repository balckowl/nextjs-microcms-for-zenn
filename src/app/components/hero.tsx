import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import Image from "next/image";

export default function Hero() {
    return (
        <div className="lg:h-[400px] h-[600px]">
            <div className="container lg:w-[85%] xl:w-[70%] w-full flex items-center justify-center lg:justify-between h-full flex-col lg:flex-row">
                <div className="space-y-3 order-2 lg:order-1">
                    <h2 className="text-[30px] font-bold">Hello, World!!</h2>
                    <p>私はReact周りの知識をXやZennを中心に発信しているフロントエンドエンジニアです。</p>
                    <div className="flex gap-4">
                        <Button variant="ghost">
                            <FontAwesomeIcon icon={faXTwitter} className="w-[25px] h-[25px]" />
                        </Button>
                        <Button variant="ghost">
                            <FontAwesomeIcon icon={faGithub} className="w-[25px] h-[25px]" />
                        </Button>
                    </div>
                </div>
                <div className="order-1 lg:order-2">
                    <Image src="/img/person.png" width={200} height={200} alt="" />
                </div>
            </div>
        </div>
    )
}
