import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."_locales" AS ENUM('en', 'ne');
  CREATE TYPE "public"."enum_pages_hero_c_t_as_variant" AS ENUM('hero', 'outline');
  CREATE TYPE "public"."enum__pages_v_version_hero_c_t_as_variant" AS ENUM('hero', 'outline');
  CREATE TYPE "public"."enum__pages_v_published_locale" AS ENUM('en', 'ne');
  CREATE TYPE "public"."enum__posts_v_published_locale" AS ENUM('en', 'ne');
  CREATE TABLE "pages_directors_locales" (
  	"name" varchar,
  	"position" varchar,
  	"experience" varchar,
  	"education" varchar,
  	"specialization" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_leadership_locales" (
  	"name" varchar,
  	"position" varchar,
  	"department" varchar,
  	"experience" varchar,
  	"expertise" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_timeline_locales" (
  	"year" varchar,
  	"event" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_stats_locales" (
  	"value" varchar,
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_testimonials_locales" (
  	"name" varchar,
  	"role" varchar,
  	"location" varchar,
  	"content" varchar,
  	"product" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_products_stats_locales" (
  	"value" varchar,
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_products_features_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_products_locales" (
  	"title" varchar,
  	"subtitle" varchar,
  	"cta_text" varchar DEFAULT 'Apply Now',
  	"secondary_cta_text" varchar DEFAULT 'Learn More',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_steps_bullet_points_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_steps_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_trust_features_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_job_openings_skills_locales" (
  	"skill" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_job_openings_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_articles_locales" (
  	"title" varchar,
  	"excerpt" varchar,
  	"category" varchar,
  	"author" varchar,
  	"date" varchar,
  	"read_time" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_guides_locales" (
  	"title" varchar,
  	"description" varchar,
  	"category" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_reports_locales" (
  	"title" varchar,
  	"type" varchar,
  	"date" varchar,
  	"size" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_faqs_locales" (
  	"question" varchar,
  	"answer" varchar,
  	"category" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_contact_methods_locales" (
  	"title" varchar,
  	"description" varchar,
  	"availability" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_business_hours_locales" (
  	"day" varchar DEFAULT 'Monday - Friday',
  	"time" varchar DEFAULT '9:00 AM to 6:00 PM',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_floating_features_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_hero_stats_locales" (
  	"value" varchar,
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_hero_c_t_as" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link" varchar,
  	"variant" "enum_pages_hero_c_t_as_variant" DEFAULT 'hero'
  );
  
  CREATE TABLE "pages_hero_c_t_as_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_journey_cards_locales" (
  	"title" varchar,
  	"description" varchar,
  	"link_text" varchar DEFAULT 'Explore',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_quick_tools_locales" (
  	"name" varchar,
  	"description" varchar,
  	"button_text" varchar DEFAULT 'Calculate Now',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_trust_stats_locales" (
  	"value" varchar,
  	"label" varchar,
  	"sub_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_badges_locales" (
  	"title" varchar,
  	"sub_title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_scrolling_notices_locales" (
  	"message" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_locales" (
  	"about_header_title" varchar DEFAULT 'About Batas Hire and Purchase',
  	"about_header_subtitle" varchar DEFAULT 'We''re on a mission to make financial services more accessible...',
  	"about_story_title" varchar DEFAULT '22 Years of Growth in Financial Services',
  	"about_story_content" jsonb,
  	"stat1_number" varchar DEFAULT '50,000+',
  	"stat1_label" varchar DEFAULT 'Happy Customers',
  	"stat2_number" varchar DEFAULT '₹500 Cr+',
  	"stat2_label" varchar DEFAULT 'Loans Disbursed',
  	"stat3_number" varchar DEFAULT '99.2%',
  	"stat3_label" varchar DEFAULT 'Customer Satisfaction',
  	"stat4_number" varchar DEFAULT '15+',
  	"stat4_label" varchar DEFAULT 'Banking Partners',
  	"mission_title" varchar DEFAULT 'Our Mission',
  	"mission_description" varchar,
  	"vision_title" varchar DEFAULT 'Our Vision',
  	"vision_description" varchar,
  	"values_title" varchar DEFAULT 'Our Values',
  	"values_description" varchar,
  	"directors_title" varchar DEFAULT 'Board of Directors',
  	"directors_description" varchar DEFAULT 'Experienced leadership guiding our strategic vision',
  	"leadership_title" varchar DEFAULT 'Leadership Team',
  	"leadership_description" varchar DEFAULT 'Meet our executive team driving operational excellence',
  	"timeline_title" varchar DEFAULT '22 Years of Growth',
  	"timeline_description" varchar DEFAULT 'Our journey from inception to industry leadership',
  	"testimonials_title" varchar DEFAULT 'What Our Customers Say',
  	"testimonials_description" varchar DEFAULT 'Don''t just take our word for it. Hear from thousands of satisfied customers across India.',
  	"compliance_title" varchar DEFAULT 'Regulatory Compliance',
  	"compliance_description" varchar,
  	"badge1_text" varchar DEFAULT 'RBI Licensed NBFC',
  	"badge2_text" varchar DEFAULT 'ISO 27001 Certified',
  	"badge3_text" varchar DEFAULT 'PCI DSS Compliant',
  	"products_title" varchar DEFAULT 'Our Financial Solutions',
  	"products_description" varchar DEFAULT 'Tailored financing options to meet your diverse needs with transparent terms and competitive rates',
  	"header_title" varchar DEFAULT 'How It Works',
  	"header_subtitle" varchar DEFAULT 'Get approved and funded in just 4 simple steps...',
  	"cta_title" varchar DEFAULT 'Ready to Get Started?',
  	"cta_description" varchar DEFAULT 'Join thousands of satisfied customers who have chosen our hassle-free financing solutions.',
  	"cta_primary_button_text" varchar DEFAULT 'Start Your Application',
  	"cta_primary_button_link" varchar DEFAULT '/contact',
  	"cta_secondary_button_text" varchar DEFAULT 'Calculate Your EMI',
  	"cta_secondary_button_link" varchar DEFAULT '/calculator',
  	"career_header_title" varchar DEFAULT 'Build Your Future With Us',
  	"career_header_subtitle" varchar DEFAULT 'Join our dynamic team and be part of Nepal''s leading financial services company',
  	"job_openings_title" varchar DEFAULT 'Current Openings',
  	"job_openings_subtitle" varchar DEFAULT 'Join our team of open positions',
  	"benefits_title" varchar DEFAULT 'Why Join Batas?',
  	"benefits_subtitle" varchar DEFAULT 'Discover what makes us a great place to work',
  	"culture_button_text" varchar DEFAULT 'Learn More About Our Culture',
  	"culture_button_link" varchar DEFAULT '/culture',
  	"life_at_company_title" varchar DEFAULT 'Life at Batas',
  	"life_at_company_subtitle" varchar DEFAULT 'Why our employees love working with us',
  	"knowledge_center_header_title" varchar DEFAULT 'Knowledge Center',
  	"knowledge_center_header_subtitle" varchar DEFAULT 'Stay informed with expert insights, financial tips, and industry trends',
  	"help_title" varchar DEFAULT 'Need More Help?',
  	"help_description" varchar DEFAULT 'Can''t find what you''re looking for? Our support team is here to help.',
  	"help_primary_button_text" varchar DEFAULT 'Contact Support',
  	"help_secondary_button_text" varchar DEFAULT 'Schedule a Call',
  	"contact_header_title" varchar DEFAULT 'Get In Touch',
  	"contact_header_subtitle" varchar DEFAULT 'Have questions about our financial services? We''re here to help you 24/7 with personalized support.',
  	"form_title" varchar DEFAULT 'Send Us a Message',
  	"business_hours_title" varchar DEFAULT 'Business Hours',
  	"business_hours_note" varchar DEFAULT '24/7 Customer Support Available',
  	"hero_badge1" varchar DEFAULT 'NBFC Licensed',
  	"hero_badge2" varchar DEFAULT 'Secure & Trusted',
  	"hero_rating" varchar DEFAULT '4.9/5',
  	"hero_title_part1" varchar DEFAULT 'Smart Finance',
  	"hero_title_part2" varchar DEFAULT 'Made Simple',
  	"hero_subtitle" varchar DEFAULT 'Instant BNPL solutions and vehicle financing with transparent terms...',
  	"journey_title" varchar DEFAULT 'Your Financial Journey Simplified',
  	"journey_description" varchar DEFAULT 'Discover our comprehensive financial services...',
  	"quick_tools_title" varchar DEFAULT 'Quick Tools',
  	"quick_tools_description" varchar DEFAULT 'Get instant calculations and valuations',
  	"trust_title" varchar DEFAULT 'Trusted by Thousands',
  	"trust_description" varchar DEFAULT 'Our numbers speak for themselves - building trust through consistent service and reliability',
  	"certification_title" varchar DEFAULT 'Licensed & Certified',
  	"certification_description" varchar DEFAULT 'Your security and trust are our top priorities',
  	"home_products_config_title" varchar DEFAULT 'Our Final Solutions',
  	"home_products_config_description" varchar,
  	"home_testimonials_config_title" varchar DEFAULT 'What Our Customers Say',
  	"home_testimonials_config_description" varchar,
  	"home_knowledge_config_title" varchar DEFAULT 'Latest News & Updates',
  	"home_knowledge_config_description" varchar,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_version_directors_locales" (
  	"name" varchar,
  	"position" varchar,
  	"experience" varchar,
  	"education" varchar,
  	"specialization" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_version_leadership_locales" (
  	"name" varchar,
  	"position" varchar,
  	"department" varchar,
  	"experience" varchar,
  	"expertise" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_version_timeline_locales" (
  	"year" varchar,
  	"event" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_version_stats_locales" (
  	"value" varchar,
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_version_testimonials_locales" (
  	"name" varchar,
  	"role" varchar,
  	"location" varchar,
  	"content" varchar,
  	"product" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_version_products_stats_locales" (
  	"value" varchar,
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_version_products_features_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_version_products_locales" (
  	"title" varchar,
  	"subtitle" varchar,
  	"cta_text" varchar DEFAULT 'Apply Now',
  	"secondary_cta_text" varchar DEFAULT 'Learn More',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_version_steps_bullet_points_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_version_steps_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_version_trust_features_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_version_job_openings_skills_locales" (
  	"skill" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_version_job_openings_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_version_articles_locales" (
  	"title" varchar,
  	"excerpt" varchar,
  	"category" varchar,
  	"author" varchar,
  	"date" varchar,
  	"read_time" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_version_guides_locales" (
  	"title" varchar,
  	"description" varchar,
  	"category" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_version_reports_locales" (
  	"title" varchar,
  	"type" varchar,
  	"date" varchar,
  	"size" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_version_faqs_locales" (
  	"question" varchar,
  	"answer" varchar,
  	"category" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_version_contact_methods_locales" (
  	"title" varchar,
  	"description" varchar,
  	"availability" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_version_business_hours_locales" (
  	"day" varchar DEFAULT 'Monday - Friday',
  	"time" varchar DEFAULT '9:00 AM to 6:00 PM',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_version_floating_features_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_version_hero_stats_locales" (
  	"value" varchar,
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_version_hero_c_t_as" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link" varchar,
  	"variant" "enum__pages_v_version_hero_c_t_as_variant" DEFAULT 'hero',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_hero_c_t_as_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_version_journey_cards_locales" (
  	"title" varchar,
  	"description" varchar,
  	"link_text" varchar DEFAULT 'Explore',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_version_quick_tools_locales" (
  	"name" varchar,
  	"description" varchar,
  	"button_text" varchar DEFAULT 'Calculate Now',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_version_trust_stats_locales" (
  	"value" varchar,
  	"label" varchar,
  	"sub_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_version_badges_locales" (
  	"title" varchar,
  	"sub_title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_version_scrolling_notices_locales" (
  	"message" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_locales" (
  	"version_about_header_title" varchar DEFAULT 'About Batas Hire and Purchase',
  	"version_about_header_subtitle" varchar DEFAULT 'We''re on a mission to make financial services more accessible...',
  	"version_about_story_title" varchar DEFAULT '22 Years of Growth in Financial Services',
  	"version_about_story_content" jsonb,
  	"version_stat1_number" varchar DEFAULT '50,000+',
  	"version_stat1_label" varchar DEFAULT 'Happy Customers',
  	"version_stat2_number" varchar DEFAULT '₹500 Cr+',
  	"version_stat2_label" varchar DEFAULT 'Loans Disbursed',
  	"version_stat3_number" varchar DEFAULT '99.2%',
  	"version_stat3_label" varchar DEFAULT 'Customer Satisfaction',
  	"version_stat4_number" varchar DEFAULT '15+',
  	"version_stat4_label" varchar DEFAULT 'Banking Partners',
  	"version_mission_title" varchar DEFAULT 'Our Mission',
  	"version_mission_description" varchar,
  	"version_vision_title" varchar DEFAULT 'Our Vision',
  	"version_vision_description" varchar,
  	"version_values_title" varchar DEFAULT 'Our Values',
  	"version_values_description" varchar,
  	"version_directors_title" varchar DEFAULT 'Board of Directors',
  	"version_directors_description" varchar DEFAULT 'Experienced leadership guiding our strategic vision',
  	"version_leadership_title" varchar DEFAULT 'Leadership Team',
  	"version_leadership_description" varchar DEFAULT 'Meet our executive team driving operational excellence',
  	"version_timeline_title" varchar DEFAULT '22 Years of Growth',
  	"version_timeline_description" varchar DEFAULT 'Our journey from inception to industry leadership',
  	"version_testimonials_title" varchar DEFAULT 'What Our Customers Say',
  	"version_testimonials_description" varchar DEFAULT 'Don''t just take our word for it. Hear from thousands of satisfied customers across India.',
  	"version_compliance_title" varchar DEFAULT 'Regulatory Compliance',
  	"version_compliance_description" varchar,
  	"version_badge1_text" varchar DEFAULT 'RBI Licensed NBFC',
  	"version_badge2_text" varchar DEFAULT 'ISO 27001 Certified',
  	"version_badge3_text" varchar DEFAULT 'PCI DSS Compliant',
  	"version_products_title" varchar DEFAULT 'Our Financial Solutions',
  	"version_products_description" varchar DEFAULT 'Tailored financing options to meet your diverse needs with transparent terms and competitive rates',
  	"version_header_title" varchar DEFAULT 'How It Works',
  	"version_header_subtitle" varchar DEFAULT 'Get approved and funded in just 4 simple steps...',
  	"version_cta_title" varchar DEFAULT 'Ready to Get Started?',
  	"version_cta_description" varchar DEFAULT 'Join thousands of satisfied customers who have chosen our hassle-free financing solutions.',
  	"version_cta_primary_button_text" varchar DEFAULT 'Start Your Application',
  	"version_cta_primary_button_link" varchar DEFAULT '/contact',
  	"version_cta_secondary_button_text" varchar DEFAULT 'Calculate Your EMI',
  	"version_cta_secondary_button_link" varchar DEFAULT '/calculator',
  	"version_career_header_title" varchar DEFAULT 'Build Your Future With Us',
  	"version_career_header_subtitle" varchar DEFAULT 'Join our dynamic team and be part of Nepal''s leading financial services company',
  	"version_job_openings_title" varchar DEFAULT 'Current Openings',
  	"version_job_openings_subtitle" varchar DEFAULT 'Join our team of open positions',
  	"version_benefits_title" varchar DEFAULT 'Why Join Batas?',
  	"version_benefits_subtitle" varchar DEFAULT 'Discover what makes us a great place to work',
  	"version_culture_button_text" varchar DEFAULT 'Learn More About Our Culture',
  	"version_culture_button_link" varchar DEFAULT '/culture',
  	"version_life_at_company_title" varchar DEFAULT 'Life at Batas',
  	"version_life_at_company_subtitle" varchar DEFAULT 'Why our employees love working with us',
  	"version_knowledge_center_header_title" varchar DEFAULT 'Knowledge Center',
  	"version_knowledge_center_header_subtitle" varchar DEFAULT 'Stay informed with expert insights, financial tips, and industry trends',
  	"version_help_title" varchar DEFAULT 'Need More Help?',
  	"version_help_description" varchar DEFAULT 'Can''t find what you''re looking for? Our support team is here to help.',
  	"version_help_primary_button_text" varchar DEFAULT 'Contact Support',
  	"version_help_secondary_button_text" varchar DEFAULT 'Schedule a Call',
  	"version_contact_header_title" varchar DEFAULT 'Get In Touch',
  	"version_contact_header_subtitle" varchar DEFAULT 'Have questions about our financial services? We''re here to help you 24/7 with personalized support.',
  	"version_form_title" varchar DEFAULT 'Send Us a Message',
  	"version_business_hours_title" varchar DEFAULT 'Business Hours',
  	"version_business_hours_note" varchar DEFAULT '24/7 Customer Support Available',
  	"version_hero_badge1" varchar DEFAULT 'NBFC Licensed',
  	"version_hero_badge2" varchar DEFAULT 'Secure & Trusted',
  	"version_hero_rating" varchar DEFAULT '4.9/5',
  	"version_hero_title_part1" varchar DEFAULT 'Smart Finance',
  	"version_hero_title_part2" varchar DEFAULT 'Made Simple',
  	"version_hero_subtitle" varchar DEFAULT 'Instant BNPL solutions and vehicle financing with transparent terms...',
  	"version_journey_title" varchar DEFAULT 'Your Financial Journey Simplified',
  	"version_journey_description" varchar DEFAULT 'Discover our comprehensive financial services...',
  	"version_quick_tools_title" varchar DEFAULT 'Quick Tools',
  	"version_quick_tools_description" varchar DEFAULT 'Get instant calculations and valuations',
  	"version_trust_title" varchar DEFAULT 'Trusted by Thousands',
  	"version_trust_description" varchar DEFAULT 'Our numbers speak for themselves - building trust through consistent service and reliability',
  	"version_certification_title" varchar DEFAULT 'Licensed & Certified',
  	"version_certification_description" varchar DEFAULT 'Your security and trust are our top priorities',
  	"version_home_products_config_title" varchar DEFAULT 'Our Final Solutions',
  	"version_home_products_config_description" varchar,
  	"version_home_testimonials_config_title" varchar DEFAULT 'What Our Customers Say',
  	"version_home_testimonials_config_description" varchar,
  	"version_home_knowledge_config_title" varchar DEFAULT 'Latest News & Updates',
  	"version_home_knowledge_config_description" varchar,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "posts_locales" (
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_posts_v_locales" (
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "forms_emails_locales" (
  	"subject" varchar DEFAULT 'You''ve received a new message.' NOT NULL,
  	"message" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "forms_locales" (
  	"title" varchar NOT NULL,
  	"submit_button_label" varchar,
  	"confirmation_message" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "search_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "header_locales" (
  	"login_label" varchar DEFAULT 'Login',
  	"apply_now_label" varchar DEFAULT 'Apply Now',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "footer_locales" (
  	"description" varchar DEFAULT 'Your trusted partner for flexible financing solutions. We provide transparent, accessible, and innovative financial services to help you achieve your goals.' NOT NULL,
  	"contact_info_address" varchar DEFAULT 'Batas Tower, Kathmandu,
  Nepal' NOT NULL,
  	"copyright_text" varchar DEFAULT '© 2024 Batas Hire and Purchase Financial Services Pvt. Ltd. All rights reserved. | NBFC License No: N-12345' NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "site_settings_locales" (
  	"site_title" varchar DEFAULT 'Batas Hire and Purchase' NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  ALTER TABLE "pages" DROP CONSTRAINT "pages_meta_image_id_media_id_fk";
  
  ALTER TABLE "_pages_v" DROP CONSTRAINT "_pages_v_version_meta_image_id_media_id_fk";
  
  ALTER TABLE "posts" DROP CONSTRAINT "posts_meta_image_id_media_id_fk";
  
  ALTER TABLE "_posts_v" DROP CONSTRAINT "_posts_v_version_meta_image_id_media_id_fk";
  
  DROP INDEX "pages_meta_meta_image_10_idx";
  DROP INDEX "_pages_v_version_meta_version_meta_image_10_idx";
  DROP INDEX "posts_meta_meta_image_idx";
  DROP INDEX "_posts_v_version_meta_version_meta_image_idx";
  DROP INDEX "header_rels_pages_id_idx";
  DROP INDEX "header_rels_posts_id_idx";
  DROP INDEX "footer_rels_pages_id_idx";
  DROP INDEX "footer_rels_posts_id_idx";
  ALTER TABLE "_pages_v" ADD COLUMN "snapshot" boolean;
  ALTER TABLE "_pages_v" ADD COLUMN "published_locale" "enum__pages_v_published_locale";
  ALTER TABLE "_posts_v" ADD COLUMN "snapshot" boolean;
  ALTER TABLE "_posts_v" ADD COLUMN "published_locale" "enum__posts_v_published_locale";
  ALTER TABLE "categories_breadcrumbs" ADD COLUMN "_locale" "_locales" NOT NULL;
  ALTER TABLE "forms_blocks_checkbox" ADD COLUMN "_locale" "_locales" NOT NULL;
  ALTER TABLE "forms_blocks_country" ADD COLUMN "_locale" "_locales" NOT NULL;
  ALTER TABLE "forms_blocks_email" ADD COLUMN "_locale" "_locales" NOT NULL;
  ALTER TABLE "forms_blocks_message" ADD COLUMN "_locale" "_locales" NOT NULL;
  ALTER TABLE "forms_blocks_number" ADD COLUMN "_locale" "_locales" NOT NULL;
  ALTER TABLE "forms_blocks_select_options" ADD COLUMN "_locale" "_locales" NOT NULL;
  ALTER TABLE "forms_blocks_select" ADD COLUMN "_locale" "_locales" NOT NULL;
  ALTER TABLE "forms_blocks_state" ADD COLUMN "_locale" "_locales" NOT NULL;
  ALTER TABLE "forms_blocks_text" ADD COLUMN "_locale" "_locales" NOT NULL;
  ALTER TABLE "forms_blocks_textarea" ADD COLUMN "_locale" "_locales" NOT NULL;
  ALTER TABLE "forms_blocks_file" ADD COLUMN "_locale" "_locales" NOT NULL;
  ALTER TABLE "header_nav_items" ADD COLUMN "_locale" "_locales" NOT NULL;
  ALTER TABLE "header_rels" ADD COLUMN "locale" "_locales";
  ALTER TABLE "footer_quick_links" ADD COLUMN "_locale" "_locales" NOT NULL;
  ALTER TABLE "footer_our_products" ADD COLUMN "_locale" "_locales" NOT NULL;
  ALTER TABLE "footer_legal_compliance" ADD COLUMN "_locale" "_locales" NOT NULL;
  ALTER TABLE "footer_rels" ADD COLUMN "locale" "_locales";
  ALTER TABLE "pages_directors_locales" ADD CONSTRAINT "pages_directors_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_directors"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_leadership_locales" ADD CONSTRAINT "pages_leadership_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_leadership"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_timeline_locales" ADD CONSTRAINT "pages_timeline_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_timeline"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_stats_locales" ADD CONSTRAINT "pages_stats_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_stats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_testimonials_locales" ADD CONSTRAINT "pages_testimonials_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_products_stats_locales" ADD CONSTRAINT "pages_products_stats_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_products_stats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_products_features_locales" ADD CONSTRAINT "pages_products_features_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_products_features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_products_locales" ADD CONSTRAINT "pages_products_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_products"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_steps_bullet_points_locales" ADD CONSTRAINT "pages_steps_bullet_points_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_steps_bullet_points"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_steps_locales" ADD CONSTRAINT "pages_steps_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_trust_features_locales" ADD CONSTRAINT "pages_trust_features_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_trust_features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_job_openings_skills_locales" ADD CONSTRAINT "pages_job_openings_skills_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_job_openings_skills"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_job_openings_locales" ADD CONSTRAINT "pages_job_openings_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_job_openings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_articles_locales" ADD CONSTRAINT "pages_articles_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_guides_locales" ADD CONSTRAINT "pages_guides_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_guides"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_reports_locales" ADD CONSTRAINT "pages_reports_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_reports"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_faqs_locales" ADD CONSTRAINT "pages_faqs_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_faqs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_contact_methods_locales" ADD CONSTRAINT "pages_contact_methods_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_contact_methods"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_business_hours_locales" ADD CONSTRAINT "pages_business_hours_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_business_hours"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_floating_features_locales" ADD CONSTRAINT "pages_floating_features_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_floating_features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_hero_stats_locales" ADD CONSTRAINT "pages_hero_stats_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_hero_stats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_hero_c_t_as" ADD CONSTRAINT "pages_hero_c_t_as_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_hero_c_t_as_locales" ADD CONSTRAINT "pages_hero_c_t_as_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_hero_c_t_as"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_journey_cards_locales" ADD CONSTRAINT "pages_journey_cards_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_journey_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_quick_tools_locales" ADD CONSTRAINT "pages_quick_tools_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_quick_tools"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_trust_stats_locales" ADD CONSTRAINT "pages_trust_stats_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_trust_stats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_badges_locales" ADD CONSTRAINT "pages_badges_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_badges"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_scrolling_notices_locales" ADD CONSTRAINT "pages_scrolling_notices_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_scrolling_notices"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_locales" ADD CONSTRAINT "pages_locales_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_locales" ADD CONSTRAINT "pages_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_directors_locales" ADD CONSTRAINT "_pages_v_version_directors_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_directors"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_leadership_locales" ADD CONSTRAINT "_pages_v_version_leadership_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_leadership"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_timeline_locales" ADD CONSTRAINT "_pages_v_version_timeline_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_timeline"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_stats_locales" ADD CONSTRAINT "_pages_v_version_stats_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_stats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_testimonials_locales" ADD CONSTRAINT "_pages_v_version_testimonials_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_products_stats_locales" ADD CONSTRAINT "_pages_v_version_products_stats_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_products_stats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_products_features_locales" ADD CONSTRAINT "_pages_v_version_products_features_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_products_features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_products_locales" ADD CONSTRAINT "_pages_v_version_products_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_products"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_steps_bullet_points_locales" ADD CONSTRAINT "_pages_v_version_steps_bullet_points_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_steps_bullet_points"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_steps_locales" ADD CONSTRAINT "_pages_v_version_steps_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_trust_features_locales" ADD CONSTRAINT "_pages_v_version_trust_features_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_trust_features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_job_openings_skills_locales" ADD CONSTRAINT "_pages_v_version_job_openings_skills_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_job_openings_skills"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_job_openings_locales" ADD CONSTRAINT "_pages_v_version_job_openings_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_job_openings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_articles_locales" ADD CONSTRAINT "_pages_v_version_articles_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_guides_locales" ADD CONSTRAINT "_pages_v_version_guides_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_guides"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_reports_locales" ADD CONSTRAINT "_pages_v_version_reports_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_reports"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_faqs_locales" ADD CONSTRAINT "_pages_v_version_faqs_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_faqs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_contact_methods_locales" ADD CONSTRAINT "_pages_v_version_contact_methods_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_contact_methods"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_business_hours_locales" ADD CONSTRAINT "_pages_v_version_business_hours_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_business_hours"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_floating_features_locales" ADD CONSTRAINT "_pages_v_version_floating_features_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_floating_features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_hero_stats_locales" ADD CONSTRAINT "_pages_v_version_hero_stats_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_hero_stats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_hero_c_t_as" ADD CONSTRAINT "_pages_v_version_hero_c_t_as_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_hero_c_t_as_locales" ADD CONSTRAINT "_pages_v_version_hero_c_t_as_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_hero_c_t_as"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_journey_cards_locales" ADD CONSTRAINT "_pages_v_version_journey_cards_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_journey_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_quick_tools_locales" ADD CONSTRAINT "_pages_v_version_quick_tools_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_quick_tools"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_trust_stats_locales" ADD CONSTRAINT "_pages_v_version_trust_stats_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_trust_stats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_badges_locales" ADD CONSTRAINT "_pages_v_version_badges_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_badges"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_scrolling_notices_locales" ADD CONSTRAINT "_pages_v_version_scrolling_notices_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_scrolling_notices"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_locales" ADD CONSTRAINT "_pages_v_locales_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_locales" ADD CONSTRAINT "_pages_v_locales_parent_id_10_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_locales" ADD CONSTRAINT "posts_locales_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_locales" ADD CONSTRAINT "posts_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_locales" ADD CONSTRAINT "_posts_v_locales_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v_locales" ADD CONSTRAINT "_posts_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_emails_locales" ADD CONSTRAINT "forms_emails_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_emails"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_locales" ADD CONSTRAINT "forms_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "search_locales" ADD CONSTRAINT "search_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."search"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_locales" ADD CONSTRAINT "header_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_locales" ADD CONSTRAINT "footer_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_locales" ADD CONSTRAINT "site_settings_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  CREATE UNIQUE INDEX "pages_directors_locales_locale_parent_id_unique_10" ON "pages_directors_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_leadership_locales_locale_parent_id_unique_10" ON "pages_leadership_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_timeline_locales_locale_parent_id_unique_10" ON "pages_timeline_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_stats_locales_locale_parent_id_unique_10" ON "pages_stats_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_testimonials_locales_locale_parent_id_unique_10" ON "pages_testimonials_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_products_stats_locales_locale_parent_id_unique_10" ON "pages_products_stats_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_products_features_locales_locale_parent_id_unique_10" ON "pages_products_features_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_products_locales_locale_parent_id_unique_10" ON "pages_products_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_steps_bullet_points_locales_locale_parent_id_unique_10" ON "pages_steps_bullet_points_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_steps_locales_locale_parent_id_unique_10" ON "pages_steps_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_trust_features_locales_locale_parent_id_unique_10" ON "pages_trust_features_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_job_openings_skills_locales_locale_parent_id_unique_10" ON "pages_job_openings_skills_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_job_openings_locales_locale_parent_id_unique_10" ON "pages_job_openings_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_articles_locales_locale_parent_id_unique_10" ON "pages_articles_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_guides_locales_locale_parent_id_unique_10" ON "pages_guides_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_reports_locales_locale_parent_id_unique_10" ON "pages_reports_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_faqs_locales_locale_parent_id_unique_10" ON "pages_faqs_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_contact_methods_locales_locale_parent_id_unique_10" ON "pages_contact_methods_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_business_hours_locales_locale_parent_id_unique_10" ON "pages_business_hours_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_floating_features_locales_locale_parent_id_unique_10" ON "pages_floating_features_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_hero_stats_locales_locale_parent_id_unique_10" ON "pages_hero_stats_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_hero_c_t_as_order_idx" ON "pages_hero_c_t_as" USING btree ("_order");
  CREATE INDEX "pages_hero_c_t_as_parent_id_idx" ON "pages_hero_c_t_as" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_hero_c_t_as_locales_locale_parent_id_unique_10" ON "pages_hero_c_t_as_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_journey_cards_locales_locale_parent_id_unique_10" ON "pages_journey_cards_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_quick_tools_locales_locale_parent_id_unique_10" ON "pages_quick_tools_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_trust_stats_locales_locale_parent_id_unique_10" ON "pages_trust_stats_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_badges_locales_locale_parent_id_unique_10" ON "pages_badges_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_scrolling_notices_locales_locale_parent_id_unique_10" ON "pages_scrolling_notices_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_meta_meta_image_10_idx" ON "pages_locales" USING btree ("meta_image_id","_locale");
  CREATE UNIQUE INDEX "pages_locales_locale_parent_id_unique_10" ON "pages_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_version_directors_locales_locale_parent_id_uniqu_10" ON "_pages_v_version_directors_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_version_leadership_locales_locale_parent_id_uniq_10" ON "_pages_v_version_leadership_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_version_timeline_locales_locale_parent_id_unique_10" ON "_pages_v_version_timeline_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_version_stats_locales_locale_parent_id_unique_10" ON "_pages_v_version_stats_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_version_testimonials_locales_locale_parent_id_un_10" ON "_pages_v_version_testimonials_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_version_products_stats_locales_locale_parent_id__10" ON "_pages_v_version_products_stats_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_version_products_features_locales_locale_parent__10" ON "_pages_v_version_products_features_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_version_products_locales_locale_parent_id_unique_10" ON "_pages_v_version_products_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_version_steps_bullet_points_locales_locale_paren_10" ON "_pages_v_version_steps_bullet_points_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_version_steps_locales_locale_parent_id_unique_10" ON "_pages_v_version_steps_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_version_trust_features_locales_locale_parent_id__10" ON "_pages_v_version_trust_features_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_version_job_openings_skills_locales_locale_paren_10" ON "_pages_v_version_job_openings_skills_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_version_job_openings_locales_locale_parent_id_un_10" ON "_pages_v_version_job_openings_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_version_articles_locales_locale_parent_id_unique_10" ON "_pages_v_version_articles_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_version_guides_locales_locale_parent_id_unique_10" ON "_pages_v_version_guides_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_version_reports_locales_locale_parent_id_unique_10" ON "_pages_v_version_reports_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_version_faqs_locales_locale_parent_id_unique_10" ON "_pages_v_version_faqs_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_version_contact_methods_locales_locale_parent_id_10" ON "_pages_v_version_contact_methods_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_version_business_hours_locales_locale_parent_id__10" ON "_pages_v_version_business_hours_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_version_floating_features_locales_locale_parent__10" ON "_pages_v_version_floating_features_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_version_hero_stats_locales_locale_parent_id_uniq_10" ON "_pages_v_version_hero_stats_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_version_hero_c_t_as_order_idx" ON "_pages_v_version_hero_c_t_as" USING btree ("_order");
  CREATE INDEX "_pages_v_version_hero_c_t_as_parent_id_idx" ON "_pages_v_version_hero_c_t_as" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_version_hero_c_t_as_locales_locale_parent_id_uni_10" ON "_pages_v_version_hero_c_t_as_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_version_journey_cards_locales_locale_parent_id_u_10" ON "_pages_v_version_journey_cards_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_version_quick_tools_locales_locale_parent_id_uni_10" ON "_pages_v_version_quick_tools_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_version_trust_stats_locales_locale_parent_id_uni_10" ON "_pages_v_version_trust_stats_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_version_badges_locales_locale_parent_id_unique_10" ON "_pages_v_version_badges_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_version_scrolling_notices_locales_locale_parent__10" ON "_pages_v_version_scrolling_notices_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_version_meta_version_meta_image_10_idx" ON "_pages_v_locales" USING btree ("version_meta_image_id","_locale");
  CREATE UNIQUE INDEX "_pages_v_locales_locale_parent_id_unique_10" ON "_pages_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "posts_meta_meta_image_idx" ON "posts_locales" USING btree ("meta_image_id","_locale");
  CREATE UNIQUE INDEX "posts_locales_locale_parent_id_unique" ON "posts_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_posts_v_version_meta_version_meta_image_idx" ON "_posts_v_locales" USING btree ("version_meta_image_id","_locale");
  CREATE UNIQUE INDEX "_posts_v_locales_locale_parent_id_unique" ON "_posts_v_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "forms_emails_locales_locale_parent_id_unique" ON "forms_emails_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "forms_locales_locale_parent_id_unique" ON "forms_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "search_locales_locale_parent_id_unique" ON "search_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "header_locales_locale_parent_id_unique" ON "header_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "footer_locales_locale_parent_id_unique" ON "footer_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "site_settings_locales_locale_parent_id_unique" ON "site_settings_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_snapshot_10_idx" ON "_pages_v" USING btree ("snapshot");
  CREATE INDEX "_pages_v_published_locale_10_idx" ON "_pages_v" USING btree ("published_locale");
  CREATE INDEX "_posts_v_snapshot_idx" ON "_posts_v" USING btree ("snapshot");
  CREATE INDEX "_posts_v_published_locale_idx" ON "_posts_v" USING btree ("published_locale");
  CREATE INDEX "categories_breadcrumbs_locale_idx" ON "categories_breadcrumbs" USING btree ("_locale");
  CREATE INDEX "forms_blocks_checkbox_locale_idx" ON "forms_blocks_checkbox" USING btree ("_locale");
  CREATE INDEX "forms_blocks_country_locale_idx" ON "forms_blocks_country" USING btree ("_locale");
  CREATE INDEX "forms_blocks_email_locale_idx" ON "forms_blocks_email" USING btree ("_locale");
  CREATE INDEX "forms_blocks_message_locale_idx" ON "forms_blocks_message" USING btree ("_locale");
  CREATE INDEX "forms_blocks_number_locale_idx" ON "forms_blocks_number" USING btree ("_locale");
  CREATE INDEX "forms_blocks_select_options_locale_idx" ON "forms_blocks_select_options" USING btree ("_locale");
  CREATE INDEX "forms_blocks_select_locale_idx" ON "forms_blocks_select" USING btree ("_locale");
  CREATE INDEX "forms_blocks_state_locale_idx" ON "forms_blocks_state" USING btree ("_locale");
  CREATE INDEX "forms_blocks_text_locale_idx" ON "forms_blocks_text" USING btree ("_locale");
  CREATE INDEX "forms_blocks_textarea_locale_idx" ON "forms_blocks_textarea" USING btree ("_locale");
  CREATE INDEX "forms_blocks_file_locale_idx" ON "forms_blocks_file" USING btree ("_locale");
  CREATE INDEX "header_nav_items_locale_idx" ON "header_nav_items" USING btree ("_locale");
  CREATE INDEX "header_rels_locale_idx" ON "header_rels" USING btree ("locale");
  CREATE INDEX "footer_quick_links_locale_idx" ON "footer_quick_links" USING btree ("_locale");
  CREATE INDEX "footer_our_products_locale_idx" ON "footer_our_products" USING btree ("_locale");
  CREATE INDEX "footer_legal_compliance_locale_idx" ON "footer_legal_compliance" USING btree ("_locale");
  CREATE INDEX "footer_rels_locale_idx" ON "footer_rels" USING btree ("locale");
  CREATE INDEX "header_rels_pages_id_idx" ON "header_rels" USING btree ("pages_id","locale");
  CREATE INDEX "header_rels_posts_id_idx" ON "header_rels" USING btree ("posts_id","locale");
  CREATE INDEX "footer_rels_pages_id_idx" ON "footer_rels" USING btree ("pages_id","locale");
  CREATE INDEX "footer_rels_posts_id_idx" ON "footer_rels" USING btree ("posts_id","locale");
  ALTER TABLE "pages_directors" DROP COLUMN "name";
  ALTER TABLE "pages_directors" DROP COLUMN "position";
  ALTER TABLE "pages_directors" DROP COLUMN "experience";
  ALTER TABLE "pages_directors" DROP COLUMN "education";
  ALTER TABLE "pages_directors" DROP COLUMN "specialization";
  ALTER TABLE "pages_leadership" DROP COLUMN "name";
  ALTER TABLE "pages_leadership" DROP COLUMN "position";
  ALTER TABLE "pages_leadership" DROP COLUMN "department";
  ALTER TABLE "pages_leadership" DROP COLUMN "experience";
  ALTER TABLE "pages_leadership" DROP COLUMN "expertise";
  ALTER TABLE "pages_timeline" DROP COLUMN "year";
  ALTER TABLE "pages_timeline" DROP COLUMN "event";
  ALTER TABLE "pages_timeline" DROP COLUMN "description";
  ALTER TABLE "pages_stats" DROP COLUMN "value";
  ALTER TABLE "pages_stats" DROP COLUMN "label";
  ALTER TABLE "pages_testimonials" DROP COLUMN "name";
  ALTER TABLE "pages_testimonials" DROP COLUMN "role";
  ALTER TABLE "pages_testimonials" DROP COLUMN "location";
  ALTER TABLE "pages_testimonials" DROP COLUMN "content";
  ALTER TABLE "pages_testimonials" DROP COLUMN "product";
  ALTER TABLE "pages_products_stats" DROP COLUMN "value";
  ALTER TABLE "pages_products_stats" DROP COLUMN "label";
  ALTER TABLE "pages_products_features" DROP COLUMN "text";
  ALTER TABLE "pages_products" DROP COLUMN "title";
  ALTER TABLE "pages_products" DROP COLUMN "subtitle";
  ALTER TABLE "pages_products" DROP COLUMN "cta_text";
  ALTER TABLE "pages_products" DROP COLUMN "secondary_cta_text";
  ALTER TABLE "pages_steps_bullet_points" DROP COLUMN "text";
  ALTER TABLE "pages_steps" DROP COLUMN "title";
  ALTER TABLE "pages_steps" DROP COLUMN "description";
  ALTER TABLE "pages_trust_features" DROP COLUMN "title";
  ALTER TABLE "pages_trust_features" DROP COLUMN "description";
  ALTER TABLE "pages_job_openings_skills" DROP COLUMN "skill";
  ALTER TABLE "pages_job_openings" DROP COLUMN "title";
  ALTER TABLE "pages_articles" DROP COLUMN "title";
  ALTER TABLE "pages_articles" DROP COLUMN "excerpt";
  ALTER TABLE "pages_articles" DROP COLUMN "category";
  ALTER TABLE "pages_articles" DROP COLUMN "author";
  ALTER TABLE "pages_articles" DROP COLUMN "date";
  ALTER TABLE "pages_articles" DROP COLUMN "read_time";
  ALTER TABLE "pages_guides" DROP COLUMN "title";
  ALTER TABLE "pages_guides" DROP COLUMN "description";
  ALTER TABLE "pages_guides" DROP COLUMN "category";
  ALTER TABLE "pages_reports" DROP COLUMN "title";
  ALTER TABLE "pages_reports" DROP COLUMN "type";
  ALTER TABLE "pages_reports" DROP COLUMN "date";
  ALTER TABLE "pages_reports" DROP COLUMN "size";
  ALTER TABLE "pages_faqs" DROP COLUMN "question";
  ALTER TABLE "pages_faqs" DROP COLUMN "answer";
  ALTER TABLE "pages_faqs" DROP COLUMN "category";
  ALTER TABLE "pages_contact_methods" DROP COLUMN "title";
  ALTER TABLE "pages_contact_methods" DROP COLUMN "description";
  ALTER TABLE "pages_contact_methods" DROP COLUMN "availability";
  ALTER TABLE "pages_business_hours" DROP COLUMN "day";
  ALTER TABLE "pages_business_hours" DROP COLUMN "time";
  ALTER TABLE "pages" DROP COLUMN "about_header_title";
  ALTER TABLE "pages" DROP COLUMN "about_header_subtitle";
  ALTER TABLE "pages" DROP COLUMN "about_story_title";
  ALTER TABLE "pages" DROP COLUMN "about_story_content";
  ALTER TABLE "pages" DROP COLUMN "stat1_number";
  ALTER TABLE "pages" DROP COLUMN "stat1_label";
  ALTER TABLE "pages" DROP COLUMN "stat2_number";
  ALTER TABLE "pages" DROP COLUMN "stat2_label";
  ALTER TABLE "pages" DROP COLUMN "stat3_number";
  ALTER TABLE "pages" DROP COLUMN "stat3_label";
  ALTER TABLE "pages" DROP COLUMN "stat4_number";
  ALTER TABLE "pages" DROP COLUMN "stat4_label";
  ALTER TABLE "pages" DROP COLUMN "mission_title";
  ALTER TABLE "pages" DROP COLUMN "mission_description";
  ALTER TABLE "pages" DROP COLUMN "vision_title";
  ALTER TABLE "pages" DROP COLUMN "vision_description";
  ALTER TABLE "pages" DROP COLUMN "values_title";
  ALTER TABLE "pages" DROP COLUMN "values_description";
  ALTER TABLE "pages" DROP COLUMN "directors_title";
  ALTER TABLE "pages" DROP COLUMN "directors_description";
  ALTER TABLE "pages" DROP COLUMN "leadership_title";
  ALTER TABLE "pages" DROP COLUMN "leadership_description";
  ALTER TABLE "pages" DROP COLUMN "timeline_title";
  ALTER TABLE "pages" DROP COLUMN "timeline_description";
  ALTER TABLE "pages" DROP COLUMN "testimonials_title";
  ALTER TABLE "pages" DROP COLUMN "testimonials_description";
  ALTER TABLE "pages" DROP COLUMN "compliance_title";
  ALTER TABLE "pages" DROP COLUMN "compliance_description";
  ALTER TABLE "pages" DROP COLUMN "badge1_text";
  ALTER TABLE "pages" DROP COLUMN "badge2_text";
  ALTER TABLE "pages" DROP COLUMN "badge3_text";
  ALTER TABLE "pages" DROP COLUMN "products_title";
  ALTER TABLE "pages" DROP COLUMN "products_description";
  ALTER TABLE "pages" DROP COLUMN "header_title";
  ALTER TABLE "pages" DROP COLUMN "header_subtitle";
  ALTER TABLE "pages" DROP COLUMN "career_header_title";
  ALTER TABLE "pages" DROP COLUMN "career_header_subtitle";
  ALTER TABLE "pages" DROP COLUMN "knowledge_center_header_title";
  ALTER TABLE "pages" DROP COLUMN "knowledge_center_header_subtitle";
  ALTER TABLE "pages" DROP COLUMN "contact_header_title";
  ALTER TABLE "pages" DROP COLUMN "contact_header_subtitle";
  ALTER TABLE "pages" DROP COLUMN "form_title";
  ALTER TABLE "pages" DROP COLUMN "business_hours_title";
  ALTER TABLE "pages" DROP COLUMN "business_hours_note";
  ALTER TABLE "pages" DROP COLUMN "hero_badge1";
  ALTER TABLE "pages" DROP COLUMN "hero_badge2";
  ALTER TABLE "pages" DROP COLUMN "hero_rating";
  ALTER TABLE "pages" DROP COLUMN "hero_title_part1";
  ALTER TABLE "pages" DROP COLUMN "hero_title_part2";
  ALTER TABLE "pages" DROP COLUMN "hero_subtitle";
  ALTER TABLE "pages" DROP COLUMN "journey_title";
  ALTER TABLE "pages" DROP COLUMN "journey_description";
  ALTER TABLE "pages" DROP COLUMN "quick_tools_title";
  ALTER TABLE "pages" DROP COLUMN "trust_title";
  ALTER TABLE "pages" DROP COLUMN "certification_title";
  ALTER TABLE "pages" DROP COLUMN "home_products_config_title";
  ALTER TABLE "pages" DROP COLUMN "home_products_config_description";
  ALTER TABLE "pages" DROP COLUMN "home_testimonials_config_title";
  ALTER TABLE "pages" DROP COLUMN "home_testimonials_config_description";
  ALTER TABLE "pages" DROP COLUMN "home_knowledge_config_title";
  ALTER TABLE "pages" DROP COLUMN "home_knowledge_config_description";
  ALTER TABLE "pages" DROP COLUMN "meta_title";
  ALTER TABLE "pages" DROP COLUMN "meta_image_id";
  ALTER TABLE "pages" DROP COLUMN "meta_description";
  ALTER TABLE "_pages_v_version_directors" DROP COLUMN "name";
  ALTER TABLE "_pages_v_version_directors" DROP COLUMN "position";
  ALTER TABLE "_pages_v_version_directors" DROP COLUMN "experience";
  ALTER TABLE "_pages_v_version_directors" DROP COLUMN "education";
  ALTER TABLE "_pages_v_version_directors" DROP COLUMN "specialization";
  ALTER TABLE "_pages_v_version_leadership" DROP COLUMN "name";
  ALTER TABLE "_pages_v_version_leadership" DROP COLUMN "position";
  ALTER TABLE "_pages_v_version_leadership" DROP COLUMN "department";
  ALTER TABLE "_pages_v_version_leadership" DROP COLUMN "experience";
  ALTER TABLE "_pages_v_version_leadership" DROP COLUMN "expertise";
  ALTER TABLE "_pages_v_version_timeline" DROP COLUMN "year";
  ALTER TABLE "_pages_v_version_timeline" DROP COLUMN "event";
  ALTER TABLE "_pages_v_version_timeline" DROP COLUMN "description";
  ALTER TABLE "_pages_v_version_stats" DROP COLUMN "value";
  ALTER TABLE "_pages_v_version_stats" DROP COLUMN "label";
  ALTER TABLE "_pages_v_version_testimonials" DROP COLUMN "name";
  ALTER TABLE "_pages_v_version_testimonials" DROP COLUMN "role";
  ALTER TABLE "_pages_v_version_testimonials" DROP COLUMN "location";
  ALTER TABLE "_pages_v_version_testimonials" DROP COLUMN "content";
  ALTER TABLE "_pages_v_version_testimonials" DROP COLUMN "product";
  ALTER TABLE "_pages_v_version_products_stats" DROP COLUMN "value";
  ALTER TABLE "_pages_v_version_products_stats" DROP COLUMN "label";
  ALTER TABLE "_pages_v_version_products_features" DROP COLUMN "text";
  ALTER TABLE "_pages_v_version_products" DROP COLUMN "title";
  ALTER TABLE "_pages_v_version_products" DROP COLUMN "subtitle";
  ALTER TABLE "_pages_v_version_products" DROP COLUMN "cta_text";
  ALTER TABLE "_pages_v_version_products" DROP COLUMN "secondary_cta_text";
  ALTER TABLE "_pages_v_version_steps_bullet_points" DROP COLUMN "text";
  ALTER TABLE "_pages_v_version_steps" DROP COLUMN "title";
  ALTER TABLE "_pages_v_version_steps" DROP COLUMN "description";
  ALTER TABLE "_pages_v_version_trust_features" DROP COLUMN "title";
  ALTER TABLE "_pages_v_version_trust_features" DROP COLUMN "description";
  ALTER TABLE "_pages_v_version_job_openings_skills" DROP COLUMN "skill";
  ALTER TABLE "_pages_v_version_job_openings" DROP COLUMN "title";
  ALTER TABLE "_pages_v_version_articles" DROP COLUMN "title";
  ALTER TABLE "_pages_v_version_articles" DROP COLUMN "excerpt";
  ALTER TABLE "_pages_v_version_articles" DROP COLUMN "category";
  ALTER TABLE "_pages_v_version_articles" DROP COLUMN "author";
  ALTER TABLE "_pages_v_version_articles" DROP COLUMN "date";
  ALTER TABLE "_pages_v_version_articles" DROP COLUMN "read_time";
  ALTER TABLE "_pages_v_version_guides" DROP COLUMN "title";
  ALTER TABLE "_pages_v_version_guides" DROP COLUMN "description";
  ALTER TABLE "_pages_v_version_guides" DROP COLUMN "category";
  ALTER TABLE "_pages_v_version_reports" DROP COLUMN "title";
  ALTER TABLE "_pages_v_version_reports" DROP COLUMN "type";
  ALTER TABLE "_pages_v_version_reports" DROP COLUMN "date";
  ALTER TABLE "_pages_v_version_reports" DROP COLUMN "size";
  ALTER TABLE "_pages_v_version_faqs" DROP COLUMN "question";
  ALTER TABLE "_pages_v_version_faqs" DROP COLUMN "answer";
  ALTER TABLE "_pages_v_version_faqs" DROP COLUMN "category";
  ALTER TABLE "_pages_v_version_contact_methods" DROP COLUMN "title";
  ALTER TABLE "_pages_v_version_contact_methods" DROP COLUMN "description";
  ALTER TABLE "_pages_v_version_contact_methods" DROP COLUMN "availability";
  ALTER TABLE "_pages_v_version_business_hours" DROP COLUMN "day";
  ALTER TABLE "_pages_v_version_business_hours" DROP COLUMN "time";
  ALTER TABLE "_pages_v" DROP COLUMN "version_about_header_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_about_header_subtitle";
  ALTER TABLE "_pages_v" DROP COLUMN "version_about_story_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_about_story_content";
  ALTER TABLE "_pages_v" DROP COLUMN "version_stat1_number";
  ALTER TABLE "_pages_v" DROP COLUMN "version_stat1_label";
  ALTER TABLE "_pages_v" DROP COLUMN "version_stat2_number";
  ALTER TABLE "_pages_v" DROP COLUMN "version_stat2_label";
  ALTER TABLE "_pages_v" DROP COLUMN "version_stat3_number";
  ALTER TABLE "_pages_v" DROP COLUMN "version_stat3_label";
  ALTER TABLE "_pages_v" DROP COLUMN "version_stat4_number";
  ALTER TABLE "_pages_v" DROP COLUMN "version_stat4_label";
  ALTER TABLE "_pages_v" DROP COLUMN "version_mission_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_mission_description";
  ALTER TABLE "_pages_v" DROP COLUMN "version_vision_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_vision_description";
  ALTER TABLE "_pages_v" DROP COLUMN "version_values_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_values_description";
  ALTER TABLE "_pages_v" DROP COLUMN "version_directors_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_directors_description";
  ALTER TABLE "_pages_v" DROP COLUMN "version_leadership_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_leadership_description";
  ALTER TABLE "_pages_v" DROP COLUMN "version_timeline_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_timeline_description";
  ALTER TABLE "_pages_v" DROP COLUMN "version_testimonials_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_testimonials_description";
  ALTER TABLE "_pages_v" DROP COLUMN "version_compliance_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_compliance_description";
  ALTER TABLE "_pages_v" DROP COLUMN "version_badge1_text";
  ALTER TABLE "_pages_v" DROP COLUMN "version_badge2_text";
  ALTER TABLE "_pages_v" DROP COLUMN "version_badge3_text";
  ALTER TABLE "_pages_v" DROP COLUMN "version_products_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_products_description";
  ALTER TABLE "_pages_v" DROP COLUMN "version_header_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_header_subtitle";
  ALTER TABLE "_pages_v" DROP COLUMN "version_career_header_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_career_header_subtitle";
  ALTER TABLE "_pages_v" DROP COLUMN "version_knowledge_center_header_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_knowledge_center_header_subtitle";
  ALTER TABLE "_pages_v" DROP COLUMN "version_contact_header_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_contact_header_subtitle";
  ALTER TABLE "_pages_v" DROP COLUMN "version_form_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_business_hours_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_business_hours_note";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_badge1";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_badge2";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_rating";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_title_part1";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_title_part2";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_subtitle";
  ALTER TABLE "_pages_v" DROP COLUMN "version_journey_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_journey_description";
  ALTER TABLE "_pages_v" DROP COLUMN "version_quick_tools_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_trust_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_certification_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_home_products_config_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_home_products_config_description";
  ALTER TABLE "_pages_v" DROP COLUMN "version_home_testimonials_config_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_home_testimonials_config_description";
  ALTER TABLE "_pages_v" DROP COLUMN "version_home_knowledge_config_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_home_knowledge_config_description";
  ALTER TABLE "_pages_v" DROP COLUMN "version_meta_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_meta_image_id";
  ALTER TABLE "_pages_v" DROP COLUMN "version_meta_description";
  ALTER TABLE "pages_floating_features" DROP COLUMN "text";
  ALTER TABLE "pages_hero_stats" DROP COLUMN "value";
  ALTER TABLE "pages_hero_stats" DROP COLUMN "label";
  ALTER TABLE "pages_journey_cards" DROP COLUMN "title";
  ALTER TABLE "pages_journey_cards" DROP COLUMN "description";
  ALTER TABLE "pages_journey_cards" DROP COLUMN "link_text";
  ALTER TABLE "pages_quick_tools" DROP COLUMN "name";
  ALTER TABLE "pages_quick_tools" DROP COLUMN "description";
  ALTER TABLE "pages_quick_tools" DROP COLUMN "button_text";
  ALTER TABLE "pages_trust_stats" DROP COLUMN "value";
  ALTER TABLE "pages_trust_stats" DROP COLUMN "label";
  ALTER TABLE "pages_trust_stats" DROP COLUMN "sub_label";
  ALTER TABLE "pages_badges" DROP COLUMN "title";
  ALTER TABLE "pages_badges" DROP COLUMN "sub_title";
  ALTER TABLE "pages_scrolling_notices" DROP COLUMN "message";
  ALTER TABLE "_pages_v_version_floating_features" DROP COLUMN "text";
  ALTER TABLE "_pages_v_version_hero_stats" DROP COLUMN "value";
  ALTER TABLE "_pages_v_version_hero_stats" DROP COLUMN "label";
  ALTER TABLE "_pages_v_version_journey_cards" DROP COLUMN "title";
  ALTER TABLE "_pages_v_version_journey_cards" DROP COLUMN "description";
  ALTER TABLE "_pages_v_version_journey_cards" DROP COLUMN "link_text";
  ALTER TABLE "_pages_v_version_quick_tools" DROP COLUMN "name";
  ALTER TABLE "_pages_v_version_quick_tools" DROP COLUMN "description";
  ALTER TABLE "_pages_v_version_quick_tools" DROP COLUMN "button_text";
  ALTER TABLE "_pages_v_version_trust_stats" DROP COLUMN "value";
  ALTER TABLE "_pages_v_version_trust_stats" DROP COLUMN "label";
  ALTER TABLE "_pages_v_version_trust_stats" DROP COLUMN "sub_label";
  ALTER TABLE "_pages_v_version_badges" DROP COLUMN "title";
  ALTER TABLE "_pages_v_version_badges" DROP COLUMN "sub_title";
  ALTER TABLE "_pages_v_version_scrolling_notices" DROP COLUMN "message";
  ALTER TABLE "posts" DROP COLUMN "meta_title";
  ALTER TABLE "posts" DROP COLUMN "meta_image_id";
  ALTER TABLE "posts" DROP COLUMN "meta_description";
  ALTER TABLE "_posts_v" DROP COLUMN "version_meta_title";
  ALTER TABLE "_posts_v" DROP COLUMN "version_meta_image_id";
  ALTER TABLE "_posts_v" DROP COLUMN "version_meta_description";
  ALTER TABLE "forms_emails" DROP COLUMN "subject";
  ALTER TABLE "forms_emails" DROP COLUMN "message";
  ALTER TABLE "forms" DROP COLUMN "title";
  ALTER TABLE "forms" DROP COLUMN "submit_button_label";
  ALTER TABLE "forms" DROP COLUMN "confirmation_message";
  ALTER TABLE "search" DROP COLUMN "title";
  ALTER TABLE "footer" DROP COLUMN "description";
  ALTER TABLE "footer" DROP COLUMN "contact_info_address";
  ALTER TABLE "footer" DROP COLUMN "copyright_text";
  ALTER TABLE "footer" DROP COLUMN "newsletter_title";
  ALTER TABLE "footer" DROP COLUMN "newsletter_description";
  ALTER TABLE "footer" DROP COLUMN "newsletter_placeholder";
  ALTER TABLE "footer" DROP COLUMN "newsletter_button_label";
  ALTER TABLE "site_settings" DROP COLUMN "site_title";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_directors_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_leadership_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_timeline_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_stats_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_testimonials_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_products_stats_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_products_features_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_products_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_steps_bullet_points_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_steps_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_trust_features_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_job_openings_skills_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_job_openings_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_articles_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_guides_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_reports_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_faqs_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_contact_methods_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_business_hours_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_floating_features_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_hero_stats_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_hero_c_t_as" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_hero_c_t_as_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_journey_cards_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_quick_tools_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_trust_stats_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_badges_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_scrolling_notices_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_directors_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_leadership_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_timeline_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_stats_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_testimonials_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_products_stats_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_products_features_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_products_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_steps_bullet_points_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_steps_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_trust_features_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_job_openings_skills_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_job_openings_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_articles_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_guides_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_reports_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_faqs_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_contact_methods_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_business_hours_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_floating_features_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_hero_stats_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_hero_c_t_as" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_hero_c_t_as_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_journey_cards_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_quick_tools_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_trust_stats_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_badges_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_scrolling_notices_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "posts_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_posts_v_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "forms_emails_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "forms_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "search_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "header_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footer_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "site_settings_locales" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_directors_locales" CASCADE;
  DROP TABLE "pages_leadership_locales" CASCADE;
  DROP TABLE "pages_timeline_locales" CASCADE;
  DROP TABLE "pages_stats_locales" CASCADE;
  DROP TABLE "pages_testimonials_locales" CASCADE;
  DROP TABLE "pages_products_stats_locales" CASCADE;
  DROP TABLE "pages_products_features_locales" CASCADE;
  DROP TABLE "pages_products_locales" CASCADE;
  DROP TABLE "pages_steps_bullet_points_locales" CASCADE;
  DROP TABLE "pages_steps_locales" CASCADE;
  DROP TABLE "pages_trust_features_locales" CASCADE;
  DROP TABLE "pages_job_openings_skills_locales" CASCADE;
  DROP TABLE "pages_job_openings_locales" CASCADE;
  DROP TABLE "pages_articles_locales" CASCADE;
  DROP TABLE "pages_guides_locales" CASCADE;
  DROP TABLE "pages_reports_locales" CASCADE;
  DROP TABLE "pages_faqs_locales" CASCADE;
  DROP TABLE "pages_contact_methods_locales" CASCADE;
  DROP TABLE "pages_business_hours_locales" CASCADE;
  DROP TABLE "pages_floating_features_locales" CASCADE;
  DROP TABLE "pages_hero_stats_locales" CASCADE;
  DROP TABLE "pages_hero_c_t_as" CASCADE;
  DROP TABLE "pages_hero_c_t_as_locales" CASCADE;
  DROP TABLE "pages_journey_cards_locales" CASCADE;
  DROP TABLE "pages_quick_tools_locales" CASCADE;
  DROP TABLE "pages_trust_stats_locales" CASCADE;
  DROP TABLE "pages_badges_locales" CASCADE;
  DROP TABLE "pages_scrolling_notices_locales" CASCADE;
  DROP TABLE "pages_locales" CASCADE;
  DROP TABLE "_pages_v_version_directors_locales" CASCADE;
  DROP TABLE "_pages_v_version_leadership_locales" CASCADE;
  DROP TABLE "_pages_v_version_timeline_locales" CASCADE;
  DROP TABLE "_pages_v_version_stats_locales" CASCADE;
  DROP TABLE "_pages_v_version_testimonials_locales" CASCADE;
  DROP TABLE "_pages_v_version_products_stats_locales" CASCADE;
  DROP TABLE "_pages_v_version_products_features_locales" CASCADE;
  DROP TABLE "_pages_v_version_products_locales" CASCADE;
  DROP TABLE "_pages_v_version_steps_bullet_points_locales" CASCADE;
  DROP TABLE "_pages_v_version_steps_locales" CASCADE;
  DROP TABLE "_pages_v_version_trust_features_locales" CASCADE;
  DROP TABLE "_pages_v_version_job_openings_skills_locales" CASCADE;
  DROP TABLE "_pages_v_version_job_openings_locales" CASCADE;
  DROP TABLE "_pages_v_version_articles_locales" CASCADE;
  DROP TABLE "_pages_v_version_guides_locales" CASCADE;
  DROP TABLE "_pages_v_version_reports_locales" CASCADE;
  DROP TABLE "_pages_v_version_faqs_locales" CASCADE;
  DROP TABLE "_pages_v_version_contact_methods_locales" CASCADE;
  DROP TABLE "_pages_v_version_business_hours_locales" CASCADE;
  DROP TABLE "_pages_v_version_floating_features_locales" CASCADE;
  DROP TABLE "_pages_v_version_hero_stats_locales" CASCADE;
  DROP TABLE "_pages_v_version_hero_c_t_as" CASCADE;
  DROP TABLE "_pages_v_version_hero_c_t_as_locales" CASCADE;
  DROP TABLE "_pages_v_version_journey_cards_locales" CASCADE;
  DROP TABLE "_pages_v_version_quick_tools_locales" CASCADE;
  DROP TABLE "_pages_v_version_trust_stats_locales" CASCADE;
  DROP TABLE "_pages_v_version_badges_locales" CASCADE;
  DROP TABLE "_pages_v_version_scrolling_notices_locales" CASCADE;
  DROP TABLE "_pages_v_locales" CASCADE;
  DROP TABLE "posts_locales" CASCADE;
  DROP TABLE "_posts_v_locales" CASCADE;
  DROP TABLE "forms_emails_locales" CASCADE;
  DROP TABLE "forms_locales" CASCADE;
  DROP TABLE "search_locales" CASCADE;
  DROP TABLE "header_locales" CASCADE;
  DROP TABLE "footer_locales" CASCADE;
  DROP TABLE "site_settings_locales" CASCADE;
  DROP INDEX "_pages_v_snapshot_10_idx";
  DROP INDEX "_pages_v_published_locale_10_idx";
  DROP INDEX "_posts_v_snapshot_idx";
  DROP INDEX "_posts_v_published_locale_idx";
  DROP INDEX "categories_breadcrumbs_locale_idx";
  DROP INDEX "forms_blocks_checkbox_locale_idx";
  DROP INDEX "forms_blocks_country_locale_idx";
  DROP INDEX "forms_blocks_email_locale_idx";
  DROP INDEX "forms_blocks_message_locale_idx";
  DROP INDEX "forms_blocks_number_locale_idx";
  DROP INDEX "forms_blocks_select_options_locale_idx";
  DROP INDEX "forms_blocks_select_locale_idx";
  DROP INDEX "forms_blocks_state_locale_idx";
  DROP INDEX "forms_blocks_text_locale_idx";
  DROP INDEX "forms_blocks_textarea_locale_idx";
  DROP INDEX "forms_blocks_file_locale_idx";
  DROP INDEX "header_nav_items_locale_idx";
  DROP INDEX "header_rels_locale_idx";
  DROP INDEX "footer_quick_links_locale_idx";
  DROP INDEX "footer_our_products_locale_idx";
  DROP INDEX "footer_legal_compliance_locale_idx";
  DROP INDEX "footer_rels_locale_idx";
  DROP INDEX "header_rels_pages_id_idx";
  DROP INDEX "header_rels_posts_id_idx";
  DROP INDEX "footer_rels_pages_id_idx";
  DROP INDEX "footer_rels_posts_id_idx";
  ALTER TABLE "pages_directors" ADD COLUMN "name" varchar;
  ALTER TABLE "pages_directors" ADD COLUMN "position" varchar;
  ALTER TABLE "pages_directors" ADD COLUMN "experience" varchar;
  ALTER TABLE "pages_directors" ADD COLUMN "education" varchar;
  ALTER TABLE "pages_directors" ADD COLUMN "specialization" varchar;
  ALTER TABLE "pages_leadership" ADD COLUMN "name" varchar;
  ALTER TABLE "pages_leadership" ADD COLUMN "position" varchar;
  ALTER TABLE "pages_leadership" ADD COLUMN "department" varchar;
  ALTER TABLE "pages_leadership" ADD COLUMN "experience" varchar;
  ALTER TABLE "pages_leadership" ADD COLUMN "expertise" varchar;
  ALTER TABLE "pages_timeline" ADD COLUMN "year" varchar;
  ALTER TABLE "pages_timeline" ADD COLUMN "event" varchar;
  ALTER TABLE "pages_timeline" ADD COLUMN "description" varchar;
  ALTER TABLE "pages_stats" ADD COLUMN "value" varchar;
  ALTER TABLE "pages_stats" ADD COLUMN "label" varchar;
  ALTER TABLE "pages_testimonials" ADD COLUMN "name" varchar;
  ALTER TABLE "pages_testimonials" ADD COLUMN "role" varchar;
  ALTER TABLE "pages_testimonials" ADD COLUMN "location" varchar;
  ALTER TABLE "pages_testimonials" ADD COLUMN "content" varchar;
  ALTER TABLE "pages_testimonials" ADD COLUMN "product" varchar;
  ALTER TABLE "pages_products_stats" ADD COLUMN "value" varchar;
  ALTER TABLE "pages_products_stats" ADD COLUMN "label" varchar;
  ALTER TABLE "pages_products_features" ADD COLUMN "text" varchar;
  ALTER TABLE "pages_products" ADD COLUMN "title" varchar;
  ALTER TABLE "pages_products" ADD COLUMN "subtitle" varchar;
  ALTER TABLE "pages_products" ADD COLUMN "cta_text" varchar DEFAULT 'Apply Now';
  ALTER TABLE "pages_products" ADD COLUMN "secondary_cta_text" varchar DEFAULT 'Learn More';
  ALTER TABLE "pages_steps_bullet_points" ADD COLUMN "text" varchar;
  ALTER TABLE "pages_steps" ADD COLUMN "title" varchar;
  ALTER TABLE "pages_steps" ADD COLUMN "description" varchar;
  ALTER TABLE "pages_trust_features" ADD COLUMN "title" varchar;
  ALTER TABLE "pages_trust_features" ADD COLUMN "description" varchar;
  ALTER TABLE "pages_job_openings_skills" ADD COLUMN "skill" varchar;
  ALTER TABLE "pages_job_openings" ADD COLUMN "title" varchar;
  ALTER TABLE "pages_articles" ADD COLUMN "title" varchar;
  ALTER TABLE "pages_articles" ADD COLUMN "excerpt" varchar;
  ALTER TABLE "pages_articles" ADD COLUMN "category" varchar;
  ALTER TABLE "pages_articles" ADD COLUMN "author" varchar;
  ALTER TABLE "pages_articles" ADD COLUMN "date" varchar;
  ALTER TABLE "pages_articles" ADD COLUMN "read_time" varchar;
  ALTER TABLE "pages_guides" ADD COLUMN "title" varchar;
  ALTER TABLE "pages_guides" ADD COLUMN "description" varchar;
  ALTER TABLE "pages_guides" ADD COLUMN "category" varchar;
  ALTER TABLE "pages_reports" ADD COLUMN "title" varchar;
  ALTER TABLE "pages_reports" ADD COLUMN "type" varchar;
  ALTER TABLE "pages_reports" ADD COLUMN "date" varchar;
  ALTER TABLE "pages_reports" ADD COLUMN "size" varchar;
  ALTER TABLE "pages_faqs" ADD COLUMN "question" varchar;
  ALTER TABLE "pages_faqs" ADD COLUMN "answer" varchar;
  ALTER TABLE "pages_faqs" ADD COLUMN "category" varchar;
  ALTER TABLE "pages_contact_methods" ADD COLUMN "title" varchar;
  ALTER TABLE "pages_contact_methods" ADD COLUMN "description" varchar;
  ALTER TABLE "pages_contact_methods" ADD COLUMN "availability" varchar;
  ALTER TABLE "pages_business_hours" ADD COLUMN "day" varchar DEFAULT 'Monday - Friday';
  ALTER TABLE "pages_business_hours" ADD COLUMN "time" varchar DEFAULT '9:00 AM to 6:00 PM';
  ALTER TABLE "pages_floating_features" ADD COLUMN "text" varchar;
  ALTER TABLE "pages_hero_stats" ADD COLUMN "value" varchar;
  ALTER TABLE "pages_hero_stats" ADD COLUMN "label" varchar;
  ALTER TABLE "pages_journey_cards" ADD COLUMN "title" varchar;
  ALTER TABLE "pages_journey_cards" ADD COLUMN "description" varchar;
  ALTER TABLE "pages_journey_cards" ADD COLUMN "link_text" varchar DEFAULT 'Explore';
  ALTER TABLE "pages_quick_tools" ADD COLUMN "name" varchar;
  ALTER TABLE "pages_quick_tools" ADD COLUMN "description" varchar;
  ALTER TABLE "pages_quick_tools" ADD COLUMN "button_text" varchar DEFAULT 'Calculate Now';
  ALTER TABLE "pages_trust_stats" ADD COLUMN "value" varchar;
  ALTER TABLE "pages_trust_stats" ADD COLUMN "label" varchar;
  ALTER TABLE "pages_trust_stats" ADD COLUMN "sub_label" varchar;
  ALTER TABLE "pages_badges" ADD COLUMN "title" varchar;
  ALTER TABLE "pages_badges" ADD COLUMN "sub_title" varchar;
  ALTER TABLE "pages_scrolling_notices" ADD COLUMN "message" varchar;
  ALTER TABLE "pages" ADD COLUMN "about_header_title" varchar DEFAULT 'About Batas Hire and Purchase';
  ALTER TABLE "pages" ADD COLUMN "about_header_subtitle" varchar DEFAULT 'We''re on a mission to make financial services more accessible...';
  ALTER TABLE "pages" ADD COLUMN "about_story_title" varchar DEFAULT '22 Years of Growth in Financial Services';
  ALTER TABLE "pages" ADD COLUMN "about_story_content" jsonb;
  ALTER TABLE "pages" ADD COLUMN "stat1_number" varchar DEFAULT '50,000+';
  ALTER TABLE "pages" ADD COLUMN "stat1_label" varchar DEFAULT 'Happy Customers';
  ALTER TABLE "pages" ADD COLUMN "stat2_number" varchar DEFAULT '₹500 Cr+';
  ALTER TABLE "pages" ADD COLUMN "stat2_label" varchar DEFAULT 'Loans Disbursed';
  ALTER TABLE "pages" ADD COLUMN "stat3_number" varchar DEFAULT '99.2%';
  ALTER TABLE "pages" ADD COLUMN "stat3_label" varchar DEFAULT 'Customer Satisfaction';
  ALTER TABLE "pages" ADD COLUMN "stat4_number" varchar DEFAULT '15+';
  ALTER TABLE "pages" ADD COLUMN "stat4_label" varchar DEFAULT 'Banking Partners';
  ALTER TABLE "pages" ADD COLUMN "mission_title" varchar DEFAULT 'Our Mission';
  ALTER TABLE "pages" ADD COLUMN "mission_description" varchar;
  ALTER TABLE "pages" ADD COLUMN "vision_title" varchar DEFAULT 'Our Vision';
  ALTER TABLE "pages" ADD COLUMN "vision_description" varchar;
  ALTER TABLE "pages" ADD COLUMN "values_title" varchar DEFAULT 'Our Values';
  ALTER TABLE "pages" ADD COLUMN "values_description" varchar;
  ALTER TABLE "pages" ADD COLUMN "directors_title" varchar DEFAULT 'Board of Directors';
  ALTER TABLE "pages" ADD COLUMN "directors_description" varchar DEFAULT 'Experienced leadership guiding our strategic vision';
  ALTER TABLE "pages" ADD COLUMN "leadership_title" varchar DEFAULT 'Leadership Team';
  ALTER TABLE "pages" ADD COLUMN "leadership_description" varchar DEFAULT 'Meet our executive team driving operational excellence';
  ALTER TABLE "pages" ADD COLUMN "timeline_title" varchar DEFAULT '22 Years of Growth';
  ALTER TABLE "pages" ADD COLUMN "timeline_description" varchar DEFAULT 'Our journey from inception to industry leadership';
  ALTER TABLE "pages" ADD COLUMN "testimonials_title" varchar DEFAULT 'What Our Customers Say';
  ALTER TABLE "pages" ADD COLUMN "testimonials_description" varchar DEFAULT 'Don''t just take our word for it. Hear from thousands of satisfied customers across India.';
  ALTER TABLE "pages" ADD COLUMN "compliance_title" varchar DEFAULT 'Regulatory Compliance';
  ALTER TABLE "pages" ADD COLUMN "compliance_description" varchar;
  ALTER TABLE "pages" ADD COLUMN "badge1_text" varchar DEFAULT 'RBI Licensed NBFC';
  ALTER TABLE "pages" ADD COLUMN "badge2_text" varchar DEFAULT 'ISO 27001 Certified';
  ALTER TABLE "pages" ADD COLUMN "badge3_text" varchar DEFAULT 'PCI DSS Compliant';
  ALTER TABLE "pages" ADD COLUMN "products_title" varchar DEFAULT 'Our Financial Solutions';
  ALTER TABLE "pages" ADD COLUMN "products_description" varchar DEFAULT 'Tailored financing options to meet your diverse needs with transparent terms and competitive rates';
  ALTER TABLE "pages" ADD COLUMN "header_title" varchar DEFAULT 'How It Works';
  ALTER TABLE "pages" ADD COLUMN "header_subtitle" varchar DEFAULT 'Get approved and funded in just 4 simple steps...';
  ALTER TABLE "pages" ADD COLUMN "career_header_title" varchar DEFAULT 'Build Your Future With Us';
  ALTER TABLE "pages" ADD COLUMN "career_header_subtitle" varchar DEFAULT 'Join our dynamic team and be part of Nepal''s leading financial services company';
  ALTER TABLE "pages" ADD COLUMN "knowledge_center_header_title" varchar DEFAULT 'Knowledge Center';
  ALTER TABLE "pages" ADD COLUMN "knowledge_center_header_subtitle" varchar DEFAULT 'Stay informed with expert insights, financial tips, and industry trends';
  ALTER TABLE "pages" ADD COLUMN "contact_header_title" varchar DEFAULT 'Get In Touch';
  ALTER TABLE "pages" ADD COLUMN "contact_header_subtitle" varchar DEFAULT 'Have questions about our financial services? We''re here to help you 24/7 with personalized support.';
  ALTER TABLE "pages" ADD COLUMN "form_title" varchar DEFAULT 'Send Us a Message';
  ALTER TABLE "pages" ADD COLUMN "business_hours_title" varchar DEFAULT 'Business Hours';
  ALTER TABLE "pages" ADD COLUMN "business_hours_note" varchar DEFAULT '24/7 Customer Support Available';
  ALTER TABLE "pages" ADD COLUMN "hero_badge1" varchar DEFAULT 'NBFC Licensed';
  ALTER TABLE "pages" ADD COLUMN "hero_badge2" varchar DEFAULT 'Secure & Trusted';
  ALTER TABLE "pages" ADD COLUMN "hero_rating" varchar DEFAULT '4.9/5';
  ALTER TABLE "pages" ADD COLUMN "hero_title_part1" varchar DEFAULT 'Smart Finance';
  ALTER TABLE "pages" ADD COLUMN "hero_title_part2" varchar DEFAULT 'Made Simple';
  ALTER TABLE "pages" ADD COLUMN "hero_subtitle" varchar DEFAULT 'Instant BNPL solutions and vehicle financing with transparent terms...';
  ALTER TABLE "pages" ADD COLUMN "journey_title" varchar DEFAULT 'Your Financial Journey Simplified';
  ALTER TABLE "pages" ADD COLUMN "journey_description" varchar DEFAULT 'Discover our comprehensive financial services...';
  ALTER TABLE "pages" ADD COLUMN "quick_tools_title" varchar DEFAULT 'Quick Tools';
  ALTER TABLE "pages" ADD COLUMN "trust_title" varchar DEFAULT 'Trusted by Thousands';
  ALTER TABLE "pages" ADD COLUMN "certification_title" varchar DEFAULT 'Licensed & Certified';
  ALTER TABLE "pages" ADD COLUMN "home_products_config_title" varchar DEFAULT 'Our Final Solutions';
  ALTER TABLE "pages" ADD COLUMN "home_products_config_description" varchar;
  ALTER TABLE "pages" ADD COLUMN "home_testimonials_config_title" varchar DEFAULT 'What Our Customers Say';
  ALTER TABLE "pages" ADD COLUMN "home_testimonials_config_description" varchar;
  ALTER TABLE "pages" ADD COLUMN "home_knowledge_config_title" varchar DEFAULT 'Latest News & Updates';
  ALTER TABLE "pages" ADD COLUMN "home_knowledge_config_description" varchar;
  ALTER TABLE "pages" ADD COLUMN "meta_title" varchar;
  ALTER TABLE "pages" ADD COLUMN "meta_image_id" integer;
  ALTER TABLE "pages" ADD COLUMN "meta_description" varchar;
  ALTER TABLE "_pages_v_version_directors" ADD COLUMN "name" varchar;
  ALTER TABLE "_pages_v_version_directors" ADD COLUMN "position" varchar;
  ALTER TABLE "_pages_v_version_directors" ADD COLUMN "experience" varchar;
  ALTER TABLE "_pages_v_version_directors" ADD COLUMN "education" varchar;
  ALTER TABLE "_pages_v_version_directors" ADD COLUMN "specialization" varchar;
  ALTER TABLE "_pages_v_version_leadership" ADD COLUMN "name" varchar;
  ALTER TABLE "_pages_v_version_leadership" ADD COLUMN "position" varchar;
  ALTER TABLE "_pages_v_version_leadership" ADD COLUMN "department" varchar;
  ALTER TABLE "_pages_v_version_leadership" ADD COLUMN "experience" varchar;
  ALTER TABLE "_pages_v_version_leadership" ADD COLUMN "expertise" varchar;
  ALTER TABLE "_pages_v_version_timeline" ADD COLUMN "year" varchar;
  ALTER TABLE "_pages_v_version_timeline" ADD COLUMN "event" varchar;
  ALTER TABLE "_pages_v_version_timeline" ADD COLUMN "description" varchar;
  ALTER TABLE "_pages_v_version_stats" ADD COLUMN "value" varchar;
  ALTER TABLE "_pages_v_version_stats" ADD COLUMN "label" varchar;
  ALTER TABLE "_pages_v_version_testimonials" ADD COLUMN "name" varchar;
  ALTER TABLE "_pages_v_version_testimonials" ADD COLUMN "role" varchar;
  ALTER TABLE "_pages_v_version_testimonials" ADD COLUMN "location" varchar;
  ALTER TABLE "_pages_v_version_testimonials" ADD COLUMN "content" varchar;
  ALTER TABLE "_pages_v_version_testimonials" ADD COLUMN "product" varchar;
  ALTER TABLE "_pages_v_version_products_stats" ADD COLUMN "value" varchar;
  ALTER TABLE "_pages_v_version_products_stats" ADD COLUMN "label" varchar;
  ALTER TABLE "_pages_v_version_products_features" ADD COLUMN "text" varchar;
  ALTER TABLE "_pages_v_version_products" ADD COLUMN "title" varchar;
  ALTER TABLE "_pages_v_version_products" ADD COLUMN "subtitle" varchar;
  ALTER TABLE "_pages_v_version_products" ADD COLUMN "cta_text" varchar DEFAULT 'Apply Now';
  ALTER TABLE "_pages_v_version_products" ADD COLUMN "secondary_cta_text" varchar DEFAULT 'Learn More';
  ALTER TABLE "_pages_v_version_steps_bullet_points" ADD COLUMN "text" varchar;
  ALTER TABLE "_pages_v_version_steps" ADD COLUMN "title" varchar;
  ALTER TABLE "_pages_v_version_steps" ADD COLUMN "description" varchar;
  ALTER TABLE "_pages_v_version_trust_features" ADD COLUMN "title" varchar;
  ALTER TABLE "_pages_v_version_trust_features" ADD COLUMN "description" varchar;
  ALTER TABLE "_pages_v_version_job_openings_skills" ADD COLUMN "skill" varchar;
  ALTER TABLE "_pages_v_version_job_openings" ADD COLUMN "title" varchar;
  ALTER TABLE "_pages_v_version_articles" ADD COLUMN "title" varchar;
  ALTER TABLE "_pages_v_version_articles" ADD COLUMN "excerpt" varchar;
  ALTER TABLE "_pages_v_version_articles" ADD COLUMN "category" varchar;
  ALTER TABLE "_pages_v_version_articles" ADD COLUMN "author" varchar;
  ALTER TABLE "_pages_v_version_articles" ADD COLUMN "date" varchar;
  ALTER TABLE "_pages_v_version_articles" ADD COLUMN "read_time" varchar;
  ALTER TABLE "_pages_v_version_guides" ADD COLUMN "title" varchar;
  ALTER TABLE "_pages_v_version_guides" ADD COLUMN "description" varchar;
  ALTER TABLE "_pages_v_version_guides" ADD COLUMN "category" varchar;
  ALTER TABLE "_pages_v_version_reports" ADD COLUMN "title" varchar;
  ALTER TABLE "_pages_v_version_reports" ADD COLUMN "type" varchar;
  ALTER TABLE "_pages_v_version_reports" ADD COLUMN "date" varchar;
  ALTER TABLE "_pages_v_version_reports" ADD COLUMN "size" varchar;
  ALTER TABLE "_pages_v_version_faqs" ADD COLUMN "question" varchar;
  ALTER TABLE "_pages_v_version_faqs" ADD COLUMN "answer" varchar;
  ALTER TABLE "_pages_v_version_faqs" ADD COLUMN "category" varchar;
  ALTER TABLE "_pages_v_version_contact_methods" ADD COLUMN "title" varchar;
  ALTER TABLE "_pages_v_version_contact_methods" ADD COLUMN "description" varchar;
  ALTER TABLE "_pages_v_version_contact_methods" ADD COLUMN "availability" varchar;
  ALTER TABLE "_pages_v_version_business_hours" ADD COLUMN "day" varchar DEFAULT 'Monday - Friday';
  ALTER TABLE "_pages_v_version_business_hours" ADD COLUMN "time" varchar DEFAULT '9:00 AM to 6:00 PM';
  ALTER TABLE "_pages_v_version_floating_features" ADD COLUMN "text" varchar;
  ALTER TABLE "_pages_v_version_hero_stats" ADD COLUMN "value" varchar;
  ALTER TABLE "_pages_v_version_hero_stats" ADD COLUMN "label" varchar;
  ALTER TABLE "_pages_v_version_journey_cards" ADD COLUMN "title" varchar;
  ALTER TABLE "_pages_v_version_journey_cards" ADD COLUMN "description" varchar;
  ALTER TABLE "_pages_v_version_journey_cards" ADD COLUMN "link_text" varchar DEFAULT 'Explore';
  ALTER TABLE "_pages_v_version_quick_tools" ADD COLUMN "name" varchar;
  ALTER TABLE "_pages_v_version_quick_tools" ADD COLUMN "description" varchar;
  ALTER TABLE "_pages_v_version_quick_tools" ADD COLUMN "button_text" varchar DEFAULT 'Calculate Now';
  ALTER TABLE "_pages_v_version_trust_stats" ADD COLUMN "value" varchar;
  ALTER TABLE "_pages_v_version_trust_stats" ADD COLUMN "label" varchar;
  ALTER TABLE "_pages_v_version_trust_stats" ADD COLUMN "sub_label" varchar;
  ALTER TABLE "_pages_v_version_badges" ADD COLUMN "title" varchar;
  ALTER TABLE "_pages_v_version_badges" ADD COLUMN "sub_title" varchar;
  ALTER TABLE "_pages_v_version_scrolling_notices" ADD COLUMN "message" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_about_header_title" varchar DEFAULT 'About Batas Hire and Purchase';
  ALTER TABLE "_pages_v" ADD COLUMN "version_about_header_subtitle" varchar DEFAULT 'We''re on a mission to make financial services more accessible...';
  ALTER TABLE "_pages_v" ADD COLUMN "version_about_story_title" varchar DEFAULT '22 Years of Growth in Financial Services';
  ALTER TABLE "_pages_v" ADD COLUMN "version_about_story_content" jsonb;
  ALTER TABLE "_pages_v" ADD COLUMN "version_stat1_number" varchar DEFAULT '50,000+';
  ALTER TABLE "_pages_v" ADD COLUMN "version_stat1_label" varchar DEFAULT 'Happy Customers';
  ALTER TABLE "_pages_v" ADD COLUMN "version_stat2_number" varchar DEFAULT '₹500 Cr+';
  ALTER TABLE "_pages_v" ADD COLUMN "version_stat2_label" varchar DEFAULT 'Loans Disbursed';
  ALTER TABLE "_pages_v" ADD COLUMN "version_stat3_number" varchar DEFAULT '99.2%';
  ALTER TABLE "_pages_v" ADD COLUMN "version_stat3_label" varchar DEFAULT 'Customer Satisfaction';
  ALTER TABLE "_pages_v" ADD COLUMN "version_stat4_number" varchar DEFAULT '15+';
  ALTER TABLE "_pages_v" ADD COLUMN "version_stat4_label" varchar DEFAULT 'Banking Partners';
  ALTER TABLE "_pages_v" ADD COLUMN "version_mission_title" varchar DEFAULT 'Our Mission';
  ALTER TABLE "_pages_v" ADD COLUMN "version_mission_description" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_vision_title" varchar DEFAULT 'Our Vision';
  ALTER TABLE "_pages_v" ADD COLUMN "version_vision_description" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_values_title" varchar DEFAULT 'Our Values';
  ALTER TABLE "_pages_v" ADD COLUMN "version_values_description" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_directors_title" varchar DEFAULT 'Board of Directors';
  ALTER TABLE "_pages_v" ADD COLUMN "version_directors_description" varchar DEFAULT 'Experienced leadership guiding our strategic vision';
  ALTER TABLE "_pages_v" ADD COLUMN "version_leadership_title" varchar DEFAULT 'Leadership Team';
  ALTER TABLE "_pages_v" ADD COLUMN "version_leadership_description" varchar DEFAULT 'Meet our executive team driving operational excellence';
  ALTER TABLE "_pages_v" ADD COLUMN "version_timeline_title" varchar DEFAULT '22 Years of Growth';
  ALTER TABLE "_pages_v" ADD COLUMN "version_timeline_description" varchar DEFAULT 'Our journey from inception to industry leadership';
  ALTER TABLE "_pages_v" ADD COLUMN "version_testimonials_title" varchar DEFAULT 'What Our Customers Say';
  ALTER TABLE "_pages_v" ADD COLUMN "version_testimonials_description" varchar DEFAULT 'Don''t just take our word for it. Hear from thousands of satisfied customers across India.';
  ALTER TABLE "_pages_v" ADD COLUMN "version_compliance_title" varchar DEFAULT 'Regulatory Compliance';
  ALTER TABLE "_pages_v" ADD COLUMN "version_compliance_description" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_badge1_text" varchar DEFAULT 'RBI Licensed NBFC';
  ALTER TABLE "_pages_v" ADD COLUMN "version_badge2_text" varchar DEFAULT 'ISO 27001 Certified';
  ALTER TABLE "_pages_v" ADD COLUMN "version_badge3_text" varchar DEFAULT 'PCI DSS Compliant';
  ALTER TABLE "_pages_v" ADD COLUMN "version_products_title" varchar DEFAULT 'Our Financial Solutions';
  ALTER TABLE "_pages_v" ADD COLUMN "version_products_description" varchar DEFAULT 'Tailored financing options to meet your diverse needs with transparent terms and competitive rates';
  ALTER TABLE "_pages_v" ADD COLUMN "version_header_title" varchar DEFAULT 'How It Works';
  ALTER TABLE "_pages_v" ADD COLUMN "version_header_subtitle" varchar DEFAULT 'Get approved and funded in just 4 simple steps...';
  ALTER TABLE "_pages_v" ADD COLUMN "version_career_header_title" varchar DEFAULT 'Build Your Future With Us';
  ALTER TABLE "_pages_v" ADD COLUMN "version_career_header_subtitle" varchar DEFAULT 'Join our dynamic team and be part of Nepal''s leading financial services company';
  ALTER TABLE "_pages_v" ADD COLUMN "version_knowledge_center_header_title" varchar DEFAULT 'Knowledge Center';
  ALTER TABLE "_pages_v" ADD COLUMN "version_knowledge_center_header_subtitle" varchar DEFAULT 'Stay informed with expert insights, financial tips, and industry trends';
  ALTER TABLE "_pages_v" ADD COLUMN "version_contact_header_title" varchar DEFAULT 'Get In Touch';
  ALTER TABLE "_pages_v" ADD COLUMN "version_contact_header_subtitle" varchar DEFAULT 'Have questions about our financial services? We''re here to help you 24/7 with personalized support.';
  ALTER TABLE "_pages_v" ADD COLUMN "version_form_title" varchar DEFAULT 'Send Us a Message';
  ALTER TABLE "_pages_v" ADD COLUMN "version_business_hours_title" varchar DEFAULT 'Business Hours';
  ALTER TABLE "_pages_v" ADD COLUMN "version_business_hours_note" varchar DEFAULT '24/7 Customer Support Available';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_badge1" varchar DEFAULT 'NBFC Licensed';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_badge2" varchar DEFAULT 'Secure & Trusted';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_rating" varchar DEFAULT '4.9/5';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_title_part1" varchar DEFAULT 'Smart Finance';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_title_part2" varchar DEFAULT 'Made Simple';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_subtitle" varchar DEFAULT 'Instant BNPL solutions and vehicle financing with transparent terms...';
  ALTER TABLE "_pages_v" ADD COLUMN "version_journey_title" varchar DEFAULT 'Your Financial Journey Simplified';
  ALTER TABLE "_pages_v" ADD COLUMN "version_journey_description" varchar DEFAULT 'Discover our comprehensive financial services...';
  ALTER TABLE "_pages_v" ADD COLUMN "version_quick_tools_title" varchar DEFAULT 'Quick Tools';
  ALTER TABLE "_pages_v" ADD COLUMN "version_trust_title" varchar DEFAULT 'Trusted by Thousands';
  ALTER TABLE "_pages_v" ADD COLUMN "version_certification_title" varchar DEFAULT 'Licensed & Certified';
  ALTER TABLE "_pages_v" ADD COLUMN "version_home_products_config_title" varchar DEFAULT 'Our Final Solutions';
  ALTER TABLE "_pages_v" ADD COLUMN "version_home_products_config_description" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_home_testimonials_config_title" varchar DEFAULT 'What Our Customers Say';
  ALTER TABLE "_pages_v" ADD COLUMN "version_home_testimonials_config_description" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_home_knowledge_config_title" varchar DEFAULT 'Latest News & Updates';
  ALTER TABLE "_pages_v" ADD COLUMN "version_home_knowledge_config_description" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_meta_title" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_meta_image_id" integer;
  ALTER TABLE "_pages_v" ADD COLUMN "version_meta_description" varchar;
  ALTER TABLE "posts" ADD COLUMN "meta_title" varchar;
  ALTER TABLE "posts" ADD COLUMN "meta_image_id" integer;
  ALTER TABLE "posts" ADD COLUMN "meta_description" varchar;
  ALTER TABLE "_posts_v" ADD COLUMN "version_meta_title" varchar;
  ALTER TABLE "_posts_v" ADD COLUMN "version_meta_image_id" integer;
  ALTER TABLE "_posts_v" ADD COLUMN "version_meta_description" varchar;
  ALTER TABLE "forms_emails" ADD COLUMN "subject" varchar DEFAULT 'You''ve received a new message.' NOT NULL;
  ALTER TABLE "forms_emails" ADD COLUMN "message" jsonb;
  ALTER TABLE "forms" ADD COLUMN "title" varchar NOT NULL;
  ALTER TABLE "forms" ADD COLUMN "submit_button_label" varchar;
  ALTER TABLE "forms" ADD COLUMN "confirmation_message" jsonb;
  ALTER TABLE "search" ADD COLUMN "title" varchar;
  ALTER TABLE "footer" ADD COLUMN "description" varchar DEFAULT 'Your trusted partner for flexible financing solutions. We provide transparent, accessible, and innovative financial services to help you achieve your goals.' NOT NULL;
  ALTER TABLE "footer" ADD COLUMN "contact_info_address" varchar DEFAULT 'Batas Tower, Kathmandu,
  Nepal' NOT NULL;
  ALTER TABLE "footer" ADD COLUMN "copyright_text" varchar DEFAULT '© 2024 Batas Hire and Purchase Financial Services Pvt. Ltd. All rights reserved. | NBFC License No: N-12345' NOT NULL;
  ALTER TABLE "footer" ADD COLUMN "newsletter_title" varchar DEFAULT 'Stay Updated' NOT NULL;
  ALTER TABLE "footer" ADD COLUMN "newsletter_description" varchar DEFAULT 'Get the latest financial tips and product updates' NOT NULL;
  ALTER TABLE "footer" ADD COLUMN "newsletter_placeholder" varchar DEFAULT 'Your email' NOT NULL;
  ALTER TABLE "footer" ADD COLUMN "newsletter_button_label" varchar DEFAULT 'Subscribe' NOT NULL;
  ALTER TABLE "site_settings" ADD COLUMN "site_title" varchar DEFAULT 'Batas Hire and Purchase' NOT NULL;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts" ADD CONSTRAINT "posts_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "pages_meta_meta_image_10_idx" ON "pages" USING btree ("meta_image_id");
  CREATE INDEX "_pages_v_version_meta_version_meta_image_10_idx" ON "_pages_v" USING btree ("version_meta_image_id");
  CREATE INDEX "posts_meta_meta_image_idx" ON "posts" USING btree ("meta_image_id");
  CREATE INDEX "_posts_v_version_meta_version_meta_image_idx" ON "_posts_v" USING btree ("version_meta_image_id");
  CREATE INDEX "header_rels_pages_id_idx" ON "header_rels" USING btree ("pages_id");
  CREATE INDEX "header_rels_posts_id_idx" ON "header_rels" USING btree ("posts_id");
  CREATE INDEX "footer_rels_pages_id_idx" ON "footer_rels" USING btree ("pages_id");
  CREATE INDEX "footer_rels_posts_id_idx" ON "footer_rels" USING btree ("posts_id");
  ALTER TABLE "_pages_v" DROP COLUMN "snapshot";
  ALTER TABLE "_pages_v" DROP COLUMN "published_locale";
  ALTER TABLE "_posts_v" DROP COLUMN "snapshot";
  ALTER TABLE "_posts_v" DROP COLUMN "published_locale";
  ALTER TABLE "categories_breadcrumbs" DROP COLUMN "_locale";
  ALTER TABLE "forms_blocks_checkbox" DROP COLUMN "_locale";
  ALTER TABLE "forms_blocks_country" DROP COLUMN "_locale";
  ALTER TABLE "forms_blocks_email" DROP COLUMN "_locale";
  ALTER TABLE "forms_blocks_message" DROP COLUMN "_locale";
  ALTER TABLE "forms_blocks_number" DROP COLUMN "_locale";
  ALTER TABLE "forms_blocks_select_options" DROP COLUMN "_locale";
  ALTER TABLE "forms_blocks_select" DROP COLUMN "_locale";
  ALTER TABLE "forms_blocks_state" DROP COLUMN "_locale";
  ALTER TABLE "forms_blocks_text" DROP COLUMN "_locale";
  ALTER TABLE "forms_blocks_textarea" DROP COLUMN "_locale";
  ALTER TABLE "forms_blocks_file" DROP COLUMN "_locale";
  ALTER TABLE "header_nav_items" DROP COLUMN "_locale";
  ALTER TABLE "header_rels" DROP COLUMN "locale";
  ALTER TABLE "footer_quick_links" DROP COLUMN "_locale";
  ALTER TABLE "footer_our_products" DROP COLUMN "_locale";
  ALTER TABLE "footer_legal_compliance" DROP COLUMN "_locale";
  ALTER TABLE "footer_rels" DROP COLUMN "locale";
  DROP TYPE "public"."_locales";
  DROP TYPE "public"."enum_pages_hero_c_t_as_variant";
  DROP TYPE "public"."enum__pages_v_version_hero_c_t_as_variant";
  DROP TYPE "public"."enum__pages_v_published_locale";
  DROP TYPE "public"."enum__posts_v_published_locale";`)
}
