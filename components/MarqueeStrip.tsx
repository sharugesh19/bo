"use client";

export function MarqueeStrip() {
  const content = "NEW ARRIVALS • FESTIVE COLLECTION • WEDDING SPECIALS • FREE SHIPPING ABOVE ₹2999 • ";
  
  return (
    <div className="bg-charcoal text-champagne py-3 overflow-hidden whitespace-nowrap flex group relative border-y border-champagne/20">
      <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
        {/* Repeat enough times to fill screen seamlessly */}
        {[1, 2, 3, 4].map((i) => (
          <span key={i} className="font-inter text-sm uppercase tracking-widest px-4">
            {content}
          </span>
        ))}
      </div>
      <div className="flex animate-marquee group-hover:[animation-play-state:paused] absolute top-3">
        {[1, 2, 3, 4].map((i) => (
          <span key={i} className="font-inter text-sm uppercase tracking-widest px-4">
            {content}
          </span>
        ))}
      </div>
    </div>
  );
}
