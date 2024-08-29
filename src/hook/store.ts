// stores/notificationStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

// Define the types for notifications and the store
interface Notification {
  id: string;
  message: string;
  type: "success" | "error" | "info" | "warning";
}

interface NotificationStore {
  notifications: Notification[];
  addNotification: (
    message: string,
    type: "success" | "error" | "info" | "warning"
  ) => void;
  removeNotification: (id: string) => void;
  clearNotifications: () => void;
}

export const useNotificationStore = create<NotificationStore>()(
  persist(
    (set) => ({
      notifications: [],
      addNotification: (message, type) =>
        set((state) => ({
          notifications: [
            ...state.notifications,
            { message, type, id: Date.now().toString() }, // Convert Date.now() to string
          ],
        })),
      removeNotification: (id) =>
        set((state) => ({
          notifications: state.notifications.filter(
            (notification) => notification.id !== id
          ),
        })),
      clearNotifications: () => set({ notifications: [] }),
    }),
    {
      name: "notification-storage", // Key used in local storage
      getStorage: () => localStorage, // Use local storage for persistence
    }
  )
);
