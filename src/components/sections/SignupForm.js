import React from 'react';

export default function SignupForm() {
  return (
    <form
      action="https://getform.io/f/16df481d-b3e3-44ae-a715-b24a1b2facc9"
      method="POST"
      enctype="multipart/form-data">
      <input type="text" name="name" />
      <input type="email" name="email" />
      <input type="file" name="file" />
      <button type="submit">Send</button>
    </form>
  );
}
