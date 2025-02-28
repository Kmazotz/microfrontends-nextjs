import { SVGAttributes } from "react";

export interface DynamicIconProps extends SVGAttributes<SVGElement>
{
    readonly name : string
}