import Icon, { Stars } from "./Icon";
import Reveal from "./Reveal";

const PHONE = "(437) 258-4601";
const TEL = "tel:+14372584601";
const SMS = "sms:+14372584601";
const MAPS = "https://www.google.com/maps/search/?api=1&query=5X%20Landscaping&query_place_id=ChIJiUbokXHglmIR2Cse9uIISk4";
const INSTAGRAM = "https://www.instagram.com/5xlandscape";

const services = [
  {
    icon: "mower",
    name: "Grass Cutting & Trimming",
    text: "Regular mowing and edge trimming that keeps your lawn neat all season. Grass got away from you? We cut badly overgrown lawns down fast and leave the clippings cleaned up, not scattered on your walkway.",
    featured: true,
  },
  {
    icon: "leaf",
    name: "Leaf Removal & Fall Clean-Up",
    text: "We rake, blow and bag the leaves from your lawn, garden beds and corners, then haul them away. Customers tell us their yard was left completely clean, with attention paid to the details.",
  },
  {
    icon: "snow",
    name: "Snow Removal & Salting",
    text: "Driveways and walkways cleared and salted so your family can come and go safely. Away from the property? Message us, and we send photos of the finished job so you know it's done.",
  },
  {
    icon: "sprout",
    name: "Lawn Repair",
    text: "Thin, patchy or struggling lawn? We take a look, tell you what's going on and fix it. We'll do our best to fit you in quickly, because a lawn doesn't wait.",
  },
  {
    icon: "home",
    name: "Driveway & Property Clean-Up",
    text: "Clearing driveways, walkways and the edges of your property of debris, overgrowth and mess so the place looks cared for and is safe to walk.",
  },
  {
    icon: "tag",
    name: "Curb Appeal for Listings",
    text: "Getting a home or investment property ready to sell? We tidy the lawn, beds and driveway so the first photo and the first showing make a strong impression.",
  },
];

const reviews = [
  { name: "Joshua", job: "Remote snow removal & salting", text: "Found them on Facebook when I needed snow removal and salting done at a property while I was away. Messaged them, and within a few hours I was sent photos of the finished job. Safe, trustworthy and efficient." },
  { name: "Erica B.", job: "Leaf removal", text: "They did a fantastic job with leaf removal at my house. Professional, quick, and they left my yard looking completely clean. It's clear they care about quality and pay attention to detail." },
  { name: "J. Anthony B.", job: "Driveway clean-up", text: "Absolutely the best landscaping company. They cleaned up my driveway so my family can safely come and go from our home. I couldn't be happier with the service." },
  { name: "Farnaz L.", job: "Grass cutting", text: "Great landscaping service. They were on time, professional, and did a clean job cutting the grass. Highly recommend." },
  { name: "Simranjot S.", job: "Overgrown lawn", text: "Really good work. Our grass was far too long and they had it done in very little time. Highly recommended." },
  { name: "Andrew H.", job: "Lawn repair", text: "They squeezed me in quickly and used their expertise to fix my lawn." },
];

const reasons = [
  { icon: "clock", title: "On time, every time", text: "Punctual is the word our customers use most. When we say we'll be there, we're there." },
  { icon: "bolt", title: "Fast, tidy work", text: "We get in, do the job right and leave the property cleaner than we found it." },
  { icon: "camera", title: "Photo updates", text: "Not home? We send photos of the finished job so you never have to wonder." },
  { icon: "tag", title: "Fair, upfront pricing", text: "Customers mention our pricing again and again. You know the price before we start." },
];

const steps = [
  { title: "Call or text", text: `Reach us at ${PHONE}, any day from 9 a.m. to 9 p.m. Tell us the address and what you need.` },
  { title: "Get your price", text: "We'll ask a few questions, or come take a look, and give you a clear price before any work starts." },
  { title: "We do the work", text: "Our crew shows up on time, gets the job done quickly and cleans up after itself." },
  { title: "See the result", text: "Walk the yard with us, or if you're away, get photos of the finished job sent to your phone." },
];

const faqs = [
  { q: "What areas do you serve?", a: "We work in Toronto and the nearby areas of the GTA. If you're not sure whether we cover your street, call or text us the address and we'll tell you right away." },
  { q: "What are your hours?", a: "Google lists us as open 9 a.m. to 9 p.m., seven days a week. Calls and texts are answered during those hours." },
  { q: "How much does lawn care cost?", a: "It depends on the size of the property and the job. Call or text us with your address and what you need, and we'll give you a clear price before any work starts." },
  { q: "Can you take care of a property when I'm not there?", a: "Yes. Plenty of our customers are landlords or owners who are away. We'll do the work and send you photos of the finished job, usually within a few hours of you messaging us." },
  { q: "Do you do snow removal and salting?", a: "Yes. In winter we clear and salt driveways and walkways so your family, tenants or visitors can get in and out safely." },
  { q: "My lawn is really overgrown. Can you still help?", a: "Absolutely. Overgrown lawns are a regular job for us, and customers tell us we got theirs cut down in very little time." },
  { q: "Can you get a house ready to sell?", a: "Yes. We clean up the lawn, beds and driveway so the property looks its best for listing photos and showings." },
];

