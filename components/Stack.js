import { stack } from '@/data/config';

export default function Stack() {
  return (
    <div className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-12 sm:mb-16">
            {stack.title}
          </h2>
        </div>
        <div className="flex flex-wrap justify-center -m-1.5 sm:-m-2">
          {stack.stack.map((item, index) => (
            <span
              className="m-1.5 sm:m-2 px-3 py-1.5 border border-slate-300 dark:border-slate-600 rounded-md text-sm font-medium bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
              key={index}
            >
              {item}
            </span>
          ))}
        </div>

        {stack.interests && stack.interests.length > 0 && (
          <>
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mt-16 mb-8 text-center">
              Interests
            </h3>
            <div className="flex flex-wrap justify-center -m-1.5 sm:-m-2">
              {stack.interests.map((item, index) => (
                <span
                  className="m-1.5 sm:m-2 px-3 py-1.5 border border-slate-300 dark:border-slate-600 rounded-md text-sm font-medium bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                  key={index}
                >
                  {item}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
