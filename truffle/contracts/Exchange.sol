pragma solidity >= 0.4.22 < 0.6.0;
contract Exchange {

    address payable bank;
    address payable[] users;
    uint numberOfUsers;

    constructor() payable public {
        bank = msg.sender;
        numberOfUsers = 0;
    }

    function registerUser(address payable user) public payable {
        if (address(msg.sender) != bank) return;
        users.push(user);
        numberOfUsers++;
    }
    
    function verifyUser(address user) public view returns (bool b){
        for (uint i=0; i < numberOfUsers; i++)
            if (users[i] == user)
                return true;
        return false;
    }
    
    function getUsers(uint i) public view returns (address u){
        return users[i];
    }
    
    function withdrawETH(uint256 ethInWei) public payable returns (bool b) {
        if (!verifyUser(address(msg.sender)))
            return false;
        address(msg.sender).transfer(ethInWei);
        return true;
    }
    
    function dummy() public view returns (uint i)
    {
        return address(this).balance;
    }
    
    function depositETH() public payable returns (bool b) {
        if (!verifyUser(address(msg.sender)))
            return false;
        return true;
    }
    
    function withdrawETHBank(uint ethInWei) public payable returns (bool b){
        if (bank != address(msg.sender)) return false;
        bank.transfer(ethInWei);
        return true;
    }    
}