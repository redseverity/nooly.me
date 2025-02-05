"use client";
import clsx from "clsx";
import Image from "next/image";

const NewUsers = ({ className, ...props }: React.ComponentProps<"span">) => {
  const faces = [
    "/assets/faces/face1.webp",
    "/assets/faces/face2.webp",
    "/assets/faces/face3.webp",
  ];

  return (
    <span
      {...props}
      className={clsx(
        `
            flex
            justify-center
            items-center
            font-bold
            gap-2
            font-poppins
            text-[11pt]
            `,
        className,
      )}
    >
      <div className="flex justify-center items-center">
        {faces.map((e, i) => {
          return (
            <Image
              className="size-4 rounded-full border-dark-1 dark:border-light-1 border-[1px]"
              src={e}
              alt={""}
              key={i}
              width={100}
              height={100}
            />
          );
        })}
      </div>
      <p>
        12,635 New Users <span className="text-rose-2">+</span>
      </p>
    </span>
  );
};

export { NewUsers };
