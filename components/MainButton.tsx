import classNames from "classnames";
import React, { ReactNode, useMemo } from "react";

interface MainButtonProps {
  title: string;
  className?: classNames.ArgumentArray;
  icon?: ReactNode;
}

export default function MainButton(props: MainButtonProps) {
  const { title, className, icon } = props;

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

  return (
    <a className={buttonClass}>
      {icon && <div className="mr-2">{icon}</div>}
      <div className="text-white font-semibold">{title}</div>
    </a>
  );
}
