import clsx from "clsx";
import { useEffect, useState } from "react";
import { ComponentPropsWithoutRef, forwardRef } from "react";
import styles from "./styles.module.css";

export const Video = forwardRef<
  HTMLVideoElement,
  ComponentPropsWithoutRef<"video">
>(function VideoBase({ className, ...props }, ref) {
  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {
    setIsSSR(false);
  }, []);
  return (
    <>
      {!isSSR && (
        <video
          {...props}
          ref={ref}
          className={clsx(styles.module, className)}
        />
      )}
    </>
  );
});
