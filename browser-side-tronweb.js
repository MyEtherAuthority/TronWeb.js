<script src="https://cdn.jsdelivr.net/npm/tronweb@2.10.1/dist/TronWeb.js"></script>



<script>

const CONTRACT_ADDRESS = "TGpP9GPsjyq2yo4WrwSJvqYwqZLKRnSzE8";

const FROM_ADDRESS = "TWfCxyMZbUKDGNtPtwLfvCaoNefVXdhZvg";
const FROM_PRIVATE_KEY = "";

const tronWeb = new TronWeb({
    //fullHost: "https://api.shasta.trongrid.io",
    fullHost: "https://api.trongrid.io",
    //fullHost: "https://super.guildchat.io",
    //fullHost: "https://api.shasta.tronscan.org",
    privateKey: FROM_PRIVATE_KEY
});
	


test();
async function test(){

var contractInfo = await tronWeb.trx.getContract(CONTRACT_ADDRESS);
var contractInstance = await tronWeb.contract(contractInfo.abi.entrys, contractInfo.contract_address);

//call view a function
var name = await contractInstance.name().call();
console.log(name);

//call a send function
var result = await contractInstance.transfer("TZ2qxTbT4LEw2kw9x8ZH5u4yyG7usVWCq6", 1000).send({
            shouldPollResponse: false,                
            feeLimit: 5000000,
            callValue: 0,
            from: FROM_ADDRESS
        });

console.log(result)

}

</script>
