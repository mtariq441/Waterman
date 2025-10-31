import bbbLogo from "@assets/image_1761917663972.png";
import pentairLogo from "@assets/image_1761917675585.png";

export default function PartnersSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background" data-testid="section-partners">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4" data-testid="text-partners-title">
            TRUSTED & <span className="text-accent">CERTIFIED</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Authorized dealer and BBB accredited since 2002
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-14 md:gap-20 max-w-5xl mx-auto">
          <a 
            href="https://www.bbb.org/us/fl/palm-bay/profile/water-treatment-equipment/the-waterman-0733-90028299"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105 hover-elevate"
            data-testid="link-bbb"
          >
            <img 
              src={bbbLogo} 
              alt="BBB Accredited Business since September 2002" 
              className="h-32 sm:h-36 md:h-40 lg:h-44 w-auto"
              data-testid="img-bbb"
            />
          </a>
          
          <div className="transition-transform hover:scale-105 hover-elevate" data-testid="img-pentair-container">
            <img 
              src={pentairLogo} 
              alt="Pentair Authorized Dealer" 
              className="h-24 sm:h-28 md:h-32 lg:h-36 w-auto"
              data-testid="img-pentair"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
