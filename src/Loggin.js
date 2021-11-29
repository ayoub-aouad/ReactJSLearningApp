const Loggin = () => {
    return ( 
        <form  method="post">
            <div className="containerLoggin">
                <label for="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required/>

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required/>
                    
                <button className='buttonLoggin' type="submit">Login</button>
                <label>
                <input type="checkbox" checked="checked" name="remember"/> Remember me
                </label>
            </div>

            <div className="containerLoggin" >
                <button type="button" className="cancelbtn" ><a href="/">Cancel</a></button>
                <span className="psw">Forgot <a href="#">password?</a></span>
            </div>
        </form>
     );
}
 
export default Loggin;