import { create } from "zustand";
import axios from "axios";
import { persist } from "zustand/middleware";

const useMessageStore = create(
  persist(
    (set) => ({
      select_friend_name: "",
      setSelectFriendName: (friend) => set({ select_friend_name: friend }),

      recieved_old_msg: [],
      send_msg: {},
      recieved_new_msg: [],
      typing_status: false,
      select_friend_id: "",
      friends: [],

      setrecieved_new_msg: (newmsg) =>
        set((state) => ({
          recieved_new_msg: [...state.recieved_new_msg, newmsg],
        })),

      setTypingStatus: (status) => set((state) => ({ typing_status: status })),

      setSelectFriendId: (friendId) =>
        set((state) => ({ select_friend_id: friendId })),

      // Fetch and set friends based on the userId
      fetchFriends: async (id) => {
        try {
          const response = await axios.get(
            `http://localhost:8000/findfriends/${id}`
          );
          set({ friends: response.data });
        } catch (error) {
          console.error("Error fetching friends:", error);
        }
      },

      // Set old messages for the user
      setOldMessages: (messages) => set({ recieved_old_msg: messages }),

      setsendMessage: (sendmsg) => set({ send_msg: sendmsg }),
    }),
    {
      name: "chat-storage", // Key name for localStorage persistence
      partialize: (state) => ({
        select_friend_name: state.select_friend_name, // Persist only select_friend_name
      }),
    }
  )
);

export default useMessageStore;
