import { Dropdown, DropdownToggle } from "reactstrap";
import { useState } from "react";
import Search from "../assets/images/search.svg";
import Fire from "../assets/images/fire.svg";
import Star from "../assets/images/star.svg";
import Flower from "../assets/images/flower.svg";
import Bell from "../assets/images/bell.svg";
import UserIcon from "../assets/images/user-icon-blue.svg";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <div className="d-flex justify-content-around pt-3">
      <div className="d-flex">
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle className="bg-white text-dark dropdown" caret>
            Explorar
          </DropdownToggle>
        </Dropdown>

        <img className="pl-3" src={Search} />
      </div>
      <div className="d-flex">
        <span className="px-3">
          <img src={Fire} /> 0
        </span>
        <span className="px-3">
          <img src={Star} /> 0
        </span>
        <span className="px-3">
          <img src={Flower} /> 0
        </span>
      </div>
      <div className="d-flex">
        <img className="px-3" src={Bell} />
        <img className="pl-3" src={UserIcon} />
      </div>
    </div>
  );
};

export default Header;
