# Arbitrage Bot: Sandwich Attack on Uniswap

## Concept: 

We want to implement the design described in this research paper: https://arxiv.org/abs/2009.14021

> “Decentralized exchanges (DEXs) allow parties to participate in financial markets while retaining full custody of their funds. However, the transparency of blockchain-based DEX in combination with the latency for transactions to be processed, makes market-manipulation feasible. For instance, adversaries could perform front-running -- the practice of exploiting (typically non-public) information that may change the price of an asset for financial gain. ”


## Data Pipeline:

1. Data collection: we will setup geth nodes (a client for Ethereum) that collect pending transactions from the Ethereum network. If we want to maximize our chances, we have to be the first one to spot the victim’s transaction.
2. Data processing: A script will iterate through all the pending transactions and look for those that interact with the [Uniswap contract](https://etherscan.io/address/0x7a250d5630b4cf539739df2c5dacb4c659f2488d). It will parse the transaction data and use the information there (target token, amount transferred, transaction fee, max slippage, etc.) to analyze if it’s profitable to initiate the attack. 
3. The attack: Send two txns that sandwich the victim's txn

## Setup:

Currently, we have a full ethereum node hosted under [Amazon Managed Blockchain](https://console.aws.amazon.com/managedblockchain/home?region=us-east-1#firstRun) (AMB). Those .js scripts use Ethereum JSON-RPC API to interact with that node. We will update this README as we go (eg. add more nodes). 

You can either run your own node on AMB and use the scripts here to connect to it (the club can reimburse the cost, with a receipt of course), or you can connect to Cornell Blockchain's node. In that case, you have to dm me for access key and other credentials. 

1. You must have node version manager (nvm) and Node.js installed on your machine. Type `node --version` and verify that you are using Node version 14 or later. If necessary, you can use the `nvm install 14` command followed by the `nvm use 14` command to install version 14.
2. `npm install aws-sdk web3 xhr2`
3. Setup environment variables `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AMB_HTTP_ENDPOINT`, and `AMB_WS_ENDPOINT` by typing `export AWS_ACCESS_KEY_ID="your_stuff"`
4. Run `node web3-http.js`. This script prints out data from [this txn](https://etherscan.io/tx/0xd82a86f8324fba7e0d374b461d6faf0c39a0d53fde06505d6c2cb8447609c617)
5. Run `node web3-websocket.js`. This scripts listens for pending txn and prints out those that interact with the Uniswap contract
