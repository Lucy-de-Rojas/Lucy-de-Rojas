import Layout from "@/Components/Layout"
import Head from "next/head";
import Script from "next/script";



export default function Contact () {



        let numbers = [0,1,2,3,4,5,6,7,8,9];
        let letters = ["gm" ,"lucy",  "ail","de", "c","rojas", "om"];
        let zavinac = "@";
        let tecka = ".";
        let plus = "+";

        let email = letters[1] + letters[3] + letters[5] + zavinac + letters[0] + letters[2] + tecka + letters[4] + letters[6] ;

        let phoneNumber = plus + numbers[4] + numbers[4] + numbers[7] + numbers[4] + numbers[1] + numbers[1] + numbers[3] + numbers[8] + numbers[7] + numbers[0] + numbers[0] + numbers[9] ;


        console.clear();



        let pinkButton = "bg-pink-300 w-[80%] md:w-[70%] lg:w-[40%] xl:w-[30%] text-center py-6 my-5 rounded-full shadow-2xl";
















return (<Layout>


<Head>





<title>
Contact Lucy de Rojas | Multimedia Designer Available for Projects

        </title></Head>



<main className="flex flex-col items-center w-full">
<h1>Contact</h1>

<br />

<a href={"tel:" + phoneNumber} className={pinkButton}>Call (UK)</a>
<a href={"sms:" + phoneNumber} className={pinkButton}>Send Text Message (UK)</a>
<a href={"mailto:" + email} className={pinkButton}>Send Email </a>

</main>





</Layout>)};