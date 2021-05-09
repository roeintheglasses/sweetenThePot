import React from 'react';

export default function SignupForm() {
  return (
    <form
      action="https://getform.io/f/16df481d-b3e3-44ae-a715-b24a1b2facc9"
      method="POST"
      enctype="multipart/form-data"
      className="signupForm reveal-from-left">
      <input type="hidden" id="captchaResponse" name="g-recaptcha-response" />

      <input
        className="form-input"
        placeholder="Enter your name"
        type="text"
        name="name"
        required
      />
      <input
        className="form-input"
        placeholder="Enter social handle"
        type="text"
        name="social"
      />
      <input
        className="form-input"
        placeholder="Enter your email"
        type="email"
        name="email"
        required
      />
      <input
        className="form-input "
        type="file"
        name="donationProof"
        required
      />
      <select
        className="form-input"
        name="service"
        id="service"
        placeholder="Select one"
        required>
        <option className="form-input" value="select">
          Select one
        </option>
        <option className="form-input" value="devFolio">
          Dev Folio
        </option>
        <option className="form-input" value="designerFolio">
          Designer Folio
        </option>
        <option className="form-input" value="universalFolio">
          Universal Folio
        </option>
        <option className="form-input" value="artVed">
          Art By Ved
        </option>
      </select>

      <input className="form-input " type="file" name="resume" />

      <button className="button button-dark" type="submit">
        Send
      </button>
    </form>
  );
}