const area = ["Toronto", "Greater Toronto Area (GTA)"];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LandscapingBusiness",
  name: "5X Landscaping",
  telephone: "+1-437-258-4601",
  areaServed: [{ "@type": "City", name: "Toronto" }, { "@type": "AdministrativeArea", name: "Greater Toronto Area" }],
  address: { "@type": "PostalAddress", addressLocality: "Toronto", addressRegion: "ON", addressCountry: "CA" },
  openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "09:00", closes: "21:00" }],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "19" },
  sameAs: [INSTAGRAM, MAPS],
  makesOffer: services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.name } })),
};

function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2">
      <span className={`grid h-9 w-9 place-items-center rounded-full ${light ? "bg-white/15 text-white" : "bg-brand text-white"}`}>
        <Icon name="leaf" className="h-5 w-5" />
      </span>
      <span className={`font-head text-xl font-extrabold tracking-tight ${light ? "text-white" : "text-ink"}`}>
        5X <span className={light ? "text-white/80" : "text-brand"}>Landscaping</span>
      </span>
    </span>
  );
}

function CallButton({ className = "" }: { className?: string }) {
  return (
    <a href={TEL} className={`btn btn-cta ${className}`}>
      <span className="wiggle inline-flex"><Icon name="phone" className="h-5 w-5" /></span>
      Call {PHONE}
    </a>
  );
}

