import { ToastProps } from "@portal-ncs-frontend/ui"

export interface ToastContextProps {
    toasts: ToastProps[];
    addToast: (message: string, type: "info" | "error" | "success" | "warning") => void;
    removeToast: (id: string) => void;
}