export default function ServiceCategory({ personRefernceText , serviceCategoryList , rating ,updatingRating , billAmount}) { 
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <h3> How did {personRefernceText } like the service ? </h3>
            <select
                value={rating}
                onChange={(e) => updatingRating(e.target.value)}
                disabled={ billAmount <= 0}
            >
                {
                    serviceCategoryList.map((category) => (
                        <option
                        key={category.id}
                        value={category.value}
                        >
                            {category.label}
                        </option>
                    ))
                }
             
           </select>
        </div>
    )
}