import { useState } from 'react';
import axios from 'axios';
import './Selda.css';
import { useNavigate } from "react-router-dom";

const Selda = () => {
  const [prediction, setPrediction] = useState('');
  const [image, setImage] = useState(null);


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); 
      };
      reader.readAsDataURL(file); 
    }
  };

  const handleUpload = async () => {
    if (!image) return; 

    try {
      //send the image to the backend
      const response = await axios.post('https://backendforselda.onrender.com/predict', {
        image: image.split(',')[1],  
      });

      //update prediction in the state
      setPrediction(response.data.prediction || 'No prediction available');
    } catch (error) {
      console.error("error during prediction:", error);
      setPrediction("error in prediction"); 
    }
  };
  const navigate = useNavigate();
  const navigateToHome = () => {
        navigate('/');
    }
  const goToYoutube = () => {
    window.open("https://youtube.com", "_blank")
  }

  return (
    <div className='seldabody'>
    <header>
      <div className="title">
        <p>selda<span className="kuth">.</span></p>
      </div>
      <nav className="navbar">
        <button onClick={navigateToHome} >Home</button>
        <button onClick={goToYoutube} >Video</button>
        <button >Contibute</button>
      </nav>
    </header>
<div className="line"></div>
    <div className='container'>
      {image && <img src={image} alt="Uploaded" className='handsignImage' />}
      {prediction && <h2 className='predictions'>Prediction: {prediction} </h2>}
      <input type="file" accept="image/*" onChange={handleFileChange} id="fileInput" className="inputTag"/>
      <label htmlFor="fileInput" className="customFileLabel">Upload Image</label>
      <button onClick={handleUpload} className='theButton'>Predict Sign</button>
    </div>

  </div>
    
  );
};

export default Selda;
