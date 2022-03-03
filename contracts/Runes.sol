// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Runes {
    uint256 totalRunes;

    constructor() {
        console.log("The Ring corrupts all.");
    }

    function rune() public {
        totalRunes += 1;
        console.log("%d runes stolen.",totalRunes);
    }

    function getTotalRunes() public view returns (uint256) {
        return totalRunes;
    }
}