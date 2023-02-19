
import LayoutContent from "./LayoutContent";
import Image from "next/image";


export default function HomePageContent () {



    return (<LayoutContent>

<h1>Welcome to my website!</h1>



<p>
I&apos;m thrilled to have you here and hope that you find everything you&apos;re looking for. My goal is to provide you with a great user experience and valuable information. If you have any questions or feedback, please don&apos;t hesitate to reach out to me. Thank you for visiting!

</p>


<p>
    Some of the content on these pages has been helped with ChatGP as part of experiment. Yes, machines can sometimes write better content than us humans. Together we can create some awesome stuff.
</p>


<Image
    src="/Media/Photos/chatAndArnold.jpg"
    width={900}
    height={416}
    alt=""
    layout="responsive"


/>




    </LayoutContent>);
}






















