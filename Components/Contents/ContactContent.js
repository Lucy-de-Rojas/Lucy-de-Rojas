

import LayoutContent from "./LayoutContent";




export default function ContactContent() {
    
    let mailto = 'mailto:';
    let name = ['l','u','c','y','d','e','r','o', 'j','a','s'];
    let at = ['@'];
    let finish = ['g','m','a','i','l'];
    let dotty = ['.'];
    let commy = ['c','o','m'];

    let finishedProduct = mailto + name.join('') + at.join('') + finish.join('') + dotty.join('') + commy.join('');
    
    
    console.log(finishedProduct);


    return (<LayoutContent>



        <h1>Contact</h1>


        <a href={finishedProduct}>Send email</a>



    </LayoutContent>);
}

















