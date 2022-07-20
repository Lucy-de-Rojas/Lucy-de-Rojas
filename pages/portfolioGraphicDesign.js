import Layout from '../Components/Layout';
import PortfolioBottomNavigation from '../Components/portfolioBottomNavigation';
import PortfolioGraphicDesignContent from '../Components/Contents/PortfolioGraphicDesignContent';

import Head from 'next/head';




export default function PortfolioGraphicDesign () {

    //#endregion

    return (<Layout>
        <Head>
<title>Lucy de Rojas - Portfolio - Graphic Design</title>
</Head>
<PortfolioBottomNavigation />

<PortfolioGraphicDesignContent />
    </Layout>);
}