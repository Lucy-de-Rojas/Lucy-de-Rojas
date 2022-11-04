console.clear();
console.log('cleared console');

const widthSingle = "900";
const heightSingle = "663";
const altMain = "Benefits of Membership booklet 2018: ";
const srcMainLink = '/portfolio/pdfs/booklets/CSSCMembershipBooklet/LowRes/CSSCMembershipBenefitsBooklet';




export let slideShowBooklet2 = [];


for(let i=1;i<=24;i++){
    // console.log(i + ' hello.jpg');

    let item = {
        src: srcMainLink + i + '.jpg',
        width: widthSingle,
        height: heightSingle,
        alt: altMain + ' page '   + i,
    };


    console.log(item);


    slideShowBooklet2.push(item);


  }






// not used:
export let slideshowBooklet = [{


    src: srcMainLink  + '1.jpg',
    width: widthSingle,
    height: heightSingle,
    alt: altMain + " front cover",
},
{
    src: srcMainLink + '2.jpg',
    width: widthSingle,
    height: heightSingle,
    alt: altMain + 'page 2'
},
{
    src: srcMainLink + '3.jpg',
    width: widthSingle,
    height: heightSingle,
    alt: altMain + 'page 2'
},
{
    src: srcMainLink + '4.jpg',
    width: widthSingle,
    height: heightSingle,
    alt: altMain + 'page 2'
}, {
    src: srcMainLink + '5.jpg',
    width: widthSingle,
    height: heightSingle,
    alt: altMain + 'page 2'
},
{
    src: srcMainLink + '6.jpg',
    width: widthSingle,
    height: heightSingle,
    alt: altMain + 'page 2'
},
{
    src: srcMainLink + '7.jpg',
    width: widthSingle,
    height: heightSingle,
    alt: altMain + 'page 2'
},








];


