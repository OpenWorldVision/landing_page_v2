import classNames from "classnames";
import React, { ReactNode, useMemo } from "react";

interface OutlineButtonProps {
  title: string;
  className?: classNames.ArgumentArray;
  icon?: ReactNode;
}

export default function OutlineButton(props: OutlineButtonProps) {
  const { title, className } = props;

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
        ],
        className
      ),
    [className]
  );

  return (
    <a className={buttonClass}>
      <div className="text-sm px-2 text-button md:font-extrabold">{title}</div>
    </a>
  );
}
