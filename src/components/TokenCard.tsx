import type { Address } from 'viem';
import { useErc20Summary } from '../hooks/useErc20Summary';
import { formatBalance } from '../lib/format';

interface TokenCardProps {
  token: Address;
  holder: Address;
  label: string;
}

export function TokenCard({ token, holder, label }: TokenCardProps) {
  const { data, isLoading, isError } = useErc20Summary(token, holder);

  return (
    <article className="token-card">
      <header>
        <h3>{label}</h3>
        <code title={token}>{token.slice(0, 10)}…</code>
      </header>
      {isLoading && <p>Cargando datos del contrato…</p>}
      {isError && <p className="error">Error leyendo el contrato ERC-20.</p>}
      {data && (
        <dl>
          <dt>name()</dt>
          <dd>{data.name}</dd>
          <dt>symbol()</dt>
          <dd>{data.symbol}</dd>
          <dt>balanceOf(tu EOA)</dt>
          <dd>
            {formatBalance(data.balance, data.decimals)} {data.symbol}
          </dd>
        </dl>
      )}
    </article>
  );
}
