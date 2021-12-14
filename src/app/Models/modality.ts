export interface Modality {
  id:            string;
  type:          string;
  attributes:    Attributes;
  relationships: Relationships;
}

export interface Attributes {
  name:       string;
  locale_key: string;
}

export interface Relationships {
}