import { useAccount, useBalance, useBlockNumber, useEnsName } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
import { formatEther } from 'viem';
import { formatAddress } from '../lib/format';

export function AccountPanel() {
  const { address } = useAccount();
  const { data: ensName } = useEnsName({ address, chainId: mainnet.id });
  const { data: balance } = useBalance({ address, chainId: sepolia.id });
  const { data: blockNumber } = useBlockNumber({ chainId: sepolia.id, watch: true });

  if (!address) return null;

  const identity = ensName ?? formatAddress(address);
  const eth = balance ? Number(formatEther(balance.value)).toFixed(4) : '…';
  const block = blockNumber !== undefined ? blockNumber.toString() : '…';

  return (
    <section className="panel">
      <h2>Cuenta</h2>
      <dl>
        <dt>Identidad (ENS o EOA)</dt>
        <dd title={address}>{identity}</dd>
        <dt>Saldo ETH (Sepolia)</dt>
        <dd>{eth} ETH</dd>
        <dt>Bloque actual (Sepolia)</dt>
        <dd>#{block}</dd>
      </dl>
    </section>
  );
}
