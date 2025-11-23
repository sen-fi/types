/**
 * Shared Vault Types
 * Used by both sen-app (client) and sen-agent (server)
 */

// Asset Configuration (stored in Redis/config)
export interface AssetConfig {
  symbol: string;           // e.g., "SOL", "USDC", "NVDA"
  name: string;             // e.g., "Solana", "USD Coin", "NVIDIA Stock"
  mint: string;             // Solana mint address
  decimals: number;         // Token decimals
  category: 'stablecoin' | 'crypto' | 'stock' | 'commodity' | 'other';
  enabled: boolean;         // Can be allocated to
  minAllocation?: number;   // Optional: minimum % (e.g., stables always >= 10%)
  maxAllocation?: number;   // Optional: maximum % (e.g., single stock <= 20%)
  icon?: string;            // Optional: URL or emoji
}

// Individual asset allocation
export interface AssetAllocation {
  asset: string;            // Symbol (must match AssetConfig.symbol)
  percentage: number;       // 0-100
}

// User's vault allocation preferences
export interface VaultAllocationData {
  allocations: AssetAllocation[]; // Array of asset allocations
  lastUpdated?: Date;
}

export interface VaultAllocation {
  userId: string;
  walletAddress: string;
  allocations: AssetAllocation[]; // Dynamic array instead of hardcoded fields
  presetName?: string;
  presetReferralCode?: string;
  createdAt?: number;
  updatedAt?: number;
  lastRebalanced?: Date;
}

// Allocation Event (for batch processing)
export interface AllocationEvent {
  eventId: string;          // Unique event ID
  userId: string;
  requestedAt: number;      // When user requested allocation
  scheduledFor?: number;    // When batch will execute (hourly/daily)
  status: 'pending' | 'batched' | 'executing' | 'completed' | 'failed';
  allocations: AssetAllocation[];
  amountUsd: number;        // Total USD to allocate
  batchId?: string;         // Which batch this belongs to
  executedAt?: number;
  signature?: string;       // On-chain transaction signature
  error?: string;
}

// VaultAsset type for backward compatibility (deprecated - use AssetConfig)
export type VaultAsset = string;

export interface VaultBalance {
  asset: string;            // Asset symbol (dynamic)
  balance: number;
  usdValue?: number;
  isDelegated: boolean;
}

export type AllocationPreset =
  | 'conservative'
  | 'balanced'
  | 'growth'
  | 'custom';

// API Response Types (Agent ↔ Mobile)

export interface VaultBalanceWithPrice {
  asset: string;            // Asset symbol (dynamic)
  balance: number;
  decimals: number;
  usdValue: number;
  usdPrice: number;
}

export interface VaultResult {
  balances: VaultBalanceWithPrice[];
  totalUSDValue: number;
  lastUpdated: string;
}

export interface VaultResponse {
  success: boolean;
  result?: VaultResult;
  error?: string;
}
