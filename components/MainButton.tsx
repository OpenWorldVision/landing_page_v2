import classNames from "classnames";
import React, { ReactNode, useMemo } from "react";

interface MainButtonProps {
  title: string;
  className?: string;
  classNameTitle?: string;
  icon?: ReactNode;
}

export default function MainButton(props: MainButtonProps) {
  const { title, className, classNameTitle, icon } = props;

  const buttonClass = useMemo(
    () =>
      classNames(
        [
          "flex",
          "bg-button",
          "py-4",
          "px-5",
          "justify-center",
          "rounded-3xl",
          "w-fit",
        ],
        className
      ),
    [className]
  );

  const titleClass = useMemo(
    () => classNames(["text-white", "font-semibold"], classNameTitle),
    [classNameTitle]
  );

  return (
    <a className={buttonClass}>
      {icon && <div className="mr-2">{icon}</div>}
      <div className={titleClass}>{title}</div>
    </a>
  );
}
