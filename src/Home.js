import classes from './Home.module.css';
function Home(){
    return(
        <div className={classes.home}>
            <div className={classes.text}>
            <p>HI,<br></br>I am Rishav Mahapatra.</p>
            <p className={classes.subtext}>I'm a Web Developer.</p>
            </div>
            


        </div>
    )
}
export default Home;