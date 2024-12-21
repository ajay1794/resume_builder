import jsPDF from "jspdf";
import html2canvas from "html2canvas";
export default function SaveResume(){
    // const generatePDF = () => {
    //     const report = new jsPDF('portrait', 'pt', 'a4');
    //     report.html(document.querySelector('#resume')).then(() => {
    //       report.save('resume.pdf');
    //     });
    //   };
    const generatePDF = () => {
      html2canvas(document.querySelector('#resume'), {
        scale: 5 // Increase scale for better quality
      }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const report = new jsPDF('portrait', 'pt', 'a4');
    
        // Calculate the width and height for the image in the PDF
        const pdfWidth = report.internal.pageSize.getWidth();
        console.log(pdfWidth)
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
        console.log(pdfHeight)
    
        // Add the image to the PDF
        report.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        report.save('resume.pdf');
      });
    };
    
      return(
        <div>
            <button className="btn download-btn" onClick={generatePDF}>Download</button>
        </div>
      )
}