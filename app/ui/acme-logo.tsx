import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lato } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lato.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Zen</p>
    </div>
  );
}
