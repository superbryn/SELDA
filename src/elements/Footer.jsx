import { FaDiscord, FaGithub } from "react-icons/fa";
import './Footer.css'

function PageFooter(){
    return(
        <>
            <footer>
                <div className="icons">
                    <a href="https://github.com/superbryn/SELDA" target="_blank">
                        <FaGithub className="github"/>
                    </a>
                    <a href="https://discord.com">
                        <FaDiscord className="discord"/>
                    </a>
                </div>
            </footer>
        </>
    );
}

export default PageFooter;
