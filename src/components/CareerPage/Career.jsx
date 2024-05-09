import './Career.css';

export const CareerPage = () => {
    return (
        <div>
            <div className="container2ab">
                <img src="https://creativeengineer.com/static/media/CREATIVEENGINEERING.08e0b786b8c52af46f98.webp" alt="creativeEng" />
            </div>
            <div>
                <img src="https://creativeengineer.com/static/media/TheTeamDesktop.948d649f1da17622fa92.webp" alt="team" />
            </div>


            <div className="formContainer">
                <div className="textField">
                    <label className="textFieldlabel">Full Name</label>
                    <div className="inputBox">
                        <input type="text" className="inputX" name="name" value="" />
                    </div>
                </div>
                <div className="textField">
                    <label className="textFieldlabel">Email Address</label>
                    <div className="inputBox">
                        <input type="email" className="inputX" name="email" value="" />
                    </div>
                </div>
                <div className="textField">
                    <label className="textFieldlabel">Phone Number</label>
                    <div className="inputBox">
                        <input type="tel" className="inputX" name="phone" value="" />
                    </div>
                </div>
                <div className="buttonBox1">
                    <div className="btn2" style={{ cursor: 'pointer' }}>
                        <span className="label">Upload Resume</span>
                        <input type="file" accept=".pdf, image/*" style={{ display: 'none' }} />
                    </div>
                </div>
                <div className="sendAppBox">
                    <div className="button3"><span className="label3">Send Application</span></div>
                    <p className="policy">By clicking <span className="sendApp">Send application</span>, you agree to our
                        <span className="userAgree">User Agreement</span>, <span className="userAgree">Privacy Policy</span>, and <span className="userAgree">Cookie Policy
                        </span>.</p>
                </div>
            </div>
        </div>
    );
};