export default function Home() {
  return (
    <>
      <Reveal />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="hidden bg-brand-dark text-white/90 text-sm md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2">
          <span className="flex items-center gap-2"><Icon name="pin" className="h-4 w-4" /> Serving Toronto &amp; the GTA</span>
          <span className="flex items-center gap-2"><Icon name="clock" className="h-4 w-4" /> Open 7 days, 9 a.m. to 9 p.m.</span>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-6">
          <a href="#top" aria-label="5X Landscaping home"><Wordmark /></a>
          <nav aria-label="Main" className="hidden items-center gap-7 font-semibold text-muted lg:flex">
            <a href="#services" className="hover:text-brand">Services</a>
            <a href="#reviews" className="hover:text-brand">Reviews</a>
            <a href="#about" className="hover:text-brand">About</a>
            <a href="#area" className="hover:text-brand">Service Area</a>
            <a href="#faq" className="hover:text-brand">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={TEL} className="hidden font-head font-bold text-ink hover:text-brand md:inline">{PHONE}</a>
            <a href={TEL} className="btn btn-cta hidden !min-h-[46px] md:inline-flex">Free Quote</a>
            <a href={TEL} aria-label={`Call ${PHONE}`} className="grid h-11 w-11 place-items-center rounded-full bg-cta text-white md:hidden">
              <Icon name="phone" className="h-5 w-5" />
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="pb-20 md:pb-0">
        {/* Hero */}
        <section className="bg-tint">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 md:px-6 md:py-20 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm font-bold text-brand-dark ring-1 ring-line">
                <Icon name="leaf" className="h-4 w-4" /> Lawn care &amp; snow removal
              </p>
              <h1 className="font-head font-extrabold text-ink" style={{ fontSize: "clamp(2.25rem, 5vw, 3.6rem)" }}>
                Lawn Care, Leaf Clean-Ups &amp; Snow Removal in Toronto and the GTA
              </h1>
              <p className="mt-5 max-w-xl text-lg text-muted">
                Grass cut, leaves gone, driveway cleared. 5X Landscaping is the punctual, fast and fairly priced crew Toronto homeowners and property owners call when they want the yard taken care of properly, even when they can&apos;t be there.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <CallButton />
                <a href={SMS} className="btn btn-line"><Icon name="text" className="h-5 w-5" /> Text us</a>
              </div>
              <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-[15px] font-semibold text-ink">
                <Stars className="h-5 w-5" />
                <span>5.0 from 19 Google reviews</span>
                <span className="text-line" aria-hidden="true">|</span>
                <span>Open 7 days, 9 a.m. to 9 p.m.</span>
                <span className="text-line" aria-hidden="true">|</span>
                <span>Photo updates when you&apos;re away</span>
              </p>
            </div>

            <figure className="card p-7 shadow-[0_24px_50px_-30px_oklch(0.3_0.06_150/0.45)] md:p-8">
              <Stars className="h-6 w-6" />
              <blockquote className="mt-4 font-head text-xl font-semibold leading-snug text-ink">
                &ldquo;Messaged them, and within a few hours I was sent photos of the finished job. Safe, trustworthy and efficient.&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-5">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-soft font-head font-bold text-brand-dark">J</span>
                <span>
                  <span className="block font-bold">Joshua</span>
                  <span className="block text-sm text-muted">Snow removal &amp; salting, Google review</span>
                </span>
              </figcaption>
              <dl className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl bg-tint p-3"><dt className="text-muted">Rating</dt><dd className="font-head text-lg font-bold">5.0 / 5</dd></div>
                <div className="rounded-xl bg-tint p-3"><dt className="text-muted">Hours</dt><dd className="font-head text-lg font-bold">9 a.m. to 9 p.m.</dd></div>
              </dl>
            </figure>
          </div>
        </section>

        {/* Trust bar */}
        <section aria-label="Why customers trust us" className="border-y border-line bg-white">
          <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4 md:px-6">
            {[
              { icon: "star", label: "5.0 stars on Google", sub: "19 reviews" },
              { icon: "calendar", label: "Open 7 days a week", sub: "9 a.m. to 9 p.m." },
              { icon: "camera", label: "Photo confirmation", sub: "for remote owners" },
              { icon: "pin", label: "Toronto & the GTA", sub: "homes and rentals" },
            ].map((t) => (
              <li key={t.label} className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-soft text-brand"><Icon name={t.icon} className="h-5 w-5" /></span>
                <span><span className="block font-bold leading-tight">{t.label}</span><span className="text-sm text-muted">{t.sub}</span></span>
              </li>
            ))}
          </ul>
        </section>

        {/* Services */}
        <section id="services" className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <div className="reveal max-w-2xl">
              <h2 className="font-head text-3xl font-extrabold md:text-4xl">Lawn, yard and snow services</h2>
              <p className="mt-3 text-lg text-muted">One crew for the whole year: mowing in summer, leaves in fall, snow and salt in winter, and a fresh start for your lawn in spring.</p>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <article key={s.name} className={`card card-hover reveal flex flex-col p-6 ${s.featured ? "border-2 border-brand" : ""}`}>
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand"><Icon name={s.icon} /></span>
                    {s.featured && <span className="rounded-full bg-brand px-3 py-1 text-xs font-bold text-white">Most booked</span>}
                  </div>
                  <h3 className="mt-5 font-head text-xl font-bold">{s.name}</h3>
                  <p className="mt-2 flex-1 text-muted">{s.text}</p>
                  <a href={TEL} className="mt-5 inline-flex items-center gap-2 font-bold text-brand-dark hover:text-brand">
                    Call about this <Icon name="arrow" className="h-4 w-4" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <div className="reveal flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <h2 className="font-head text-3xl font-extrabold md:text-4xl">Rated 5.0 from 19 Google reviews</h2>
                <p className="mt-3 text-lg text-muted">Every single review is five stars. Here&apos;s what Toronto customers say.</p>
              </div>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn btn-line shrink-0">
                Read all reviews on Google <Icon name="arrow" className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((r) => (
                <figure key={r.name} className="card reveal flex flex-col p-6">
                  <Stars />
                  <blockquote className="mt-4 flex-1 text-ink">&ldquo;{r.text}&rdquo;</blockquote>
                  <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-soft font-head font-bold text-brand-dark">{r.name[0]}</span>
                    <span><span className="block font-bold">{r.name}</span><span className="block text-sm text-muted">{r.job}</span></span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-6 lg:grid-cols-2">
            <div className="reveal">
              <h2 className="font-head text-3xl font-extrabold md:text-4xl">A local crew that shows up and does it right</h2>
              <div className="mt-5 space-y-4 text-lg text-muted">
                <p>5X Landscaping takes care of lawns and properties across Toronto and the GTA. Some of our customers are homeowners who simply want their weekends back. Others are landlords and investors who own a place they can&apos;t visit every week, or sellers who need a property looking its best before it lists.</p>
                <p>Whoever you are, the job is the same: turn up when we said we would, work quickly, leave the yard clean and charge a fair price. That&apos;s why the words customers use about us are punctual, fast, professional and well priced, and why every one of our Google reviews is five stars.</p>
                <p>If you can&apos;t be there, that&apos;s fine. Send us a message, and we&apos;ll send photos of the finished work so you can see it for yourself.</p>
              </div>
            </div>
            <ul className="grid content-start gap-4 sm:grid-cols-2">
              {reasons.map((r) => (
                <li key={r.title} className="card reveal p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-brand text-white"><Icon name={r.icon} className="h-5 w-5" /></span>
                  <h3 className="mt-4 font-head text-lg font-bold">{r.title}</h3>
                  <p className="mt-1 text-muted">{r.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <h2 className="reveal font-head text-3xl font-extrabold md:text-4xl">How it works</h2>
            <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s.title} className="card reveal p-6">
                  <span className="font-head text-5xl font-extrabold text-brand/25">{i + 1}</span>
                  <h3 className="mt-2 font-head text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-muted">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Service area */}
        <section id="area" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:px-6 lg:grid-cols-2">
            <div className="reveal">
              <h2 className="font-head text-3xl font-extrabold md:text-4xl">Serving Toronto and the GTA</h2>
              <p className="mt-4 text-lg text-muted">We take care of homes, rentals and listings in Toronto and the surrounding areas. Not sure if we reach you? Text us your address and we&apos;ll let you know right away.</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {area.map((a) => (
                  <li key={a} className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-4 py-2 font-semibold text-brand-dark"><Icon name="pin" className="h-4 w-4" /> {a}</li>
                ))}
              </ul>
              <a href={SMS} className="btn btn-line mt-8"><Icon name="text" className="h-5 w-5" /> Text us your address</a>
            </div>
            <div className="reveal overflow-hidden rounded-2xl border border-line">
              <iframe title="Map of Toronto, the 5X Landscaping service area" src="https://maps.google.com/maps?q=Toronto%2C%20ON&z=10&output=embed" className="h-[340px] w-full md:h-[400px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-5 md:px-6">
            <h2 className="reveal font-head text-3xl font-extrabold md:text-4xl">Questions we get asked</h2>
            <div className="mt-8 divide-y divide-line rounded-2xl border border-line bg-white">
              {faqs.map((f) => (
                <details key={f.q} className="group px-6 py-5">
                  <summary className="flex items-center justify-between gap-4 font-head text-lg font-semibold">
                    {f.q}
                    <span className="plus grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-soft text-brand"><Icon name="plus" className="h-4 w-4" /></span>
                  </summary>
                  <p className="mt-3 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-5 py-16 md:px-6 md:py-20">
          <div className="mx-auto max-w-6xl rounded-3xl bg-brand px-6 py-12 text-white md:px-14 md:py-16">
            <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <h2 className="font-head text-3xl font-extrabold md:text-4xl">Ready for a yard you don&apos;t have to think about?</h2>
                <p className="mt-3 text-lg text-white/85">Call or text 5X Landscaping at {PHONE}. We answer 7 days a week, 9 a.m. to 9 p.m.</p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <CallButton />
                <a href={SMS} className="btn border-2 border-white/70 text-white hover:bg-white/10"><Icon name="text" className="h-5 w-5" /> Text us</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4 md:px-6">
          <div className="md:col-span-2">
            <Wordmark />
            <p className="mt-4 max-w-sm text-muted">Lawn care, leaf removal, lawn repair, driveway clean-ups and snow removal for homes and properties in Toronto and the GTA.</p>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="5X Landscaping on Instagram" className="mt-5 inline-grid h-10 w-10 place-items-center rounded-full bg-brand-soft text-brand hover:bg-brand hover:text-white">
              <Icon name="instagram" className="h-5 w-5" />
            </a>
          </div>
          <div>
            <h3 className="font-head font-bold">Contact</h3>
            <ul className="mt-3 space-y-2 text-muted">
              <li><a href={TEL} className="hover:text-brand">{PHONE}</a></li>
              <li><a href={SMS} className="hover:text-brand">Text {PHONE}</a></li>
              <li>Toronto &amp; the GTA, Ontario</li>
              <li>Open daily, 9 a.m. to 9 p.m.</li>
              <li><a href={MAPS} target="_blank" rel="noopener noreferrer" className="hover:text-brand">Find us on Google</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-head font-bold">Services</h3>
            <ul className="mt-3 space-y-2 text-muted">
              {services.map((s) => <li key={s.name}><a href="#services" className="hover:text-brand">{s.name}</a></li>)}
            </ul>
          </div>
        </div>
        <div className="border-t border-line py-5 text-center text-sm text-muted">&copy; {new Date().getFullYear()} 5X Landscaping. Toronto, Ontario.</div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-line bg-white p-2 md:hidden">
        <a href={TEL} className="btn btn-cta !min-h-[48px]"><Icon name="phone" className="h-5 w-5" /> Call</a>
        <a href={SMS} className="btn btn-line !min-h-[48px]"><Icon name="text" className="h-5 w-5" /> Text</a>
      </div>
    </>
  );
}
