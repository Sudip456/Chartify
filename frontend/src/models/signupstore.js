import { create } from "zustand";
import axios from "axios";

const useFormStore = create((set) => ({
  fullname: "",
  username: "",
  email: "",
  address: "",
  password: "",
  updateField: (field, value) => set((state) => ({ ...state, [field]: value })),

  // Function to send data to the backend and return response status and message
  submitForm: async () => {
    const { fullname, username, email, address, password } =
      useFormStore.getState();
    try {
      const response = await axios.post("http://localhost:8000/signup", {
        fullname,
        username,
        email,
        address,
        password,
      });
      return { status: response.status, message: response.data.message }; // Return response status and message
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Failed to send data";
      return { status: error.response?.status || 500, message: errorMessage }; // Return error status and message
    }
  },

  resetForm: () =>
    set({ fullname: "", username: "", email: "", address: "", password: "" }),
}));

export default useFormStore;
