"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";
import { accessPage } from "@/lib/i18n";

export default function AccessPage() {
  const { tr } = useLanguage();

  return (
    <div className="pt-32 pb-28 bg-coal-900">

      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 mb-16 text-center">
        <ScrollReveal>
          <p className="text-[10px] tracking-[0.3em] uppercase text-ember-500 mb-4">{tr(accessPage.tag)}</p>
          <h1 className="font-serif text-5xl md:text-6xl text-cream-100 mb-5">{tr(accessPage.heading)}</h1>
          <div className="ember-rule mx-auto" />
        </ScrollReveal>
      </div>

      {/* Map */}
      <ScrollReveal>
        <div className="max-w-6xl mx-auto px-6 mb-16">
          <div className="relative w-full aspect-[16/7] overflow-hidden border border-coal-700/60">
            <iframe
              title="Kokuyō Yakiniku — Shibuya, Tokyo"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7!2d139.7024!3d35.6584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b563b00109f%3A0x337328ef1fd75c2!2s2-ch%C5%8Dme-8-14+Shibuya%2C+Shibuya+City%2C+Tokyo!5e0!3m2!1sja!2sjp!4v1680000000000"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "saturate(0.2) contrast(1.1) brightness(0.6)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </ScrollReveal>

      {/* Details */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mb-16">

          {/* Address */}
          <ScrollReveal>
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase text-ember-500 mb-5">{tr(accessPage.addrTag)}</p>
              <address className="not-italic text-sm text-ash-600 leading-loose">
                <p className="text-ash-500 text-xs mb-1">〒150-0002</p>
                <p className="text-cream-300">{tr(accessPage.addr1)}</p>
                <p className="text-cream-300">{tr(accessPage.addr2)}</p>
                <p className="mt-3 text-ash-500 text-xs">
                  2-8-14 Shibuya, Shibuya-ku,<br />Tokyo 150-0002
                </p>
              </address>
            </div>
          </ScrollReveal>

          {/* Getting here */}
          <ScrollReveal delay={100}>
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase text-ember-500 mb-5">{tr(accessPage.transitTag)}</p>
              <div className="space-y-5 text-sm text-ash-600">
                <div>
                  <p className="text-ash-500 text-[10px] tracking-wide mb-1">{tr(accessPage.trainLabel)}</p>
                  <p className="text-cream-300">{tr(accessPage.trainMain)}</p>
                  <p className="text-ash-500 text-xs mt-0.5">{tr(accessPage.trainSub)}</p>
                </div>
                <div>
                  <p className="text-ash-500 text-[10px] tracking-wide mb-1">{tr(accessPage.taxiLabel)}</p>
                  <p className="text-xs text-ash-600 leading-relaxed">{tr(accessPage.taxiBody)}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Hours & contact */}
          <ScrollReveal delay={200}>
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase text-ember-500 mb-5">{tr(accessPage.hoursTag)}</p>
              <div className="space-y-5 text-sm text-ash-600">
                <div>
                  <p className="text-ash-500 text-[10px] tracking-wide mb-1">Hours</p>
                  <p className="text-cream-300">{tr(accessPage.hoursVal)}</p>
                </div>
                <div>
                  <p className="text-ash-500 text-[10px] tracking-wide mb-1">{tr(accessPage.closedLabel)}</p>
                  <p className="text-cream-300">{tr(accessPage.closedVal)}</p>
                </div>
                <div className="border-t border-coal-700/50 pt-4">
                  <p className="text-ash-500 text-[10px] tracking-wide mb-1">{tr(accessPage.phoneLabel)}</p>
                  <a
                    href="tel:0364275580"
                    className="text-cream-200 hover:text-ember-300 transition-colors duration-300"
                  >
                    03-6427-5580
                  </a>
                  <p className="text-ash-500 text-xs mt-1">{tr(accessPage.reserveNote)}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
