import { create } from "zustand";
import axios from "axios";

const useLoginStore = create((set) => ({
  email: "",
  password: "",
  updateField: (field, value) => set((state) => ({ ...state, [field]: value })),
  submitForm: async () => {
    const { email, password } = useLoginStore.getState();
    try {
      const response = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });

      return {
        status: response.status,
        message: response.data.message,
        data: response.data,
      }; // Return response status and message
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Failed to send data";
      return { status: error.response?.status || 500, message: errorMessage }; // Return error status and message
    }
  },
  resetForm: () => set({ email: "", password: "" }),
}));

export default useLoginStore;
