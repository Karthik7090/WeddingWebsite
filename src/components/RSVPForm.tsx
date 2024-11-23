import React, { useState } from 'react';
import { Send, Users, Bus } from 'lucide-react';

interface RSVPData {
  name: string;
  email: string;
  phone: string;
  attending: string;
  guestCount: number;
  events: string[];
  transportationNeeded: string;
  busRoute: string;
  dietaryRestrictions: string;
  accommodation: string;
}

const RSVPForm = () => {
  const [formData, setFormData] = useState<RSVPData>({
    name: '',
    email: '',
    phone: '',
    attending: '',
    guestCount: 1,
    events: [],
    transportationNeeded: '',
    busRoute: '',
    dietaryRestrictions: '',
    accommodation: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('RSVP Data:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="text-center p-8 bg-white rounded-lg shadow-lg">
        <h3 className="font-playfair text-2xl font-bold text-wedding-red mb-4">Thank You!</h3>
        <p className="font-cormorant text-xl">Your RSVP has been received. We look forward to celebrating with you!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block font-playfair text-lg mb-2">Full Name</label>
          <input
            type="text"
            id="name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-wedding-gold focus:border-transparent"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block font-playfair text-lg mb-2">Email</label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-wedding-gold focus:border-transparent"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div>
            <label htmlFor="phone" className="block font-playfair text-lg mb-2">Phone Number</label>
            <input
              type="tel"
              id="phone"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-wedding-gold focus:border-transparent"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>
        </div>

        <div>
          <label className="block font-playfair text-lg mb-2">Will you be attending?</label>
          <div className="space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="attending"
                value="yes"
                className="form-radio text-wedding-gold"
                onChange={(e) => setFormData({...formData, attending: e.target.value})}
              />
              <span className="ml-2">Joyfully Accept</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="attending"
                value="no"
                className="form-radio text-wedding-gold"
                onChange={(e) => setFormData({...formData, attending: e.target.value})}
              />
              <span className="ml-2">Regretfully Decline</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block font-playfair text-lg mb-2">Which events will you attend?</label>
          <div className="space-y-2">
            {[
              { id: 'mehendi', label: 'Mehendi Ceremony (Feb 12)' },
              { id: 'sangeet', label: 'Sangeet Night (Feb 13)' },
              { id: 'wedding', label: 'Wedding Ceremony (Feb 14)' }
            ].map((event) => (
              <label key={event.id} className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-wedding-gold"
                  onChange={(e) => {
                    const updatedEvents = e.target.checked
                      ? [...formData.events, event.id]
                      : formData.events.filter(ev => ev !== event.id);
                    setFormData({...formData, events: updatedEvents});
                  }}
                />
                <span className="ml-2">{event.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block font-playfair text-lg mb-2">
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Number of Guests (including yourself)
            </div>
          </label>
          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-wedding-gold focus:border-transparent"
            value={formData.guestCount}
            onChange={(e) => setFormData({...formData, guestCount: parseInt(e.target.value)})}
          >
            {[1, 2, 3, 4].map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-playfair text-lg mb-2">
            <div className="flex items-center">
              <Bus className="w-5 h-5 mr-2" />
              Do you need transportation?
            </div>
          </label>
          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-wedding-gold focus:border-transparent"
            value={formData.transportationNeeded}
            onChange={(e) => setFormData({...formData, transportationNeeded: e.target.value})}
          >
            <option value="">Select an option</option>
            <option value="yes">Yes, I need wedding bus service</option>
            <option value="no">No, I'll arrange my own transportation</option>
          </select>
        </div>

        {formData.transportationNeeded === 'yes' && (
          <div>
            <label className="block font-playfair text-lg mb-2">Select Bus Route</label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-wedding-gold focus:border-transparent"
              value={formData.busRoute}
              onChange={(e) => setFormData({...formData, busRoute: e.target.value})}
            >
              <option value="">Select a route</option>
              <option value="hyderabad">Hyderabad - Gadwal</option>
              <option value="kurnool">Kurnool - Gadwal</option>
            </select>
          </div>
        )}

        <div>
          <label className="block font-playfair text-lg mb-2">Do you need accommodation?</label>
          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-wedding-gold focus:border-transparent"
            value={formData.accommodation}
            onChange={(e) => setFormData({...formData, accommodation: e.target.value})}
          >
            <option value="">Select an option</option>
            <option value="yes">Yes, please arrange accommodation</option>
            <option value="no">No, I'll arrange my own accommodation</option>
          </select>
        </div>

        <div>
          <label htmlFor="dietary" className="block font-playfair text-lg mb-2">Dietary Restrictions</label>
          <textarea
            id="dietary"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-wedding-gold focus:border-transparent"
            rows={3}
            value={formData.dietaryRestrictions}
            onChange={(e) => setFormData({...formData, dietaryRestrictions: e.target.value})}
            placeholder="Please let us know of any dietary restrictions"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-wedding-red text-white font-playfair px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors duration-300 flex items-center justify-center"
        >
          <Send className="w-5 h-5 mr-2" />
          Send RSVP
        </button>
      </div>
    </form>
  );
};

export default RSVPForm;