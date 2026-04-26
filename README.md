# Entrega 1 - Panel con Conexión de Wallet

**Taller de Tecnologías 2**

Aplicación React + TypeScript que conecta una wallet Ethereum y lee datos on-chain en vivo desde la testnet **Sepolia**:

- ENS (si existe) o dirección abreviada
- Saldo ETH nativo formateado a 4 decimales
- Número de bloque en tiempo real
- Nombre, símbolo y balance de 2 tokens ERC-20

---

## Integrantes

| Nombre            | Número de estudiante |
|-------------------|--------------------|
| Nahuel Fernandez  | 306611 |
| Agustina Minelli  | 306269 |
| Federico Wollheim | 270128 |

---

## Qué hace la aplicación

La app tiene una sola página con dos estados posibles:

**Sin wallet conectada** — se muestra únicamente un botón de conexión. No hay ningún otro contenido visible.

**Con wallet conectada** — se renderizan dos secciones:

### 1. Panel de Cuenta
- **Identidad**: muestra el nombre ENS si la dirección lo tiene registrado (resuelto contra mainnet); si no, muestra la dirección abreviada (`0x1234…abcd`).
- **Saldo ETH**: balance nativo de la cuenta en Sepolia, formateado a 4 decimales.
- **Bloque actual**: número de bloque en tiempo real, se actualiza automáticamente cada ~12 segundos vía `useBlockNumber({ watch: true })`.

### 2. Saldos de Tokens ERC-20
Para cada uno de los dos tokens configurados se lee desde la blockchain:
- `name()` y `symbol()` — nombre y símbolo del contrato.
- `decimals()` — para formatear el balance correctamente.
- `balanceOf(address)` — saldo de la wallet conectada.

Todo en un único round-trip usando `useReadContracts` (multicall implícito de viem).

---

## Tokens utilizados (Sepolia)

| Token | Dirección del contrato |
|-------|------------------------|
| LINK (Sepolia) | `0x779877A7B0D9E8603169DdbD7836e478b4624789` |
| USDC (Sepolia, Circle) | `0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238` |

---

## Requisitos previos

- Node.js 20 o superior
- npm 10 o superior
- MetaMask (u otra wallet compatible con WalletConnect) configurada en la red **Sepolia**
- Un Project ID de WalletConnect Cloud (gratis en https://cloud.walletconnect.com)

---

## Cómo correr el proyecto localmente

### 1. Clonar e instalar

```bash
git clone <URL_DEL_REPO>
cd Entrega-1-Panel-con-Conexion-de-Wallet-Fernandez-Minelli-Wollheim
npm install
```

> **Windows (PowerShell):** si `npm` está bloqueado por execution policy, usá `npm.cmd install`.

### 2. Configurar variable de entorno

Crear un archivo `.env.local` en la raíz del proyecto:

```env
VITE_WALLETCONNECT_PROJECT_ID=tu_project_id_de_walletconnect
```

O copiarlo desde el ejemplo:

```bash
cp .env.example .env.local
```

El Project ID se obtiene gratis en https://cloud.walletconnect.com.

### 3. Iniciar el servidor de desarrollo

```bash
npm run dev
```

> **Windows (PowerShell):** `npm.cmd run dev`

Luego abrir en el navegador: http://127.0.0.1:5173 (o la URL que muestre Vite en la terminal).

---

## Flujo para probar la wallet

1. Abrir la app en el navegador.
2. Hacer clic en **Connect Wallet**.
3. Seleccionar el proveedor (MetaMask u otro).
4. Aceptar la conexión desde la wallet.
5. Verificar que aparezcan:
	- ENS o dirección abreviada
	- Saldo ETH en Sepolia
	- Número de bloque actualizándose en vivo
	- Datos de los tokens ERC-20 (nombre, símbolo y balance)

> **Saldos en cero:** si la wallet no tiene fondos en Sepolia, los balances mostrarán `0.0000` — la lectura igual ocurre en vivo desde la blockchain, por lo que el criterio de evaluación se cumple igual.

---

## Scripts disponibles

```bash
npm run dev       # servidor de desarrollo con hot-reload
npm run build     # build de producción
npm run preview   # previsualizar el build de producción
npm run lint      # linter ESLint
```

### Verificación requerida por la rúbrica

```bash
npx tsc --noEmit  # debe ejecutarse sin errores de TypeScript
npm run build     # build de producción sin errores
```

---

## Faucets para obtener saldo en Sepolia

Si necesitás ETH o tokens en Sepolia para probar la app:

- **ETH Sepolia**: https://www.alchemy.com/faucets/ethereum-sepolia
- **ETH Sepolia** (alternativo): https://sepolia-faucet.pk910.de
- **LINK Sepolia**: https://faucets.chain.link/sepolia

---

## Troubleshooting

| Problema | Solución |
|----------|----------|
| `VITE_WALLETCONNECT_PROJECT_ID` no está definido | Verificar que exista `.env.local` con la variable correcta. |
| La wallet no conecta | Confirmar que la wallet esté en red **Sepolia** y que hayas aprobado la conexión. |
| No se ven balances | Confirmar que la cuenta tenga ETH o tokens en Sepolia (ver faucets arriba). |
| Error de TypeScript al buildear | Correr `npx tsc --noEmit` para ver los errores con detalle. |

---