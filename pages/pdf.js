
import { useState } from "react";
import { Document, Page } from "react-pdf";




export default function PDF () {

        const [numPages, setNumPages] = useState();
        const [pageNumber, setPageNumber] = useState(1);


        function onDocumentLoadSuccess(numPages) {
                setNumPages(numPages);

        }




        return (<div>
<h1>PDF</h1>


<Document file="../public/Media/PDFs/CV_Portfolio_LucyDeRojas_Designer_2024.pdf" >

<Page pageNumber = {pageNumber} onDocumentLoadSuccess={onDocumentLoadSuccess}/>

</Document>

<p>{pageNumber}</p>





        </div>);
}