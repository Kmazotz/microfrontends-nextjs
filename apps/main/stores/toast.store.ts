import { create } from "zustand";
import { v4 as uuidv4 } from 'uuid';

interface ToastProp{
  message: string;
  type?: "info" | "warning" | "error" | "success";
}

interface Toast {
  id: string;
  message: string;
  type?: "info" | "warning" | "error" | "success";
}

interface ToastStore {
  toasts: Toast[];
  addToast: (toast: Toast) => void;
  removeToast: (id: string) => void;
}

export const useToastStore = create<ToastStore>((set) => ({
  toasts: [],
  addToast: (toast : ToastProp) =>
    set((state) => ({
      toasts: [...state.toasts, { ...toast, id: uuidv4() }],
    })),
  removeToast: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    })),
}));
