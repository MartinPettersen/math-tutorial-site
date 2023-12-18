import { createClient, groq } from "next-sanity";

export default async function getSubjects() {
    const client = createClient({
        projectId: "zd41uw5u",
        dataset: "production",
        apiVersion: "2023-12-12",
    });

    return client.fetch(
        groq`*[_type == "subject"]{
            _id,
            _createdAt,
            subject,
            'slug': slug.current,
            symbol,
            information,
            tests
        }`
    )
}