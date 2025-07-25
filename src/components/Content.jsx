import LeftSection from './LeftSection';
import CenterSection from './CenterSection';
import RightSection from './RightSection';
import cokeBottle from '../assets/file.png';

const Content = () => {
  return (
    <div id="content">
      <LeftSection />
      <CenterSection />
      <RightSection />
      <img src={cokeBottle} alt="Coke Bottle" />
    </div>
  );
};

export default Content;
