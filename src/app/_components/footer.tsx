import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-px mt-6 flex w-full flex-col items-center justify-center border-t border-secondary bg-background py-4 text-sm">
      <div className="flex items-center justify-center ">
        Made with ❤️ by&nbsp;
        <Link
          href="https://github.com/luizgustavosaraiva"
          target="_blank"
          className="cursor-pointer font-bold underline">
          @luizgustavosaraiva
        </Link>
      </div>
      <span>
        if your interesting, pay me a{" "}
        <Link
          href="https://ko-fi.com/luizgustavosaraiva"
          target="_blank"
          className="cursor-pointer font-bold underline">
          coffee
        </Link>
      </span>
    </footer>
  );
}
