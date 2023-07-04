/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites(){
        return [
            {
                source:"/api/v1/user/register",
                destination:"http://localhost:4001/api/v1/user/register"
            },
            {
                source:"/api/v1/user/login",
                destination:"http://localhost:4001/api/v1/user/login"
            }
        ]
    }
}

module.exports = nextConfig
