export interface State {
     error ?: {
        email ?: string;
        name ?: string;
        subject ?: string;
        message ?: string;
     } | string;

     success ?: boolean;
     msg ?: string;
     submitNo : number;
}