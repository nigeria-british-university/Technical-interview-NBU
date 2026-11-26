import Navigation from './components/Navigation';
import EnquiryForm from './components/EnquiryForm';
import CampusNotice from './components/CampusNotice';

const programmes = [
  ['01', 'Business & Enterprise', 'Build the insight to lead organisations and create opportunities.'],
  ['02', 'Computing & Technology', 'Explore software, digital systems and human-centred innovation.'],
  ['03', 'Arts & Social Sciences', 'Understand communities and shape the conversations of tomorrow.'],
];

export default function Home() {
  return <>
    <div className="utility">A place to discover your next chapter <span>Port Alder, Nigeria</span></div>
    <Navigation />
    <main id="main">
      <section className="hero wrap"><div><p className="eyebrow">MERIDIAN UNIVERSITY · ADMISSIONS 2027</p><h1>Big ideas.<br />Brighter futures.</h1><p className="intro">A welcoming community for curious minds. Find your direction through practical learning, inspiring people and a world of possibility.</p><div className="actions"><a className="button" href="#enquiry">Start your journey ↗</a><a href="#programmes">Explore programmes →</a></div><p className="caption">Learn with purpose. Grow with confidence.</p></div><figure><img src="/images/campus.svg" alt="Illustration of the Meridian University campus courtyard" width="720" height="620" /><figcaption>YOUR NEXT CHAPTER STARTS HERE</figcaption></figure></section>
      <div className="stats wrap"><div><strong>24</strong><span>degree pathways</span></div><div><strong>18:1</strong><span>student to tutor ratio</span></div><div><strong>30+</strong><span>student societies</span></div><p>A close-knit campus.<br />An expansive outlook.</p></div>
      <section className="section wrap" id="programmes"><p className="eyebrow">FIND YOUR DIRECTION</p><div className="section-heading"><h2>Learning that opens doors.</h2><p>Connect your interests with your ambitions.</p></div><div className="programme-grid">{programmes.map(([number,title,description])=><article className="programme" key={number}><span className="number">{number}</span><h3>{title}</h3><p>{description}</p><a href="#enquiry">Ask about this school →</a></article>)}</div></section>
      <section className="admissions" id="admissions"><div className="wrap two-columns"><div><p className="eyebrow">YOUR PATH TO MERIDIAN</p><h2>A fresh start,<br />with support at every step.</h2><p>Our admissions team can help you explore entry requirements, choose a programme and prepare your application.</p><a className="button light" href="#enquiry">Speak to admissions →</a></div><ol><li><strong>Explore your options</strong><span>Find the programme that feels right for you.</span></li><li><strong>Prepare your documents</strong><span>Gather your qualifications and personal information.</span></li><li><strong>Apply with confidence</strong><span>Our team is here to guide your next step.</span></li></ol></div></section>
      <section className="section wrap" id="news"><p className="eyebrow">LIFE AT MERIDIAN</p><h2>There is more to discover.</h2><div className="news-grid"><article className="news-card"><img src="/images/student-life.svg" alt="Students collaborating in the campus garden" width="720" height="420" /><p className="eyebrow">CAMPUS · 12 NOVEMBER 2026</p><h3>A community built around you</h3><p>Meet the clubs, creative projects and shared spaces that make campus life your own.</p></article><article className="event"><p className="eyebrow">UPCOMING EVENT</p><strong className="event-date">21 <span>JAN 2027</span></strong><h3>Undergraduate open day</h3><p>Explore our campus, meet tutors and get a feel for student life.</p><a href="#enquiry">Register your interest →</a><CampusNotice /></article></div></section>
      <section className="enquiry-section" id="enquiry"><div className="wrap two-columns"><div><p className="eyebrow">LET’S TALK</p><h2>Your future starts<br />with a conversation.</h2><p>Tell us a little about yourself and what you would like to study.</p><p className="small">Demonstration website. Enquiries stay in your browser and are not sent or saved.</p></div><EnquiryForm /></div></section>
    </main><footer className="wrap"><a className="brand" href="#main">M<span>MERIDIAN<small>UNIVERSITY</small></span></a><p>Fictional university · Port Alder, Nigeria<br />© 2026 Meridian University. Assessment demonstration.</p><a href="#main">Back to top ↑</a></footer>
  </>;
}
