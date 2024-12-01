import Image from "next/image";
import Link from "next/link";






export default function Logo() {






return (<div className="flex-1 flex justify-end">
<Link href="/" >


<Image src="/Media/Images/Logos/Logo_Image.png"  width={70} height={70} alt="Logo"  className="mr-7" id="logo"  />



</Link>


</div>)};