import Web3 from "web3";
import AWSHttpProvider from "./aws-http-provider.js";
const endpoint =
  "https://nd-7czpujmx4jc65omg244xthw3sa.ethereum.managedblockchain.us-east-1.amazonaws.com";
const web3 = new Web3(new AWSHttpProvider(endpoint));

web3.eth
  .getTransaction(
    "0x6ea40bdf299092b527c107a479c3062df43af83d81ba372e0740372d3251deab"
  )
  .then(console.log);
