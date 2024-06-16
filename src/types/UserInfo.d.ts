export type UserInfo = {
    data:  DataClass;
    error: null;
}

export type DataClass = {
    user: User;
}

export type User = {
    id:                 string;
    aud:                string;
    role:               string;
    email:              string;
    email_confirmed_at: Date;
    phone:              string;
    confirmed_at:       Date;
    last_sign_in_at:    Date;
    app_metadata:       AppMetadata;
    user_metadata:      UserMetadataClass;
    identities:         Identity[];
    created_at:         Date;
    updated_at:         Date;
    is_anonymous:       boolean;
}

export type AppMetadata = {
    provider:  string;
    providers: string[];
}

export type Identity = {
    identity_id:     string;
    id:              string;
    user_id:         string;
    identity_data:   UserMetadataClass;
    provider:        string;
    last_sign_in_at: Date;
    created_at:      Date;
    updated_at:      Date;
    email:           string;
}

export type UserMetadataClass = {
    email:          string;
    email_verified: boolean;
    phone_verified: boolean;
    sub:            string;
}
