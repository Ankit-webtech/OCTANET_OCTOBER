import bg from '../assets/coke-light.jpg';

const CenterSection = () => {
  return (
    <div id="center">
      <div
        id="center-bg"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      ></div>
    </div>
  );
};

export default CenterSection;
