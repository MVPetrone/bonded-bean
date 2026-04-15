/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  transpilePackages: [
    '@reactbricks/reactbricks-ui-rsc',
    // '@reactbricks/email-ui-rsc' <<EMAIL_BRICKS>>
  ],
  reactStrictMode: false,
}

export default nextConfig
