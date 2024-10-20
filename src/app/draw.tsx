"use client";

import { LiveblocksProvider, RoomProvider } from "@liveblocks/react/suspense";
import { Room } from "./Room";

export default function App() {
  return (
    <LiveblocksProvider
      publicApiKey={
        "pk_prod_bpIffGUNpPWXBvZGSCUHgDr99SSWw7Bse04zHpsG5vn1H2havAv6zEC56M-1OUmA"
      }
    >
      <RoomProvider id="my-room">{/* ... */}</RoomProvider>
    </LiveblocksProvider>
  );
}
