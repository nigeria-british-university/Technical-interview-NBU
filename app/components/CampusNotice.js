'use client';
import { useEffect } from 'react';
export default function CampusNotice() {
  useEffect(() => {
    const notice = document.querySelector('#campus-notice');
    const dismiss = document.querySelector('#dismiss-notification');
    const heading = document.querySelector('#notice-heading');
    const handleDismiss = () => { notice.hidden = true; };
    const timer = window.setTimeout(() => {
      heading.textContent = 'Plan your visit';
      dismiss.addEventListener('click', handleDismiss);
    }, 0);
    return () => { window.clearTimeout(timer); dismiss.removeEventListener('click', handleDismiss); };
  }, []);
  return <aside id="campus-notice" className="notice"><strong id="notice-title">Plan your visit</strong><p>Open day registration is now available. Contact admissions to reserve a place.</p><button id="dismiss-notification" type="button">Dismiss notice</button></aside>;
}
