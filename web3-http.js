import Web3 from "web3";
import InputDataDecoder from "ethereum-input-data-decoder";
import AWSHttpProvider from "./aws-http-provider.js";
const endpoint = process.env.AMB_HTTP_ENDPOINT;
const web3 = new Web3(new AWSHttpProvider(endpoint));

const decoder = new InputDataDecoder(`contract_abi.json`);

web3.eth
  .getTransaction(
    "0xd82a86f8324fba7e0d374b461d6faf0c39a0d53fde06505d6c2cb8447609c617"
  )
  .then((result) => {
    console.log(decoder.decodeData(result.input));
  });
