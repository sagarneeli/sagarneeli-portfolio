import Image from 'next/image';
import { hero } from '@/data/config';
import { useTheme } from 'next-themes';

export default function Hero() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="mb-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="w-20 h-20 rounded-full relative overflow-hidden">
          <Image
            src="/static/profile.png"
            layout="fill"
            objectFit="contain"
            alt="LeBron"
          />
        </div>
        <Image
          src="/static/icons/sun.svg"
          width={30}
          height={30}
          alt="Toggle theme"
          className="cursor-pointer toggleTheme"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />
      </div>
      <h1 className="mt-8 mb-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">{hero.title}</h1>
      <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">{hero.desc}</p>
    </div>
  );
}