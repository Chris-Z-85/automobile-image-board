import { useState } from "react";
import { useCarStore } from "../store/car";

const CreatePage = () => {
  const [newCar, setNewCar] = useState({
    make: "",
    model: "",
    year: "",
    engine: "",
    image: "",
  });

  const { createCar } = useCarStore();

  const handleAddCar = async () => {
    const { success, message } = await createCar(newCar);
    alert(success ? `Success: ${message}` : `Error: ${message}`);
    setNewCar({
      make: "",
      model: "",
      year: "",
      engine: "",
      image: "",
    });
  };

  return (
    <div className="text-white max-w-2xl mx-auto py-8">
      <div className="space-y-8">
        <h1 className="text-3xl font-bold text-center">Post an automobile</h1>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Make"
              value={newCar.make}
              onChange={(e) => setNewCar({ ...newCar, make: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Model"
              value={newCar.model}
              onChange={(e) => setNewCar({ ...newCar, model: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              placeholder="Year"
              value={newCar.year}
              onChange={(e) => setNewCar({ ...newCar, year: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              placeholder="Engine capacity in liters"
              value={newCar.engine}
              onChange={(e) => setNewCar({ ...newCar, engine: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Image URL"
              value={newCar.image}
              onChange={(e) => setNewCar({ ...newCar, image: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleAddCar}
              className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
