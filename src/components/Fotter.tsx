
import Link from "next/link"
export default function Footer() {
  return (
   <footer className="w-full max-w-[1440px] mx-auto px-4 py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Funiro.</h2>
          <address className="not-italic text-gray-600 text-sm leading-relaxed">
            400 University Drive Suite 200 Coral<br />
            Gables,<br />
            FL 33134 USA
          </address>
        </div>

        {/* Links */}
        <div className="space-y-4">
          <h3 className="text-base font-medium text-gray-500">Links</h3>
          <nav className="flex flex-col space-y-3">
            <a href="#" className="text-sm hover:text-[#B88E2F] transition-colors">Home</a>
            <a href="#" className="text-sm hover:text-[#B88E2F] transition-colors">Shop</a>
            <a href="#" className="text-sm hover:text-[#B88E2F] transition-colors">About</a>
            <a href="#" className="text-sm hover:text-[#B88E2F] transition-colors">Contact</a>
          </nav>
        </div>

        {/* Help */}
        <div className="space-y-4">
          <h3 className="text-base font-medium text-gray-500">Help</h3>
          <nav className="flex flex-col space-y-3">
            <a href="#" className="text-sm hover:text-[#B88E2F] transition-colors">Payment Options</a>
            <a href="#" className="text-sm hover:text-[#B88E2F] transition-colors">Returns</a>
            <a href="#" className="text-sm hover:text-[#B88E2F] transition-colors">Privacy Policies</a>
          </nav>
        </div>

        {/* Newsletter */}
        <div className="space-y-4">
          <h3 className="text-base font-medium text-gray-500">Newsletter</h3>
          <form className="flex flex-col space-y-4">
            <div className="relative">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full border-b border-gray-400 pb-2 text-sm focus:outline-none focus:border-[#B88E2F]"
              />
              <button
                type="submit"
                className="absolute right-0 bottom-2 text-sm font-medium hover:text-[#B88E2F] transition-colors"
              >
                SUBSCRIBE
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <p className="text-sm text-gray-600">2023 furino. All rights reserved</p>
      </div>
    </footer>
  );
}
