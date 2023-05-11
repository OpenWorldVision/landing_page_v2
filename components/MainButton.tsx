import classNames from "classnames";
import React, { ReactNode, useMemo } from "react";

interface MainButtonProps extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  title: string;
  className?: string;
  icon?: ReactNode;
}

export default function MainButton(props: MainButtonProps) {
  const { title, className, icon, ...rest } = props;

  const buttonClass = useMemo(
    () =>
      classNames(
        [
          "flex",
          "bg-button",
          "justify-center",
          "rounded-full",
          "w-fit",
          "text-white",
          "shadow-2xl",
          "hover:bg-title",
          "cursor-pointer",
        ],
        className
      ),
    [className]
  );

  return (
    <a className={buttonClass} {...rest}>
      {icon && <div className="mr-2">{icon}</div>}
      <span>{title}</span>
    </a>
  );
}
