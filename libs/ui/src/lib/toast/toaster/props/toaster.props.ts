import { ToastConfigProps } from "../../toast/props/toast.props";

export interface ToasterProps {
    readonly toasts : ToastConfigProps[];
    readonly actions: {
        removeToast: (id: string) => void
    }
}