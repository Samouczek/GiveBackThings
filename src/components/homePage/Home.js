import React, {useState} from 'react';
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeSimpleSteps from "./HomeSimpleSteps";
import HomeAboutUs from "./HomeAboutUs";
import HomeWhoWeHelp from "./HomeWhoWeHelp";
import HomeContactUs from "./HomeContactUs";
import Footer from "../Footer";

function Home({email}) {
    const [userEmail, setUserEmail] = useState(email);
    return (
      <>
          <HomeHeader userEmail={email}/>
          <HomeThreeColumns />
          <HomeSimpleSteps />
          <HomeAboutUs />
          <HomeWhoWeHelp />
          <HomeContactUs />
          <Footer />
      </>
    );
};

export default Home;