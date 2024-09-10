"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function SubscribeOrc() {
  const [isShowDialog, setIsShowDialog] = useState<boolean>(false);

  return (
    <div className="fixed bottom-0 right-0 w-32 md:w-64">
      {isShowDialog && (
        <div className="nes-balloon from-right w-44 p-0">
          <p className="text-xs">Inspecting ... 🔎</p>
        </div>
      )}

      <Link href={"#"}>
        <Image
          onMouseEnter={() => setIsShowDialog(true)}
          onMouseLeave={() => setIsShowDialog(false)}
          src={"/bubble-tea.gif"}
          width={100}
          height={100}
          style={{marginLeft:'10rem'}}
          alt="Orc"
        />
      </Link>
    </div>
  );
}
