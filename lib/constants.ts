const BRAND_NAME = "FashionTV"
const PRIMARY_COLOR = "#FFC0CB"; // Pink
const SECONDARY_COLOR = "#FFFFFF"; // White
const FONT_FAMILY = "'Lora', serif"; // Elegant font for luxury branding
const BASE_URL = "https://www.fashiontv.com"
interface Product {
    id: string
    name: string
    description: string
    price: number
    category: string; // e.g., skincare, makeup
    imageUrl: string
    inStock: boolean
}

interface Customer {
    id: string
    name: string
    email: string
    phone: string
    address: string; // Could be expanded to include more fields as needed
}

interface Order {
    id: string
    customerId: string
    products: Product[]
    totalAmount: number
    orderDate: Date
    status: string; // e.g., pending, shipped, completed
}

const CONFIG = {
    brand: {
        name: BRAND_NAME,
        colors: {
            primary: PRIMARY_COLOR,
            secondary: SECONDARY_COLOR
        },
        logoUrl: ${BASE_URL}/assets/logo.png, // Placeholder URL for logo
        fontFamily: FONT_FAMILY
    },
    api: {
        baseUrl: ${BASE_URL}/api,
        timeout: 5000
    },
    features: {
        luxuryCollection: true, // Flag to enable luxury collection section
        customerReviews: true // Enable customer reviews section
    }
}
export { BRAND_NAME, PRIMARY_COLOR, SECONDARY_COLOR, CONFIG, Product, Customer, Order };