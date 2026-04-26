import { AccountPanel } from './components/AccountPanel';
import { ConnectGate } from './components/ConnectGate';
import { TokenBalances } from './components/TokenBalances';

export default function App() {
  return (
    <main className="app">
      <header className="app-header">
        <h1>Taller de Tecnologías 2 - Panel Sepolia</h1>
        <p className="subtitle">Realizado por: Nahuel Fernandez, Agustina Minelli y Federico Wollheim</p>
      </header>
      <ConnectGate>
        <AccountPanel />
        <TokenBalances />
      </ConnectGate>
    </main>
  );
}