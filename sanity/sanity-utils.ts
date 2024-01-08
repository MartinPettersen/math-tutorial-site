/* eslint-disable import/export */
import { Subject } from "@/types/Subject";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

export async function getSubjects(): Promise<Subject[]> {

    return createClient(clientConfig).fetch(
        groq`*[_type == "subject"]{
            _id,
            _createdAt,
            subject,
            'slug': slug.current,
            symbol,
            information,
            tags,
            test,
        }`
    )
}

export async function getSubject(slug: string): Promise<Subject> {

    return createClient(clientConfig).fetch(
        groq`*[_type == "subject" && slug.current == $slug][0]{
            _id,
            _createdAt,
            subject,
            "slug": slug.current,
            symbol,
            information,
            tags,
            test,
        }`,
        { slug }
    )
}

