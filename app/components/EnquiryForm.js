'use client';
import { useState } from 'react';
export default function EnquiryForm() {
  const [message, setMessage] = useState('');
  function submitEnquiry(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const programme = String(data.get('programme') || '');
    if (!name || !programme) { setMessage('Please enter your name and select a programme.'); return; }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email)) { setMessage('Please enter a valid email address.'); return; }
    setMessage('Thank you. Your enquiry has been received in this local demo.');
    event.currentTarget.reset();
  }
  return <form noValidate onSubmit={submitEnquiry}><div className="field"><label htmlFor="full-name">Full name</label><input id="full-name" name="name" autoComplete="name" required /></div><div className="field"><label htmlFor="email">Email address</label><input id="email" name="email" type="email" autoComplete="email" required /></div><div className="field"><label htmlFor="programme">Programme of interest</label><select id="programme" name="programme" required defaultValue=""><option value="">Select a programme</option><option>Business & Enterprise</option><option>Computing & Technology</option><option>Arts & Social Sciences</option></select></div><div className="field"><span className="field-title">Your message (optional)</span><textarea id="message" name="message" rows="3" /></div><button className="button" type="submit">Send enquiry →</button><p className="form-status" role="status">{message}</p></form>;
}
