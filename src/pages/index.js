import React from "react";
// core components
import Head from "next/head";
// Sections for this page
import CLPSection from "../pages-sections/Page-Sections/CLPSection";
import AboutSection from "../pages-sections/Page-Sections/AboutSection";
import Layout from "../pages-sections/Page-Sections/Layout";
import BrandedHeader from "../components/BrandedHeader/BrandedHeader";
// import {queryCMS} from "../Scripts/queryCMS";
// import gql from "graphql-tag";

// export async function getStaticProps(context) {
//
//     const prodToken = process.env.NEXT_PUBLIC_GRAPHCMS_WEBCLIENT_API_TOKEN;
//     const token = context.preview ? (context.previewData.token + process.env.NEXT_PUBLIC_GRAPH_CMS_PREVIEW_TOKEN_CLIENT) : prodToken;
//
//     const classListQueryResult = await queryCMS(classCategories, token);
//     const defaultInstructor = await queryCMS(instructorQuery, prodToken);
//
//     return {
//         props: { classListQueryResult, defaultInstructor }, // will be passed to the page component as props
//     }
// }
export default function homePage() {
    return (
        <div>
            <Head>
                <title>HOME • Bozeman Community Kiln</title>
                <meta name="description"
                      content="Whether you are interested in a first clay encounter, looking for the perfect pottery
                      class, or need your own ceramic studio space, Bozeman Community Kiln is here."
                />
            </Head>
            <Layout>
                <BrandedHeader>
                    <CLPSection/>
                </BrandedHeader>
                <AboutSection/>
            </Layout>
        </div>
    );
}
