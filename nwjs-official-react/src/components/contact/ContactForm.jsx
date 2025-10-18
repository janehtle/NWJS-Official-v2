import { useState } from "react"

function ContactForm() {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  const nameRegex = /^[a-zA-Z]{2,12}$/
  const [subject, setSubject] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  /* eventhandlers essentially */
  const handleSubmit = (e) => {
    e.preventDefault() /* prevents browser's default form behavior, can show alerts, validate, and clear form without page reload */

    if (!subject) {
      alert("Please provide a subject for your inquiry.");
      return 
    }

    if (!name || !nameRegex.test(name)) {
        alert("Please provide your name (Must be more than 2 characters).");
        return;
    }

    if (!email || !emailRegex.test(email)) {
        alert("Please provide a valid email.");
        return;
    }

    if (!comment) {
        alert("Please leave a message.");
        return;
    }

    if (!checkbox) {
        alert("Please agree to the terms and services.");
        return;
    }

    alert("Thank you! Someone from our team will reach out regarding your inquiry.");

    /* form reset */
    setSubject("")
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id="subject" placeholder="Subject" required value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />

      <input type="text" id="name" placeholder="Name" required value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input type="email" id="email" placeholder="E-mail" required value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <textarea id="comment" placeholder="Write message..." required value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  )
}

export default ContactForm
