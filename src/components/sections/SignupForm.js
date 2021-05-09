import React from 'react';

export default function SignupForm() {
  return (
    <form
      action="https://getform.io/f/16df481d-b3e3-44ae-a715-b24a1b2facc9"
      method="POST"
      enctype="multipart/form-data"
      className="signupForm reveal-from-left">
      <input className="form-input" type="text" name="name" />
      <input className="form-input" type="email" name="email" />
      <input className="form-input " type="file" name="file" />
      <input type="hidden" id="captchaResponse" name="g-recaptcha-response" />
      <button className="button button-dark" type="submit">
        Send
      </button>
    </form>
  );
}
