import "./Header.css";
import LogoOrange from "../../assets/logo-orange.png";
import MenuNav from "../../assets/menu-sandwich.png";
import Notification from "../../assets/notification.png";

export default function Header() {
  function handleClick() {
    console.log("Hello World");
  }
  return (
    <header>
      <div className="left-side">
        <img src={MenuNav} alt="" className="menu-nav" />
        <img src={LogoOrange} alt="" />
      </div>
      <div className="right-side">
        <img src="" alt="" className="user-photo" />
        <img src={Notification} alt="" />
      </div>
    </header>
  );
}
