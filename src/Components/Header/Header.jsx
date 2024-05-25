
import './Header.css'
import AnchorTemporaryDrawer from './SideMenu';
import Btn from './../Button/Btn';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <header>
      <nav className='header'>
        <div className='logo'>
          <img src="./bitcoin.png" alt="" />
          <h1>CryptoPrice</h1>
        </div>
        <div className="link">
          <Link to="#"><p>Home</p></Link>
          <Link to="#"><p>Compare</p></Link>
          <Link to="#"><p>Watchlist</p></Link>
          <Link to="/dashboard"><Btn text={"Dashboard"}/></Link>
        </div>
        <div className="sidemenu">
        <AnchorTemporaryDrawer/>
        </div>
      </nav>
    </header>
    </>
  )
}

export default Header