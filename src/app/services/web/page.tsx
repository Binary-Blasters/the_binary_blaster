
'use client';


export default function WebDevelopmentPage() {
  return (
    <>
      <main className="pt-16 px-6 min-h-screen  text-gray-200">
        <section className="max-w-5xl mx-auto py-24 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-emerald-400 mb-6">
            Web Development
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-10">
            We craft modern, responsive websites optimized for speed and performance. From portfolios to full e-commerce solutions, we build it all.
          </p>

          {/* Example services/features */}
          <div className="grid sm:grid-cols-2 gap-8 mt-12">
            <div className="p-6 bg-[#112B3C]/60 rounded-2xl border border-emerald-500/20 hover:border-emerald-400 transition-all">
              <h2 className="text-2xl font-semibold text-emerald-300 mb-3">Responsive Design</h2>
              <p className="text-gray-400">Websites that look amazing on all devices, from mobile to desktop.</p>
            </div>
            <div className="p-6 bg-[#112B3C]/60 rounded-2xl border border-emerald-500/20 hover:border-emerald-400 transition-all">
              <h2 className="text-2xl font-semibold text-emerald-300 mb-3">E-Commerce Solutions</h2>
              <p className="text-gray-400">Full-featured online stores optimized for conversions and speed.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
