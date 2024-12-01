import Layout from "@/Components/Layout"
import Image from "next/image";
import Head from "next/head";


export default function About () {

        let numbers = [0,1,2,3,4,5,6,7,8,9];
        let letters = ["gm" ,"lucy",  "ail","de", "c","rojas", "om"];
        let zavinac = "@";
        let tecka = ".";
        let plus = "+";

        let email = letters[1] + letters[3] + letters[5] + zavinac + letters[0] + letters[2] + tecka + letters[4] + letters[6] ;

        let phoneNumber = plus + numbers[4] + numbers[4] + numbers[7] + numbers[4] + numbers[1] + numbers[1] + numbers[3] + numbers[8] + numbers[7] + numbers[0] + numbers[0] + numbers[9] ;




return (<Layout>
<main className="px-14">









<h1>About</h1>
<div className="flex justify-center">

<Image
        src="/Media/Images/Lucy_de_Rojas_Profile_Illustration.png"
        width={200}
        height={200}
        alt="Lucy de Rojas Profile Illustration"
        className="shadow-2xl rounded-full my-7"

/>
 </div>

<p>My name is Lucy and I’m a digital, web, and graphic designer with experience in video editing, combining creativity with technical skills to create visually engaging designs across different platforms.
<br /><br />
My background in professional athletics has helped me develop discipline and focus, while my love for puzzles has strengthened my problem-solving abilities, which I apply to my design work in a thoughtful and strategic way.</p>

<br />
Ready to design with purpose? Let’s shape visuals that turn first impressions into lasting connections.



</main>

<div className="flex flex-col place-items-center my-9">

<a href={"tel:" + phoneNumber} className="bg-pink-300 w-3/4 text-center py-3 my-3 rounded-full shadow-2xl">Call (UK)</a>
<a href={"sms:" + phoneNumber} className="bg-pink-300 w-3/4 text-center py-3 my-3 rounded-full shadow-2xl">Send Text Message (UK)</a>
<a href={"mailto:" + email} className="bg-pink-300 w-3/4 text-center py-3 my-3 rounded-full shadow-2xl">Send Email</a>

</div>






</Layout>)};