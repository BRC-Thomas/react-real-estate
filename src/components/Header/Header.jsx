import "./Header.css";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

export default function Header() {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth < 800) {
      return { right: !menuOpened && "-100%" };
    }
  };

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="" />

        <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <a href="#">Residencies</a>
            <a href="#">Our value</a>
            <a href="#">Contact Us</a>
            <a href="#">Get started</a>
            <button className="button">
              <a href="#">Contact</a>
            </button>
          </div>
        </OutsideClickHandler>
        <div className="menu-icon" onClick={() => setMenuOpened(!menuOpened)}>
          <BiMenu size={30} />
        </div>
      </div>
    </section>
  );
}
