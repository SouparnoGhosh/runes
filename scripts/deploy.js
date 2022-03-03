const hre = require("hardhat");

const main = async () => {
  const [owner, ...randomPeople] = await hre.ethers.getSigners();
  const accountBalance = await owner.getBalance();

  const RuneContractFactory = await hre.ethers.getContractFactory("Runes");
  const runeContract = await RuneContractFactory.deploy();

  await runeContract.deployed();

  console.log(`Owner Address: ${owner.address}`);
  console.log(`Account Balance of Owner: ${accountBalance}`);
  console.log(`Contract deployed to: ${runeContract.address}`);

  let runeCount = await runeContract.getTotalRunes();
  console.log(`Rune Count: ${runeCount}`);

  let runeTxn = await runeContract.rune();
  await runeTxn.wait();

  runeCount = await runeContract.getTotalRunes();
  console.log(`Rune Count: ${runeCount}`);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
