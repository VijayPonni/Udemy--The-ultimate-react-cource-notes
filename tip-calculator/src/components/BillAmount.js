export default function BillAmount({ bill, onBillUpdate }) { 
    
    function handleKeyPress(e) { 
        const regex = /^[0-9]*$/;
        if (!regex.test(e.key)) {
        e.preventDefault();
        }
    }

    return (<div style={{ display: 'flex' , flexDirection: 'row' , alignItems:'center'}}>
        <h3>How much was the bill ? </h3> 
        < input
            type="string"
            value={bill}
            onChange={(e) => onBillUpdate(Number(e.target.value))}
            onKeyPress={ (e)=> handleKeyPress(e) }
        />
    </div>)
}