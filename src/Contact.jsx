
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css'; // Custom elegant styles

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
  'service_xxx',
  'template_xxx',
  form.current,
  'public_key'
).then(() => {
  toast.success("Message sent!");
  form.current.reset();
}).catch((error) => {
  console.error("EmailJS error:", error);
  toast.error("Something went wrong. Check console.");
});}

  return (
    <div className="contact-bg">
      <ToastContainer />
      <div className="contact-card">
        <h2>Contact <span>Firdous Collection</span></h2>
        <p>We’d love to hear your thoughts, suggestions or just say hello 💌</p>

        <form ref={form} onSubmit={sendEmail}>
          <div className="input-group">
            <label>👤 Your Name</label>
            <input type="text" name="user_name" required />
          </div>

          <div className="input-group">
            <label>📧 Email Address</label>
            <input type="email" name="user_email" required />
          </div>

          <div className="input-group">
            <label>💬 Your Message</label>
            <textarea name="message" rows="4" required />
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        <div className="contact-info">
          <p>📍 Lahore, Pakistan</p>
          <p>☎️ +92 3334470494</p>
          <p>✉️ firdous@collection.pk</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
