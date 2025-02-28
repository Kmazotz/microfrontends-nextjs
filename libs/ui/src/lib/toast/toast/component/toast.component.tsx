import { forwardRef, useEffect, useState } from "react";
import { ToastProps } from "../props/toast.props";
import Styles from "../styles/toast.module.css";
import { DynamicIcon } from "../../../icons";
import clsx from "clsx";

export const Toast = forwardRef<HTMLDivElement, ToastProps>((props, ref) => {
    const { config, actions } = props;
    const { id, message, type = "info" } = config;

    const [active, setActive] = useState(false);

    const icon = {
        info: "PiInfoLight",
        warning: "PiWarningCircleLight",
        error: "PiXCircleLight",
        success: "PiCheckCircleLight"
    };

    useEffect(() => {
        const activateTimeout = setTimeout(() => setActive(true), 500);
        return () => clearTimeout(activateTimeout);
    }, []);

    useEffect(() => {
        const removeTimeout = setTimeout(() => actions.removeToast(id), 3000);
        return () => clearTimeout(removeTimeout);
    }, [id]);

    return (
        <div ref={ref} className={clsx(Styles['qst-custom-toast'], active && Styles['active'])}>
            <div className={clsx(Styles['qst-custom-toast-icon-container'], Styles[type])}>
                <DynamicIcon name={icon[type]} className={Styles['qst-custom-toast-icon']} fill="currentColor" />
            </div>

            <p className={Styles['qst-custom-toast-text']}>
                {message && !message.endsWith('.') ? message.concat('.') : message}
            </p>

            <button
                type="button"
                className={Styles['qst-custom-toast-button']}
                aria-label="Close"
                onClick={() => actions.removeToast(id)}
            >
                <DynamicIcon name="PiXLight" className={Styles['qst-custom-toast-button-icon']} fill="currentColor" />
            </button>
        </div>
    );
});
