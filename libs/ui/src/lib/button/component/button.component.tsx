/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef} from "react";
import { LoadingButtonProps } from "../props/button.props";
import React from "react";
import { DynamicIcon } from "../../icons";
import styles from "../styles/button.module.css";

export const LoadingButton = forwardRef<HTMLButtonElement, LoadingButtonProps>((
    {
        className,
        type = "button",
        name,
        text,
        enabled = true,
        onActive,
        onResponse,
        onExceptionOccurred,
        ...props
    }, ref) => 
    {
        const [loading, setLoading] = React.useState(false);

        return (
            <React.Fragment>
                <button 
                    {...props}
                    type={type}
                    ref={ref}
                    id={name}
                    className={className}
                    onClick={(e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                        if (enabled && loading === false && (onActive && onResponse && onExceptionOccurred)) 
                        {
                            setLoading(true);
                            onActive()
                                .then((response : any) => 
                                    onResponse(response))
                                .catch((err) => 
                                    onExceptionOccurred(err))
                                .finally(() => setLoading(false));
                        } 
                        else 
                        {
                            e.preventDefault();
                        }
                    }}
                    disabled={!enabled}
                >

                    {
                        loading ?
                            <DynamicIcon 
                                name={"PiSpinnerLight"} 
                                className={styles["qst-loading-button"]}
                            />
                        : text
                    }

                </button>
            </React.Fragment>
        )
    }
);

LoadingButton.displayName = 'LoadingButton';