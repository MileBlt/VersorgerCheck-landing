const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="font-heading text-xl font-bold text-white mb-4">
                Kündigungscheck
              </h3>
              <p className="text-white/80 text-sm">
                Powered by Helpcheck
              </p>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-heading font-semibold text-white mb-4">Rechtliches</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white/80 hover:text-white text-sm transition-colors">
                    Impressum
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white text-sm transition-colors">
                    Datenschutz
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white text-sm transition-colors">
                    AGB
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading font-semibold text-white mb-4">Kontakt</h4>
              <ul className="space-y-2">
                <li className="text-white/80 text-sm">
                  info@helpcheck.de
                </li>
                <li className="text-white/80 text-sm">
                  Partneranwälte: hwlegal
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Helpcheck. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
