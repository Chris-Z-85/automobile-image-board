import { create } from "zustand";

export const useCarStore = create((set) => ({
  cars: [],
  setCars: (cars) => set({ cars }),
  createCar: async (newCar) => {
    if (
      !newCar.make ||
      !newCar.model ||
      !newCar.year ||
      !newCar.engine ||
      !newCar.image
    ) {
      return { success: false, message: "Fill in all required fields" };
    }
    const res = await fetch("/api/cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCar),
    });
    const data = await res.json();
    set((state) => ({ cars: [...state.cars, data.data] }));
    return { success: true, message: "Car added successfully" };
  },
  fetchCars: async () => {
    const res = await fetch("/api/cars");
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };
    set({ cars: data.data });
  },
  deleteCar: async (id) => {
    const res = await fetch(`/api/cars/${id}`, { method: "DELETE" });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };

    //update the list of cars after deleting
    set((state) => ({
      cars: state.cars.filter((car) => car._id !== id),
    }));
    return { success: true, message: data.message };
  },
  updateCar: async (id, updatedCar) => {
    const res = await fetch(`/api/cars/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCar),
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };
    // update the list of cars immediately, without a refresh
    set((state) => ({
      cars: state.cars.map((car) => (car._id === id ? data.data : car)),
    }));
    return { success: true, message: data.message };
  },
}));
