var main_Div=document.getElementById("mainDiv");

var f_div=document.createElement("div");
f_div.setAttribute('class',"f_div");
var main_head=document.createElement("p");
main_head.setAttribute('class',"main_head");
var head_text=document.createTextNode("TODO  APP");
main_head.appendChild(head_text);
var todo_input=document.createElement("input");
todo_input.setAttribute('required',"required");
todo_input.setAttribute('id',"list_t")
todo_input.setAttribute('class',"todo_input");
todo_input.setAttribute('type',"text");
var submit_input=document.createElement("input");
submit_input.setAttribute('onClick',"listFun()");
submit_input.setAttribute('class',"submit_input");
submit_input.setAttribute('type',"submit");

var clear_input=document.createElement("button");
clear_input.setAttribute('onClick',"clearFun()");
clear_input.setAttribute('class',"clear_input");
var clear_text=document.createTextNode('Clear All');
clear_input.appendChild(clear_text);

f_div.appendChild(main_head);
f_div.appendChild(todo_input);
f_div.appendChild(submit_input);
f_div.appendChild(clear_input);
main_Div.appendChild(f_div);


var s_div=document.createElement("div");
s_div.setAttribute('class',"s_div");
s_div.setAttribute('id','sdiv');


function listFun(){
    
    if(todo_input.value!="")
    {
        var ul=document.createElement("ul");
        ul.setAttribute('class',"ul");
        ul.setAttribute('id',"ul1");
        

        var li=document.createElement("li");
        li.setAttribute('id',"lid");
        var list_item=document.getElementById("list_t").value;
        var li_text=document.createTextNode(list_item);
        
        li.appendChild(li_text);
        ul.appendChild(li);
        s_div.appendChild(ul);
        main_Div.appendChild(s_div);
        
        var delButt=document.createElement("button");
        delButt.setAttribute('id','delb')
        var delText=document.createTextNode("Remove");
        
        delButt.appendChild(delText);
        document.getElementById("list_t").value="";
        
        var edButt=document.createElement('button');
        edButt.setAttribute('id',"edb");
        var edText=document.createTextNode("Edit");
        edButt.appendChild(edText)
        
        li.appendChild(delButt)
        li.appendChild(edButt);
        
        edButt.addEventListener("click",function (){
            li.removeChild(li_text);
            var p= prompt('enter here');
            li_text=document.createTextNode(p);
            li.insertBefore(li_text,delButt);          
        })
        
        
        delButt.addEventListener("click",function (){
            li.remove();
        })
    }
    else{
        alert("plz Entr some work");
    }
}
        
  function clearFun(){
    document.getElementById('sdiv').innerHTML='';
  }      
        
        
        

        



