'use client';
import { useState } from 'react';
export default function Navigation() {
  const [open, setOpen] = useState(false);
  function toggleMenu() {
    const menu = document.querySelector('#primary-navigation');
    if (menu) setOpen(!open);
  }
  return <header className="wrap header"><a className="brand" href="#main">M<span>MERIDIAN<small>UNIVERSITY</small></span></a><button className="menu-toggle" aria-label="Toggle navigation" aria-controls="site-navigation" aria-expanded={open} onClick={toggleMenu}>☰</button><nav id="site-navigation" className={open ? 'navigation is-open' : 'navigation'} aria-label="Main navigation"><a href="#admissions">Admissions</a><a href="#programmes">Programmes</a><a href="#news">Campus life</a><a className="button" href="#enquiry">Enquire now ↗</a></nav></header>;
}
