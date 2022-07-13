



// components:
import Navigation from "./Navigation";
import TopHeader from "./TopHeader";
import Footer from "./Footer";













export default function Layout({children}) {





    return (<div>
<TopHeader />
<Navigation />
   

{children}



<Footer />
    </div>);
}