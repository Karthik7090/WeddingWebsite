import React from 'react';
import { MapPin, Bus, Car, Plane, Train } from 'lucide-react';

const TravelInfo = () => {
  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Venue Location */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <MapPin className="w-6 h-6 text-wedding-red mr-2" />
            <h3 className="font-playfair text-2xl">Venue Location</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Sri Krishna Temple<br />
            Gadwal, Andhra Pradesh<br />
            PIN: 509125
          </p>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-wedding-red hover:text-wedding-gold transition-colors duration-300"
          >
            View on Google Maps →
          </a>
        </div>

        {/* Transportation Options */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="font-playfair text-2xl mb-4">Transportation Options</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <Bus className="w-5 h-5 text-wedding-red mr-3" />
              <span>Complimentary Wedding Bus Service Available</span>
            </div>
            <div className="flex items-center">
              <Train className="w-5 h-5 text-wedding-red mr-3" />
              <span>Nearest Railway Station: Gadwal Junction (2 km)</span>
            </div>
            <div className="flex items-center">
              <Plane className="w-5 h-5 text-wedding-red mr-3" />
              <span>Nearest Airport: Hyderabad International (150 km)</span>
            </div>
            <div className="flex items-center">
              <Car className="w-5 h-5 text-wedding-red mr-3" />
              <span>Parking Available at Venue</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bus Schedule */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="font-playfair text-2xl mb-4">Wedding Bus Schedule</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-2">Route</th>
                <th className="text-left py-2">Departure Time</th>
                <th className="text-left py-2">Reach Time</th>
                <th className="text-left py-2">Pickup Point</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="py-2">Shimoga - Gadwal</td>
                <td className="py-2">5:00 AM</td>
                <td className="py-2">1:00 PM</td>
                <td className="py-2">Adithya's Home</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2">Gadwal - Shimoga</td>
                <td className="py-2">7:00 AM</td>
                <td className="py-2">7:00 PM</td>
                <td className="py-2">Wedding Venue</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TravelInfo;