import { getList } from "@/data/works";
import Section from "../section";
import Card from "./card";

export default async function Works() {

    const { contents: workList } = await getList()

    return (
        <Section title="Works">
            <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {workList.map((item, i) => (
                    <Card title={item.title} description={item.description} thumbnailUrl={item.thumbnail.url} workHref={item.workLink} githubHref={item.githubLink} key={i} />
                ))}
            </div>
        </Section>
    )
}
