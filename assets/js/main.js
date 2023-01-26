document.querySelector("#addBtn").addEventListener("click", () => {
    const addInput = document.querySelector("#addInput").value;
    if (addInput.trim == "") {
        alert("xanalari bos saxlamayin")
    }
    else {
        document.querySelector("#task_list").innerHTML += `  <div class="task_items">
        <span>${addInput}</span>
        <button id="delete">X</button>
    </div>`
        document.querySelector("#addInput").value = "";


        const deleteTask = document.querySelectorAll("#delete");
        for ( let i = 0; i < deleteTask.length; i++) {
            deleteTask[i].onclick= function(){
                deleteTask[i].parentNode.remove();
            };

        };
    }
});