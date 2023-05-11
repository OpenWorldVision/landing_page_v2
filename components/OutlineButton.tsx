import classNames from "classnames";
import React, { ReactNode, useMemo } from "react";

interface OutlineButtonProps extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  title: string;
  className?: string;
  icon?: ReactNode;
}
export default function OutlineButton(props: OutlineButtonProps) {
  const { title, className, ...rest } = props;

  const buttonClass = useMemo(
    () =>
      classNames(
        [
          "flex",
          "border-2",
          "border-button",
          "rounded-3xl",
          "items-center",
          "w-fit",
          "h-fit",
          "p-2",
          "text-button",
          "bg-white",
          "hover:text-white",
          "hover:bg-button",
          "cursor-pointer",
          "shadow-2xl",
        ],
        className
      ),
    [className]
  );

  return (
    <a className={buttonClass} {...rest}>
      <div className="text-sx px-2 font-extrabold">{title}</div>
    </a>
  );
}
