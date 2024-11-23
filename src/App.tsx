import React from 'react';
import { Heart, Calendar, MapPin, Clock } from 'lucide-react';
import Navbar from './components/Navbar';
import Timeline from './components/Timeline';
import CountdownTimer from './components/CountdownTimer';
import RSVPForm from './components/RSVPForm';
import TravelInfo from './components/TravelInfo';
import DigitalInvitation from './components/DigitalInvitation';

function App() {
  // Use ISO 8601 format for the target date
  const weddingDate = '2025-02-14T11:00:00+05:30'; // Added Indian timezone offset

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen bg-mandala">
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="font-greatVibes text-6xl md:text-8xl mb-4 animate-float">Anusha & Adithya</h1>
          <p className="font-cormorant text-2xl md:text-3xl mb-8">Are getting married</p>
          <div className="font-playfair text-xl md:text-2xl">
            <p>February 14th, 2025</p>
            <p>Gadwal, Andhra Pradesh</p>
          </div>
        </div>
      </section>

      {/* Digital Invitation */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title decorative-border mb-12">Digital Invitation</h2>
          <DigitalInvitation />
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title decorative-border mb-16">Counting down to forever</h2>
          <CountdownTimer targetDate={weddingDate} />
        </div>
      </section>

      {/* Rest of the components remain the same */}
      {/* Our Story */}
      <section id="story" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title decorative-border">Our Story</h2>
          <div className="max-w-3xl mx-auto mt-12">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title decorative-border">Wedding Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Mehendi Ceremony",
                date: "February 12th",
                time: "4:00 PM",
                location: "Gadwal Palace Gardens",
                image: "https://images.unsplash.com/photo-1604430456280-43f652c497aa?auto=format&fit=crop&q=80&w=2960&ixlib=rb-4.0.3"
              },
              {
                title: "Sangeet Night",
                date: "February 13th",
                time: "7:00 PM",
                location: "Gadwal Heritage Hall",
                image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=2960&ixlib=rb-4.0.3"
              },
              {
                title: "Wedding Ceremony",
                date: "February 14th",
                time: "11:00 AM",
                location: "Sri Krishna Temple, Gadwal",
                image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=2960&ixlib=rb-4.0.3"
              }
            ].map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="font-playfair text-2xl font-bold mb-4">{event.title}</h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Information */}
      <section id="travel" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title decorative-border mb-12">Travel & Accommodation</h2>
          <TravelInfo />
        </div>
      </section>

      {/* RSVP Section */}
      <section id="rsvp" className="py-16 bg-wedding-red">
        <div className="container mx-auto px-4">
          <div className="text-center text-white mb-12">
            <Heart className="w-12 h-12 mx-auto mb-6 animate-float" />
            <h2 className="section-title text-white">Join Our Celebration</h2>
            <p className="font-cormorant text-xl mb-8">We request the honor of your presence</p>
          </div>
          <RSVPForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-greatVibes text-3xl mb-4">Anusha & Adithya</h2>
          <p className="font-cormorant">February 14th, 2025 • Gadwal, Andhra Pradesh</p>
        </div>
      </footer>
    </div>
  );
}

export default App;