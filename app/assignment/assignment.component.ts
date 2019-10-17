import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent {
  public show:boolean=false;
  public hide :boolean=false;
  public start:boolean=true;
  public showfor:boolean=false;
  product:any;
  abc:any;
  new:any;
  searchh:string;
  constructor()
   {
     this.product=[]
    this.new=[{}]
    this.abc=[]
     
   }
  
   showform()
   {
    this.showfor=true;
     }
  
   Submit()
   {
     
  this.product.username=this.new.username;
  this.product.email=this.new.email;
  this.product.mobile=this.new.mobile;
   this.product.push(this.new)
  this.new=[{}]
  alert("Data added successfully ..!!")
  this.start=false;
  this.showfor=false
   }
   
  search()
   {
    this.abc=[]
      for(var i=0;i<this.product.length;i++)
    {
      
      if(this.searchh==this.product[i].mobile)
      {
        this.abc.push(this.product[i])
      this.show = true
      this.hide=false;
      this.start=false;
      this.showfor=false
   
      break;  
      }
     else{
       this.show=false;
        this.hide=true;
        this.start=false;
    
     }
   
    }
    
       
   }
  }
    
       
 
  

