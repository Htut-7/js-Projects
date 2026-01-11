
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
                
                const spanElement=document.createElement("span");
                spanElement.innerText=toDo[x].text;

                const divElement=document.createElement("div");
                divElement.className="divElement";

                const completeButton=document.createElement("button");
                completeButton.className="complete-btn";
                completeButton.innerText="Done";

                const editButton=document.createElement("button");
                editButton.className="edit-btn";
                editButton.innerText="edit";

                const deleteButton=document.createElement("button");
                deleteButton.className="delete-btn";
                deleteButton.innerText="Delete";

                liElement.appendChild(spanElement);
                divElement.appendChild(completeButton);
                divElement.appendChild(editButton);
                divElement.appendChild(deleteButton);
                liElement.appendChild(divElement);
                list.appendChild(liElement);
            }
        }
