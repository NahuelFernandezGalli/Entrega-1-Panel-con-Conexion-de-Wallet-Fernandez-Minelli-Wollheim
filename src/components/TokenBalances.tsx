import { useAccount } from 'wagmi';
import { SEPOLIA_TOKENS } from '../config/tokens';
import { TokenCard } from './TokenCard';

export function TokenBalances() {
  const { address } = useAccount();
  if (!address) return null;

  return (
    <section className="panel">
      <h2>Saldos ERC-20 (Sepolia)</h2>
      <div className="token-grid">
        {SEPOLIA_TOKENS.map((t) => (
          <TokenCard key={t.address} token={t.address} holder={address} label={t.label} />
        ))}
      </div>
    </section>
  );
}
