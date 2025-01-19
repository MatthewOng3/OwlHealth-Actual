import { Template } from "./data-types";

export type SupabaseFunctions = {
    //Add a new template
    add_template: {
        Args: {
            input_profile_id: number;
            name: string;
        };
        Returns: boolean;
    };
    //Get user templates
    get_templates: {
        Args: {
            input_profile_id: number;
        };
        Returns: Template[]
    }};