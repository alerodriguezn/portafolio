import { supabase } from "@/lib/supabaseClient"

export default async function handler (req, res) {
  const { data } = await supabase.from('Blog').select()
  console.log(data)
  res.status(200).json(data)
}
