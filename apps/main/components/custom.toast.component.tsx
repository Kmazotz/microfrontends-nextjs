import { Toaster } from "@portal-ncs-frontend/ui";
import { FC, useEffect } from "react";
import { useToastStore } from "../stores/toast.store";

const CustomToastComponent: FC = () => {
    const toasts = useToastStore((state) => state.toasts);
    const removeToast = useToastStore((state) => state.removeToast);
    
    useEffect(() => {console.log(toasts)}, [toasts]);

    return (
        <Toaster
            toasts={toasts.map(toast => ({
                ...toast,
                type: toast.type ?? "info" 
            }))}
            actions={{ removeToast }}
        />
    );
}

export default CustomToastComponent;
