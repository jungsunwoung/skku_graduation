pragma solidity ^0.5.11;

import "./ownable.sol";
import "./SafeMath.sol";

contract Election is Ownable {
    
    uint nowtotalvote = 0;

    mapping (uint => uint) candidate; 
    mapping (address => uint) vote_right;

    function candidate_received(uint candidatenum) view external onlyOwner returns(uint) {  // 각 투표자 투표받은거
        return candidate[candidatenum];
    }

    function showtotalvote() view public returns (uint){ 
        return nowtotalvote;
    }

    function vote(uint candidatenum) public {
        require(vote_right[msg.sender] == 0);
        vote_right[msg.sender]=1;
        candidate[candidatenum] += 1;
        nowtotalvote++;
    }
    
}

