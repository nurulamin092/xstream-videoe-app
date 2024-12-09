import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="LWS Xstream Logo"
          className="h-6"
          width={100}
          height={100}
        />
      </Link>
    </>
  );
};

export default Logo;
