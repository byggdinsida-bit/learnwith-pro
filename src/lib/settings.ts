import { getSupabaseClient } from "./supabaseClient";

export type SiteSettings = {
  hero_title: string;
  hero_subtitle: string;
  primary_cta_label: string;
  secondary_cta_label: string;
};

const defaultSettings: SiteSettings = {
  hero_title: "Nå dina studiemål med StudyPro-UF",
  hero_subtitle:
    "Få personlig studiehjälp från erfarna studiebuddies inom matematik, fysik och mer. Vi hjälper dig att lyckas.",
  primary_cta_label: "Kontakta oss idag",
  secondary_cta_label: "Läs mer om oss",
};

export async function fetchSettings(): Promise<SiteSettings> {
  const supabase = getSupabaseClient();
  if (!supabase) return defaultSettings;

  const { data, error } = await supabase
    .from("settings")
    .select("hero_title, hero_subtitle, primary_cta_label, secondary_cta_label")
    .single();

  if (error || !data) return defaultSettings;

  return {
    hero_title: data.hero_title ?? defaultSettings.hero_title,
    hero_subtitle: data.hero_subtitle ?? defaultSettings.hero_subtitle,
    primary_cta_label: data.primary_cta_label ?? defaultSettings.primary_cta_label,
    secondary_cta_label:
      data.secondary_cta_label ?? defaultSettings.secondary_cta_label,
  };
}



