import { memo, useEffect, useState } from "react";

// eslint-disable-next-line react/display-name
const ScrollIndicator = memo(() => {
  const [progressHeight, setProgressHeight] = useState(0);
  useEffect(() => {
    window.onscroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setProgressHeight(scrolled);
    };
  }, []);

  return (
    <button
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      style={{
        position: "fixed",
        left: 10,
        top: "50%",
        transform: "translateY(-50%)",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        zIndex: 20,
        opacity: progressHeight > 10 ? 1 : 0,
      }}
    >
      <p
        style={{ transform: "rotate(270deg)", marginBottom: 50 }}
        className="text-sm font-bold"
      >
        Scroll to top
      </p>
      <div
        style={{
          width: 2,
          height: 60,
          background: "#1c1c1c50",
        }}
      >
        <div
          style={{
            width: 2,
            background: "#1c1c1c",
            height: `${progressHeight || 0}%`,
          }}
        ></div>
      </div>
    </button>
  );
});

export default ScrollIndicator;
