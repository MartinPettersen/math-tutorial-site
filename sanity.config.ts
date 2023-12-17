// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'sanity';
// eslint-disable-next-line import/no-extraneous-dependencies
import { deskTool } from 'sanity/desk';
// import user from './sanity/schemas/user-schema';
import schemas from './sanity/schemas';


const config = defineConfig({
    projectId: "zd41uw5u",
    dataset: "production",
    title: 'Math Tutorial Site',
    apiVersion: "2023-12-12",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas }
});

export default config;