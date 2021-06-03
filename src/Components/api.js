
export async function loadList(arr){
    try{
        const response = await fetch(
            `http://localhost:3001/api/recipe?search=${arr}`
        );
        const body = await response.json();
        return body;
    } catch(err){
        alert('server err');
    }
}


export async function loadRecipe(id){
    try{
        const response = await fetch(
            `http://localhost:3001/api/recipe/${id}`
        );
        const body = await response.json();
        return body;
    } catch(err){
        alert('server err');
    }
}
