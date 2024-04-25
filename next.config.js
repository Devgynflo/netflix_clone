/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // a mettre a false lors de la prod puis evite les doublons lors d'un console.log 
  //output: "export", // => incompatible avec l'optimization d'image de nextjs
  
}

module.exports = nextConfig
