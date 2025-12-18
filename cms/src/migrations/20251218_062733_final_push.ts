import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_steps_icon" AS ENUM('Smartphone', 'Clock', 'CheckCircle', 'CreditCard', 'FileText', 'Shield');
  CREATE TYPE "public"."enum_pages_trust_features_icon" AS ENUM('Shield', 'Clock', 'FileText', 'Zap');
  CREATE TYPE "public"."enum_pages_job_openings_department" AS ENUM('Technology', 'Risk Management', 'Marketing', 'Sales', 'Customer Success', 'Product', 'Finance', 'HR');
  CREATE TYPE "public"."enum_pages_job_openings_location" AS ENUM('Kathmandu', 'Lalitpur', 'Bhaktapur', 'Chitwan', 'Pokhara', 'Remote');
  CREATE TYPE "public"."enum_pages_job_openings_type" AS ENUM('Full-time', 'Part-time', 'Contract', 'Internship');
  CREATE TYPE "public"."enum_pages_benefits_icon" AS ENUM('TrendingUp', 'Target', 'Zap', 'Star', 'Coffee', 'Award', 'Heart', 'Users');
  CREATE TYPE "public"."enum_pages_life_at_company_icon" AS ENUM('TrendingUp', 'Target', 'Zap', 'Star', 'Coffee', 'Award', 'Heart', 'Users');
  CREATE TYPE "public"."enum_pages_guides_icon" AS ENUM('Lightbulb', 'FileText', 'TrendingUp', 'Shield', 'BookOpen');
  CREATE TYPE "public"."enum_pages_reports_icon" AS ENUM('TrendingUp', 'BookOpen', 'Shield', 'FileText');
  CREATE TYPE "public"."enum_pages_contact_methods_icon" AS ENUM('Phone', 'Mail', 'MessageCircle', 'MapPin', 'Clock');
  CREATE TYPE "public"."enum_pages_documents_icon" AS ENUM('FileText', 'Shield', 'Scale', 'AlertCircle');
  CREATE TYPE "public"."enum_pages_documents_color" AS ENUM('blue', 'green', 'purple', 'orange', 'teal', 'red');
  CREATE TYPE "public"."enum_pages_important_notices_type" AS ENUM('primary', 'accent', 'success', 'destructive');
  CREATE TYPE "public"."enum_pages_notices_type" AS ENUM('Important', 'Service Update', 'Policy Update', 'Holiday Notice', 'Product Launch');
  CREATE TYPE "public"."enum_pages_notices_icon" AS ENUM('AlertTriangle', 'Info', 'FileText', 'Calendar', 'Bell');
  CREATE TYPE "public"."enum__pages_v_version_steps_icon" AS ENUM('Smartphone', 'Clock', 'CheckCircle', 'CreditCard', 'FileText', 'Shield');
  CREATE TYPE "public"."enum__pages_v_version_trust_features_icon" AS ENUM('Shield', 'Clock', 'FileText', 'Zap');
  CREATE TYPE "public"."enum__pages_v_version_job_openings_department" AS ENUM('Technology', 'Risk Management', 'Marketing', 'Sales', 'Customer Success', 'Product', 'Finance', 'HR');
  CREATE TYPE "public"."enum__pages_v_version_job_openings_location" AS ENUM('Kathmandu', 'Lalitpur', 'Bhaktapur', 'Chitwan', 'Pokhara', 'Remote');
  CREATE TYPE "public"."enum__pages_v_version_job_openings_type" AS ENUM('Full-time', 'Part-time', 'Contract', 'Internship');
  CREATE TYPE "public"."enum__pages_v_version_benefits_icon" AS ENUM('TrendingUp', 'Target', 'Zap', 'Star', 'Coffee', 'Award', 'Heart', 'Users');
  CREATE TYPE "public"."enum__pages_v_version_life_at_company_icon" AS ENUM('TrendingUp', 'Target', 'Zap', 'Star', 'Coffee', 'Award', 'Heart', 'Users');
  CREATE TYPE "public"."enum__pages_v_version_guides_icon" AS ENUM('Lightbulb', 'FileText', 'TrendingUp', 'Shield', 'BookOpen');
  CREATE TYPE "public"."enum__pages_v_version_reports_icon" AS ENUM('TrendingUp', 'BookOpen', 'Shield', 'FileText');
  CREATE TYPE "public"."enum__pages_v_version_contact_methods_icon" AS ENUM('Phone', 'Mail', 'MessageCircle', 'MapPin', 'Clock');
  CREATE TYPE "public"."enum__pages_v_version_documents_icon" AS ENUM('FileText', 'Shield', 'Scale', 'AlertCircle');
  CREATE TYPE "public"."enum__pages_v_version_documents_color" AS ENUM('blue', 'green', 'purple', 'orange', 'teal', 'red');
  CREATE TYPE "public"."enum__pages_v_version_important_notices_type" AS ENUM('primary', 'accent', 'success', 'destructive');
  CREATE TYPE "public"."enum__pages_v_version_notices_type" AS ENUM('Important', 'Service Update', 'Policy Update', 'Holiday Notice', 'Product Launch');
  CREATE TYPE "public"."enum__pages_v_version_notices_icon" AS ENUM('AlertTriangle', 'Info', 'FileText', 'Calendar', 'Bell');
  ALTER TYPE "public"."enum_pages_template" ADD VALUE 'how-it-works' BEFORE 'home';
  ALTER TYPE "public"."enum_pages_template" ADD VALUE 'career';
  ALTER TYPE "public"."enum_pages_template" ADD VALUE 'knowledge-center';
  ALTER TYPE "public"."enum_pages_template" ADD VALUE 'faq';
  ALTER TYPE "public"."enum_pages_template" ADD VALUE 'contact';
  ALTER TYPE "public"."enum_pages_template" ADD VALUE 'legal';
  ALTER TYPE "public"."enum_pages_template" ADD VALUE 'notice';
  ALTER TYPE "public"."enum__pages_v_version_template" ADD VALUE 'how-it-works' BEFORE 'home';
  ALTER TYPE "public"."enum__pages_v_version_template" ADD VALUE 'career';
  ALTER TYPE "public"."enum__pages_v_version_template" ADD VALUE 'knowledge-center';
  ALTER TYPE "public"."enum__pages_v_version_template" ADD VALUE 'faq';
  ALTER TYPE "public"."enum__pages_v_version_template" ADD VALUE 'contact';
  ALTER TYPE "public"."enum__pages_v_version_template" ADD VALUE 'legal';
  ALTER TYPE "public"."enum__pages_v_version_template" ADD VALUE 'notice';
  CREATE TABLE "pages_steps_bullet_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "pages_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"step_number" numeric,
  	"icon" "enum_pages_steps_icon" DEFAULT 'Smartphone',
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "pages_trust_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_pages_trust_features_icon" DEFAULT 'Shield',
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "pages_job_openings_skills" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"skill" varchar
  );
  
  CREATE TABLE "pages_job_openings" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"department" "enum_pages_job_openings_department",
  	"location" "enum_pages_job_openings_location",
  	"type" "enum_pages_job_openings_type" DEFAULT 'Full-time',
  	"experience" varchar,
  	"salary" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "pages_benefits" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_pages_benefits_icon",
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "pages_life_at_company" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_pages_life_at_company_icon",
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "pages_articles" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"excerpt" varchar,
  	"category" varchar,
  	"author" varchar,
  	"date" varchar,
  	"read_time" varchar,
  	"featured" boolean
  );
  
  CREATE TABLE "pages_guides" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"icon" "enum_pages_guides_icon",
  	"category" varchar,
  	"steps" numeric
  );
  
  CREATE TABLE "pages_reports" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"type" varchar,
  	"date" varchar,
  	"size" varchar,
  	"icon" "enum_pages_reports_icon"
  );
  
  CREATE TABLE "pages_faqs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar,
  	"category" varchar
  );
  
  CREATE TABLE "pages_faq_categories_questions" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar
  );
  
  CREATE TABLE "pages_faq_categories" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"category_name" varchar
  );
  
  CREATE TABLE "pages_contact_methods" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_pages_contact_methods_icon" DEFAULT 'Phone',
  	"title" varchar,
  	"description" varchar,
  	"contact_info" varchar,
  	"availability" varchar
  );
  
  CREATE TABLE "pages_business_hours" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"day" varchar DEFAULT 'Monday - Friday',
  	"time" varchar DEFAULT '9:00 AM to 6:00 PM'
  );
  
  CREATE TABLE "pages_regulatory_info" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"details" varchar,
  	"validity" varchar
  );
  
  CREATE TABLE "pages_documents" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"category" varchar,
  	"last_updated" varchar,
  	"icon" "enum_pages_documents_icon" DEFAULT 'FileText',
  	"color" "enum_pages_documents_color" DEFAULT 'blue'
  );
  
  CREATE TABLE "pages_important_notices" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"type" "enum_pages_important_notices_type" DEFAULT 'primary'
  );
  
  CREATE TABLE "pages_notices" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"date" varchar,
  	"content" varchar,
  	"type" "enum_pages_notices_type" DEFAULT 'Important',
  	"icon" "enum_pages_notices_icon" DEFAULT 'Info'
  );
  
  CREATE TABLE "_pages_v_version_steps_bullet_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"step_number" numeric,
  	"icon" "enum__pages_v_version_steps_icon" DEFAULT 'Smartphone',
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_trust_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "enum__pages_v_version_trust_features_icon" DEFAULT 'Shield',
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_job_openings_skills" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"skill" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_job_openings" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"department" "enum__pages_v_version_job_openings_department",
  	"location" "enum__pages_v_version_job_openings_location",
  	"type" "enum__pages_v_version_job_openings_type" DEFAULT 'Full-time',
  	"experience" varchar,
  	"salary" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_benefits" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "enum__pages_v_version_benefits_icon",
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_life_at_company" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "enum__pages_v_version_life_at_company_icon",
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_articles" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"excerpt" varchar,
  	"category" varchar,
  	"author" varchar,
  	"date" varchar,
  	"read_time" varchar,
  	"featured" boolean,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_guides" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"icon" "enum__pages_v_version_guides_icon",
  	"category" varchar,
  	"steps" numeric,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_reports" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"type" varchar,
  	"date" varchar,
  	"size" varchar,
  	"icon" "enum__pages_v_version_reports_icon",
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_faqs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar,
  	"category" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_faq_categories_questions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_faq_categories" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"category_name" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_contact_methods" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "enum__pages_v_version_contact_methods_icon" DEFAULT 'Phone',
  	"title" varchar,
  	"description" varchar,
  	"contact_info" varchar,
  	"availability" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_business_hours" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"day" varchar DEFAULT 'Monday - Friday',
  	"time" varchar DEFAULT '9:00 AM to 6:00 PM',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_regulatory_info" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"details" varchar,
  	"validity" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_documents" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"category" varchar,
  	"last_updated" varchar,
  	"icon" "enum__pages_v_version_documents_icon" DEFAULT 'FileText',
  	"color" "enum__pages_v_version_documents_color" DEFAULT 'blue',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_important_notices" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"type" "enum__pages_v_version_important_notices_type" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_notices" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"date" varchar,
  	"content" varchar,
  	"type" "enum__pages_v_version_notices_type" DEFAULT 'Important',
  	"icon" "enum__pages_v_version_notices_icon" DEFAULT 'Info',
  	"_uuid" varchar
  );
  
  ALTER TABLE "about_directors" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "about_leadership" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "about_timeline" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "about_stats" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "about_testimonials" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "about" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_products_stats" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_products_features" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_products" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "about_directors" CASCADE;
  DROP TABLE "about_leadership" CASCADE;
  DROP TABLE "about_timeline" CASCADE;
  DROP TABLE "about_stats" CASCADE;
  DROP TABLE "about_testimonials" CASCADE;
  DROP TABLE "about" CASCADE;
  DROP TABLE "services_products_stats" CASCADE;
  DROP TABLE "services_products_features" CASCADE;
  DROP TABLE "services_products" CASCADE;
  DROP TABLE "services" CASCADE;
  ALTER TABLE "roles_permissions" ALTER COLUMN "resource" SET DATA TYPE text;
  DROP TYPE "public"."enum_roles_permissions_resource";
  CREATE TYPE "public"."enum_roles_permissions_resource" AS ENUM('pages', 'media', 'users', 'posts', 'categories');
  ALTER TABLE "roles_permissions" ALTER COLUMN "resource" SET DATA TYPE "public"."enum_roles_permissions_resource" USING "resource"::"public"."enum_roles_permissions_resource";
  ALTER TABLE "pages" ADD COLUMN "header_title" varchar DEFAULT 'How It Works';
  ALTER TABLE "pages" ADD COLUMN "header_subtitle" varchar DEFAULT 'Get approved and funded in just 4 simple steps...';
  ALTER TABLE "pages" ADD COLUMN "career_header_title" varchar DEFAULT 'Build Your Future With Us';
  ALTER TABLE "pages" ADD COLUMN "career_header_subtitle" varchar DEFAULT 'Join our dynamic team and be part of Nepal''s leading financial services company';
  ALTER TABLE "pages" ADD COLUMN "knowledge_center_header_title" varchar DEFAULT 'Knowledge Center';
  ALTER TABLE "pages" ADD COLUMN "knowledge_center_header_subtitle" varchar DEFAULT 'Stay informed with expert insights, financial tips, and industry trends';
  ALTER TABLE "pages" ADD COLUMN "faq_header_title" varchar DEFAULT 'Frequently Asked Questions';
  ALTER TABLE "pages" ADD COLUMN "faq_header_subtitle" varchar DEFAULT 'Find answers to common questions about our services. Can''t find what you''re looking for? Our support team is here to help.';
  ALTER TABLE "pages" ADD COLUMN "contact_header_title" varchar DEFAULT 'Get In Touch';
  ALTER TABLE "pages" ADD COLUMN "contact_header_subtitle" varchar DEFAULT 'Have questions about our financial services? We''re here to help you 24/7 with personalized support.';
  ALTER TABLE "pages" ADD COLUMN "contact_form_id" integer;
  ALTER TABLE "pages" ADD COLUMN "form_title" varchar DEFAULT 'Send Us a Message';
  ALTER TABLE "pages" ADD COLUMN "business_hours_title" varchar DEFAULT 'Business Hours';
  ALTER TABLE "pages" ADD COLUMN "business_hours_note" varchar DEFAULT '24/7 Customer Support Available';
  ALTER TABLE "pages" ADD COLUMN "legal_header_title" varchar DEFAULT 'Legal & Compliance';
  ALTER TABLE "pages" ADD COLUMN "legal_header_subtitle" varchar DEFAULT 'Transparency and compliance are at the heart of our operations';
  ALTER TABLE "pages" ADD COLUMN "notice_header_title" varchar DEFAULT 'Notices & Updates';
  ALTER TABLE "pages" ADD COLUMN "notice_header_subtitle" varchar DEFAULT 'Stay informed about important announcements, policy updates, and service changes from Batas Hire and Purchase.';
  ALTER TABLE "pages" ADD COLUMN "contact_section_title" varchar DEFAULT 'Need More Information?';
  ALTER TABLE "pages" ADD COLUMN "contact_section_description" varchar DEFAULT 'If you have questions about any of these notices or need clarification on how they affect your account, our customer support team is here to help.';
  ALTER TABLE "pages" ADD COLUMN "contact_section_primary_button_text" varchar DEFAULT 'Contact Support';
  ALTER TABLE "pages" ADD COLUMN "contact_section_primary_button_link" varchar DEFAULT '/contact';
  ALTER TABLE "pages" ADD COLUMN "contact_section_secondary_button_text" varchar DEFAULT 'Call 1800-123-4567';
  ALTER TABLE "pages" ADD COLUMN "contact_section_secondary_button_link" varchar DEFAULT 'tel:1800-123-4567';
  ALTER TABLE "pages" ADD COLUMN "subscribe_section_title" varchar DEFAULT 'Subscribe to Notice Updates';
  ALTER TABLE "pages" ADD COLUMN "subscribe_section_description" varchar DEFAULT 'Get notified about important updates and announcements via email.';
  ALTER TABLE "pages" ADD COLUMN "subscribe_section_button_text" varchar DEFAULT 'Subscribe';
  ALTER TABLE "_pages_v" ADD COLUMN "version_header_title" varchar DEFAULT 'How It Works';
  ALTER TABLE "_pages_v" ADD COLUMN "version_header_subtitle" varchar DEFAULT 'Get approved and funded in just 4 simple steps...';
  ALTER TABLE "_pages_v" ADD COLUMN "version_career_header_title" varchar DEFAULT 'Build Your Future With Us';
  ALTER TABLE "_pages_v" ADD COLUMN "version_career_header_subtitle" varchar DEFAULT 'Join our dynamic team and be part of Nepal''s leading financial services company';
  ALTER TABLE "_pages_v" ADD COLUMN "version_knowledge_center_header_title" varchar DEFAULT 'Knowledge Center';
  ALTER TABLE "_pages_v" ADD COLUMN "version_knowledge_center_header_subtitle" varchar DEFAULT 'Stay informed with expert insights, financial tips, and industry trends';
  ALTER TABLE "_pages_v" ADD COLUMN "version_faq_header_title" varchar DEFAULT 'Frequently Asked Questions';
  ALTER TABLE "_pages_v" ADD COLUMN "version_faq_header_subtitle" varchar DEFAULT 'Find answers to common questions about our services. Can''t find what you''re looking for? Our support team is here to help.';
  ALTER TABLE "_pages_v" ADD COLUMN "version_contact_header_title" varchar DEFAULT 'Get In Touch';
  ALTER TABLE "_pages_v" ADD COLUMN "version_contact_header_subtitle" varchar DEFAULT 'Have questions about our financial services? We''re here to help you 24/7 with personalized support.';
  ALTER TABLE "_pages_v" ADD COLUMN "version_contact_form_id" integer;
  ALTER TABLE "_pages_v" ADD COLUMN "version_form_title" varchar DEFAULT 'Send Us a Message';
  ALTER TABLE "_pages_v" ADD COLUMN "version_business_hours_title" varchar DEFAULT 'Business Hours';
  ALTER TABLE "_pages_v" ADD COLUMN "version_business_hours_note" varchar DEFAULT '24/7 Customer Support Available';
  ALTER TABLE "_pages_v" ADD COLUMN "version_legal_header_title" varchar DEFAULT 'Legal & Compliance';
  ALTER TABLE "_pages_v" ADD COLUMN "version_legal_header_subtitle" varchar DEFAULT 'Transparency and compliance are at the heart of our operations';
  ALTER TABLE "_pages_v" ADD COLUMN "version_notice_header_title" varchar DEFAULT 'Notices & Updates';
  ALTER TABLE "_pages_v" ADD COLUMN "version_notice_header_subtitle" varchar DEFAULT 'Stay informed about important announcements, policy updates, and service changes from Batas Hire and Purchase.';
  ALTER TABLE "_pages_v" ADD COLUMN "version_contact_section_title" varchar DEFAULT 'Need More Information?';
  ALTER TABLE "_pages_v" ADD COLUMN "version_contact_section_description" varchar DEFAULT 'If you have questions about any of these notices or need clarification on how they affect your account, our customer support team is here to help.';
  ALTER TABLE "_pages_v" ADD COLUMN "version_contact_section_primary_button_text" varchar DEFAULT 'Contact Support';
  ALTER TABLE "_pages_v" ADD COLUMN "version_contact_section_primary_button_link" varchar DEFAULT '/contact';
  ALTER TABLE "_pages_v" ADD COLUMN "version_contact_section_secondary_button_text" varchar DEFAULT 'Call 1800-123-4567';
  ALTER TABLE "_pages_v" ADD COLUMN "version_contact_section_secondary_button_link" varchar DEFAULT 'tel:1800-123-4567';
  ALTER TABLE "_pages_v" ADD COLUMN "version_subscribe_section_title" varchar DEFAULT 'Subscribe to Notice Updates';
  ALTER TABLE "_pages_v" ADD COLUMN "version_subscribe_section_description" varchar DEFAULT 'Get notified about important updates and announcements via email.';
  ALTER TABLE "_pages_v" ADD COLUMN "version_subscribe_section_button_text" varchar DEFAULT 'Subscribe';
  ALTER TABLE "pages_steps_bullet_points" ADD CONSTRAINT "pages_steps_bullet_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_steps" ADD CONSTRAINT "pages_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_trust_features" ADD CONSTRAINT "pages_trust_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_job_openings_skills" ADD CONSTRAINT "pages_job_openings_skills_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_job_openings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_job_openings" ADD CONSTRAINT "pages_job_openings_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_benefits" ADD CONSTRAINT "pages_benefits_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_life_at_company" ADD CONSTRAINT "pages_life_at_company_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_articles" ADD CONSTRAINT "pages_articles_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_guides" ADD CONSTRAINT "pages_guides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_reports" ADD CONSTRAINT "pages_reports_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_faqs" ADD CONSTRAINT "pages_faqs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_faq_categories_questions" ADD CONSTRAINT "pages_faq_categories_questions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_faq_categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_faq_categories" ADD CONSTRAINT "pages_faq_categories_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_contact_methods" ADD CONSTRAINT "pages_contact_methods_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_business_hours" ADD CONSTRAINT "pages_business_hours_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_regulatory_info" ADD CONSTRAINT "pages_regulatory_info_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_documents" ADD CONSTRAINT "pages_documents_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_important_notices" ADD CONSTRAINT "pages_important_notices_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_notices" ADD CONSTRAINT "pages_notices_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_steps_bullet_points" ADD CONSTRAINT "_pages_v_version_steps_bullet_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_steps" ADD CONSTRAINT "_pages_v_version_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_trust_features" ADD CONSTRAINT "_pages_v_version_trust_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_job_openings_skills" ADD CONSTRAINT "_pages_v_version_job_openings_skills_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_job_openings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_job_openings" ADD CONSTRAINT "_pages_v_version_job_openings_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_benefits" ADD CONSTRAINT "_pages_v_version_benefits_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_life_at_company" ADD CONSTRAINT "_pages_v_version_life_at_company_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_articles" ADD CONSTRAINT "_pages_v_version_articles_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_guides" ADD CONSTRAINT "_pages_v_version_guides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_reports" ADD CONSTRAINT "_pages_v_version_reports_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_faqs" ADD CONSTRAINT "_pages_v_version_faqs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_faq_categories_questions" ADD CONSTRAINT "_pages_v_version_faq_categories_questions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_faq_categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_faq_categories" ADD CONSTRAINT "_pages_v_version_faq_categories_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_contact_methods" ADD CONSTRAINT "_pages_v_version_contact_methods_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_business_hours" ADD CONSTRAINT "_pages_v_version_business_hours_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_regulatory_info" ADD CONSTRAINT "_pages_v_version_regulatory_info_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_documents" ADD CONSTRAINT "_pages_v_version_documents_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_important_notices" ADD CONSTRAINT "_pages_v_version_important_notices_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_notices" ADD CONSTRAINT "_pages_v_version_notices_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_steps_bullet_points_order_idx" ON "pages_steps_bullet_points" USING btree ("_order");
  CREATE INDEX "pages_steps_bullet_points_parent_id_idx" ON "pages_steps_bullet_points" USING btree ("_parent_id");
  CREATE INDEX "pages_steps_order_idx" ON "pages_steps" USING btree ("_order");
  CREATE INDEX "pages_steps_parent_id_idx" ON "pages_steps" USING btree ("_parent_id");
  CREATE INDEX "pages_trust_features_order_idx" ON "pages_trust_features" USING btree ("_order");
  CREATE INDEX "pages_trust_features_parent_id_idx" ON "pages_trust_features" USING btree ("_parent_id");
  CREATE INDEX "pages_job_openings_skills_order_idx" ON "pages_job_openings_skills" USING btree ("_order");
  CREATE INDEX "pages_job_openings_skills_parent_id_idx" ON "pages_job_openings_skills" USING btree ("_parent_id");
  CREATE INDEX "pages_job_openings_order_idx" ON "pages_job_openings" USING btree ("_order");
  CREATE INDEX "pages_job_openings_parent_id_idx" ON "pages_job_openings" USING btree ("_parent_id");
  CREATE INDEX "pages_benefits_order_idx" ON "pages_benefits" USING btree ("_order");
  CREATE INDEX "pages_benefits_parent_id_idx" ON "pages_benefits" USING btree ("_parent_id");
  CREATE INDEX "pages_life_at_company_order_idx" ON "pages_life_at_company" USING btree ("_order");
  CREATE INDEX "pages_life_at_company_parent_id_idx" ON "pages_life_at_company" USING btree ("_parent_id");
  CREATE INDEX "pages_articles_order_idx" ON "pages_articles" USING btree ("_order");
  CREATE INDEX "pages_articles_parent_id_idx" ON "pages_articles" USING btree ("_parent_id");
  CREATE INDEX "pages_guides_order_idx" ON "pages_guides" USING btree ("_order");
  CREATE INDEX "pages_guides_parent_id_idx" ON "pages_guides" USING btree ("_parent_id");
  CREATE INDEX "pages_reports_order_idx" ON "pages_reports" USING btree ("_order");
  CREATE INDEX "pages_reports_parent_id_idx" ON "pages_reports" USING btree ("_parent_id");
  CREATE INDEX "pages_faqs_order_idx" ON "pages_faqs" USING btree ("_order");
  CREATE INDEX "pages_faqs_parent_id_idx" ON "pages_faqs" USING btree ("_parent_id");
  CREATE INDEX "pages_faq_categories_questions_order_idx" ON "pages_faq_categories_questions" USING btree ("_order");
  CREATE INDEX "pages_faq_categories_questions_parent_id_idx" ON "pages_faq_categories_questions" USING btree ("_parent_id");
  CREATE INDEX "pages_faq_categories_order_idx" ON "pages_faq_categories" USING btree ("_order");
  CREATE INDEX "pages_faq_categories_parent_id_idx" ON "pages_faq_categories" USING btree ("_parent_id");
  CREATE INDEX "pages_contact_methods_order_idx" ON "pages_contact_methods" USING btree ("_order");
  CREATE INDEX "pages_contact_methods_parent_id_idx" ON "pages_contact_methods" USING btree ("_parent_id");
  CREATE INDEX "pages_business_hours_order_idx" ON "pages_business_hours" USING btree ("_order");
  CREATE INDEX "pages_business_hours_parent_id_idx" ON "pages_business_hours" USING btree ("_parent_id");
  CREATE INDEX "pages_regulatory_info_order_idx" ON "pages_regulatory_info" USING btree ("_order");
  CREATE INDEX "pages_regulatory_info_parent_id_idx" ON "pages_regulatory_info" USING btree ("_parent_id");
  CREATE INDEX "pages_documents_order_idx" ON "pages_documents" USING btree ("_order");
  CREATE INDEX "pages_documents_parent_id_idx" ON "pages_documents" USING btree ("_parent_id");
  CREATE INDEX "pages_important_notices_order_idx" ON "pages_important_notices" USING btree ("_order");
  CREATE INDEX "pages_important_notices_parent_id_idx" ON "pages_important_notices" USING btree ("_parent_id");
  CREATE INDEX "pages_notices_order_idx" ON "pages_notices" USING btree ("_order");
  CREATE INDEX "pages_notices_parent_id_idx" ON "pages_notices" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_steps_bullet_points_order_idx" ON "_pages_v_version_steps_bullet_points" USING btree ("_order");
  CREATE INDEX "_pages_v_version_steps_bullet_points_parent_id_idx" ON "_pages_v_version_steps_bullet_points" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_steps_order_idx" ON "_pages_v_version_steps" USING btree ("_order");
  CREATE INDEX "_pages_v_version_steps_parent_id_idx" ON "_pages_v_version_steps" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_trust_features_order_idx" ON "_pages_v_version_trust_features" USING btree ("_order");
  CREATE INDEX "_pages_v_version_trust_features_parent_id_idx" ON "_pages_v_version_trust_features" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_job_openings_skills_order_idx" ON "_pages_v_version_job_openings_skills" USING btree ("_order");
  CREATE INDEX "_pages_v_version_job_openings_skills_parent_id_idx" ON "_pages_v_version_job_openings_skills" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_job_openings_order_idx" ON "_pages_v_version_job_openings" USING btree ("_order");
  CREATE INDEX "_pages_v_version_job_openings_parent_id_idx" ON "_pages_v_version_job_openings" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_benefits_order_idx" ON "_pages_v_version_benefits" USING btree ("_order");
  CREATE INDEX "_pages_v_version_benefits_parent_id_idx" ON "_pages_v_version_benefits" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_life_at_company_order_idx" ON "_pages_v_version_life_at_company" USING btree ("_order");
  CREATE INDEX "_pages_v_version_life_at_company_parent_id_idx" ON "_pages_v_version_life_at_company" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_articles_order_idx" ON "_pages_v_version_articles" USING btree ("_order");
  CREATE INDEX "_pages_v_version_articles_parent_id_idx" ON "_pages_v_version_articles" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_guides_order_idx" ON "_pages_v_version_guides" USING btree ("_order");
  CREATE INDEX "_pages_v_version_guides_parent_id_idx" ON "_pages_v_version_guides" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_reports_order_idx" ON "_pages_v_version_reports" USING btree ("_order");
  CREATE INDEX "_pages_v_version_reports_parent_id_idx" ON "_pages_v_version_reports" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_faqs_order_idx" ON "_pages_v_version_faqs" USING btree ("_order");
  CREATE INDEX "_pages_v_version_faqs_parent_id_idx" ON "_pages_v_version_faqs" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_faq_categories_questions_order_idx" ON "_pages_v_version_faq_categories_questions" USING btree ("_order");
  CREATE INDEX "_pages_v_version_faq_categories_questions_parent_id_idx" ON "_pages_v_version_faq_categories_questions" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_faq_categories_order_idx" ON "_pages_v_version_faq_categories" USING btree ("_order");
  CREATE INDEX "_pages_v_version_faq_categories_parent_id_idx" ON "_pages_v_version_faq_categories" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_contact_methods_order_idx" ON "_pages_v_version_contact_methods" USING btree ("_order");
  CREATE INDEX "_pages_v_version_contact_methods_parent_id_idx" ON "_pages_v_version_contact_methods" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_business_hours_order_idx" ON "_pages_v_version_business_hours" USING btree ("_order");
  CREATE INDEX "_pages_v_version_business_hours_parent_id_idx" ON "_pages_v_version_business_hours" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_regulatory_info_order_idx" ON "_pages_v_version_regulatory_info" USING btree ("_order");
  CREATE INDEX "_pages_v_version_regulatory_info_parent_id_idx" ON "_pages_v_version_regulatory_info" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_documents_order_idx" ON "_pages_v_version_documents" USING btree ("_order");
  CREATE INDEX "_pages_v_version_documents_parent_id_idx" ON "_pages_v_version_documents" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_important_notices_order_idx" ON "_pages_v_version_important_notices" USING btree ("_order");
  CREATE INDEX "_pages_v_version_important_notices_parent_id_idx" ON "_pages_v_version_important_notices" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_notices_order_idx" ON "_pages_v_version_notices" USING btree ("_order");
  CREATE INDEX "_pages_v_version_notices_parent_id_idx" ON "_pages_v_version_notices" USING btree ("_parent_id");
  ALTER TABLE "pages" ADD CONSTRAINT "pages_contact_form_id_forms_id_fk" FOREIGN KEY ("contact_form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_contact_form_id_forms_id_fk" FOREIGN KEY ("version_contact_form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "pages_contact_form_idx" ON "pages" USING btree ("contact_form_id");
  CREATE INDEX "_pages_v_version_version_contact_form_idx" ON "_pages_v" USING btree ("version_contact_form_id");
  DROP TYPE "public"."enum_about_mission_icon";
  DROP TYPE "public"."enum_about_vision_icon";
  DROP TYPE "public"."enum_about_values_icon";
  DROP TYPE "public"."enum_services_products_stats_icon";
  DROP TYPE "public"."enum_services_products_icon";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_about_mission_icon" AS ENUM('Target', 'Eye', 'Users', 'Award');
  CREATE TYPE "public"."enum_about_vision_icon" AS ENUM('Target', 'Eye', 'Users', 'Award');
  CREATE TYPE "public"."enum_about_values_icon" AS ENUM('Target', 'Eye', 'Users', 'Award');
  CREATE TYPE "public"."enum_services_products_stats_icon" AS ENUM('Clock', 'Percent', 'CreditCard', 'CheckCircle');
  CREATE TYPE "public"."enum_services_products_icon" AS ENUM('ShoppingCart', 'Car', 'Home', 'Briefcase', 'CreditCard');
  CREATE TABLE "about_directors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"photo_id" integer NOT NULL,
  	"name" varchar NOT NULL,
  	"position" varchar NOT NULL,
  	"experience" varchar,
  	"education" varchar,
  	"specialization" varchar
  );
  
  CREATE TABLE "about_leadership" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"photo_id" integer NOT NULL,
  	"name" varchar NOT NULL,
  	"position" varchar NOT NULL,
  	"department" varchar,
  	"experience" varchar,
  	"expertise" varchar
  );
  
  CREATE TABLE "about_timeline" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"year" varchar NOT NULL,
  	"event" varchar NOT NULL,
  	"description" varchar
  );
  
  CREATE TABLE "about_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "about_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"role" varchar,
  	"location" varchar,
  	"rating" numeric DEFAULT 5,
  	"content" varchar NOT NULL,
  	"product" varchar
  );
  
  CREATE TABLE "about" (
  	"id" serial PRIMARY KEY NOT NULL,
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
  	"mission_icon" "enum_about_mission_icon" DEFAULT 'Target',
  	"mission_title" varchar DEFAULT 'Our Mission',
  	"mission_description" varchar,
  	"vision_icon" "enum_about_vision_icon" DEFAULT 'Eye',
  	"vision_title" varchar DEFAULT 'Our Vision',
  	"vision_description" varchar,
  	"values_icon" "enum_about_values_icon" DEFAULT 'Users',
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
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "services_products_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL,
  	"label" varchar NOT NULL,
  	"icon" "enum_services_products_stats_icon" DEFAULT 'Clock'
  );
  
  CREATE TABLE "services_products_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "services_products" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"icon" "enum_services_products_icon" DEFAULT 'ShoppingCart',
  	"title" varchar NOT NULL,
  	"subtitle" varchar,
  	"cta_text" varchar DEFAULT 'Apply Now',
  	"secondary_cta_text" varchar DEFAULT 'Learn More'
  );
  
  CREATE TABLE "services" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"products_title" varchar DEFAULT 'Our Financial Solutions',
  	"products_description" varchar DEFAULT 'Tailored financing options to meet your diverse needs with transparent terms and competitive rates',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "pages_steps_bullet_points" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_steps" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_trust_features" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_job_openings_skills" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_job_openings" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_benefits" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_life_at_company" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_articles" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_guides" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_reports" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_faqs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_faq_categories_questions" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_faq_categories" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_contact_methods" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_business_hours" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_regulatory_info" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_documents" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_important_notices" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_notices" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_steps_bullet_points" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_steps" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_trust_features" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_job_openings_skills" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_job_openings" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_benefits" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_life_at_company" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_articles" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_guides" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_reports" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_faqs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_faq_categories_questions" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_faq_categories" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_contact_methods" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_business_hours" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_regulatory_info" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_documents" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_important_notices" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_notices" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_steps_bullet_points" CASCADE;
  DROP TABLE "pages_steps" CASCADE;
  DROP TABLE "pages_trust_features" CASCADE;
  DROP TABLE "pages_job_openings_skills" CASCADE;
  DROP TABLE "pages_job_openings" CASCADE;
  DROP TABLE "pages_benefits" CASCADE;
  DROP TABLE "pages_life_at_company" CASCADE;
  DROP TABLE "pages_articles" CASCADE;
  DROP TABLE "pages_guides" CASCADE;
  DROP TABLE "pages_reports" CASCADE;
  DROP TABLE "pages_faqs" CASCADE;
  DROP TABLE "pages_faq_categories_questions" CASCADE;
  DROP TABLE "pages_faq_categories" CASCADE;
  DROP TABLE "pages_contact_methods" CASCADE;
  DROP TABLE "pages_business_hours" CASCADE;
  DROP TABLE "pages_regulatory_info" CASCADE;
  DROP TABLE "pages_documents" CASCADE;
  DROP TABLE "pages_important_notices" CASCADE;
  DROP TABLE "pages_notices" CASCADE;
  DROP TABLE "_pages_v_version_steps_bullet_points" CASCADE;
  DROP TABLE "_pages_v_version_steps" CASCADE;
  DROP TABLE "_pages_v_version_trust_features" CASCADE;
  DROP TABLE "_pages_v_version_job_openings_skills" CASCADE;
  DROP TABLE "_pages_v_version_job_openings" CASCADE;
  DROP TABLE "_pages_v_version_benefits" CASCADE;
  DROP TABLE "_pages_v_version_life_at_company" CASCADE;
  DROP TABLE "_pages_v_version_articles" CASCADE;
  DROP TABLE "_pages_v_version_guides" CASCADE;
  DROP TABLE "_pages_v_version_reports" CASCADE;
  DROP TABLE "_pages_v_version_faqs" CASCADE;
  DROP TABLE "_pages_v_version_faq_categories_questions" CASCADE;
  DROP TABLE "_pages_v_version_faq_categories" CASCADE;
  DROP TABLE "_pages_v_version_contact_methods" CASCADE;
  DROP TABLE "_pages_v_version_business_hours" CASCADE;
  DROP TABLE "_pages_v_version_regulatory_info" CASCADE;
  DROP TABLE "_pages_v_version_documents" CASCADE;
  DROP TABLE "_pages_v_version_important_notices" CASCADE;
  DROP TABLE "_pages_v_version_notices" CASCADE;
  ALTER TABLE "pages" DROP CONSTRAINT "pages_contact_form_id_forms_id_fk";
  
  ALTER TABLE "_pages_v" DROP CONSTRAINT "_pages_v_version_contact_form_id_forms_id_fk";
  
  ALTER TABLE "pages" ALTER COLUMN "template" SET DATA TYPE text;
  ALTER TABLE "pages" ALTER COLUMN "template" SET DEFAULT 'default'::text;
  DROP TYPE "public"."enum_pages_template";
  CREATE TYPE "public"."enum_pages_template" AS ENUM('default', 'about', 'services', 'home');
  ALTER TABLE "pages" ALTER COLUMN "template" SET DEFAULT 'default'::"public"."enum_pages_template";
  ALTER TABLE "pages" ALTER COLUMN "template" SET DATA TYPE "public"."enum_pages_template" USING "template"::"public"."enum_pages_template";
  ALTER TABLE "_pages_v" ALTER COLUMN "version_template" SET DATA TYPE text;
  ALTER TABLE "_pages_v" ALTER COLUMN "version_template" SET DEFAULT 'default'::text;
  DROP TYPE "public"."enum__pages_v_version_template";
  CREATE TYPE "public"."enum__pages_v_version_template" AS ENUM('default', 'about', 'services', 'home');
  ALTER TABLE "_pages_v" ALTER COLUMN "version_template" SET DEFAULT 'default'::"public"."enum__pages_v_version_template";
  ALTER TABLE "_pages_v" ALTER COLUMN "version_template" SET DATA TYPE "public"."enum__pages_v_version_template" USING "version_template"::"public"."enum__pages_v_version_template";
  ALTER TABLE "roles_permissions" ALTER COLUMN "resource" SET DATA TYPE text;
  DROP TYPE "public"."enum_roles_permissions_resource";
  CREATE TYPE "public"."enum_roles_permissions_resource" AS ENUM('pages', 'media', 'about', 'services');
  ALTER TABLE "roles_permissions" ALTER COLUMN "resource" SET DATA TYPE "public"."enum_roles_permissions_resource" USING "resource"::"public"."enum_roles_permissions_resource";
  DROP INDEX "pages_contact_form_idx";
  DROP INDEX "_pages_v_version_version_contact_form_idx";
  ALTER TABLE "about_directors" ADD CONSTRAINT "about_directors_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "about_directors" ADD CONSTRAINT "about_directors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_leadership" ADD CONSTRAINT "about_leadership_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "about_leadership" ADD CONSTRAINT "about_leadership_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_timeline" ADD CONSTRAINT "about_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_stats" ADD CONSTRAINT "about_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_testimonials" ADD CONSTRAINT "about_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_products_stats" ADD CONSTRAINT "services_products_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_products"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_products_features" ADD CONSTRAINT "services_products_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_products"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_products" ADD CONSTRAINT "services_products_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_products" ADD CONSTRAINT "services_products_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "about_directors_order_idx" ON "about_directors" USING btree ("_order");
  CREATE INDEX "about_directors_parent_id_idx" ON "about_directors" USING btree ("_parent_id");
  CREATE INDEX "about_directors_photo_idx" ON "about_directors" USING btree ("photo_id");
  CREATE INDEX "about_leadership_order_idx" ON "about_leadership" USING btree ("_order");
  CREATE INDEX "about_leadership_parent_id_idx" ON "about_leadership" USING btree ("_parent_id");
  CREATE INDEX "about_leadership_photo_idx" ON "about_leadership" USING btree ("photo_id");
  CREATE INDEX "about_timeline_order_idx" ON "about_timeline" USING btree ("_order");
  CREATE INDEX "about_timeline_parent_id_idx" ON "about_timeline" USING btree ("_parent_id");
  CREATE INDEX "about_stats_order_idx" ON "about_stats" USING btree ("_order");
  CREATE INDEX "about_stats_parent_id_idx" ON "about_stats" USING btree ("_parent_id");
  CREATE INDEX "about_testimonials_order_idx" ON "about_testimonials" USING btree ("_order");
  CREATE INDEX "about_testimonials_parent_id_idx" ON "about_testimonials" USING btree ("_parent_id");
  CREATE INDEX "services_products_stats_order_idx" ON "services_products_stats" USING btree ("_order");
  CREATE INDEX "services_products_stats_parent_id_idx" ON "services_products_stats" USING btree ("_parent_id");
  CREATE INDEX "services_products_features_order_idx" ON "services_products_features" USING btree ("_order");
  CREATE INDEX "services_products_features_parent_id_idx" ON "services_products_features" USING btree ("_parent_id");
  CREATE INDEX "services_products_order_idx" ON "services_products" USING btree ("_order");
  CREATE INDEX "services_products_parent_id_idx" ON "services_products" USING btree ("_parent_id");
  CREATE INDEX "services_products_image_idx" ON "services_products" USING btree ("image_id");
  ALTER TABLE "pages" DROP COLUMN "header_title";
  ALTER TABLE "pages" DROP COLUMN "header_subtitle";
  ALTER TABLE "pages" DROP COLUMN "career_header_title";
  ALTER TABLE "pages" DROP COLUMN "career_header_subtitle";
  ALTER TABLE "pages" DROP COLUMN "knowledge_center_header_title";
  ALTER TABLE "pages" DROP COLUMN "knowledge_center_header_subtitle";
  ALTER TABLE "pages" DROP COLUMN "faq_header_title";
  ALTER TABLE "pages" DROP COLUMN "faq_header_subtitle";
  ALTER TABLE "pages" DROP COLUMN "contact_header_title";
  ALTER TABLE "pages" DROP COLUMN "contact_header_subtitle";
  ALTER TABLE "pages" DROP COLUMN "contact_form_id";
  ALTER TABLE "pages" DROP COLUMN "form_title";
  ALTER TABLE "pages" DROP COLUMN "business_hours_title";
  ALTER TABLE "pages" DROP COLUMN "business_hours_note";
  ALTER TABLE "pages" DROP COLUMN "legal_header_title";
  ALTER TABLE "pages" DROP COLUMN "legal_header_subtitle";
  ALTER TABLE "pages" DROP COLUMN "notice_header_title";
  ALTER TABLE "pages" DROP COLUMN "notice_header_subtitle";
  ALTER TABLE "pages" DROP COLUMN "contact_section_title";
  ALTER TABLE "pages" DROP COLUMN "contact_section_description";
  ALTER TABLE "pages" DROP COLUMN "contact_section_primary_button_text";
  ALTER TABLE "pages" DROP COLUMN "contact_section_primary_button_link";
  ALTER TABLE "pages" DROP COLUMN "contact_section_secondary_button_text";
  ALTER TABLE "pages" DROP COLUMN "contact_section_secondary_button_link";
  ALTER TABLE "pages" DROP COLUMN "subscribe_section_title";
  ALTER TABLE "pages" DROP COLUMN "subscribe_section_description";
  ALTER TABLE "pages" DROP COLUMN "subscribe_section_button_text";
  ALTER TABLE "_pages_v" DROP COLUMN "version_header_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_header_subtitle";
  ALTER TABLE "_pages_v" DROP COLUMN "version_career_header_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_career_header_subtitle";
  ALTER TABLE "_pages_v" DROP COLUMN "version_knowledge_center_header_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_knowledge_center_header_subtitle";
  ALTER TABLE "_pages_v" DROP COLUMN "version_faq_header_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_faq_header_subtitle";
  ALTER TABLE "_pages_v" DROP COLUMN "version_contact_header_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_contact_header_subtitle";
  ALTER TABLE "_pages_v" DROP COLUMN "version_contact_form_id";
  ALTER TABLE "_pages_v" DROP COLUMN "version_form_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_business_hours_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_business_hours_note";
  ALTER TABLE "_pages_v" DROP COLUMN "version_legal_header_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_legal_header_subtitle";
  ALTER TABLE "_pages_v" DROP COLUMN "version_notice_header_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_notice_header_subtitle";
  ALTER TABLE "_pages_v" DROP COLUMN "version_contact_section_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_contact_section_description";
  ALTER TABLE "_pages_v" DROP COLUMN "version_contact_section_primary_button_text";
  ALTER TABLE "_pages_v" DROP COLUMN "version_contact_section_primary_button_link";
  ALTER TABLE "_pages_v" DROP COLUMN "version_contact_section_secondary_button_text";
  ALTER TABLE "_pages_v" DROP COLUMN "version_contact_section_secondary_button_link";
  ALTER TABLE "_pages_v" DROP COLUMN "version_subscribe_section_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_subscribe_section_description";
  ALTER TABLE "_pages_v" DROP COLUMN "version_subscribe_section_button_text";
  DROP TYPE "public"."enum_pages_steps_icon";
  DROP TYPE "public"."enum_pages_trust_features_icon";
  DROP TYPE "public"."enum_pages_job_openings_department";
  DROP TYPE "public"."enum_pages_job_openings_location";
  DROP TYPE "public"."enum_pages_job_openings_type";
  DROP TYPE "public"."enum_pages_benefits_icon";
  DROP TYPE "public"."enum_pages_life_at_company_icon";
  DROP TYPE "public"."enum_pages_guides_icon";
  DROP TYPE "public"."enum_pages_reports_icon";
  DROP TYPE "public"."enum_pages_contact_methods_icon";
  DROP TYPE "public"."enum_pages_documents_icon";
  DROP TYPE "public"."enum_pages_documents_color";
  DROP TYPE "public"."enum_pages_important_notices_type";
  DROP TYPE "public"."enum_pages_notices_type";
  DROP TYPE "public"."enum_pages_notices_icon";
  DROP TYPE "public"."enum__pages_v_version_steps_icon";
  DROP TYPE "public"."enum__pages_v_version_trust_features_icon";
  DROP TYPE "public"."enum__pages_v_version_job_openings_department";
  DROP TYPE "public"."enum__pages_v_version_job_openings_location";
  DROP TYPE "public"."enum__pages_v_version_job_openings_type";
  DROP TYPE "public"."enum__pages_v_version_benefits_icon";
  DROP TYPE "public"."enum__pages_v_version_life_at_company_icon";
  DROP TYPE "public"."enum__pages_v_version_guides_icon";
  DROP TYPE "public"."enum__pages_v_version_reports_icon";
  DROP TYPE "public"."enum__pages_v_version_contact_methods_icon";
  DROP TYPE "public"."enum__pages_v_version_documents_icon";
  DROP TYPE "public"."enum__pages_v_version_documents_color";
  DROP TYPE "public"."enum__pages_v_version_important_notices_type";
  DROP TYPE "public"."enum__pages_v_version_notices_type";
  DROP TYPE "public"."enum__pages_v_version_notices_icon";`)
}
