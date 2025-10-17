import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ""
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ""


const projectId = supabaseUrl.replace('https://', '').split('.')[0]


export { projectId }
export { supabaseAnonKey as publicAnonKey } 


export const supabase = createClient(supabaseUrl, supabaseAnonKey)