import { Button } from '@/components/ui/button';

const MAVEN_URL = 'https://maven.com/p/137650/the-missing-method-map-your-work-before-you-build-with-ai';

export const TopBanner = () => {
  return (
    <div
      className="w-full py-2.5 px-4"
      style={{ backgroundColor: '#1a9988' }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 flex-wrap">
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <a
            href={MAVEN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[15px] hover:underline"
            style={{ color: '#ffffff' }}
          >
            Watch our free 30-minute Lightning Lesson, The Missing Method: Map Your Work Before You Build with AI
          </a>
          <span className="text-[15px]" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
            Selected by Maven for The AI-Powered Professional curated series.
          </span>
        </div>
        <a href={MAVEN_URL} target="_blank" rel="noopener noreferrer">
          <Button
            variant="default"
            size="sm"
            className="rounded-full text-xs font-semibold"
            style={{ backgroundColor: '#ffffff', color: '#1a9988' }}
          >
            Watch now
          </Button>
        </a>
      </div>
    </div>
  );
};
