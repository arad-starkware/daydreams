// const { StarknetChain } = require("daydreams"); // or import using ES modules

// const stark = new StarknetChain({
//   rpcUrl: "https://starknet-sepolia.public.blastapi.io",
//   address: "your_starknet_address", // This should be your wallet (staker's) address
//   privateKey: "your_private_key", // This should be your wallet (staker's) private key
// });

// const { createDreams, input, output, searchWeb } = require("daydreams");

// // Create your agent
// const agent = createDreams({
//   model: "llama-70b", // for example, choose a model (adjust as needed)
//   memory: {}, // configure memory as needed
//   inputs: {
//     // Optionally, you can add an input source (e.g., a schedule or API trigger)
//     "timer:interval": input({
//       schema: { interval: "number" },
//       handler: async (data) => {
//         // When triggered, call the staking action.
//         await stakeSTRK();
//       },
//     }),
//   },
//   outputs: {
//     log: output({
//       schema: { message: "string" },
//       handler: (data) => console.log(data.message),
//     }),
//   },
//   // Register your custom action for staking
//   actions: {
//     async stakeSTRK() {
//       // 1. Approve the STRK token contract to spend tokens on your behalf.
//       // (Replace the below addresses and amounts with the actual values from Starknet staking docs)
//       const approveTx = await stark.sendTransaction({
//         to: "STRK_TOKEN_CONTRACT_ADDRESS",
//         data: {
//           function: "approve",
//           params: [
//             "STAKING_CONTRACT_ADDRESS", // Typically the staking contract or operator address
//             "AMOUNT_IN_WEI", // For example, "1000000000000000000" for 1 STRK
//           ],
//         },
//       });
//       console.log("Approval tx sent:", approveTx);

//       // Wait for approval confirmation (you may poll the transaction status here)

//       // 2. Stake the tokens by calling the staking contract.
//       const stakeTx = await stark.sendTransaction({
//         to: "STAKING_CONTRACT_ADDRESS", // Or the Operator contract if required
//         data: {
//           function: "stake",
//           params: [
//             "REWARD_ADDRESS", // Where rewards will be sent
//             "OPERATIONAL_ADDRESS", // Address that may later be used for validator duties
//             "AMOUNT_IN_WEI", // Amount to stake
//             1, // Enable pooling (if applicable)
//             100, // Commission rate (e.g., 100 for 1%)
//           ],
//         },
//       });
//       console.log("Staking tx sent:", stakeTx);
//     },
//   },
// });

// // You can start your agent or schedule the action to run periodically.
// agent.start();
