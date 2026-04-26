import { erc20Abi, zeroAddress, type Address } from 'viem';
import { useReadContracts } from 'wagmi';
import { sepolia } from 'wagmi/chains';

export interface Erc20Summary {
  name: string;
  symbol: string;
  decimals: number;
  balance: bigint;
}

interface UseErc20SummaryResult {
  data: Erc20Summary | undefined;
  isLoading: boolean;
  isError: boolean;
}

export function useErc20Summary(
  token: Address,
  holder: Address | undefined,
): UseErc20SummaryResult {
  const { data, isLoading, isError } = useReadContracts({
    allowFailure: false,
    contracts: [
      { address: token, abi: erc20Abi, functionName: 'name', chainId: sepolia.id },
      { address: token, abi: erc20Abi, functionName: 'symbol', chainId: sepolia.id },
      { address: token, abi: erc20Abi, functionName: 'decimals', chainId: sepolia.id },
      {
        address: token,
        abi: erc20Abi,
        functionName: 'balanceOf',
        args: [holder ?? zeroAddress],
        chainId: sepolia.id,
      },
    ],
    query: { enabled: Boolean(holder) },
  });

  if (!data) return { data: undefined, isLoading, isError };
  const [name, symbol, decimals, balance] = data;
  return {
    data: { name, symbol, decimals, balance },
    isLoading,
    isError,
  };
}
