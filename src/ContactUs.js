const ContactUs = () => {
    return ( 
        <div className="contactus">
            <form >
                <label >First Name</label>
                <input type="text"  placeholder="Your name.."/>

                <label>Last Name</label>
                <input type="text"  placeholder="Your last name.."/>

                <label for="country">Country</label>
                <select  name="country">
                <option value="australia">Morocco</option>
                <option value="canada">UK</option>
                <option value="usa">USA</option>
                </select>

                <label for="subject">Subject</label>
                <textarea  name="subject" placeholder="Write something.." ></textarea>

                <input type="submit" value="Submit" />
            </form>
        </div>
     );
}
 
export default ContactUs;