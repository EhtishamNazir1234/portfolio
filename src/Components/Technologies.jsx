import React from 'react'
import { RiReactjsLine } from 'react-icons/ri';
import { useTheme } from '../context/ThemeContext';
import { getThemeClasses } from '../utils/themeClasses';
import { SiMongodb } from 'react-icons/si';
import { DiMysql } from 'react-icons/di';
import { FaNodeJs } from 'react-icons/fa';

const Technologies = () => {
  const { isDark } = useTheme();
  const theme = getThemeClasses(isDark);

  return (
    <section className={`${theme.background} ${theme.text} border-b ${theme.border}`}>
      <div className="border-b border-neutral-800 pb-24">
        <h1 className="my-20 text-center text-4xl">Technologies</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </div>

          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className="text-7xl text-green-500" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiMysql className="text-7xl text-green-900" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaNodeJs className="text-7xl text-green-500" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technologies;
