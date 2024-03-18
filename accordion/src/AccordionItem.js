
export default function AccordionItem({ num, title, selection , onSelect , children}) { 
    const isOpen = num === selection;

    function handleSelect() { 
        onSelect( (currSelect )=> isOpen ? null : num )
    }

    return <div className={`item ${isOpen && 'open'}` }  onClick={handleSelect}>
        <p className="number">{ num < 10 ? `0${num+1}` : num+1 }</p>
        <p className="title">{ title}</p>
        <p className="icon">{ isOpen ? '-' : '+' }</p>
        {
           isOpen &&
            <div className="content-box">
            { children}
        </div>
        }
    </div>
}