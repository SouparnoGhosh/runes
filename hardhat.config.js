//https://eth-ropsten.alchemyapi.io/v2/VNv48UtU7yjkflvY4AFFzLFFEDjKQeAd

require("@nomiclabs/hardhat-waffle");

// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

module.exports = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/VNv48UtU7yjkflvY4AFFzLFFEDjKQeAd",
      accounts: [
        "0a33b3182233bad340f4698b892ea0f30d0ee4ecb99758e691a637a147428f10",
      ],
    },
  },
};
