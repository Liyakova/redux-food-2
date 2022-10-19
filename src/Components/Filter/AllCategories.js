import Filter from "./Filter";

const AllCategories = () => {
    return(
        <div>
            <h1 className="headline">What kind of food do you prefer?</h1>
            {['SEAFOOD', 'ITALIAN', 'APPETIZERS', 'SALADS', 'ALL'].map(
                (category, index) => (<div key={index}>
                <Filter category={category}/>
            </div>)
            )}
            
        </div>
    )
}

export default AllCategories;