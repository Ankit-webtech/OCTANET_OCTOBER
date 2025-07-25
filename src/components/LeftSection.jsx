const LeftSection = () => {
  const handleClick = () => {
    alert('Enjoy your COKE!!');
  };

  return (
    <div id="left">
      <h1>Your Favourite <span>coke</span> just got reinvented.</h1>
     <p>
        Experience the bold and refreshing taste of the new Coke — now with a twist of innovation. 
        Smoother, cooler, and crafted to energize every sip.
      </p>

      <button id="testButton" onClick={handleClick}>
        <i className="ri-shopping-bag-3-line"></i> Test now
      </button>
    </div>
  );
};

export default LeftSection;
