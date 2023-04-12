import classes from "./Home.module.css";
import { FaLinkedin , FaGithub, FaInstagram} from 'react-icons/fa';

function Home() {
  return (
    <div className={classes.home}>
      <div className={classes.text}>
        <p>
          Hi,<br/>I am Rishav Mahapatra.
        </p>
        <p className={classes.subtext}>I'm a Web Developer.</p>
        <div className={classes.icons}>
          <a href="https://www.instagram.com/me_rishav3">
            <FaLinkedin className={classes.FaLinkedin}/>
          </a>
          <a href="www.instagram.com">
            <FaGithub className={classes.FaGithub} />
          </a>
          <a href="https://www.instagram.com/me_rishav3">
            <FaInstagram className={classes.FaInstagram}/>
          </a>
          <a href="www.instagram.com">
            <i className="fa fa-github-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Home;
