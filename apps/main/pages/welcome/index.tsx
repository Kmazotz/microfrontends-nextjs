import dynamic from "next/dynamic";

const Welcome = dynamic(() => import("management/welcome"), {ssr: false});

export default Welcome;