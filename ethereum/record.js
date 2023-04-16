import web3 from './web3';
import Record from './build/Record.json';

const instance = new web3.eth.Contract(
    JSON.parse(Record.interface),
    '0x5eaA55BBD3264CE895CcD7c27e1F01841Ab7bcF5' 
);

export default instance;

//0x5eaA55BBD3264CE895CcD7c27e1F01841Ab7bcF5
// 0x14c4753Aff01694dED83a9b803a8542f419d7265