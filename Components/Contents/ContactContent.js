
import styles from '../../styles/contact.module.css';
import LayoutContent from "./LayoutContent";
import Link from "next/link";



export default function ContactContent() {
    console.clear();

    let mailto = 'mailto:';
    let name = ['l','u','c','y','d','e','r','o', 'j','a','s'];
    let at = ['@'];
    let finish = ['g','m','a','i','l'];
    let dotty = ['.'];
    let commy = ['c','o','m'];
    let theRest = "?subject=✏ Hello Lucy&body=lets talk! 😃"

    let finishedProduct = mailto + name.join('') + at.join('') + finish.join('') + dotty.join('') + commy.join('') + theRest;


    let numbers = [4,4,7,4,1,1,3,8,7,0,0,9];

    let number = "tel:+" + numbers.join("");
    let number2 = "sms:+" + numbers.join("")





    console.log(number, number2);


    return (<LayoutContent>


<div className={styles.contactWrapper}>

        <h1>Contact</h1>

<Link href={number}>
        <a> 📞 Call Me!</a>
</Link>


<Link href={number2}>
        <a> 📱 Text Me!</a>
</Link>



<Link href={finishedProduct}>
        <a> 📧 Write to Me!</a>
</Link>





</div>


    </LayoutContent>);
}




















