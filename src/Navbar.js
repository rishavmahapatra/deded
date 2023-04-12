<<<<<<< HEAD
//import Contact from './Contact';
=======

>>>>>>> 274e0ee15fb333026cbe3e90f7553a028bbb2af2
import classes from './Navbar.module.css';
function Navbar(){
    return(
    <div className={classes.contents}>
    <ul>
  <li><a href="home">Home</a></li>
  <li><a href="news.asp">Skills</a></li>
  <li><a href="contact.asp">Contact</a></li>
  <li><a href="about.asp">About</a></li>
</ul>
    </div>
    )
}
export default Navbar;
