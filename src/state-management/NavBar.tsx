import LoginStatus from './auth/LoginStatus';
import useCounterStore from './counter/store';

import { useTask } from './tasks/TaskList';

const NavBar = () => {
  const { tasks } = useTask();
  // selector added for chosing when thing renders with zustand
  const counter = useCounterStore((s) => s.counter);
  return (
    <nav className='navbar d-flex justify-content-between'>
      {/* <span className='badge text-bg-secondary'>{tasks.length}</span> */}
      <span className='badge text-bg-secondary'>{counter}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
