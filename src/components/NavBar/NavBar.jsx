import { Link } from 'react-router-dom';

export default function NavBar({user}) {
  return (
    <nav>
    {user.userName}
    &nbsp; | &nbsp;
      <Link to="/">Movies List</Link>
      &nbsp; | &nbsp;
      <Link to="/actors">Actor List</Link>
    </nav>
  );
}