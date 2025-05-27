import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

export default function Layout() {
  return <div className='overflow-hidden h-screen w-screen'>
      <Navbar />
      <Outlet />
    </div>
}