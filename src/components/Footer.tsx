import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Copyright */}
          <div className="text-muted-foreground">
            <p>© 2025 Nucleations. All rights reserved.</p>
            <a
              href="https://www.linkedin.com/company/nucleations/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-2 text-primary hover:text-primary/80 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              Follow us on LinkedIn
            </a>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Industries</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/accounting" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Accounting
                </Link>
              </li>
              <li>
                <Link 
                  to="/logistics" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Logistics & Moving
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
