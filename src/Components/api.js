
export async function loadList(arr) {
    try {
        const response = await fetch(
            `https://healtheatapp.herokuapp.com/api/recipe?search=${arr}`
        );
        const body = await response.json();
        return body;
    } catch (err) {
        alert('server err');
    }
}
export async function loadSavedList(id) {
    try {
        const response = await fetch(
            `https://healtheatapp.herokuapp.com/api/post/savedList/${id}`
        );
        const body = await response.json();
        return body;
    } catch (err) {
        alert('server err');
    }
}


export async function loadRecipe(id) {
    try {
        const response = await fetch(
            `https://healtheatapp.herokuapp.com/api/recipe/${id}`
        );
        const body = await response.json();
        return body;
    } catch (err) {
        alert('server err');
    }
}

export async function createSavedList(breakfastId, lounchId, dinnerId) {
    const info = {
        breakfastId, lounchId, dinnerId
    }
    const response = await fetch('https://healtheatapp.herokuapp.com/api/post/savedList', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(info)
    });
    const body = await response.json();
    return body;
}

