import React from 'react';
import { Trophy, Star } from 'lucide-react';

const toppers = [
  { name: 'Aarav Patel', year: 2023, exam: 'JEE Advanced', rank: 'AIR 5', achievement: 'Secured admission to IIT Bombay' },
  { name: 'Zara Khan', year: 2023, exam: 'NEET', rank: 'AIR 12', achievement: 'Admitted to AIIMS Delhi' },
  { name: 'Vikram Singh', year: 2022, exam: 'JEE Advanced', rank: 'AIR 18', achievement: 'Joined IIT Delhi' },
  { name: 'Ananya Sharma', year: 2022, exam: 'NEET', rank: 'AIR 7', achievement: 'Selected for JIPMER Puducherry' },
  { name: 'Rohan Gupta', year: 2021, exam: 'JEE Advanced', rank: 'AIR 22', achievement: 'Enrolled in IIT Madras' },
  { name: 'Priya Desai', year: 2021, exam: 'NEET', rank: 'AIR 15', achievement: 'Admitted to AFMC Pune' }
];

const Toppers = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center">
          <Trophy className="mr-2 text-yellow-500" />
          Our Star Performers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toppers.map((topper, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <Star className="text-yellow-500 mr-2" />
                <h3 className="text-xl font-semibold">{topper.name}</h3>
              </div>
              <p className="text-gray-600 mb-2">{topper.year} | {topper.exam}</p>
              <p className="text-blue-600 font-bold mb-2">Rank: {topper.rank}</p>
              <p className="text-gray-700">{topper.achievement}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Toppers;
