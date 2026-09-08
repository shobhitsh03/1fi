import { PRODUCTS, MOCK_USER_PORTFOLIO } from '../data/products';

// Simulated API Latency (ms)
const SIMULATED_LATENCY = 350;

/**
 * 1Fi Marketplace API Service
 * Simulates backend REST/GraphQL endpoints for products, EMI plans, and user collateral portfolio.
 */
export const marketplaceApi = {
  /**
   * Fetch marketplace products dynamically with filter, search, and sorting options
   */
  async getProducts({ category = "All", searchQuery = "", sortBy = "recommended", onlyZeroPercent = false } = {}) {
    await new Promise((resolve) => setTimeout(resolve, SIMULATED_LATENCY));

    let filtered = [...PRODUCTS];

    if (category && category !== "All") {
      filtered = filtered.filter((p) => p.category === category);
    }

    if (searchQuery && searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(
        (p) => p.title.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
      );
    }

    if (onlyZeroPercent) {
      filtered = filtered.filter((p) => p.emiPlans.some((plan) => plan.interestRate === 0));
    }

    // Sorting
    filtered.sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0; // Default recommended
    });

    return {
      success: true,
      data: filtered,
      totalCount: filtered.length
    };
  },

  /**
   * Fetch single product details by ID
   */
  async getProductById(productId) {
    await new Promise((resolve) => setTimeout(resolve, SIMULATED_LATENCY / 2));
    const product = PRODUCTS.find((p) => p.id === productId);
    if (!product) {
      throw new Error(`Product with ID ${productId} not found.`);
    }
    return {
      success: true,
      data: product
    };
  },

  /**
   * Fetch User Mutual Fund Portfolio & Available Credit Line
   */
  async getUserPortfolio() {
    await new Promise((resolve) => setTimeout(resolve, SIMULATED_LATENCY));
    return {
      success: true,
      data: { ...MOCK_USER_PORTFOLIO }
    };
  },

  /**
   * Calculate EMI Schedule & Collateral Check dynamically via API
   */
  async calculateEMIOption({ price, tenureMonths, interestRate = 0, processingFee = 0, cashback = 0 }) {
    await new Promise((resolve) => setTimeout(resolve, 100));

    let monthlyInstallment = 0;
    if (interestRate === 0) {
      monthlyInstallment = Math.round(price / tenureMonths);
    } else {
      const monthlyRate = (interestRate / 12) / 100;
      const emi = (price * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) / (Math.pow(1 + monthlyRate, tenureMonths) - 1);
      monthlyInstallment = Math.round(emi);
    }

    const totalPayable = (monthlyInstallment * tenureMonths) + processingFee - cashback;

    return {
      success: true,
      data: {
        price,
        tenureMonths,
        monthlyInstallment,
        interestRate,
        processingFee,
        cashback,
        totalPayable
      }
    };
  },

  /**
   * Submit Purchase Order & Register Mutual Fund Lien Authorization
   */
  async createEMIOrder({ productId, variant, selectedPlan, portfolioId }) {
    await new Promise((resolve) => setTimeout(resolve, 800));

    const orderId = `1FI-${Math.floor(100000 + Math.random() * 900000)}`;
    const deliveryDate = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    return {
      success: true,
      data: {
        orderId,
        status: "CONFIRMED",
        deliveryDate,
        createdAt: new Date().toISOString()
      }
    };
  }
};
