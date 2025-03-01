declare module "main/toastStore" {
    import { UseBoundStore, StoreApi } from "zustand";

    export interface ToastProp{
      message: string;
      type?: "info" | "warning" | "error" | "success";
    }

    export interface Toast {
      id?: string;
      message: string;
      type?: "info" | "warning" | "error" | "success";
    }
  
    export interface ToastStore {
      toasts: Toast[];
      addToast: (toast: ToastProp) => void;
      removeToast: (id: string) => void;
    }
  
    export const useToastStore: UseBoundStore<StoreApi<ToastStore>>;
  }
  