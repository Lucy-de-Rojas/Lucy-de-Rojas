
import Layout from "../Components/Layout";
import Head from 'next/head'



// componments
import PortfolioBottomNavigation from "../Components/portfolioBottomNavigation";
import PortfolioContent from "../Components/Contents/PortfolioContent";




export default function Portfolio() {




    return (<Layout>
        <Head>
<title>Lucy de Rojas - Portfolio</title>
</Head>
<PortfolioBottomNavigation />

<PortfolioContent />
    </Layout>);
}