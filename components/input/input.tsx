import { createElement, ElementType, ReactNode } from "react";
import { twMerge } from "tailwind-merge";


interface InputProps {
    as? : ElementType;
    className? : string;
    children? : ReactNode;
    [key: string] : any;
}

export const Input = (props: InputProps) => {
    const {className, children, as: Component ="input", ...rest} = props;

    return createElement(Component, {
        className: twMerge(
            "w-full h-fit border border-[rgba(0,128,255,0.1)]",
            "bg-white text-sm md-text-sm lg:text-md xl:text-md font-medium",
            className
        ),
        ...rest
    },
        children
    )
}

export default Input;