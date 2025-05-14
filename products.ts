
import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: 1,
    name: "iPhone 15 Pro Max - 256GB",
    slug: "iphone-15-pro-max-256gb",
    category: "phones",
    price: 1200000,
    image: "https://images.unsplash.com/photo-1678995632928-298d05d41671?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1678995632928-298d05d41671?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1592750475352-d0fc7902f431?w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500&auto=format&fit=crop"
    ],
    shortDescription: "The most powerful iPhone ever with A17 Pro chip and titanium design.",
    description: "The iPhone 15 Pro Max features a stunning 6.7-inch Super Retina XDR display, powerful A17 Pro chip, and a professional camera system with a 48MP main camera. The titanium design is both lightweight and incredibly durable.",
    specifications: {
      "Display": "6.7-inch Super Retina XDR",
      "Chip": "A17 Pro with 6-core CPU",
      "Camera": "48MP main, 12MP ultra wide, 12MP telephoto",
      "Battery": "Up to 29 hours video playback",
      "Storage": "256GB",
      "OS": "iOS 17"
    },
    tags: ["New Arrival", "Premium"],
    featured: true,
    new: true
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra - 512GB",
    slug: "samsung-galaxy-s24-ultra-512gb",
    category: "phones",
    price: 950000,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1678995632928-298d05d41671?w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format&fit=crop"
    ],
    shortDescription: "Galaxy AI and a built-in S Pen redefine what a smartphone can do.",
    description: "The Galaxy S24 Ultra comes with Galaxy AI capabilities, a powerful 200MP camera system, and the integrated S Pen. The Snapdragon 8 Gen 3 processor ensures lightning-fast performance for all your tasks.",
    specifications: {
      "Display": "6.8-inch Dynamic AMOLED 2X",
      "Chip": "Snapdragon 8 Gen 3",
      "Camera": "200MP main, 12MP ultra wide, 10MP telephoto",
      "Battery": "5000mAh",
      "Storage": "512GB",
      "OS": "Android 14 with One UI 6.1"
    },
    tags: ["New Arrival", "Best Seller"],
    featured: true,
    new: true,
    bestSeller: true
  },
  {
    id: 3,
    name: "MacBook Pro 16-inch M3 Pro",
    slug: "macbook-pro-16-inch-m3-pro",
    category: "laptops",
    price: 2500000,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&auto=format&fit=crop"
    ],
    shortDescription: "Supercharged by M3 Pro with incredible battery life and display.",
    description: "The MacBook Pro 16-inch with M3 Pro delivers exceptional performance and graphics for demanding tasks like editing high-resolution photos and videos. The Liquid Retina XDR display offers extreme dynamic range with stunning contrast.",
    specifications: {
      "Display": "16-inch Liquid Retina XDR",
      "Chip": "M3 Pro with 12-core CPU, 18-core GPU",
      "Memory": "32GB unified memory",
      "Storage": "1TB SSD",
      "Battery": "Up to 22 hours",
      "OS": "macOS Sonoma"
    },
    tags: ["Premium", "1-Year Warranty"],
    featured: true
  },
  {
    id: 4,
    name: "Dell XPS 15 2024",
    slug: "dell-xps-15-2024",
    category: "laptops",
    price: 1900000,
    image: "https://images.unsplash.com/photo-1593642702909-dec73df255d7?w=500&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1593642702909-dec73df255d7?w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=500&auto=format&fit=crop"
    ],
    shortDescription: "Premium Windows laptop with OLED display and Intel Core Ultra.",
    description: "The Dell XPS 15 features a stunning 15.6-inch 4K OLED display with virtually borderless InfinityEdge. Powered by Intel Core Ultra processors and NVIDIA GeForce RTX graphics, it delivers exceptional performance for creators and professionals.",
    specifications: {
      "Display": "15.6-inch 4K OLED",
      "Processor": "Intel Core Ultra 9 185H",
      "Graphics": "NVIDIA GeForce RTX 4070",
      "Memory": "32GB DDR5",
      "Storage": "1TB NVMe SSD",
      "OS": "Windows 11 Pro"
    },
    tags: ["New Arrival", "1-Year Warranty"],
    featured: true,
    new: true
  },
  {
    id: 5,
    name: "Sony WH-1000XM5 Headphones",
    slug: "sony-wh-1000xm5-headphones",
    category: "accessories",
    price: 250000,
    image: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=500&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1545127398-14699f92334b?w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?w=500&auto=format&fit=crop"
    ],
    shortDescription: "Industry-leading noise cancellation with premium sound quality.",
    description: "The Sony WH-1000XM5 headphones offer exceptional noise cancellation and premium sound quality. With a lightweight design and up to 30 hours of battery life, they're perfect for long listening sessions.",
    specifications: {
      "Type": "Wireless Noise Cancelling",
      "Battery Life": "Up to 30 hours",
      "Connectivity": "Bluetooth 5.2, 3.5mm cable",
      "Features": "Adaptive Sound Control, Speak-to-Chat",
      "Charging": "USB-C, 3 hours full charge",
      "Weight": "250g"
    },
    tags: ["Best Seller", "1-Year Warranty"],
    bestSeller: true
  },
  {
    id: 6,
    name: "iPad Pro 12.9-inch M2",
    slug: "ipad-pro-12-9-inch-m2",
    category: "tablets",
    price: 980000,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587033411391-5d9ac382f0b6?w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?w=500&auto=format&fit=crop"
    ],
    shortDescription: "Liquid Retina XDR display and M2 chip for pro-level performance.",
    description: "The 12.9-inch iPad Pro features the stunning Liquid Retina XDR display with extreme dynamic range. The M2 chip delivers next-level performance for demanding workflows like 3D design and video editing.",
    specifications: {
      "Display": "12.9-inch Liquid Retina XDR",
      "Chip": "M2 with 8-core CPU, 10-core GPU",
      "Storage": "256GB",
      "Camera": "12MP Wide, 10MP Ultra Wide",
      "Connectivity": "Wi-Fi 6E, 5G (optional)",
      "OS": "iPadOS 17"
    },
    tags: ["Premium", "1-Year Warranty"],
    featured: true
  },
  {
    id: 7,
    name: "AirPods Pro (2nd generation)",
    slug: "airpods-pro-2nd-generation",
    category: "accessories",
    price: 185000,
    image: "https://images.unsplash.com/photo-1606741965509-544b4be0ede3?w=500&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1606741965509-544b4be0ede3?w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=500&auto=format&fit=crop"
    ],
    shortDescription: "Active Noise Cancellation and Transparency mode in a comfortable design.",
    description: "AirPods Pro deliver Active Noise Cancellation for immersive sound, Transparency mode to hear the world around you, and a customizable fit for all-day comfort. The charging case provides more than 24 hours of battery life.",
    specifications: {
      "Type": "In-ear wireless earbuds",
      "Features": "Active Noise Cancellation, Transparency mode",
      "Battery Life": "Up to 6 hours, 30+ with case",
      "Connectivity": "Bluetooth 5.3, H2 chip",
      "Charging": "USB-C, MagSafe, Qi wireless",
      "Water Resistance": "IPX4"
    },
    tags: ["Best Seller", "1-Year Warranty"],
    bestSeller: true
  },
  {
    id: 8,
    name: "Samsung 49-inch Odyssey G9 Curved Gaming Monitor",
    slug: "samsung-49-inch-odyssey-g9-curved-gaming-monitor",
    category: "accessories",
    price: 950000,
    image: "https://images.unsplash.com/photo-1629429407756-446d96d6b9b1?w=500&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1629429407756-446d96d6b9b1?w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1527219525722-f9767a7f2884?w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588200908342-23b585c03e26?w=500&auto=format&fit=crop"
    ],
    shortDescription: "Super ultra-wide 49-inch display with 240Hz refresh rate.",
    description: "The Samsung Odyssey G9 features a super ultra-wide 49-inch 1000R curved display that wraps around your field of vision. With a 240Hz refresh rate and 1ms response time, it's perfect for immersive gaming.",
    specifications: {
      "Screen Size": "49-inch",
      "Resolution": "5120 x 1440 (DQHD)",
      "Refresh Rate": "240Hz",
      "Response Time": "1ms",
      "Curvature": "1000R",
      "Connectivity": "HDMI 2.0, DisplayPort 1.4, USB 3.0"
    },
    tags: ["Premium", "1-Year Warranty"]
  },
  {
    id: 9,
    name: "Google Pixel 8 Pro - 256GB",
    slug: "google-pixel-8-pro-256gb",
    category: "phones",
    price: 750000,
    image: "https://images.unsplash.com/photo-1596558450255-7c0b7be9d56a?w=500&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1596558450255-7c0b7be9d56a?w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop"
    ],
    shortDescription: "Google's most advanced Pixel phone with AI-powered features.",
    description: "The Google Pixel 8 Pro showcases cutting-edge computational photography and AI-driven features. With the Tensor G3 chip, it delivers personalized help throughout your day and exceptional camera performance.",
    specifications: {
      "Display": "6.7-inch LTPO OLED",
      "Chip": "Google Tensor G3",
      "Camera": "50MP main, 48MP ultrawide, 48MP telephoto",
      "Battery": "5,000mAh",
      "Storage": "256GB",
      "OS": "Android 14"
    },
    tags: ["New Arrival", "1-Year Warranty"],
    new: true
  },
  {
    id: 10,
    name: "ASUS ROG Zephyrus G14 Gaming Laptop",
    slug: "asus-rog-zephyrus-g14-gaming-laptop",
    category: "laptops",
    price: 1700000,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1548611716-3001c1a58623?w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544099858-75feeb57f01b?w=500&auto=format&fit=crop"
    ],
    shortDescription: "Powerful, compact gaming laptop with AMD Ryzen processor.",
    description: "The ASUS ROG Zephyrus G14 combines outstanding performance in a compact form factor. With an AMD Ryzen 9 processor and NVIDIA GeForce RTX graphics, it delivers exceptional gaming and content creation capabilities.",
    specifications: {
      "Display": "14-inch QHD 165Hz",
      "Processor": "AMD Ryzen 9 7940HS",
      "Graphics": "NVIDIA GeForce RTX 4070 8GB",
      "Memory": "32GB DDR5",
      "Storage": "1TB NVMe SSD",
      "OS": "Windows 11 Pro"
    },
    tags: ["Best Seller", "1-Year Warranty"],
    bestSeller: true
  }
];

