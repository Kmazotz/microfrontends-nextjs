import { Toaster } from "@portal-ncs-frontend/ui";
import { FC } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useToastStore } from "../stores/toast.store";

const CustomToastComponent: FC = () => {
    const toasts = useToastStore((state) => state.toasts);
    const removeToast = useToastStore((state) => state.removeToast);
    
    return (
        <Toaster
            toasts={toasts.map(toast => ({
                ...toast, 
                id: uuidv4(),
                type: toast.type ?? "info" 
            }))}
            actions={{ removeToast }}
        />
    );
}

export default CustomToastComponent;
