import React from "react";
// core components
import Head from "next/head";
// Sections for this page
import CLPSection from "../pages-sections/Page-Sections/CLPSection.js";
import AboutSection from "../pages-sections/Page-Sections/AboutSection.js";
import Layout from "../pages-sections/Page-Sections/Layout";
import BrandedHeader from "../components/BrandedHeader/BrandedHeader";

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
