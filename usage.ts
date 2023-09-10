import {Web3} from 'web3'
import {Erc20} from './index'



const web3 = new Web3(`https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`)

web3.registerPlugin(new Erc20())

const contractAddress = '0xdAC17F958D2ee523a2206206994597C13D831ec7'
const ownerAddress = '0x81d2584ed89fedfda20ddba14868dd07b20861eb'

const test = async () => {
    const res = await web3.erc20.getTokenBalance(contractAddress, ownerAddress)
    console.log(res)
}

test().catch()

