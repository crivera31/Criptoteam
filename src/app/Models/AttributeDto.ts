import { ModalityDto } from "./ModalityDto";
import { PerksDto } from "./PerksDto";
import { QuestionDto } from "./QuestionDto";
import { ResponseTimeInDays } from "./ResponseTimeInDaysDto";
import { SenorityDto } from "./SenorityDto";
import { TagDto } from "./TagDto";

export class AttributeDto{
    
    public title?: string;
    public description_headline?: string;
    public description?: string;
    public projects?: string;
    public functions_headline?: string;
    public functions?: string;
    public benefits_headline?: string;
    public benefits?: string;
    public desirable_headline?: string;
    public desirable?: string;
    public remote?: string;
    public remote_modality?: string;
    public remote_zone?: string;
    public country?: string;
    public lang?: string;
    public category_name?: string;
    public perks?: PerksDto;
    public min_salary?: number;
    public max_salary?: number;
    public published_at?: number;
    public response_time_in_days?: ResponseTimeInDays;
    public applications_count?: number;
    public tenant_city?: number;
    public modality?: ModalityDto;
    public seniority?: SenorityDto;
    public tags?: TagDto[];
    public state?:string;
    public deleted?: string;
    public questions?:QuestionDto[];
    public submitted_at?: number;
    public created_at?: number;
    public updated_at?: number;
        
       

}