import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-4 py-8 mt-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          {/* Map Section - Left Side */}
          <div className="w-full lg:w-1/2 xl:w-2/5">
            <h3 className="text-xl font-bold mb-4"> JUIT Location</h3>
            <div className="aspect-w-16 aspect-h-12 rounded-xl overflow-hidden border-2 border-gray-700 shadow-xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.325982417895!2d77.1276237754721!3d30.930547574461935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f838aadb9b1f9%3A0x4c1c64b52d4e5c9f!2sJaypee%20University%20of%20Information%20Technology!5e0!3m2!1sen!2sin!4v1716450067376!5m2!1sen!2sin"
                width="800"
                height="600"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="JUIT Location Map"
              ></iframe>
            </div>
          </div>

          {/* Content Sections - Right Side */}
          <div className="w-full lg:w-1/2 xl:w-3/5 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Section */}
            <div className="space-y-2">
              <h3 className="text-xl font-bold mb-4">IEEE-JUIT</h3>
              <p className="text-gray-400 text-sm">
                The IEEE Student Branch at Jaypee University of Information Technology
                aims to foster technical innovation and provide students with opportunities
                for professional growth through workshops, seminars, and competitions.
              </p>
            </div>

            {/* Contact Section */}
            <div className="space-y-2">
              <h3 className="text-xl font-bold mb-4">Contact Details</h3>
              <div className="flex items-start space-x-2">
                <FaMapMarkerAlt className="text-gray-400 mt-1 flex-shrink-0" />
                <p className="text-gray-400 text-sm">
                  Jaypee University of Information Technology<br />
                  Waknaghat, P.O. Waknaghat<br />
                  Tehsil Kandaghat, District Solan<br />
                  Himachal Pradesh - 173234<br />
                  India
                </p>
              </div>
              <div className="flex items-center space-x-2 mt-3">
                <FaPhoneAlt className="text-gray-400 flex-shrink-0" />
                <p className="text-gray-400 text-sm">+91 12345 67890</p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-2">
              <h3 className="text-xl font-bold mb-4">Quick Access</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">Upcoming Events</a></li>
                <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">Past Workshops</a></li>
                <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">Executive Team</a></li>
                <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">Photo Gallery</a></li>
                <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">Join IEEE</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <div className="flex space-x-6">
              <a href="https://facebook.com/ieeejuit" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
                <FaFacebook size={28} />
              </a>
              <a href="https://instagram.com/ieeejuit" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors">
                <FaInstagram size={28} />
              </a>
              <a href="https://linkedin.com/company/ieeejuit" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaLinkedin size={28} />
              </a>
              <a href="https://twitter.com/ieeejuit" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaTwitter size={28} />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} IEEE-JUIT Student Branch
                <br />
                <span className="text-xs">Part of IEEE Region 10</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;