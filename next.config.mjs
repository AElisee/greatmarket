/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DB_URI:
      "mongodb+srv://2kangeeli:IxYj9UkNuwpHPV0t@cluster0.tpmjxon.mongodb.net/greatmarket?retryWrites=true&w=majority&appName=Cluster0",
  },
};

export default nextConfig;