// Add more products to reach at least 20
for (let i = 11; i <= 20; i++) {
  const categories = ['phones', 'laptops', 'accessories', 'tablets'];
  const category = categories[Math.floor(Math.random() * categories.length)];
  
  let name, slug, price, image, shortDescription, description;
  
  if (category === 'phones') {
    const brands = ['Xiaomi', 'OnePlus', 'Nothing', 'Oppo', 'Vivo'];
    const brand = brands[Math.floor(Math.random() * brands.length)];
    name = `${brand} Smartphone - 128GB`;
    slug = `${brand.toLowerCase()}-smartphone-128gb`;
    price = Math.floor(Math.random() * 300000) + 200000;
    image = "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format&fit=crop";
    shortDescription = `Affordable ${brand} smartphone with great camera and performance.`;
    description = `This ${brand} smartphone offers excellent performance with a powerful processor, vibrant display, and all-day battery life. The camera system delivers stunning photos in any lighting condition.`;
  } else if (category === 'laptops') {
    const brands = ['HP', 'Lenovo', 'Acer', 'MSI'];
    const brand = brands[Math.floor(Math.random() * brands.length)];
    name = `${brand} Laptop - Core i7`;
    slug = `${brand.toLowerCase()}-laptop-core-i7`;
    price = Math.floor(Math.random() * 500000) + 500000;
    image = "https://images.unsplash.com/photo-1542393545-10f5cde2c810?w=500&auto=format&fit=crop";
    shortDescription = `Powerful ${brand} laptop for productivity and entertainment.`;
    description = `This ${brand} laptop is equipped with an Intel Core i7 processor, ample storage, and a high-resolution display. Perfect for professionals, students, and anyone who needs reliable computing on the go.`;
  } else if (category === 'accessories') {
    const types = ['Bluetooth Speaker', 'Wireless Mouse', 'External SSD', 'Power Bank', 'Keyboard'];
    const type = types[Math.floor(Math.random() * types.length)];
    name = `Premium ${type}`;
    slug = `premium-${type.toLowerCase().replace(' ', '-')}`;
    price = Math.floor(Math.random() * 50000) + 10000;
    image = "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500&auto=format&fit=crop";
    shortDescription = `High-quality ${type.toLowerCase()} for the best experience.`;
    description = `This premium ${type.toLowerCase()} is designed for optimal performance and durability. It features the latest technology to enhance your digital experience.`;
  } else {
    const brands = ['Samsung', 'Lenovo', 'Xiaomi', 'Huawei'];
    const brand = brands[Math.floor(Math.random() * brands.length)];
    name = `${brand} Tablet - 10.4-inch`;
    slug = `${brand.toLowerCase()}-tablet-10-4-inch`;
    price = Math.floor(Math.random() * 200000) + 150000;
    image = "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&auto=format&fit=crop";
    shortDescription = `${brand} tablet with vibrant display and long battery life.`;
    description = `This ${brand} tablet features a beautiful 10.4-inch display, powerful processor, and impressive battery life. Perfect for entertainment, productivity, and staying connected on the go.`;
  }
  
  products.push({
    id: i,
    name,
    slug,
    category,
    price,
    image,
    images: [
      image,
      "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1585790050230-5ab129974cb7?w=500&auto=format&fit=crop"
    ],
    shortDescription,
    description,
    tags: i % 3 === 0 ? ["New Arrival"] : i % 5 === 0 ? ["Best Seller"] : ["1-Year Warranty"],
    new: i % 3 === 0,
    bestSeller: i % 5 === 0
  });
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.featured).slice(0, 8);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category);
}

export function getNewArrivals(): Product[] {
  return products.filter(product => product.new).slice(0, 4);
}

export function getBestSellers(): Product[] {
  return products.filter(product => product.bestSeller).slice(0, 4);
}

export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) || 
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.category.toLowerCase().includes(lowercaseQuery)
  );
}
