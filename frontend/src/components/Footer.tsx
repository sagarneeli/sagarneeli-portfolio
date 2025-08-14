import { getContent } from "@/lib/content";

export default function Footer() {
  const content = getContent();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-gray-500 text-center sm:text-left">
            &copy; {currentYear} {content.hero.name}. All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            <a href={content.links.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors">
              GitHub
            </a>
            <a href={content.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
