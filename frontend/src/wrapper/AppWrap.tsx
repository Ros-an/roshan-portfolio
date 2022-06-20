import React from "react";
import NavigationDots from "../components/NavigationDots";
import SocialMedia from "../components/SocialMedia";

const AppWrap = (Component: any, idName?: string, classNames?: any) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
            <p style={{ textTransform: "capitalize" }} className="p-text">
              {`@${new Date().getFullYear()} Roshan Kr. Mahato`}
            </p>
            {/* <p className="p-text">All rights reserved</p> */}
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
