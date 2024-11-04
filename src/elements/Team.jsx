import './Team.css'
import Anitha from './images/anitha.jpg'
import Annarose from './images/annarose.jpg'
import Bismiya from './images/bismiya.jpeg'
import Irene from './images/irene.jpg'
import Naveen from './images/naveen.jpg'
import Neeraj from './images/xenon.jpeg'
import Richard from './images/rixchard.jpg'


function TeamCard() {
    return (
        <>
            <div className="members">
                <h1>Team SELDA<span className='teamdot'>.</span></h1>
                <div className="box left">
                    <div className="boxa">
                    <img src={Annarose} alt="Annarose" className='annaroseImg' loading="lazy"/>
                    </div>
                    <div className="member-info">
                        <h2>Annarose<span className='teamdot'>.</span></h2>
                        <p>Project Leader</p>
                    </div>
                </div>
                <div className="box right">
                    <div className="boxb">
                    <img src={Anitha} alt="Anitta" className='anithaImg' />
                    </div>
                    <div className="member-info">
                        <h2>Anitta<span className='teamdot'>.</span></h2>
                        <p>Video Producer</p>
                    </div>
                </div>
                <div className="box left">
                    <div className="boxa">
                    <img src={Bismiya} alt="Bismiya" className='bismiyaImg' />
                    </div>
                    <div className="member-info">
                        <h2>Bismiya<span className='teamdot'>.</span></h2>
                        <p>Info Research</p>
                    </div>
                </div>
                <div className="box right">
                    <div className="boxb">
                    <img src={Irene} alt="Irene" className='ireneImg' />
                    </div>
                    <div className="member-info">
                        <h2>Irene<span className='teamdot'>.</span></h2>
                        <p>Prototype Tester</p>
                    </div>
                </div>
                <div className="box left">
                    <div className="boxa">
                    <img src={Naveen} alt="Naveen" className='naveenImg' />
                    </div>
                    <div className="member-info">
                        <h2>Naveen<span className='teamdot'>.</span></h2>
                        <p>Designer</p>
                    </div>
                </div>
                <div className="box right">
                    <div className="boxb">
                    <img src={Neeraj} alt="Neeraj" className='neerajImg' />
                    </div>
                    <div className="member-info">
                        <h2>Neeraj<span className='teamdot'>.</span></h2>
                        <p>Programmer</p>
                    </div>
                </div>
                <div className="box left">
                    
                    <img src={Richard} alt="Richard" className='rjImg' />
                    <div className="member-info">
                        <h2>Richard<span className='teamdot'>.</span></h2>
                        <p>Data Scientist</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TeamCard;
