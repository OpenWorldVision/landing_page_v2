import classNames from "classnames";
import Image, { ImageProps } from "next/image";
import React from "react";

export default function MainImage(props: ImageProps) {
  const { className, alt, ...rest } = props;

  const classImage = classNames(["w-auto", "h-auto", className]);

  return (
    <img
      className={classImage}
      alt={alt}
      width="0"
      height="0"
      sizes="100vw"
      {...rest}
    />
  );
}
