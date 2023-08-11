function saveOnSTorage(event){
    event.preventDefault();
    let amount = event.target.expense.value;
    let description = event.target.description.value;
    let category = event.target.Category.value;
    
    let obj = {
        amount : amount,
        description : description,
        category : category
    }

    localStorage.setItem(description,JSON.stringify(obj));
    showOnScreen(obj);
}

function showOnScreen(obj){
    let ul = document.getElementById("ourlist");
    let child = document.createElement('li');
    child.textContent = obj.amount + "--->" + obj.description + "--->" + obj.category;
    

    let deleteBtn = document.createElement('input');
    deleteBtn.type = "button";
    deleteBtn.value = 'Delete';

    let editBtn = document.createElement('input');
    editBtn.type = "button";
    editBtn.value = "Edit";

    deleteBtn.onclick = () => {
        localStorage.removeItem(obj.description);
        ul.removeChild(child);
    }

    editBtn.onclick = () => {
        localStorage.removeItem(obj.description);
        ul.removeChild(child);

        document.getElementById('expAmt').value = obj.amount;
        document.getElementById('descrip').value = obj.description;
        document.getElementById('category').value = obj.category;

    }

    

    child.appendChild(deleteBtn);
    child.appendChild(editBtn);
    ul.appendChild(child);

}