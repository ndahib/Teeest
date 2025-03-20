import Header from "./header";

export default function Home() {
  return (
    <div className="bg-[url('/src/assets/bg.jpg')] bg-cover bg-center h-full">
      <Header />
      <article className="text-white mt-36">
        <section id="home" className="flex flex-col items-center">
          <h1 className="lg:text-8xl lg:font-bold font-bold text-6xl text-center w-96 font-['Poppins']">
            Explore Morocoo
          </h1>
          <p className="text-center text-xl lg:w-1/3 w-[200px]">
            Your Journey start here
          </p>
          <div className="flex flex-col md:flex-row  mt-36 justify-between w-full lg:gap-4 text-center px-20">
            <div className="p-4 font-semibold lg:w-96 w-full">
              <h3 className="text-2xl">History and Heritage</h3>
              <p className="text-center">
                Morocco has long occupied an important role at the center of the
                islamic and Arab worlds. Located at the heart of three
                continents.
              </p>
            </div>
            <div className="p-4 font-semibold lg:w-96 w-full">
              <h3 className="text-2xl">People and Culture</h3>
              <p className="text-center">
                Morocco has a rich Culture Shaped by the diversity of its
                people. which has formed the basis of its cultural identity.
              </p>
            </div>
          </div>
        </section>

        {/* Destinations Section */}
        <section
          id="destinations"
          className="flex flex-col items-center bg-linear-to-bl from-transparent to bg-gray-950 mt-10"
        >
          <h2 className="text-center text-3xl font-bold">Best Destinations</h2>
          <p className="text-center w-lg">
            Explore the enchanting landscapes of Morocco, from the breathtaking
            deserts to the stunning coastal shores.
          </p>
          <div className="grid"></div>
        </section>
      </article>
    </div>
  );
}
