import { FaDiscord, FaGithub } from "react-icons/fa";
import './Footer.css'

function PageFooter(){
    return(
        <>
            <footer>
                <div className="icons">
                    <a href="https://github.com/superbryn">
                        <FaGithub className="github"/>
                    </a>
                    <a href="https://discord.com">
                        <FaDiscord className="discord"/>
                    </a>
                </div>
                <div className="credits">
                    <p>Made by Group A with LOVE</p>
                </div>
            </footer>
        </>
    );
}

export default PageFooter;
