import React from "react";
import { Link } from "react-router";
// import ThemeTogglerTwo from "../../components/common/ThemeTogglerTwo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative p-6 bg-white z-1 dark:bg-gray-900 sm:p-0">
      <div className="relative flex flex-col justify-center w-full h-screen lg:flex-row dark:bg-gray-900 sm:p-0">
        {children}
        <div className="items-center hidden w-full h-full lg:w-1/2 bg-gradient-to-br from-[#0F172A] via-[#1E3A8A] to-[#3B82F6] dark:from-[#1E293B] dark:via-[#2563EB] dark:to-[#60A5FA] lg:grid">
          <div className="relative flex items-center justify-center z-1">
            <div className="flex flex-col items-center max-w-xs">
              <Link to="/" className="block mb-4">
                <img
                  width={231}
                  height={48}
                  src="/images/logo/googlelogo.svg"
                  alt="Logo"
                />
              </Link>
              <p className="text-center text-gray-400 dark:text-white/60">
                As we live, our hearts turn colder. Cause pain is what we go
                through as we become older. We get insulted by others, lose
                trust for those others. We get back stabbed by friends. It
                becomes harder for us to give others a hand. We get our heart
                broken by people we love, even that we give them all...
              </p>
            </div>
          </div>
        </div>
        {/* <div className="fixed z-50 hidden bottom-6 right-6 sm:block">
          <ThemeTogglerTwo />
        </div> */}
      </div>
    </div>
  );
}
