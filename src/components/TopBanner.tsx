import { Button } from '@/components/ui/button';
import cpaOntarioLogo from '@/assets/CPA_Ontario_new_logo.png';

const WEBINAR_URL = 'https://pd.cpaontario.ca/seminars/beyond-the-tools-a-strategic-approach-to-ai-in-accounting/E003475.html';

export const TopBanner = () => {
  return (
    <div className="w-full bg-primary py-2.5 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 flex-wrap">
        <a href={WEBINAR_URL} target="_blank" rel="noopener noreferrer">
          <img
            src={cpaOntarioLogo}
            alt="CPA Ontario"
            className="h-8 w-auto object-contain"
          />
        </a>
        <a
          href={WEBINAR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-foreground font-semibold text-sm hover:underline"
        >
          Join our webinar: Beyond the Tools: A Strategic Approach to AI in Accounting
        </a>
        <span className="text-primary-foreground/80 text-sm">
          May 19, 2026 at 9–11 AM EST
        </span>
        <a href={WEBINAR_URL} target="_blank" rel="noopener noreferrer">
          <Button
            variant="secondary"
            size="sm"
            className="rounded-full text-xs font-semibold"
          >
            Learn More
          </Button>
        </a>
      </div>
    </div>
  );
};
