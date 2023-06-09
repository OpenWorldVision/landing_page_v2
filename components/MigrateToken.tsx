import React from "react";
import MainButton from "./MainButton";

export default function MigrateToken() {
  return (
    <div className="flex flex-col md:flex-row w-auto mx-4 rounded-2xl bg-bgTips mb-4 md:max-w-xl py-3 px-1 items-center mt-16 md:mt-0 md:px-6">
      <img
        src={"img/arbitrum-logo-icon.webp"}
        className="w-[52px] hidden md:flex"
      />
      <div className="flex flex-row px-5 text-sm text-text items-start">
        <img
          src={"img/noti-150x150.webp"}
          className="w-[30px] mb-2 mr-3 object-contain"
        />
        We encourage OPEN tokenholders from BSC to migrate OPEN to Arbitrum One
        chain
      </div>
      <MainButton
        href="https://app.multichain.org/#/router?bridgeToken=0x27a339d9b59b21390d7209b78a839868e319301b"
        title={"Migrate"}
        className="text-sm bg-tips px-4 py-1.5 hover:bg-tips mt-2 md:mt-0"
      />
    </div>
  );
}
