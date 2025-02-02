import clsx from "clsx";
import { ComponentProps } from "react"

const Section = ({ children, className, ...props }: ComponentProps<"section">) => {
    return (
        <section
            {...props}
            className={clsx(`
            z-10 w-full h-[50vh] sticky
            flex justify-center items-center`, className)}
        >
            {children}
        </section>
    )
}

export { Section };