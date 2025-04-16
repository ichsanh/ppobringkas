import React from 'react';
import CategorySection from './section/category-section';
import WhyUsSection from './section/why-us-section';
import NewsSection from './section/news-section';
import SliderBanner from './section/image-carousel';

const Home = () => {
  return (
    <div >
      <SliderBanner />
      <CategorySection />
      <WhyUsSection />
      <NewsSection />
    </div>
  );
};

export default Home;
