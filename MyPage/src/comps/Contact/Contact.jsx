import React from "react";
import "../../css/contact.css";
import ContactContent from "./ContactContent";

const contact = () => {
  return (
    <div id="contact" className="contact_div">
      <ContactContent />
      <div className="thx_text">
        <p>Thank you for watching !!!</p>
        <p>Click = &gt;&gt; Go to the site</p>
      </div>
      <footer>
        <p>copyright &copy; dudzpsdb all right reversed.</p>
      </footer>
    </div>
  );
};

export default contact;
