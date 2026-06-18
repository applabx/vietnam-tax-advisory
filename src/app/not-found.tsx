import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-navy text-white min-h-[80vh] flex items-center section-pad pt-32">
      <div className="container-page text-center">
        <div className="eyebrow justify-center !text-gold-light">404</div>
        <h1 className="font-serif text-[clamp(48px,7vw,96px)] font-light text-white leading-[1.05] mb-6">
          Page not <em className="text-gold-light">found</em>
        </h1>
        <p className="text-white/65 text-[16px] font-light leading-[1.8] max-w-md mx-auto mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Try one of the links below.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">Back to home</Link>
          <Link href="/contact" className="btn-outline-light">Contact us</Link>
        </div>
      </div>
    </div>
  );
}
