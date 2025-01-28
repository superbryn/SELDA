import { FaDiscord, FaGithub } from "react-icons/fa";
import './Footer.css'

function PageFooter(){
    return(
        <>
            <footer>
                <div className="icons">
                    <a href="https://github.com/superbryn/SELDA" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="github"/>
                    </a>
                    <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                        <FaDiscord className="discord"/>
                    </a>
                </div>
            </footer>
        </>
    );
}

export default PageFooter;
