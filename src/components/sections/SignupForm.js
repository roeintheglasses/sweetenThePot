import React from 'react';
import FormLabel from '../elements/FormLabel';
import Input from '../elements/Input';
export default function SignupForm() {
  return (
    <form
      action="https://getform.io/f/16df481d-b3e3-44ae-a715-b24a1b2facc9"
      method="POST"
      enctype="multipart/form-data"
      className="signupForm reveal-from-left">
      <input type="hidden" id="captchaResponse" name="g-recaptcha-response" />
      <FormLabel>
        <Input
          label="Name"
          placeholder="Enter your name"
          type="text"
          name="name"
          required
        />
      </FormLabel>
      <FormLabel>
        <Input
          label="Email"
          placeholder="Enter your email"
          type="email"
          name="email"
          required
        />
      </FormLabel>

      <FormLabel>
        Upload donation proof
        <input
          className="form-input form-upload"
          type="file"
          name="donationProof"
          required
        />
      </FormLabel>

      <FormLabel>
        Select what you need
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
      </FormLabel>

      <FormLabel>
        Upload your resume/picture for your Portfolio/Art
        <input
          className="form-input form-upload"
          type="file"
          name="resume"
          required
        />
      </FormLabel>

      <button className="button button-dark mt-8" type="submit">
        Submit
      </button>
    </form>
  );
}
