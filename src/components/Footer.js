import React from 'react';
import './Footer.css';
// import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div>
          <h3>About ODOP</h3>
          <p>The initiative aims to select, brand, and promote at least One Product from each Districtof the country for enabling holistic socioeconomic growth across all regions.</p>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Important Links</h2>
            <Link to='/sign-up'>Home</Link>
            <Link to='/'>About ODOP</Link>
            <Link to='/'>Privacy Policy</Link>
            <Link to='/'>Terms and Condition</Link>
            <Link to='/'>Exchange and Return Policy</Link>
            <Link to='/'>Contact Us</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Stay Connected</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              ODOP
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>ODOP © 2023</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
