import Link from "next/link";
import anime from "animejs";




export default function Menu () {


        let pinkButton = "flex-1 bg-pink-300 m-4 flex justify-center items-center min-w-1/7 py-7 rounded shadow-2xl w-5/6 rounded-full";

        let greenButton = "flex-1 bg-green-300 m-4 flex justify-center items-center min-w-9 py-7 rounded shadow-2xl w-5/6 rounded-full";



return (<div className="flex flex-col items-center w-full bg-white text-slate-800 font-bold absolute left-[-100%] top-[130px] z-20" id="menu">






<Link href="/" className={pinkButton}>Home </Link>

<Link href="/About" className={pinkButton}>About </Link>

<Link href="/Digital" className={greenButton}>  Digital Design  </Link>
<Link href="/Video" className={greenButton}>  Video Editing & Motion Graphics </Link>


<Link href="/UI" className={greenButton}>  UI / UX Design </Link>

<Link href="/Print" className={greenButton}>  Print Design</Link>

<Link href="/Contact" className={pinkButton}>Contact </Link>






</div>)};