const UNISWAP_ROUTER_ADDRESS = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"; // capitalization matters
const ACCOUNT_ADDRESS = "0xFc66f9b4104317165f800BDa7BB31E2577970158";

const UNISWAP_CONTRACT_ABI = new InputDataDecoder(`contract_abi.json`);

const WEI = 10 ** 18;

module.exports = {
  UNISWAP_ROUTER_ADDRESS,
  ACCOUNT_ADDRESS,
  UNISWAP_CONTRACT_ABI,
  WEI,
};
