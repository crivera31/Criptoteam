export interface Job{
  id:            string;
  type:          string;
  attributes:    Attributes;

}


export interface Attributes {
  name:       string;
  locale_key: string;
  title: string;
  country: string;
  category_name:string;
  seniority: senority;
  created_at: number;
  state: string;
  created:string;
}


export interface senority {
    data: data;  
}

export interface data {
    id: number;  
    type:string
}