# Sen Shared

Shared types, interfaces, and constants for Sen packages.

## Purpose

This package contains:
- **Type definitions** - Shared interfaces between client and server
- **Constants** - Shared enums and constant values
- **NO implementation code** - Only contracts/interfaces

## Rules

✅ **Allowed:**
- TypeScript interfaces and types
- Enums
- Constant values
- Type guards (pure functions)

❌ **NOT Allowed:**
- Business logic
- API calls
- Database operations
- React components
- Node.js-specific code

## Usage

### In sen-app (React Native)
```typescript
import type { VaultAllocation, UserProfile } from '@sen/shared';
```

### In sen-agent (Node.js)
```typescript
import type { VaultAllocation, UserProfile } from '@sen/shared';
```

## Architecture

```
sen-app/          sen-agent/
   ↓                 ↓
   └─────────────────┘
          ↓
      sen-shared/
    (types only)
```

Both packages depend on `sen-shared`, but they **never** import from each other.
- sen-app → calls sen-agent via HTTP
- sen-agent → exposes HTTP API
- Both → import types from sen-shared
