# Entrega 1 - Panel con Conexion de Wallet (Sepolia)
## Nahuel Fernandez, Agustina Minelli, Federico Wollheim

Aplicacion React + TypeScript que conecta una wallet Ethereum y lee datos on-chain en Sepolia:

- ENS (si existe) o direccion abreviada
- Saldo ETH nativo
- Numero de bloque en vivo
- Nombre, simbolo y balance de 2 tokens ERC-20

## Requisitos

- Node.js 20+ (recomendado)
- npm 10+
- Una wallet compatible con WalletConnect (por ejemplo, MetaMask)
- Wallet configurada en la red Sepolia

## 1. Clonar e instalar

```bash
git clone <URL_DEL_REPO>
cd Entrega-1-Panel-con-Conexion-de-Wallet-Fernandez-Minelli-Wollheim
npm install
```

Nota para PowerShell en Windows:

Si tenes bloqueado `npm` por execution policy, usa `npm.cmd`:

```powershell
npm.cmd install
```

## 2. Configurar variable de entorno

Crear un archivo `.env.local` en la raiz del proyecto con:

```env
VITE_WALLETCONNECT_PROJECT_ID=tu_project_id_de_walletconnect
```

Tambien podes copiar desde `.env.example` y reemplazar el valor.

Para obtener el Project ID:

- https://cloud.walletconnect.com

## 3. Ejecutar en local

```bash
npm run dev
```

En PowerShell (si aplica):

```powershell
npm.cmd run dev
```

Abrir en el navegador:

- http://127.0.0.1:5173/
- o la URL que muestre Vite en terminal

## 4. Flujo para probar la wallet

1. Abrir la app.
2. Click en Connect Wallet.
3. Seleccionar proveedor (MetaMask u otro).
4. Aceptar la conexion.
5. Verificar:
	 - ENS o direccion abreviada
	 - ETH en Sepolia
	 - Bloque actual en vivo
	 - Datos de ERC-20 (name, symbol, balance)

## Tokens usados en Sepolia

- LINK (Sepolia): `0x779877A7B0D9E8603169DdbD7836e478b4624789`
- USDC (Sepolia, Circle): `0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238`

## Faucets Sepolia

- Faucet Alchemy Sepolia: https://www.alchemy.com/faucets/ethereum-sepolia
- Faucet pk910 Sepolia: https://sepolia-faucet.pk910.de/

## Scripts utiles

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## Troubleshooting rapido

- Error `VITE_WALLETCONNECT_PROJECT_ID no esta definido`:
	revisar que exista `.env.local` con la variable correcta.
- No conecta la wallet:
	confirmar que la wallet este en Sepolia y que hayas aprobado la conexion.
- No ves balances:
	confirmar que la cuenta tenga ETH/tokens en Sepolia.