import type { Address } from 'viem';

export interface SepoliaToken {
  address: Address;
  label: string;
}

export const SEPOLIA_TOKENS: readonly SepoliaToken[] = [
  {
    address: '0x779877A7B0D9E8603169DdbD7836e478b4624789',
    label: 'LINK (Sepolia)',
  },
  {
    address: '0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238',
    label: 'USDC (Sepolia, Circle)',
  },
] as const;
