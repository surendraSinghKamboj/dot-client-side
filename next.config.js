/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites(){
        return [
            {
                source:"/api/v1/user/register",
                destination:"http://localhost:4001/api/v1/user/register"
            }
        ]
    }
}

module.exports = nextConfig
