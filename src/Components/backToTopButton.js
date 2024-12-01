
import Link from "next/link"


export default function BackToTopButton () {

        function handleClick () {
                document.getElementById("topOfPage").scrollIntoView({behavior: 'smooth'});


        }






return (<button className="fixed p-5 bg-blue-400/30 right-0 top-[60%] text-[200%] z-10 rounded-l-2xl drop-shadow-2xl" onClick={handleClick}>

                ⬆️


</button>)};










































