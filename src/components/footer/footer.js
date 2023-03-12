import './footer.css';

function Footer() {

    return (<div className='footer-wrapper'>
   
   <div className='address-wrapper'>
    <h2>Mad Mike's Demo & Recycling</h2>
    <div className='address-body'>
        <p>876 E jamestown rd</p>
        <p>Jamestown Pa 16134</p>
        <p> (724)-866-6609</p>
    </div>
   </div>
          <div class="opening-hours-wrapper">
      <div className='opening-hours'>
      <h2>Opening Hours</h2>
      </div>
     <div className='hours'>
     <ul>
        <li>Monday: 9:00 AM - 6:00 PM</li>
        <li>Tuesday: 9:00 AM - 6:00 PM</li>
        <li>Wednesday: 9:00 AM - 6:00 PM</li>
        <li>Thursday: 9:00 AM - 6:00 PM</li>
        <li>Friday: 9:00 AM - 6:00 PM</li>
        <li>Saturday: 10:00 AM - 3:00 PM</li>
        <li>Sunday: Closed</li>
      </ul>
     </div>
    
    </div>

    </div>)
}


export default Footer;