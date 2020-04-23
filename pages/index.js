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

                <script type="text/javascript" src="//downloads.mailchimp.com/js/signup-forms/popup/unique-methods/embed.js" data-dojo-config="usePlainJson: true, isDebug: false"></script>
                <script type="text/javascript">window.dojoRequire(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us19.list-manage.com","uuid":"7c2ebc786b5f2387d9c8b05be","lid":"051cf184b5","uniqueMethods":true}) })</script>

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
