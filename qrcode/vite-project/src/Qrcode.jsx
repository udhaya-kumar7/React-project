import React, { useState } from 'react'

export const Qrcode = () => {
  const [img, setImage]= useState("");
  const [loading, setLoading]=useState(false);
  const [qrdata, setQrdata] = useState("");
  const [qrsize, setQrsize] = useState("150");
  async function generateQR() {
    setLoading(true);
    try{
      const url =`http://api.qrserver.com/v1/create-qr-code/?size=${qrsize}x${qrsize}&data=${encodeURIComponent(qrdata)}`;
      setImage(url);
    } catch(error){
      console.error("error generating QE code", error);
    } finally {
      setLoading(false);
    }
  }
  function downloadQr(){
    fetch(img).then((response)=>response.blob())
    .then((blob)=>{
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download ="QR CODE.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);


    });

  }
  return (<div className="app-container">
    <h1>
      QR CODE GENERATOR
    </h1>
    {loading && <p>please wait...</p>}
    {img && <img src={img} className='qr'/>} 
    <div>
        <label htmlFor="datainput" className="input-label">
        Data for QR CODE:
         </label>
         <input type="text"  value={qrdata} id="datainput" placeholder='Enter data for QR CODE' onChange={(e) => setQrdata(e.target.value)}/>
         <label htmlFor="sizeinput" className="input-label">
        Image size (e.g., 150):
         </label>
         <input type="text" value={qrsize} id="sizeinput" placeholder='Enter image size' onChange={(e) => setQrsize(e.target.value)}/>
        <button className='gbtn' disabled={loading} onClick={generateQR}>Generate QR CODE</button>
        <button className='dbtn'onClick={downloadQr} >Download QR CODE</button>
         </div>
         <p className='footer'>
          Designed by udhay
         </p>
    </div>)
  
};
export default Qrcode;