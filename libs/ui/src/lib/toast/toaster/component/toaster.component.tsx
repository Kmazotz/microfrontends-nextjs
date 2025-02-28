import Styles from "../styles/toaster.module.css";

import { forwardRef, useEffect } from "react";
import { ToasterProps } from "../props/toaster.props";
import { Toast } from "../../toast/component/toast.component";

export const Toaster = forwardRef<HTMLDivElement, ToasterProps>((props, ref) => {
    const { toasts , actions } = props;

    useEffect(() => {
        console.log(toasts);
    }, [toasts]);

    return (
        <div ref={ref} className={Styles["qst-custom-toaster"]}>
           {toasts.map((toast) => (
                <Toast key={toast.id} config={toast} actions={actions} />
            ))}
        </div>
    );
});

Toaster.displayName = "Toaster";