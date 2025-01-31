import { useEffect } from "react";
import { useCarStore } from "../store/car";
import { Link } from "react-router-dom";
import CarCard from "../components/CarCard";

const HomePage = () => {
  const { fetchCars, cars } = useCarStore();

  useEffect(() => {
    fetchCars();
  }, [fetchCars]);

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <div className="space-y-8">
        <h1 className="text-6xl italic font-serif font-bold bg-gradient-to-r from-zinc-900 to-gray-500 bg-clip-text text-transparent text-center">
          Automobile Image Board
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cars.map((car) => (
            <CarCard key={car._id} car={car} />
          ))}
        </div>

        {cars.length === 0 && (
          <p className="text-xl text-center font-bold text-gray-500">
            No automobiles yet{" "}
            <Link to="/create" className="text-blue-500 hover:underline">
              Post an automobile
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
