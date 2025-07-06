import Link from "next/link";

export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className="m-[40px]">
      <section className="mb-6">
        <h1 className="text-3xl font-bold font-stretch-semi-expanded">패션</h1>
        <ul className="list-none">
          <li>
            <Link
              href="https://withoutsummer.shop/"
              target="_blank"
              className="hover:bg-sky-100"
            >
              https://withoutsummer.shop/
            </Link>
          </li>
          <li></li>
          <Link
            href="https://u-ur.kr/category/etc/68/"
            target="_blank"
            className="hover:bg-sky-100"
          >
            https://u-ur.kr/category/etc/68/
          </Link>
        </ul>
      </section>

      <section
        className="mb-6
      "
      >
        <h1 className="text-3xl font-bold font-stretch-semi-expanded">
          라이프스타일
        </h1>
        <ul className="list-none">
          <li>https://havehaus.kr/</li>
        </ul>
      </section>

      <section
        className="mb-6
      "
      >
        <h1 className="text-3xl font-bold font-stretch-semi-expanded">가방</h1>
        <ul className="list-none">
          <li>https://nangshop.kr/27</li>
        </ul>
      </section>
    </div>
  );
}
