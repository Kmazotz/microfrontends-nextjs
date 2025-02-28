/* eslint-disable @typescript-eslint/no-explicit-any */

import {ButtonHTMLAttributes} from 'react'

export interface LoadingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>
{
    readonly type : "button" | "submit"
    readonly text : string, 
    readonly enabled? : boolean,
    readonly className? : string,
    onActive? : () => Promise<any>,
    onResponse? : (result : any) => void, 
    onExceptionOccurred? : (message : string) => void
}