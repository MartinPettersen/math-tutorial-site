import { PortableTextBlock } from "sanity";
import { Test } from "./Test";

export type Subject = {
    _id: string;
    _createdAt: Date;
    subject: string;
    slug: string;
    symbol: string;
    information: PortableTextBlock[];
    tests: PortableTextBlock[];
    tags: string[];
    test: Test
}