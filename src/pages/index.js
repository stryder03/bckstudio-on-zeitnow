import React from "react";
// core components
import Head from "next/head";
// Sections for this page
import CLPSection from "../pages-sections/Page-Sections/CLPSection";
import AboutSection from "../pages-sections/Page-Sections/AboutSection";
import Layout from "../pages-sections/Page-Sections/Layout";
import BrandedHeader from "../components/BrandedHeader/BrandedHeader";
import gql from "graphql-tag";
import {queryCMS} from "../utils/queryCMS";


const ashPictureQuery = gql`{
    instructor(where: {id: "ckbzbrp9c0vtj0178zpaznj2m"}) {
        staffPicture{
            altText
            height
            width
            url
        }
    }
}`

const meganPictureQuery = gql`{
    instructor(where: {id: "ckcgx7lug0dgh0181iu3966gy"}) {
        staffPicture{
            altText
            height
            width
            url
        }
    }
}`

const heatherPictureQuery = gql`{
    instructor(where: {id: "ckduor4kw036a0176q133bekd"}) {
        staffPicture{
            altText
            height
            width
            url
        }
    }
}`

export async function getStaticProps(context) {
    const preview = context.preview ? context.preview : null;
    const prodToken = process.env.NEXT_PUBLIC_GRAPHCMS_WEBCLIENT_API_TOKEN;
    const token = preview ? (context.previewData.token + process.env.NEXT_PUBLIC_GRAPH_CMS_PREVIEW_TOKEN_CLIENT) : prodToken;
    const endPoint = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

    const ashPicture = await queryCMS(ashPictureQuery, token, endPoint);
    const meganPicture = await queryCMS(meganPictureQuery, token, endPoint);
    const heatherPicture = await queryCMS(heatherPictureQuery, token, endPoint);
    const staffPictures = {ashleah: ashPicture, megan: meganPicture, heather: heatherPicture}

    return {
        props: { staffPictures, preview }, // will be passed to the page component as props
    }
}

export default function homePage(props) {
    const {staffPictures, preview } = props
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
                <AboutSection staffPictures={staffPictures}/>
            </Layout>
        </div>
    );
}
