import { Nav, NavItem, NavLink } from "reactstrap";
import Home from "../assets/images/home.svg";
import Video from "../assets/images/video.svg";
import Quiz from "../assets/images/quizz.svg";
import StudyPlan from "../assets/images/study-plan.svg";
import Community from "../assets/images/community.svg";

const tabs = [
  {
    icon: Home,
    label: "Home",
  },
  {
    icon: Video,
    label: "Video",
  },
  {
    icon: Quiz,
    label: "Quiz",
  },
  {
    icon: StudyPlan,
    label: "StudyPlan",
  },
  {
    icon: Community,
    label: "StudyPlan",
  },
];

const BottomNavigation = () => {
  return (
    <nav
      className="navbar bottom-navigation fixed-bottom navbar-light"
      role="navigation"
    >
      <Nav className="w-100">
        <div className=" d-flex flex-row justify-content-around w-100">
          {tabs.map((tab, index) => (
            <NavItem key={`tab-${index}`}>
              <div className="row d-flex flex-column justify-content-center align-items-center">
                <img src={tab.icon} alt={tab.label} />
              </div>
            </NavItem>
          ))}
        </div>
      </Nav>
    </nav>
  );
};

export default BottomNavigation;
