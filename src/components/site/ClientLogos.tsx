import { CLIENTS } from "@/data/locations";
import jmFinancial from "@/assets/clients/jm-financial.png";
import hdfcErgo from "@/assets/clients/hdfc-ergo.png";
import relianceGI from "@/assets/clients/reliance-general-insurance.png";
import roche from "@/assets/clients/roche.png";
import bajajElectricals from "@/assets/clients/bajaj-electricals.png";
import sugar from "@/assets/clients/sugar.png";
import dtdc from "@/assets/clients/dtdc.png";
import almondz from "@/assets/clients/almondz.png";
import cardekho from "@/assets/clients/cardekho.png";
import realatte from "@/assets/clients/realatte.png";
import kitchen365 from "@/assets/clients/kitchen365.png";
import synapsewave from "@/assets/clients/synapsewave.png";
import iorta from "@/assets/clients/iorta.png";
import centricity from "@/assets/clients/centricity.png";
import arnoldHoldings from "@/assets/clients/arnold-holdings.png";
import recity from "@/assets/clients/recity.png";
import goair from "@/assets/clients/goair.png";
import ornVacations from "@/assets/clients/orn-vacations.png";
import expertrons from "@/assets/clients/expertrons.png";
import eastvantage from "@/assets/clients/eastvantage.png";

const LOGOS: Record<string, string> = {
  "JM Financial": jmFinancial,
  "HDFC ERGO": hdfcErgo,
  "Reliance General Insurance": relianceGI,
  "Roche": roche,
  "Bajaj Electricals": bajajElectricals,
  "Sugar Cosmetics": sugar,
  "DTDC": dtdc,
  "Almondz": almondz,
  "CarDekho": cardekho,
  "Realatte": realatte,
  "Kitchen365": kitchen365,
  "SynapseWave": synapsewave,
  "Iorta": iorta,
  "Centricity": centricity,
  "Arnold Holdings": arnoldHoldings,
  "Recity": recity,
  "GoAir": goair,
  "ORN Vacations": ornVacations,
  "Expertrons": expertrons,
  "Eastvantage": eastvantage,
};

export const ClientLogos = () => {
  const half = Math.ceil(CLIENTS.length / 2);
  const row1 = CLIENTS.slice(0, half);
  const row2 = CLIENTS.slice(half);
  return (
    <section className="py-10 md:py-12 bg-card border-y border-border" aria-label="Our clients">
      <div className="container">
        <p className="text-center text-xs md:text-sm font-bold tracking-widest text-primary uppercase mb-6 md:mb-8">
          Our Clients
        </p>
        <div className="space-y-4 md:space-y-5">
          {[row1, row2].map((row, idx) => (
            <div
              key={idx}
              className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
            >
              <div
                className={`flex gap-4 md:gap-6 whitespace-nowrap ${
                  idx === 0
                    ? "animate-[marquee_45s_linear_infinite]"
                    : "animate-[marquee_55s_linear_infinite] [animation-direction:reverse]"
                }`}
              >
                {[...row, ...row, ...row].map((b, i) => {
                  const logo = LOGOS[b];
                  return (
                    <div
                      key={`${b}-${i}`}
                      className="shrink-0 px-4 md:px-7 py-3 md:py-5 rounded-xl bg-background border border-border shadow-sm flex items-center justify-center w-[140px] md:w-[200px] h-[80px] md:h-[96px] overflow-hidden"
                    >
                      {logo ? (
                        <img
                          src={logo}
                          alt={`${b} logo`}
                          loading="lazy"
                          className="max-h-10 md:max-h-14 max-w-full w-auto object-contain"
                        />
                      ) : (
                        <span className="text-base md:text-lg lg:text-xl font-extrabold tracking-tight text-foreground/70">
                          {b}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
