
export default function Total({ totalAmount, billAmount, averageTipAmount }) {    
    return (<div>
        <h1>You Pay ${totalAmount} ( ${billAmount }  + ${ averageTipAmount } tip ) </h1>
    </div>)
}