export interface User{
    page:number;
    per_page:number;
    total:number;
    total_pages:number;
    data:Array<Type>;
    
   
}

interface Type {
    id:string;
    email:string;
    first_name:string;
    last_name:string;
    avatar:string;
}
