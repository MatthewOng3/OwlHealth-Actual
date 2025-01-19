--Add template to user collection
CREATE OR REPLACE FUNCTION add_template(
  input_profile_id INTEGER
  input_name       Text
) returns jsonb
AS $$
DECLARE
  new_template_id INTEGER;
BEGIN
  -- Insert the new row  
  INSERT INTO template (profile_id, name)
  VALUES 
  (input_profile_id, input_name)
  RETURNING template_id INTO new_template_id 

  -- Return the generated list_id
  RETURN jsonb_build_object('template_id', new_template_id);
END;
$$ LANGUAGE plpgsql;