"use client";

import { LoadingButton } from "@portal-ncs-frontend/ui";
import Styles from "./welcome.module.css";
import { useCallback } from "react";
//import { useToastStore } from "main/toastStore";

export default function WelcomePage() {

    //const { addToast, toasts } = useToastStore();

    const handleButtonClick = useCallback(async () => {
        alert("¡Desde el Sitio B!");
        //addToast({message: "¡Desde el Sitio B!", type: "info" });
    }, []);

    // useEffect(() => {
    //     console.log(toasts);
    // }, [toasts]);

    return (
        <div className="wrapper">
            <div className="container">
                <div id="welcome">
                    <h1>
                        <span> Hello there, </span>
                        Welcome management page with Module Federation and shared components 👋
                    </h1>
                </div>
                <div className="flex items-center justify-center px-4 py-4 mt-16">
                   <LoadingButton 
                        type={"button"} 
                        text={"Click me!"} 
                        className={Styles["qst-welcome-test-button"]} 
                        onActive={async() => { 
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            handleButtonClick();
                        }}
                        onResponse={(response) => console.log(response)}
                        onExceptionOccurred={(err) => console.error(err)}
                    />
                </div>
            </div>
        </div>
    )
}
