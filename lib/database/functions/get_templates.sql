CREATE
    OR REPLACE FUNCTION get_templates(input_profile_id integer)
    returns jsonb
    LANGUAGE plpgsql
    STABLE PARALLEL SAFE
AS
$$
BEGIN
    RETURN (
        SELECT jsonb_agg(jsonb_build_object(
            'template_id', template_id,
            'name', name,
            'times_used', times_used,
            'last_used', last_used
        ))
        FROM templates
        WHERE profile_id = input_profile_id
    );
END;
$$;