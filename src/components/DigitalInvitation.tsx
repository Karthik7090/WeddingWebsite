import React from 'react';
import { Download } from 'lucide-react';

const DigitalInvitation = () => {
  const handleDownload = () => {
    // Replace with your actual invitation PDF URL
    const invitationUrl = '/invitation.pdf';
    window.open(invitationUrl, '_blank');
  };

  return (
    <div className="text-center">
      <button
        onClick={handleDownload}
        className="bg-wedding-gold text-white font-playfair px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors duration-300 flex items-center justify-center mx-auto"
      >
        <Download className="w-5 h-5 mr-2" />
        Download Digital Invitation
      </button>
    </div>
  );
};

export default DigitalInvitation;