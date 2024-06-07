import { getList } from "@/data/skills";
import Card from "./card";
import Section from "../section";

export default async function Skills() {

    const { contents: skillList } = await getList()

    return (
        <Section title="Skills">
            <div className="space-y-6">
                {skillList.map((item, index) => (
                    <Card title={item.title} description={item.description} skillIcons={item.skillIcons} key={index} />
                ))}
            </div>
        </Section>
    )
}