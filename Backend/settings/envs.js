import { config } from "dotenv"

config()

export const env = {
PORT: process.env.PORT || 3000
}