/**
 * Copyright Thuan Nguyen ©2022
 * Good codes make the world a better place!
 */

import { HeroBullets } from "@components/HeroWithBullets";
import PageLayout from "@components/PageLayout";

function Home() {
  return <HeroBullets />;
}

Home.Layout = PageLayout;

export default Home;
