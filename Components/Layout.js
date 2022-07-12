



// components:
import Navigation from "./Navigation";
import TopHeader from "./TopHeader";














export default function Layout({children}) {





    return (<div>
<TopHeader />
<Navigation />
   

{children}



Bottom navigation
    </div>);
}