import { client } from "@/lib/microcms/client";
import { MicroCMSDate, MicroCMSImage } from "microcms-js-sdk";

export type SkillIcon = {
    id: string
    name: string
    icon: MicroCMSImage
} & MicroCMSDate

export type SkillType = {
    id: string
    title: string
    description: string
    skillIcons: SkillIcon[]
} & MicroCMSDate

export const getList = async () => {
    const listData = await client.getList<SkillType>({
        endpoint: 'skills',
        queries: { orders: 'publishedAt' },
    })

    return listData
}