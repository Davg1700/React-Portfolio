import React from "react";

function Contact() {
  return (
    <div>
      <h1>Contact Me Here</h1>
      <form>
        <div>
          <label for="name" placeholder="name">
            Name:
          </label>
          <br></br>
          <input type="text" name="name" />
        </div>
        <div>
          <label for="email" placeholder="email">
            Email:
          </label>
          <br></br>
          <input type="email" name="email" />
        </div>
        <div>
          <label for="message" placeholder="message here">
            Message:
          </label>
          <br></br>
          <textarea name="message" />
        </div>
        <div>
          <input type="submit" value="Send IT" />
        </div>
      </form>
    </div>
  );
}

export default Contact;
