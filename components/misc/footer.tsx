import PreviewLink from "./preview-link"
import { useEffect, useState } from 'react'

const Footer = ({}) => {
  const [deferedPrompt, setDeferedPrompt] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {

      // browser code
      window.addEventListener('appinstalled', (evt) => {
        // Log install to analytics
        console.log('INSTALL: Success');
      });

      window.addEventListener('beforeinstallprompt', (evt) => {
        // Log install to analytics
        evt.preventDefault();
        setDeferedPrompt(evt);
      });
    }
  })

  const addToHome = (e) => {
    if (deferedPrompt) {
      deferedPrompt.prompt();
    }
  }
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-lg lg:text-base tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            <a href="https://walterteng.com" className="hover:underline text-[#42B883]">Walter Teng</a> © {new Date().getFullYear()}
          </h3>
          <div className="flex flex-col lg:flex-row justify-end items-center lg:pl-4 lg:w-1/2">
            <button id="btn-install-app" onClick={addToHome} className="mx-3 bg-[#42B883] hover:bg-white hover:text-[#42B883] border border-[#42B883] text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0">Install App</button>            
            <a
              href={`https://github.com/davzoku/leetcode-obsidian-frontend`}
              className="mx-3 font-bold hover:underline text-[#42B883]"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer