import React from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet, useNavigate } from 'react-router-dom'

import Toppers from './components/Toppers'
import { BookOpen, Users, Target, Zap } from 'lucide-react'

// import { signal, computed } from "@preact/signals-react"
import { motion } from 'framer-motion'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'



const App = () => {

  return (


    <BrowserRouter>
     
      <Routes>
        <Route path='/' element={<Lander />} >
        <Route path='/topper' element={<Achive />} />
        <Route path='*' element={<Error404 />} />
        <Route path='/' element={<Homepage />} />
        </Route>

      </Routes>
    </BrowserRouter>

  )
}
export default App

function Lander(){
  return<div>
     <Link className="underline text-red-500 m-8" to='/'>Home</Link>
      <Link className="underline text-green-600" to='/topper'>Topper</Link>
      
      <Outlet />

    <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Ace Coaching. All rights reserved.</p>
          <div className="mt-4">
            <a href="#" className="hover:underline mx-2">Privacy Policy</a>
            <a href="#" className="hover:underline mx-2">Terms of Service</a>
            <a href="#" className="hover:underline mx-2">Contact Us</a>
          </div>
        </div>
      
      </footer>
  </div>
}


function Homepage() {



  return (
    <div className="min-h-screen flex flex-col">


      <main className="flex-grow">
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Welcome to Ace Coaching</h2>
            <p className="text-xl mb-8">Empowering students to achieve their dreams in JEE, NEET, and more.</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
              Enroll Now
            </button>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {['JEE Preparation', 'NEET Coaching', 'Foundation Courses'].map((course, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">{course}</h3>
                  <p className="text-gray-600 mb-4">Comprehensive program designed for success.</p>
                  <a href="#" className="text-blue-600 hover:underline">Learn more</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-blue-600 text-white py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Why Choose Ace Coaching?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Expert Faculty', description: 'Learn from the best in the field' },
                { title: 'Proven Track Record', description: 'Consistently high success rates' },
                { title: 'Personalized Attention', description: 'Tailored approach for each student' }
              ].map((feature, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { name: 'Priya Sharma', achievement: 'JEE Advanced 2023 - AIR 45', quote: 'Ace Coaching provided me with the perfect blend of guidance and resources.' },
                { name: 'Rahul Patel', achievement: 'NEET 2023 - 99.8 percentile', quote: 'The personalized attention and rigorous practice sessions were key to my success.' }
              ].map((story, index) => (
                <div key={index} className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">{story.name}</h3>
                  <p className="text-blue-600 mb-4">{story.achievement}</p>
                  <p className="italic">"{story.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>


    </div>
  )
}
function Achive() {
  const navigate=useNavigate()

  return <div className="min-h-screen flex flex-col">
    <header className="bg-blue-700 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center">
          <BookOpen className="mr-2" />
          Ace Coaching
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Courses</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <main className="flex-grow">
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to Ace Coaching</h2>
          <p className="text-xl mb-8">Empowering students to achieve their dreams in JEE, NEET, and more.</p>
          <button onClick={()=>{navigate("/")}} className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
            Enroll Now
          </button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'JEE Preparation', icon: <Target className="mb-4 mx-auto text-blue-600" size={40} /> },
              { title: 'NEET Coaching', icon: <Users className="mb-4 mx-auto text-green-600" size={40} /> },
              { title: 'Foundation Courses', icon: <BookOpen className="mb-4 mx-auto text-yellow-600" size={40} /> }
            ].map((course, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                {course.icon}
                <h3 className="text-xl font-semibold mb-4">{course.title}</h3>
                <p className="text-gray-600 mb-4">Comprehensive program designed for success.</p>
                <a href="#" className="text-blue-600 hover:underline">Learn more</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Toppers />

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose Ace Coaching?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Expert Faculty', description: 'Learn from the best in the field', icon: <Users className="mb-4 mx-auto" size={40} /> },
              { title: 'Proven Track Record', description: 'Consistently high success rates', icon: <Target className="mb-4 mx-auto" size={40} /> },
              { title: 'Personalized Attention', description: 'Tailored approach for each student', icon: <Zap className="mb-4 mx-auto" size={40} /> }
            ].map((feature, index) => (
              <div key={index} className="flex flex-col items-center">
                {feature.icon}
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: 'Priya Sharma', achievement: 'JEE Advanced 2023 - AIR 45', quote: 'Ace Coaching provided me with the perfect blend of guidance and resources.' },
              { name: 'Rahul Patel', achievement: 'NEET 2023 - 99.8 percentile', quote: 'The personalized attention and rigorous practice sessions were key to my success.' }
            ].map((story, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{story.name}</h3>
                <p className="text-blue-600 mb-4">{story.achievement}</p>
                <p className="italic">"{story.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  </div>

}

const Error404 = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-lg mb-6">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg shadow-md transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

