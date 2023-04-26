import './header.css';
import { useDesktopDisplay } from '../../../hooks/display-hook';
import logo from '../../../assets/images/logo.svg';
import { EmailLink, ImageLink } from '../../../components/links/link-components.js';
import Menu from './menu/menu';
import emailIcon from '../../../assets/images/icons/envelope.svg';

function SiteLogo() {
  const logoAltText = "Logo for footbagworldwide";

  if(useDesktopDisplay()) {
    return <ImageLink className="logo-image" src={logo} alt={logoAltText} route="/" />
  } else {
    return <img className="logo-image" src={logo} alt={logoAltText} />
  }
}

function Header() {
  const headerClassName = useDesktopDisplay() ? 'header-container_desktop' : 'header-container_mobile fixed-header-space';

  return (
    <nav
      className={`header-container ${headerClassName}`}
    >
      <div></div>
      <div><SiteLogo /></div>
      <Menu />
      { useDesktopDisplay() && <div><EmailLink><img id='email-icon' src={emailIcon} /></EmailLink></div> }
    </nav>
  );
}

export default Header;
