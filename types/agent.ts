/**
 * Shared Agent Types
 * Used by both sen-app (client) and sen-agent (server)
 */

// Agent Card Protocol (X.402)
export interface AgentCard {
  protocol: string;
  protocolVersion: string;
  name: string;
  description?: string;
  agent: {
    id: string;
    name: string;
    description: string;
    endpoint: string;
  };
  capabilities: {
    streaming?: boolean;
    payments?: boolean;
    negotiation?: boolean;
    extensions?: Array<{
      type: string;
      [key: string]: unknown;
    }>;
  };
  transport: {
    protocol: 'http' | 'websocket';
    version: string;
  };
  extensions?: Record<string, unknown>;
}

// Vendor Deal (Simple)
export interface VendorDeal {
  id: string;
  vendorId: string;
  vendorName: string;
  item: string;
  price: number;
  currency: string;
  availability: 'available' | 'limited' | 'out_of_stock';
  location?: {
    lat: number;
    lng: number;
    address?: string;
  };
  validUntil?: Date;
  metadata?: Record<string, unknown>;
}

// Vendor Deal Posting (Full structured deal from Bazaar)
export interface VendorDealPosting {
  dealId: string;
  vendorId: string;
  vendorName: string;
  timestamp: number;
  expiresAt?: number;
  service: {
    type: 'product' | 'service';
    category: string;
    description: string;
  };
  pricing: {
    basePrice: number;
    discountedPrice?: number;
    discountPercent?: number;
    currency: string;
  };
  requirements: {
    proximityRequired: boolean;
    proximityRadius?: number;
    location?: {
      lat: number;
      lng: number;
    };
  };
  availability: {
    inStock: boolean;
    currentRedemptions: number;
    maxRedemptions?: number;
  };
  paymentOptions: {
    acceptsPER: boolean;
    acceptsExternal: boolean;
  };
  negotiable: boolean;
}

// Checkout types
export type CheckoutStage =
  | 'discovery'
  | 'capability-check'
  | 'negotiation'
  | 'checkout-signing'
  | 'payment-initiation'
  | 'settlement'
  | 'confirmation'
  | 'failed';

export interface HybridCheckoutSession {
  sessionId: string;
  userId: string;
  dealId: string;
  vendorId: string;
  stage: CheckoutStage;
  completedStages: CheckoutStage[];
  createdAt: number;
  updatedAt: number;
  expiresAt: number;
}

// Payment Status
export type PaymentStatus =
  | 'pending'
  | 'processing'
  | 'completed'
  | 'failed'
  | 'cancelled';

export interface PaymentResult {
  status: PaymentStatus;
  transactionId?: string;
  signature?: string;
  error?: string;
}
