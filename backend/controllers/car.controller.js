import Car from "../models/car.model.js";
import mongoose from "mongoose";

export const getCars = async (req, res) => {
  try {
    const cars = await Car.find({});
    res.status(200).json({ success: true, data: cars });
  } catch (error) {
    console.log("Error in fetching cars:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const createCar = async (req, res) => {
  const car = req.body;

  if (!car.make || !car.model || !car.year || !car.engine || !car.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }

  const newCar = new Car(car);

  try {
    await newCar.save();
    res.status(201).json({ success: true, data: newCar });
  } catch (err) {
    console.log("Error in creating car: ", err.message);
    res.status(500).json({ success: false, message: err.message });
  }
};

export const updateCar = async (req, res) => {
  const { id } = req.params;
  const car = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Car does not exist" });
  }

  try {
    const updatedCar = await Car.findByIdAndUpdate(id, car, {
      new: true,
    });
    res.status(200).json({ success: true, data: updatedCar });
  } catch (error) {
    console.log("Error in updating car: ", error.message);
    res.status(500).json({ success: false, message: err.message });
  }
};

export const deleteCar = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Car does not exist" });
  }

  try {
    await Car.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, message: "Car deleted successfully" });
  } catch (error) {
    console.log("Error in deleting car:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
