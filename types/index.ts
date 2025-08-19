import { ProductCategory, UserRole, OrderStatus } from './constants'
/
 * Interface representing a luxury cosmetic product in the FashionTV collection.
 * Each product has attributes that convey its high-end nature and appeal to our clientele.
 */
export interface FashionTVProduct {
    id: number;                     // Unique identifier for the product
    name: string;                  // Name of the cosmetic product
    description: string;           // Description of the product, highlighting luxury features
    price: number;                 // Price in the local currency
    category: ProductCategory;      // Category of the cosmetic product (e.g., skincare, makeup, etc.)
    imageUrl: string;              // URL for the product image, showcasing its elegant design
    isFeatured: boolean;           // Indicates if this product is a featured item on the FashionTV site
    stockQuantity: number;         // Current stock level of the product
}

/
 * Interface representing a luxury customer of FashionTV.
 * This interface extends standard user attributes with specific roles 
 * aligning with the fashion industry.
 */
export interface FashionTVCustomer {
    id: number;                     // Unique identifier for each customer
    name: string;                   // Customer's full name
    email: string;                  // Customer's email address
    phoneNumber?: string;           // Optional phone number for luxury customer service
    preferredRole: UserRole;        // Role assigned to the customer (e.g., regular, VIP, etc.)
    wishlist: FashionTVProduct[];   // Array of products that the customer wishes to acquire
}

/
 * Interface representing an order made by a FashionTV customer.
 * Orders are a crucial component of the luxury shopping experience.
 */
export interface FashionTVOrder {
    orderId: number;                // Unique identifier for the order
    products: FashionTVProduct[];    // Products included in the order
    totalAmount: number;             // Total amount for the order
    customer: FashionTVCustomer;     // Customer who placed the order
    orderDate: Date;                 // Date when the order was placed
    status: OrderStatus;             // Current status of the order (e.g., processed, shipped, delivered)
}

/
 * Interface representing a luxury review on a FashionTV product.
 * Reviews help maintain the quality of products offered to discerning customers.
 */
export interface FashionTVReview {
    reviewId: number;                // Unique identifier for the review
    product: FashionTVProduct;       // The product being reviewed
    author: FashionTVCustomer;       // The author of the review
    rating: number;                  // Rating given by the customer (e.g., 1 to 5 stars)
    comment: string;                 // Customer's feedback on the product
    dateCreated: Date;               // Date when the review was posted
}

/
 * Interface representing a luxury cosmetic product category in FashionTV.
 * Categories help organize the cosmetics and enhance the shopping experience.
 */
export interface FashionTVCategory {
    id: number;                     // Unique identifier for the category
    name: string;                   // Name of the product category (e.g., "Skincare", "Makeup")
    description: string;            // Description detailing the elegance and exclusivity of the category
    products: FashionTVProduct[];    // Array of products under this category, showcasing luxury options
}

// Exporting the interfaces for use within the application
export {
    FashionTVProduct,
    FashionTVCustomer,
    FashionTVOrder,
    FashionTVReview,
    FashionTVCategory
};