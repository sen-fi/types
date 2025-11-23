/**
 * Shared Vault Types
 * Used by both sen-app (client) and sen-agent (server)
 */

export type VaultAsset =
  | 'USDC'
  | 'USDC+'
  | 'SOL'
  | 'WETH'
  | 'ZBTC'
  | 'GLDX'
  | 'NVDA';

export interface VaultAllocationData {
  usdc?: number;
  usdcPlus?: number;
  sol?: number;
  weth?: number;
  zbtc?: number;
  gldx?: number;
  nvda?: number;
  lastUpdated?: Date;
}

export interface VaultAllocation {
  userId: string;
  walletAddress: string;
  allocations: VaultAllocationData;
  presetName?: string;
  presetReferralCode?: string;
  createdAt?: number;
  updatedAt?: number;
  // Flattened fields for backward compatibility
  usdc?: number;
  usdcPlus?: number;
  sol?: number;
  weth?: number;
  zbtc?: number;
  gldx?: number;
  nvda?: number;
  lastUpdated?: Date;
  lastRebalanced?: Date;
}

export interface VaultBalance {
  asset: VaultAsset;
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
  asset: VaultAsset;
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
