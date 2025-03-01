
import styles from "../styles/icon.module.css";

import { forwardRef, cloneElement } from "react";
import * as Icons from "react-icons/pi";
import { DynamicIconProps } from "../props/icon.props";

export const DynamicIcon = forwardRef<SVGSVGElement, DynamicIconProps>(({ className = "w-4 h-4", name, ...props }, ref) => {
    const IconComponent = Icons[name as keyof typeof Icons];

    if (!IconComponent) {
      return <p className={styles["qst-invalid-icon"]}>No se encontraron coincidencias</p>;
    }

    return cloneElement(<IconComponent {...props} className={`${styles.icon} ${className}`} />, { ref });
  }
);

DynamicIcon.displayName = "DynamicIcon";
