 
CREATE TABLE user
(
    user_id          SERIAL PRIMARY KEY,
    first_name       TEXT,
    last_name        TEXT NOT NULL UNIQUE CHECK (char_length(profile_username) > 5),
    email            TEXT,
    organization     TEXT,
    created_at       timestamptz DEFAULT now()
);


CREATE INDEX index_profile_id ON public.user_id (user_id);

--
CREATE TABLE template
(
    template_id          SERIAL PRIMARY KEY,
    user_id              INTEGER REFERENCES public.user (user_id) ON DELETE CASCADE,
    name                 TEXT,
    times_used           INTEGER,
    last_used            DATE,
    updated_at           timestamptz DEFAULT now(),
    
);

 
CREATE INDEX index_template_id ON public.template_id(template_id);