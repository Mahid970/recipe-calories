const Hero = () => {
  return (
    <div className=" lg:mx-24 mx-2 ">
      <div className="hero rounded-2xl bg-[url('/public/banner.jpg')]">
        <div className="hero-overlay rounded-2xl bg-opacity-30"></div>
        <div className="hero-content text-white text-center">
          <div className="lg:w-2/3 flex flex-col py-20 gap-12">
            <h1 className=" text-5xl font-bold">
              Discover an exceptional cooking class tailored for you!
            </h1>
            <p className="font-semibold text-white">
              Learn and Master Basic Programming, Data Structures, Algorithm,
              OOP, Database and solve 500+ coding problems to become an
              exceptionally well world-class Programmer
            </p>
            <div>
              {" "}
              <button className="bg-green-500 py-3 px-6 rounded-full mr-12 text-black  font-bold">
                Explore Now
              </button>
              <button className="py-3 px-6 rounded-full hover:bg-green-500 hover:text-black border font-bold">
                Our Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
