import { AccountPanel } from './components/AccountPanel';
import { ConnectGate } from './components/ConnectGate';
import { TokenBalances } from './components/TokenBalances';

export default function App() {
  return (
    <main className="app">
      <header className="app-header">
        <h1>Entrega 1 - Panel Sepolia</h1>
        <p className="subtitle">Taller 2 Blockchain - ORT</p>
      </header>
      <ConnectGate>
        <AccountPanel />
        <TokenBalances />
      </ConnectGate>
    </main>
  );
}
