import { formatUnits, type Address } from 'viem';

export function formatAddress(address: Address): string {
  return `${address.slice(0, 6)}…${address.slice(-4)}`;
}

export function formatBalance(value: bigint, decimals: number): string {
  const raw = formatUnits(value, decimals);
  const n = Number(raw);
  if (!Number.isFinite(n)) return raw;
  return n.toFixed(4);
}
