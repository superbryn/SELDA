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

        <p>
        The website you are building leverages a backend hosted on Render to provide real-time sign language translation to text. By utilizing Render's cloud infrastructure, the platform ensures seamless processing and delivery of accurate translations, enabling users to easily convert sign language gestures into readable words.</p>
    </div>
  )
}

export default Textcard;
