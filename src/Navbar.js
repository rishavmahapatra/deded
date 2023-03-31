import classes from './Navbar.module.css';
function Navbar(){
    return(
    <div className={classes.contents}>
        <ul>HOME</ul>
        <ul>ABOUT</ul>
        <ul>SKILLS</ul>
        <ul>CONTACT</ul>
        

    </div>
    )
}
export default Navbar;