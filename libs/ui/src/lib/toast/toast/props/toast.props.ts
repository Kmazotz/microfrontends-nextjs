export interface ToastConfigProps{
    id: string
    message: string
    type: "info" | "error" | "success" | "warning"
}

export interface ToastProps {
    config : ToastConfigProps
    actions:
    {
        removeToast: (id: string) => void
    }
}