import { db } from "../firebase";
import PreferenceButton from "./PreferenceButton";
import { useState } from "react";
import Options from "./Options";

function HiringForm() {
  const timestamp = new Date().toLocaleTimeString();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cnum, setContact] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("hiringData")
      .add({
        timestamp: timestamp,
        name: name,
        email: email,
        contactNumber: cnum,
        academicYear: document.querySelector(
          'input[name="choose-acad-year"]:checked'
        ).id,
        preference1: document.getElementById("Preference 1").value,
        preference2: document.getElementById("Preference 2").value,
        preference3: document.getElementById("Preference 3").value,
      })
      .then(() => {
        // setLoader(false);
        alert("Your message has been submitted👍");
      });
  };
  //   .catch((error) => {
  //     alert(error.message);
  //     setLoader(false);
  //   });

  return (
    <div class="my-form">
      <form onSubmit={handleSubmit}>
        <div class="form-field">
          <label class="label-text" for="name">
            Name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
            size="40"
            required
          />
        </div>
        <div class="form-field">
          <label class="label-text" for="email">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            required
          />
        </div>
        <div class="form-field">
          <label class="label-text" for="cnum">
            Contact Number
          </label>
          <input
            value={cnum}
            onChange={(e) => setContact(e.target.value)}
            type="tel"
            id="cnum"
            required
          />
        </div>
        <div class="form-field">
          <label class="label-text">Academic Year</label>
          <Options />
        </div>
        <PreferenceButton name="Preference 1" />
        <PreferenceButton name="Preference 2" />
        <PreferenceButton name="Preference 3" />

        <div class="form-field">
          <label class="label-text" for="subject">What will you bring on the table for E-Cell?</label>
          <textarea
            id="subject"
            name="subject"
          ></textarea>
        </div>

        <div class="final-button">
          <button class="submit-button" type="submit">
            Send My Application
          </button>
        </div>
      </form>
    </div>
  );
}

export default HiringForm;
