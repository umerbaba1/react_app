import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

function Demo() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Card>
        <div className='text-red-400 bg-green-400'>
          Nice to meet you
        </div>
        <div className='font-bold text-yellow-400'>
          <h1> Wake up call from umer</h1>

        </div>
      </Card>
      <Card>
        <div className='text-red-400 bg-green-400 '>
          Nice to see you
        </div>
        <div className='font-bold text-yellow-400'>
          <h1> Bye Bye from umer</h1>

        </div>
      </Card> */}
      {/* {
        [
          <Data
          key={1}
          title={"Mere kahani"}
          price={60000}
          />,
          <Data
          key={2}
          title={"Uske kahani"}
          price={60000000}
          />
        ]
      } */}
      <ErrorBoundary>
      <Card1/>
     
      </ErrorBoundary>
      <Card89/>

      
    </>
  )
}

export default Demo

function Card(props){
  return <div className='h-32 w-80 bg-indigo-400 rounded-2xl flex m-4  '>
{props.children}
  </div>
}
function Data(props){
  return<div className='h-30 w-50 bg-indigo-600 font-extrabold'>
    {props.title}
    {props.price}

  </div>
}

function Card1(){
  throw new Error("Bye bye")
  return<div  className='h-20 w-20 flex font-bold text-red-700'>
 Hi card 1
  </div>
}
function Card89(){
  return <div  className='h-40 w-50 flex font-bold text-red-700'>
 Hi card 2 mode 
  </div>
}
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <div  className='h-40 w-50 flex font-bold text-red-700'>
      Something went wrong
       </div>;
    }

    return this.props.children; 
  }
}