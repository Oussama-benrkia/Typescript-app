
import { Invoice } from './Class/Invoice.js';
import { ListTemplate } from './Class/Listtemplate.js';

import { Payment } from './Class/Payment.js';
import Hasformate from "./interfaces/Hasformat";

//! is mean if  from is not exist throw error
const form=document.querySelector('.new-item-form') as HTMLFormElement;
const type=document.querySelector("#type") as HTMLSelectElement
const toform=document.querySelector("#tofrom") as HTMLInputElement
const details=document.querySelector("#details") as HTMLInputElement
const amount=document.querySelector("#amount")as HTMLInputElement
const ul=document.querySelector("ul")! ;
const list=new ListTemplate(ul);
form.addEventListener('submit',(e:Event)=>{
    e.preventDefault();
    let doc:Hasformate;
    if(type.value==='invoice'){
        doc=new Invoice(toform.value,details.value,amount.valueAsNumber);
    }else{
        doc=new Payment(toform.value,details.value,amount.valueAsNumber);
    }
    list.render(doc,type.value,"end")
})
