export interface State {
     error ?: {
        email ?: string;
        name ?: string;
        subject ?: string;
        message ?: string;
     }

     success ?: boolean;
     msg ?: string;
}