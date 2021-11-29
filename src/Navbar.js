const Navbar = () => {
    return ( 
        <nav className= 'navbar'>
            <h1></h1>
            <div className='links'>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="http://localhost:3000/create">Add New Blog</a></li>
                    <li><a href="/contactus">Contact Us</a></li>
                    <li><a href="http://localhost:3000/register"><button >Register</button></a></li>
                </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;
