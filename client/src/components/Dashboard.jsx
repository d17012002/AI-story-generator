import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [likedStories, setLikedStories] = useState([]);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (id) => {
    if (id === activeAccordion) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(id);
    }
  };

  const removeFromUpvoted = (storyId) => {
    axios
      .post('https://educhamp-server.onrender.com/story/deleteUpvoted', { storyId })
      .then(() => {
        setLikedStories((prevStories) =>
          prevStories.filter((story) => story.id !== storyId)
        );
      })
      .catch((error) => {
        console.error('Error removing story:', error);
      });
  };

  useEffect(() => {
    axios
      .get('https://educhamp-server.onrender.com/story/getUpvoted') 
      .then((response) => {
        setLikedStories(response.data); 
        console.log(response.data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  return (
    <section className='bg-gray-900 p-5 sm:p-20 items-center relative'>
      <div className="p-8 container">
        <h3 className="text-xl  text-white mb-4">Upvoted Stories</h3>
        <div className="space-y-4">
          {likedStories.map((story) => (
            <div key={story.id} className="bg-white rounded-lg shadow relative">
              <button
                className="absolute top-4 right-12 text-red-500 hover:text-red-700"
                onClick={() => removeFromUpvoted(story.id)}
              >
                Remove
              </button>
              <div
                className="flex justify-between items-center p-4 cursor-pointer"
                onClick={() => toggleAccordion(story.id)}
              >
                <h2 className="text-lg font-semibold">{story.prompt}</h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 transition-transform ${
                    activeAccordion === story.id ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              {activeAccordion === story.id && (
                <div className="p-4 border-t">
                  <p className="text-gray-600">{story.text}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
