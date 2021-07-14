import React from "react";
import './Help.css';

function Help() {
   return(
        <>
			<img src="../../images/wave.png" className="wave"></img>
			<div className="helpcontainer">
				<div className="img">
					<img src="../../images/bg.png"></img>
				</div>
				<div className="help-content">
					<form >
						<img src="../../images/avatar.png"></img>
						<h2 className="helptitle">Need Help?</h2>
						<div className="help-input one">
							<div className="i">
								<select name="choice" id="choice" className="selection">
									<option value="q0" disabled selected value> -- select an option -- </option>
									<option value="Incorrect/outdated information on a page.">I found incorrect/outdated information on a page.</option>
									<option value="Website is not working">The website is not working the way they should.</option>
									<option value="Feedback / Suggestions">I would like to give feedback / suggestions</option>
									<option value="Complaint">Complaint</option>
									<option value="Other">Other</option>
								</select>
							</div>
						</div>
						<div className="help-input pass">
							<div className="i"> 
								<textarea type="te"  rows="3" cols="50" class="textareaa" placeholder="Describe yourself here..."></textarea>
							</div>
						</div>
						<input type="submit" className="helpbtn" value="Submit"></input>
					</form>
				</div>
			</div>
     	</>
    );
}

export default Help;