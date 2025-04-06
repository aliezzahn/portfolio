import { useState } from 'react';
import {
  Search,
  Home,
  Users,
  Briefcase,
  MessageSquare,
  Bell,
  Grid,
  Menu,
  X,
} from 'lucide-react';

export default function ProfileNavbar({
  basics,
}: {
  basics: {
    name: string;
    label: string;
    image: string;
    email: string;
    url: string;
    summary: string;
    location: {
      countryCode: string;
      address: string;
    };
    profiles: Array<{
      network: string;
      username: string;
      url: string;
    }>;
  };
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-[#1d2226] border-b border-[#38434f] sticky top-[3.58rem] h-14 z-10">
      <div className="max-w-6xl mx-auto px-4 py-2">
        {/* Desktop Navigation */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-[#0a66c2] font-bold text-3xl">in</div>
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="bg-[#38434f] rounded-md py-1 pl-8 pr-4 w-40 md:w-64 text-sm text-white"
              />
              <Search className="w-4 h-4 absolute left-2 top-2 text-gray-400" />
            </div>
            <div className="relative sm:hidden">
              <input
                type="text"
                placeholder="Search"
                className="bg-[#38434f] rounded-md py-1 pl-8 pr-2 w-32 text-sm text-white"
              />
              <Search className="w-4 h-4 absolute left-2 top-2 text-gray-400" />
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white flex flex-col items-center text-xs"
            >
              <Home className="w-5 h-5 mb-1" />
              Home
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white flex flex-col items-center text-xs"
            >
              <Users className="w-5 h-5 mb-1" />
              My Network
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white flex flex-col items-center text-xs"
            >
              <Briefcase className="w-5 h-5 mb-1" />
              Jobs
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white flex flex-col items-center text-xs"
            >
              <MessageSquare className="w-5 h-5 mb-1" />
              Messaging
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white flex flex-col items-center text-xs"
            >
              <Bell className="w-5 h-5 mb-1" />
              Notifications
            </a>
            <div className="border-l border-[#38434f] h-10"></div>
            <a
              href="#"
              className="text-gray-400 hover:text-white flex flex-col items-center text-xs"
            >
              <div className="w-5 h-5 rounded-full bg-gray-300 mb-1 overflow-hidden">
                {basics.image ? (
                  <img
                    src={basics.image || '/placeholder.svg?height=24&width=24'}
                    alt={basics.name}
                    width={24}
                    height={24}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-600">
                    {basics.name.charAt(0)}
                  </div>
                )}
              </div>
              Me
            </a>
            <div className="border-l border-[#38434f] h-10"></div>
            <a
              href="#"
              className="text-gray-400 hover:text-white flex flex-col items-center text-xs"
            >
              <Grid className="w-5 h-5 mb-1" />
              For Business
            </a>
          </nav>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-2 border-t border-[#38434f] pt-2">
            <nav className="grid grid-cols-4 gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white flex flex-col items-center text-xs"
              >
                <Home className="w-5 h-5 mb-1" />
                Home
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white flex flex-col items-center text-xs"
              >
                <Users className="w-5 h-5 mb-1" />
                Network
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white flex flex-col items-center text-xs"
              >
                <Briefcase className="w-5 h-5 mb-1" />
                Jobs
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white flex flex-col items-center text-xs"
              >
                <MessageSquare className="w-5 h-5 mb-1" />
                Messages
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white flex flex-col items-center text-xs"
              >
                <Bell className="w-5 h-5 mb-1" />
                Alerts
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white flex flex-col items-center text-xs"
              >
                <div className="w-5 h-5 rounded-full bg-gray-300 mb-1 overflow-hidden">
                  {basics.image ? (
                    <img
                      src={
                        basics.image || '/placeholder.svg?height=24&width=24'
                      }
                      alt={basics.name}
                      width={24}
                      height={24}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-600">
                      {basics.name.charAt(0)}
                    </div>
                  )}
                </div>
                Me
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white flex flex-col items-center text-xs"
              >
                <Grid className="w-5 h-5 mb-1" />
                Business
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
