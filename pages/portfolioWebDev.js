import Layout from '../Components/Layout'
import PortfolioBottomNavigation from '../Components/portfolioBottomNavigation';
import PortfolioWebContent from '../Components/Contents/portfolioWebContent';

import Head from 'next/head';




export default function PortfolioWebDev () {

    //#endregion

    return (<Layout>
        <Head>
<title>Lucy de Rojas - Web Development Design</title>
</Head>
<PortfolioBottomNavigation />

<PortfolioWebContent />
    </Layout>);
}