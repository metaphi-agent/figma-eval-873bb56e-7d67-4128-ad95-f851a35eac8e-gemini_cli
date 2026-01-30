export function Footer() {
  return (
    <footer className="bg-bg-main py-12 border-t border-bg-tertiary mt-auto">
      <div className="container mx-auto px-8 text-center text-text-dim text-sm">
        <p>&copy; 2026 Valve Corporation. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="hover:text-text-main transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-text-main transition-colors">Legal</a>
          <a href="#" className="hover:text-text-main transition-colors">Steam Subscriber Agreement</a>
          <a href="#" className="hover:text-text-main transition-colors">Refunds</a>
        </div>
      </div>
    </footer>
  );
}