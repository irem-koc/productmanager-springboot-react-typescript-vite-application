const Home = () => {
  return (
    <div>
      <div className="home-container flex flex-col justify-center my-10 min-h-max">
        <h3 className="text-center text-2xl">Homepage</h3>
        <div className="flex justify-center">
          <img
            className="object-cover h-500 w-960"
            src="https://t4.ftcdn.net/jpg/02/78/41/91/360_F_278419195_XyHPPySaxCaAMfUpoCjaze47tQ8tqJ5E.jpg"
            alt="welcomepage"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
