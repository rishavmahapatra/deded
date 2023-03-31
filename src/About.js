import classes from './About.module.css'
import rishav from './rishav.png'
function About(){
    return(
        <>
        <div className={classes.about}>
        <img src={rishav} alt="Profile pic"/>
        </div>
        </>
    )
}
export default About;