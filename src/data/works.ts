import { client } from "@/lib/microcms/client"
import { MicroCMSDate, MicroCMSImage } from "microcms-js-sdk"

export type WorkType = {
    id: string
    title: string
    description: string
    thumbnail: MicroCMSImage
    workLink: string
    githubLink: string
} & MicroCMSDate

export const getList = async () => {
    const listData = await client.getList<WorkType>({ endpoint: 'works', queries: { orders: 'publishedAt' } })

    return listData
}