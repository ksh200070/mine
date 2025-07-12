import Link from "next/link";

export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className="m-[40px]">
      <section>
        <form action="">
          <input type="text" />
        </form>
      </section>
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
          <li>
            <Link
              href="https://u-ur.kr/category/etc/68/"
              target="_blank"
              className="hover:bg-sky-100"
            >
              https://u-ur.kr/category/etc/68/
            </Link>
          </li>
          <li>
            <Link
              href="https://tildeseoul.co.kr/"
              target="_blank"
              className="hover:bg-sky-100"
            >
              https://tildeseoul.co.kr/
            </Link>
          </li>
          <li>
            <Link
              href="https://greensee.co.kr/"
              target="_blank"
              className="hover:bg-sky-100"
            >
              https://greensee.co.kr/
            </Link>
          </li>
          <li>
            <Link
              href="https://mienne.store/"
              target="_blank"
              className="hover:bg-sky-100"
            >
              https://mienne.store/
            </Link>
          </li>
          <li>
            <Link
              href="https://reetkeem.com/"
              target="_blank"
              className="hover:bg-sky-100"
            >
              https://reetkeem.com/
            </Link>
          </li>
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
          <li>
            <Link
              href="https://havehaus.kr/"
              target="_blank"
              className="hover:bg-sky-100"
            >
              https://havehaus.kr/
            </Link>
          </li>
          <li>
            <Link
              href="https://m.cellfusionc.co.kr/"
              target="_blank"
              className="hover:bg-sky-100"
            >
              https://m.cellfusionc.co.kr/
            </Link>
          </li>
        </ul>
      </section>

      <section
        className="mb-6
      "
      >
        <h1 className="text-3xl font-bold font-stretch-semi-expanded">가방</h1>
        <ul className="list-none">
          <li>
            <Link
              href="https://nangshop.kr/27"
              target="_blank"
              className="hover:bg-sky-100"
            >
              https://nangshop.kr/27
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
