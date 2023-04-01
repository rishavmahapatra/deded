import classes from './About.module.css';
import rishav from './rishav.png';
function About(){
    return(
        <>
        <div className={classes.about}>
        <img src={rishav} alt="Profile pic"/>
        <div className={classes.summary}>
           <p>I am a software developer with 2+ years of work experience in Full-stack development. 
            I have the proven ability to build and deploy scalable web applications using modern tools and frameworks.
             Can effectively work in a team, share ideas and handle complex situations. 
             I am constantly upskilling myself learning new technologies. 
            Looking forward to opportunities where I can utilize my skills to build innovative solutions.</p>
         </div>  
        </div>
        </>
    )
}
export default About;