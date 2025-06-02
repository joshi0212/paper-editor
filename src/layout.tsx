import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

export default function Layout() {
  return <div className='overflow-hidden h-full w-full'>
      <Navbar />
      <Outlet />
    </div>
}