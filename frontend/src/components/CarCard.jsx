import { useState } from "react";
import { useCarStore } from "../store/car";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";

const CarCard = ({ car }) => {
  const [updatedCar, setUpdatedCar] = useState(car);
  const { updateCar, deleteCar } = useCarStore();
  const [isOpen, setIsOpen] = useState(false);

  const handleUpdateCar = async (id, updatedCar) => {
    const { success, message } = await updateCar(id, updatedCar);
    setIsOpen(false);
    alert(success ? "Car updated successfully" : `Error: ${message}`);
  };

  const handleDeleteCar = async (id) => {
    const { success, message } = await deleteCar(id);
    alert(success ? message : `Error: ${message}`);
  };

  return (
    <div className="p-8 flex flex-col items-center bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-xl">
      <img
        src={car.image}
        alt={`${car.make} ${car.model} `}
        className="h-60 object-cover  "
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-600 dark:text-gray-200 mb-2">
          Make: {car.make}
        </h3>
        <h3 className="text-lg font-bold text-gray-600 dark:text-gray-200 mb-2">
          Model: {car.model}
        </h3>
        <p className="text-lg font-semibold text-gray-600 dark:text-gray-200 mb-4">
          Year: {car.year}
        </p>
        <p className="text-lg font-semibold text-gray-600 dark:text-gray-200 mb-4">
          Engine: {car.engine} l
        </p>
        <div className="flex space-x-2">
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            <FaRegEdit />
          </button>
          <button
            onClick={() => handleDeleteCar(car._id)}
            className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            <FaRegTrashAlt />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="text-white fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-lg font-bold mb-4">Update Car Info</h2>
            <div className="space-y-4">
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                placeholder="Make"
                name="make"
                value={updatedCar.make}
                onChange={(e) =>
                  setUpdatedCar({ ...updatedCar, make: e.target.value })
                }
              />
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                placeholder="Model"
                name="model"
                value={updatedCar.model}
                onChange={(e) =>
                  setUpdatedCar({ ...updatedCar, model: e.target.value })
                }
              />
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                placeholder="Year"
                name="year"
                type="number"
                value={updatedCar.year}
                onChange={(e) =>
                  setUpdatedCar({
                    ...updatedCar,
                    year: e.target.value,
                  })
                }
              />
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                placeholder="Engine"
                name="engine"
                type="number"
                value={updatedCar.engine}
                onChange={(e) =>
                  setUpdatedCar({
                    ...updatedCar,
                    engine: e.target.value,
                  })
                }
              />
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                placeholder="Image URL"
                name="image"
                value={updatedCar.image}
                onChange={(e) =>
                  setUpdatedCar({
                    ...updatedCar,
                    image: e.target.value,
                  })
                }
              />
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <button
                onClick={() => handleUpdateCar(car._id, updatedCar)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Update
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-600 rounded hover:bg-gray-300 dark:hover:bg-gray-500"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarCard;
