import { FC, useMemo } from 'react';
import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

export const Footer: FC = () => {
  const year = useMemo(() => new Date().getFullYear(), []);
  return (
    <footer className="footer items-center p-4 bg-[rgb(139,164,151)] text-white">
      <div className="items-center grid-flow-col">
        <h1 className="text-lg font-semibold">@StoreHive</h1>
        <p>Copyright © {year} - All right reserved</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a
          target="_blank"
          className="text-lg"
          href="https://github.com/bineetNaidu"
        >
          <FaGithub />
        </a>
        <a
          target="_blank"
          className="text-lg"
          href="https://www.instagram.com/bineet_naidu/"
        >
          <FaInstagram />
        </a>
        <a
          target="_blank"
          className="text-lg"
          href="https://twitter.com/bineet_naidu"
        >
          <FaTwitter />
        </a>
      </div>
    </footer>
  );
};
