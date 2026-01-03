


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: "export",
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   typescript: {
//     ignoreBuildErrors: true,
//   },  
//   images: {
//     unoptimized: true,
//   },
//   headers: async () => {
//     return [
//       {
//         source: "/:path*",
//         headers: [
//           {
//             key: "Content-Security-Policy",
//             value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https:; font-src 'self' data: https:; connect-src 'self' https:;",
//           },
//         ],
//       },
//     ]
//   },
// }

// export default nextConfig









/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  typescript: {
    ignoreBuildErrors: true,
  },  
  
  images: {
    unoptimized: true,
  },
}

export default nextConfig