import Hasformate from "../interfaces/Hasformat";
export class ListTemplate{
    constructor(private container :HTMLUListElement){}
    render(item:Hasformate,Heading :string,posi:'start'|'end'){
        const li =document.createElement('li');
        const h4=document.createElement("h4");
        h4.innerText=Heading;li.append(h4);
        const p=document.createElement('p');
        p.innerHTML=item.format();
        li.append(p);
        if(posi==="start"){
            this.container.prepend(li);
        }else{
            this.container.append(li);
        }
        }
}