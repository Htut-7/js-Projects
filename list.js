
        const toDo=[];
        const inputData=document.querySelector(".container-search input");
        const addBtn=document.querySelector(".container-search button");
        const list=document.querySelector(".node-list");

        addBtn.addEventListener("click",function(){
            const todoData={
                text:inputData.value,
                isComplete: false,
            }
            if(todoData.text.trim() !==""){
                 toDo.push(todoData);
                 inputData.value=""
                 render();
            }
        })

        function render(){
            list.innerHTML="";
            for(let x=0;x<toDo.length;x++){
                const liElement=document.createElement("li");
                liElement.className="liElement";
                if(toDo[x].isComplete){
                    liElement.classList.add("completed");
                }
                
                const spanElement=document.createElement("span");
                spanElement.innerText=toDo[x].text;

                const divElement=document.createElement("div");
                divElement.className="divElement";

                const completeButton=document.createElement("button");
                completeButton.className="complete-btn";
                completeButton.innerText=toDo[x].isComplete ? "Undo" : "Done"
                completeButton.addEventListener("click",function(){
                    toDo[x].isComplete=!toDo[x].isComplete;
                    render();
                })

                const editButton=document.createElement("button");
                editButton.className="edit-btn";
                editButton.innerText="edit";

                editButton.addEventListener("click",function(){
                    const newText=prompt("Edit task",toDo[x].text);
                    if(newText.trim() !==""){
                        toDo[x].text=newText;
                        render();
                    }
                })

                const deleteButton=document.createElement("button");
                deleteButton.className="delete-btn";
                deleteButton.innerText="Delete";

                deleteButton.addEventListener("click",function(){
                    toDo.splice(x,1);
                    render();
                })

                liElement.appendChild(spanElement);
                divElement.appendChild(completeButton);
                divElement.appendChild(editButton);
                divElement.appendChild(deleteButton);
                liElement.appendChild(divElement);
                list.appendChild(liElement);
            }
        }
