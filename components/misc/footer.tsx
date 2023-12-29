import PreviewLink from "./preview-link"

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-lg lg:text-base tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            <a href="https://walterteng.com" className="hover:underline">Walter Teng</a> © {new Date().getFullYear()}
          </h3>
          <div className="flex flex-col lg:flex-row justify-end items-center lg:pl-4 lg:w-1/2">
            <a
              href={`https://github.com/davzoku/leetcode-obsidian-frontend`}
              className="mx-3 bg-[#42B883] hover:bg-white hover:text-[#42B883] border border-[#42B883] text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
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