import { forwardRef } from "react";
import * as Icons from "react-icons/pi";
import { DynamicIconProps } from "../props/icon.props";
import styles from "../styles/icon.module.css";

export const DynamicIcon = forwardRef<SVGSVGElement, DynamicIconProps>(
  ({ className = "", name, ...props }) => {
    const IconComponent = Icons[name as keyof typeof Icons];

    if (!IconComponent) {
      return <p className={styles["qst-invalid-icon"]}>No se encontraron coincidencias</p>;
    }

    return <IconComponent {...props} className={`${styles.icon} ${className}`} />;
  }
);

DynamicIcon.displayName = "DynamicIcon";
