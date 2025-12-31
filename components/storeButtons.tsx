"use client";
import Image from "next/image";


const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.needlenest.app";

const APP_STORE_URL = "https://apps.apple.com/app/id1234567890";

export default function StoreButtons() {
  return (
    <div className="flex flex-col justify-center items-center sm:flex-row my-8 gap-4">
      {/* Google Play */}
      <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
        <Image src="/playstore.svg" alt="Google Play" height="75" width="250" />
      </a>

      {/* App Store */}
      <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
          <Image src="/appstore.svg" alt="App Store" height="75" width="250" />
      </a>
    </div>
  );
}
