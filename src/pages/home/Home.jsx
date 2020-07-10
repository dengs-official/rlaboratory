import React from 'react';

import Categories from './_modules/categories/Categories';
import CatImages from './_modules/catimages/CatImages';

import './Home.less';

function Home() {
  return (
    <div className="home-wrapper">
      <Categories />
      <CatImages />
    </div>
  );
}

export default Home;
