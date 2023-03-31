import classes from './Navbar.module.css';
function Navbar(){
    return(
    <div className={classes.contents}>
        <ul className={classes.home}>HOME</ul>
        <ul className={classes.about}>ABOUT</ul>
        <ul className={classes.skills}>SKILLS</ul>
        <ul className={classes.contact}>CONTACT</ul>
        

    </div>
    )
}
export default Navbar;