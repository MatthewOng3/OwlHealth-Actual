import { supabase } from "./client";
import { SupabaseFunctions } from "../types/supabase";

/**
 * Make an RPC call to supabase
 *
 * @param functionName The name of the procedure call
 * @param functionArgs The args of the call
 * @returns The result of the call
 */
export const supabaseCall = async <
    FunctionName extends keyof SupabaseFunctions
>(
    functionName: FunctionName,
    functionArgs: SupabaseFunctions[FunctionName]["Args"] | undefined
): Promise<SupabaseFunctions[FunctionName]["Returns"] | null> => {
    const {data, error} = await supabase.rpc(functionName, functionArgs);

    if (error) {
        console.error("Supabase Call error", error);
        return null;
    }

    return data;
};