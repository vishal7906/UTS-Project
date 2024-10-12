import React,{useEffect,useState} from 'react'
import File from './Home/file'
import { LoaderCircle } from 'lucide-react';

const Home = () => {

  const [loading, setLoading] = useState(true); // Example loading state

  // Simulate data fetching or some async task
  useEffect(() => {
    // Mock async call
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Set loading to false after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <div className='flex h-screen justify-center items-center'><LoaderCircle className='animate-spin' /></div>; // You can customize loading state
  }
  return (
    <File />
  )
}

export default Home