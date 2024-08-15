import Link from "next/link";

export function Footer() {
  return (
    <div className="flex h-24 w-full flex-col items-center justify-center text-sm">
      <div className="flex items-center justify-center">
        Made with ❤️ by&nbsp;
        <Link
          href="https://github.com/luizgustavosaraiva"
          target="_blank"
          className="font-bold underline">
          @luizgustavosaraiva
        </Link>
      </div>
      <span>
        if your interesting pay me a{" "}
        <Link
          href="https://ko-fi.com/luizgustavosaraiva"
          target="_blank"
          className="font-bold underline">
          coffee
        </Link>
      </span>
    </div>
  );
}
