import './Textcard.css'

function Textcard() {
  return (
    <div className="textcard">
        <p className='question'>What's SELDA?</p>
        <p><span className='firstIntro'>Sign Expression Language Digital Assistant (SELDA)<br /> 
        is an innovative AI-driven project designed to bridge <br />the communication gap between hearing individuals<br /> 
         and the deaf community<span className='teamdot'>.</span></span>
        </p>

        <p><span className='secondIntro'>SELDA works using Sci-Kit Learn, a Machine Learning <br />
          tool that powers the recognition of sign language gesture<span className='teamdot'>.</span></span>
        </p>

        <p><span className='thirdIntro'>
        The backend is hosted on Render, a cloud-based platform that provides
        managed services for deploying and scaling applications. Using a Python Flask script, 
        the backend handles all the processing and logic behind the sign language translation, 
        ensuring smooth and efficient performance for users.<span className='teamdot'>.</span></span>
        </p>
    </div>
  )
}

export default Textcard;
