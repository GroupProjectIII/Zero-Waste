import React from "react";
import './Help.css';

function Help() {
   return(
        <>
			<img src="../../images/wave.png" className="wave-c"></img>
			<div className="helpcontainer-c">
				<div className="img-c">
					<img src="../../images/bg.png"></img>
				</div>
				<div className="help-content-c">
					<form >
						<img src="../../images/avatar.png"></img>
						<h2 className="helptitle-c">Need Help?</h2>
						<div className="help-input-c one">
							<div className="i-c">
								<select name="choice" id="choice" className="selection-c">
									<option value="q0" disabled selected value> -- select an option -- </option>
									<option value="Incorrect/outdated information on a page.">I found incorrect/outdated information on a page.</option>
									<option value="Website is not working">The website is not working the way they should.</option>
									<option value="Feedback / Suggestions">I would like to give feedback / suggestions</option>
									<option value="Complaint">Complaint</option>
									<option value="Other">Other</option>
								</select>
							</div>
						</div>
						<div className="help-input-c pass">
							<div className="i-c"> 
								<textarea type="te"  rows="3" cols="50" class="textareaa-c" placeholder="Describe yourself here..."></textarea>
							</div>
						</div>
						<input type="submit" className="helpbtn-c" value="Submit"></input>
					</form>
				</div>
			</div>
     	</>
    );
}

export default Help;