/**
 * Shared User Types
 * Used by both sen-app (client) and sen-agent (server)
 */

export interface UserProfile {
  userId: string;
  displayName?: string;
  username?: string;
  bio?: string;
  avatarUrl?: string;
  senScore?: number;
  incomeBand?: string;
  countryCode?: string;
}

export interface UserPreferences {
  language: 'en' | 'vi';
  currency: 'USD' | 'VND';
  notifications: {
    push: boolean;
    email: boolean;
    transactionAlerts: boolean;
  };
}

export interface UserTransaction {
  id: string;
  userId: string;
  type: 'send' | 'receive' | 'deposit' | 'withdraw';
  amount: number;
  amountUsdc: number;
  asset: string;
  counterparty?: string;
  signature?: string;
  status: 'pending' | 'confirmed' | 'failed';
  timestamp: Date;
}
