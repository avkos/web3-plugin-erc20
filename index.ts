import { Web3PluginBase, Contract } from 'web3'
import {abi} from './artifacts'


export class Erc20 extends Web3PluginBase {
    public pluginNamespace = 'erc20';

    async getTokenBalance(contractAddress:string, ownerAddress:string){
        const contract = new Contract(abi, contractAddress);
        contract.link(this);
        return contract.methods.balanceOf(ownerAddress).call();
    }
}


declare module 'web3' {
    // Here is where you're adding your plugin inside Web3Context
    interface Web3Context {
        erc20: Erc20;
    }
}