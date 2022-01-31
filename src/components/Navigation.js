import "../styles/navigation.scss";
import logo from '../images/instagramLogo.png';
import searchIcon from '../images/searchIcon.png';
import Menu from './Menu';

function Navigation() {
    return (
        <div className="navigation">
            <div className="container">
                <img className="logo" src={logo} alt="instagram logo" />
                <div className="search">
                    <img className="searchIcon" src={searchIcon} alt="instagram logo"  />
                    <span className="searchName">Search</span>
                </div>
                <Menu />
            </div>
        </div>
    );
}

export default Navigation;