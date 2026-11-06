import Link from "next/link";
import { ArrowIcon } from "@/components/Header";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-ink py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-0 size-[30rem] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(236,90,46,0.5), transparent 65%)" }}
      />
      <div className="shell relative">
        <p className="eyebrow text-clay">404 · Frame missing</p>
        <h1 className="display-xl mt-6 max-w-3xl text-bone">
          This one is
          <br />
          out of <span className="text-clay">frame.</span>
        </h1>
        <p className="lede mt-6 max-w-xl">
          The page you were looking for is not in the studio. Head back to the work, or send us a
          message about what you need.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link href="/" className="btn btn-clay">
            Back to the studio <ArrowIcon />
          </Link>
          <Link href="/portfolio" className="btn btn-outline">
            See the portfolio
          </Link>
          <Link href="/contact" className="btn btn-outline">
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
