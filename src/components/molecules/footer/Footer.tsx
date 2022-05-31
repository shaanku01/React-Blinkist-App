import React from "react";
import Styles from "../footer/footer.module.css";

const Footer = () => {
  return (
    <div className={Styles.maindiv}>
      <div id={Styles.boxes}>
        <div id={Styles.leftbox}>
          <img id={Styles.image} src="logo.png" alt="logo" />
          <p data-testid="pele" id={Styles.para1}>Big ideas in small packages </p>
          <p data-testid="pele" id={Styles.para1}>Start learning now</p>
        </div>

        <div id={Styles.middlebox}>
          <p data-testid="pele" id={Styles.footerheading1}> Editorial</p>
          <p data-testid="pele" id={Styles.footersubheadings}>Book lists</p>
          <p data-testid="pele" id={Styles.footersubheadings}>What is Nonfiction?</p>
          <p data-testid="pele" id={Styles.footersubheadings}>What to read next?</p>
          <p data-testid="pele" id={Styles.footersubheadings}>Benefits of reading</p>
        </div>

        <div id={Styles.middlebox2}>
          <p data-testid="pele" id={Styles.footerheading1}> Useful links</p>
          <p data-testid="pele" id={Styles.footersubheadings}>Pricing</p>
          <p data-testid="pele" id={Styles.footersubheadings}>Blinkist business</p>
          <p data-testid="pele" id={Styles.footersubheadings}>Gift cards</p>
          <p data-testid="pele" id={Styles.footersubheadings}>Blinkist magaine</p>
          <p data-testid="pele" id={Styles.footersubheadings}>Contact & help</p>
        </div>

        <div id={Styles.rightbox}>
          <p data-testid="pele" id={Styles.footerheading1}> Company</p>
          <p data-testid="pele" id={Styles.footersubheadings}>About</p>
          <p data-testid="pele" id={Styles.footersubheadings}>Careers</p>
          <p data-testid="pele" id={Styles.footersubheadings}>partners</p>
          <p data-testid="pele" id={Styles.footersubheadings}>Code of Conduct</p>
        </div>
        <br /> <br /><br /><br /><br /><br /><br /><br /><br /><br /> <br /> 
        <div id={Styles.footerdiv}>
        <p data-testid="pele" id={Styles.copyright}>© Blinkist 2021 Sitemap   |   Imprint   |   Terms of Service   |   Privacy Policies</p>
        </div>
      </div>

      
    </div>
  );
};

export default Footer;
