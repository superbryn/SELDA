import { FaDiscord, FaGithub } from "react-icons/fa";
import './Footer.css'

function PageFooter(){
    return(
        <>
            <footer>
                <div className="icons">
                    <a href="https://github.com/superbryn">
                        <FaGithub className="github"/>
                        GITHUB
                    </a>
                    <a href="https://discord.com">
                        <FaDiscord className="discord"/>
                        SUPPORT US ON DISCORD
                    </a>
                </div>
            </footer>
        </>
    );
}

export default PageFooter;
