import { PortableTextBlock } from "sanity";

export type Subject = {
    _id: string;
    _createdAt: Date;
    subject: string;
    slug: string;
    symbol: string;
    information: PortableTextBlock[];
    tests: PortableTextBlock[];
}