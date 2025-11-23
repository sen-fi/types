/**
 * P2P Transfer Types
 * Shared types for private peer-to-peer transfers via MagicBlock PER
 */

// API Request/Response Types (Agent ↔ Mobile)

export interface P2PSendRequest {
  recipientUserId: string;
  amountUsdc: number;
  memo?: string;
}

export interface P2PSendResult {
  success: boolean;
  signature?: string;
  isPER: boolean;
  error?: string;
}

export interface P2PSendResponse {
  success: boolean;
  result?: P2PSendResult;
  error?: string;
}

export interface TransferHistoryEntry {
  id: number;
  userId: string;
  type: 'sent' | 'received';
  counterpartyUserId: string;
  counterpartyWallet: string;
  amountUsdc: number;
  signature?: string;
  isPER: boolean;
  status: 'success' | 'failed';
  error?: string;
  memo?: string;
  createdAt: number;
}

export interface TransferHistoryResponse {
  success: boolean;
  result?: {
    transfers: TransferHistoryEntry[];
    total: number;
  };
  error?: string;
}
