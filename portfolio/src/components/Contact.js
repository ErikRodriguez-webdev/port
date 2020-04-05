import React from "react";
import "../App.css";
import Icon6 from "../img/paste-icon.png";
// import Icon6 from "../img/send-icon.png";
//Add useState when using contact form COMING SOON

const Contact = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: ""
  // });

  // const handleChanges = (event) => {
  //   setFormData({ ...formData, [event.target.name]: event.target.value });
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   //submit all to my email by default
  //   //reset form fields
  // };

  const clipboard = () => {
    //Grab email by id
    const grabEmail = document.getElementById("Email");

    //Select input text on Computer and Mobile
    grabEmail.select();
    grabEmail.setSelectionRange(0, 9999);

    //Initialize copy
    document.execCommand("copy");

    //Success Message
    alert(`Successfully Copied Email: ${grabEmail.value}`);
    console.log("we are inside clipboard", grabEmail.value);
  };

  return (
    <>
      <h2>Let's get in contact!</h2>
      <div className="contactMainBox">
        <div
          title="Copy Email To Clipboard"
          onClick={() => clipboard()}
          className="contactEmailBtn"
        >
          <input
            disabled
            type="text"
            defaultValue="Eric19.21.03@gmail.com"
            id="Email"
          />
          <img src={Icon6} alt="paste icon" />
        </div>
        <p>Form (UNDER CONSTRUCTION) </p>
        {/* <form onSubmit={handleSubmit} className="contactForm">
          <label>
            Name:
            <input
              name="name"
              value={formData.name}
              onChange={handleChanges}
              placeholder="John Doe"
            />
          </label>
          <br />

          <label>
            Email:
            <input
              name="email"
              value={formData.email}
              onChange={handleChanges}
              placeholder="johndoe@email.com"
            />
          </label>
          <br />

          <label>
            Message:
            <input
              name="message"
              value={formData.message}
              onChange={handleChanges}
              placeholder="Let's work together!"
            />
            <br />
            <img
              src={Icon6}
              alt="paper airplane icon"
              title="Send"
              type="submit"
              className="sendForm"
            />
          </label>
          <br />
        </form> */}
      </div>
    </>
  );
};

export default Contact;
