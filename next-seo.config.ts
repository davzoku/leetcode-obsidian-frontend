import { DefaultSeoProps } from "next-seo";

const description = "Walter's Leetcode Solutions"
// See https://www.npmjs.com/package/next-seo for more options
const config: DefaultSeoProps = {
  titleTemplate: "%s | Walter's Leetcode Solutions",
  defaultTitle: "Walter's Leetcode Solutions",
  description,

  openGraph: {
    type: 'website',
    locale: 'en_IE',
    title: "Walter's Leetcode Solutions",
    description,
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon/favicon-32x32.png',
      sizes: '32x32'
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon/favicon-16x16.png',
      sizes: '16x16'
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/favicon/apple-touch-icon.png"
    },
    {
      rel: "shortcut icon",
      type: "image/png",
      href: "/favicon/favicon.ico"
    },
    {
      rel: "manifest",
      href: "/manifest.json"
    }
  ]
};

export default config;
