import React from 'react';

const Timeline = () => {
  const events = [
    {
      date: "June 2020",
      title: "First Meeting",
      description: "A chance encounter at a mutual friend's wedding sparked our journey."
    },
    {
      date: "December 2020",
      title: "First Date",
      description: "Coffee turned into dinner, and dinner turned into endless conversations."
    },
    {
      date: "March 2022",
      title: "The Proposal",
      description: "Under the stars at our favorite spot, where forever began."
    },
    {
      date: "December 2024",
      title: "The Wedding",
      description: "The beginning of our new chapter together."
    }
  ];

  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-wedding-gold"></div>
      <div className="space-y-12">
        {events.map((event, index) => (
          <div key={index} className={`flex items-center ${
            index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
          }`}>
            <div className="w-1/2 pr-8 text-right">
              {index % 2 === 0 && (
                <div>
                  <h3 className="font-playfair text-xl font-bold">{event.title}</h3>
                  <p className="text-wedding-red font-cormorant">{event.date}</p>
                  <p className="text-gray-600 mt-2">{event.description}</p>
                </div>
              )}
            </div>
            <div className="relative flex items-center justify-center w-8">
              <div className="w-4 h-4 rounded-full bg-wedding-gold"></div>
            </div>
            <div className="w-1/2 pl-8">
              {index % 2 !== 0 && (
                <div>
                  <h3 className="font-playfair text-xl font-bold">{event.title}</h3>
                  <p className="text-wedding-red font-cormorant">{event.date}</p>
                  <p className="text-gray-600 mt-2">{event.description}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;