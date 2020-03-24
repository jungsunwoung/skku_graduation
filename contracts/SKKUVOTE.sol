pragma solidity ^0.5.11;

import "./ownable.sol";
import "./SafeMath.sol";

contract Election is Ownable {

    uint nowTotalVote = 0;

    mapping (uint => uint) candidate;
    mapping (address => uint) voteRight;

    function candidateReceived(uint candidateNum) view external onlyOwner returns(uint) {  // 각 투표자 투표받은거
        return candidate[candidateNum];
    }

    function showTotalVote() view public returns (uint){
        return nowTotalVote;
    }

    function vote(uint candidateNum) public {
        require(voteRight[msg.sender] == 0);
        voteRight[msg.sender]=1;
        candidate[candidateNum] += 1;
        nowTotalVote++;
    }

}
