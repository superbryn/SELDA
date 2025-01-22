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
                <div className="disclaimer">
                <p>Disclaimer: This Project is just a prototype and not a production version</p>
                </div>
            </footer>
        </>
    );
}

export default PageFooter;
