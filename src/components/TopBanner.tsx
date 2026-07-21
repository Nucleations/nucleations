import { Button } from '@/components/ui/button';
import mavenLogo from '@/assets/maven-logo.png';

const MAVEN_URL = 'https://maven.com/p/137650/the-missing-method-map-your-work-before-you-build-with-ai';

export const TopBanner = () => {
  return (
    <div
      className="w-full py-2.5 px-4"
      style={{ backgroundColor: '#D8E8E0' }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 flex-wrap">
        <a href={MAVEN_URL} target="_blank" rel="noopener noreferrer">
          <img
            src={mavenLogo}
            alt="Maven"
            className="h-6 w-auto object-contain"
          />
        </a>
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <a
            href={MAVEN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[15px] hover:underline"
            style={{ color: '#1B4332' }}
          >
            Watch our free 30-minute Lightning Lesson, The Missing Method: Map Your Work Before You Build with AI
          </a>
          <span className="text-[15px]" style={{ color: 'rgba(27, 67, 50, 0.8)' }}>
            Selected by Maven for The AI-Powered Professional curated series.
          </span>
        </div>
        <a href={MAVEN_URL} target="_blank" rel="noopener noreferrer">
          <Button
            variant="default"
            size="sm"
            className="rounded-full text-xs font-semibold"
            style={{ backgroundColor: '#1B4332', color: '#ffffff' }}
          >
            Watch now
          </Button>
        </a>
      </div>
    </div>
  );
};
