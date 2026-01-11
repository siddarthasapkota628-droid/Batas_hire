import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_footer_social_links_platform" AS ENUM('facebook', 'twitter', 'linkedin', 'instagram');
  CREATE TYPE "public"."enum_footer_quick_links_link_type" AS ENUM('reference', 'custom');
  CREATE TABLE "career_applications" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"email" varchar,
  	"phone_number" varchar,
  	"job_position" varchar,
  	"resume_id" integer,
  	"form_id" integer,
  	"submission_data" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "service_inquiries" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"email" varchar,
  	"phone_number" varchar,
  	"form_id" integer,
  	"submission_data" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "contact_submissions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"email" varchar,
  	"phone_number" varchar,
  	"form_id" integer,
  	"submission_data" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "footer_social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"platform" "enum_footer_social_links_platform" NOT NULL,
  	"url" varchar
  );
  
  CREATE TABLE "footer_quick_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_footer_quick_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar NOT NULL
  );
  
  CREATE TABLE "footer_our_products" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"url" varchar
  );
  
  CREATE TABLE "footer_legal_compliance" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"url" varchar
  );
  
  CREATE TABLE "site_settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"site_title" varchar DEFAULT 'Batas Hire and Purchase' NOT NULL,
  	"site_logo_id" integer NOT NULL,
  	"admin_logo_id" integer,
  	"favicon_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "footer_nav_items" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "footer_nav_items" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_career_applications_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_service_inquiries_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_contact_submissions_fk";
  
  DROP INDEX "form_submissions_form_3_idx";
  DROP INDEX "form_submissions_resume_1_idx";
  DROP INDEX "form_submissions_updated_at_3_idx";
  DROP INDEX "form_submissions_created_at_3_idx";
  DROP INDEX "payload_locked_documents_rels_form_submissions_id_1_idx";
  DROP INDEX "payload_locked_documents_rels_form_submissions_id_2_idx";
  DROP INDEX "payload_locked_documents_rels_form_submissions_id_3_idx";
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "career_applications_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "service_inquiries_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "contact_submissions_id" integer;
  ALTER TABLE "footer" ADD COLUMN "description" varchar DEFAULT 'Your trusted partner for flexible financing solutions. We provide transparent, accessible, and innovative financial services to help you achieve your goals.' NOT NULL;
  ALTER TABLE "footer" ADD COLUMN "contact_info_phone" varchar DEFAULT '1800-123-4567 (Toll Free)' NOT NULL;
  ALTER TABLE "footer" ADD COLUMN "contact_info_email" varchar DEFAULT 'support@batas.com' NOT NULL;
  ALTER TABLE "footer" ADD COLUMN "contact_info_address" varchar DEFAULT 'Batas Tower, Kathmandu,
  Nepal' NOT NULL;
  ALTER TABLE "footer" ADD COLUMN "copyright_text" varchar DEFAULT '© 2024 Batas Hire and Purchase Financial Services Pvt. Ltd. All rights reserved. | NBFC License No: N-12345' NOT NULL;
  ALTER TABLE "footer" ADD COLUMN "newsletter_title" varchar DEFAULT 'Stay Updated' NOT NULL;
  ALTER TABLE "footer" ADD COLUMN "newsletter_description" varchar DEFAULT 'Get the latest financial tips and product updates' NOT NULL;
  ALTER TABLE "footer" ADD COLUMN "newsletter_placeholder" varchar DEFAULT 'Your email' NOT NULL;
  ALTER TABLE "footer" ADD COLUMN "newsletter_button_label" varchar DEFAULT 'Subscribe' NOT NULL;
  ALTER TABLE "career_applications" ADD CONSTRAINT "career_applications_resume_id_media_id_fk" FOREIGN KEY ("resume_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "career_applications" ADD CONSTRAINT "career_applications_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "service_inquiries" ADD CONSTRAINT "service_inquiries_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "contact_submissions" ADD CONSTRAINT "contact_submissions_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_social_links" ADD CONSTRAINT "footer_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_quick_links" ADD CONSTRAINT "footer_quick_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_our_products" ADD CONSTRAINT "footer_our_products_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_legal_compliance" ADD CONSTRAINT "footer_legal_compliance_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_site_logo_id_media_id_fk" FOREIGN KEY ("site_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_admin_logo_id_media_id_fk" FOREIGN KEY ("admin_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_favicon_id_media_id_fk" FOREIGN KEY ("favicon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "career_applications_resume_idx" ON "career_applications" USING btree ("resume_id");
  CREATE INDEX "career_applications_form_idx" ON "career_applications" USING btree ("form_id");
  CREATE INDEX "career_applications_updated_at_idx" ON "career_applications" USING btree ("updated_at");
  CREATE INDEX "career_applications_created_at_idx" ON "career_applications" USING btree ("created_at");
  CREATE INDEX "service_inquiries_form_idx" ON "service_inquiries" USING btree ("form_id");
  CREATE INDEX "service_inquiries_updated_at_idx" ON "service_inquiries" USING btree ("updated_at");
  CREATE INDEX "service_inquiries_created_at_idx" ON "service_inquiries" USING btree ("created_at");
  CREATE INDEX "contact_submissions_form_idx" ON "contact_submissions" USING btree ("form_id");
  CREATE INDEX "contact_submissions_updated_at_idx" ON "contact_submissions" USING btree ("updated_at");
  CREATE INDEX "contact_submissions_created_at_idx" ON "contact_submissions" USING btree ("created_at");
  CREATE INDEX "footer_social_links_order_idx" ON "footer_social_links" USING btree ("_order");
  CREATE INDEX "footer_social_links_parent_id_idx" ON "footer_social_links" USING btree ("_parent_id");
  CREATE INDEX "footer_quick_links_order_idx" ON "footer_quick_links" USING btree ("_order");
  CREATE INDEX "footer_quick_links_parent_id_idx" ON "footer_quick_links" USING btree ("_parent_id");
  CREATE INDEX "footer_our_products_order_idx" ON "footer_our_products" USING btree ("_order");
  CREATE INDEX "footer_our_products_parent_id_idx" ON "footer_our_products" USING btree ("_parent_id");
  CREATE INDEX "footer_legal_compliance_order_idx" ON "footer_legal_compliance" USING btree ("_order");
  CREATE INDEX "footer_legal_compliance_parent_id_idx" ON "footer_legal_compliance" USING btree ("_parent_id");
  CREATE INDEX "site_settings_site_logo_idx" ON "site_settings" USING btree ("site_logo_id");
  CREATE INDEX "site_settings_admin_logo_idx" ON "site_settings" USING btree ("admin_logo_id");
  CREATE INDEX "site_settings_favicon_idx" ON "site_settings" USING btree ("favicon_id");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_career_applications_fk" FOREIGN KEY ("career_applications_id") REFERENCES "public"."career_applications"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_service_inquiries_fk" FOREIGN KEY ("service_inquiries_id") REFERENCES "public"."service_inquiries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_contact_submissions_fk" FOREIGN KEY ("contact_submissions_id") REFERENCES "public"."contact_submissions"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "form_submissions_form_idx" ON "form_submissions" USING btree ("form_id");
  CREATE INDEX "form_submissions_resume_idx" ON "form_submissions" USING btree ("resume_id");
  CREATE INDEX "form_submissions_updated_at_idx" ON "form_submissions" USING btree ("updated_at");
  CREATE INDEX "form_submissions_created_at_idx" ON "form_submissions" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_career_applications_id_idx" ON "payload_locked_documents_rels" USING btree ("career_applications_id");
  CREATE INDEX "payload_locked_documents_rels_service_inquiries_id_idx" ON "payload_locked_documents_rels" USING btree ("service_inquiries_id");
  CREATE INDEX "payload_locked_documents_rels_contact_submissions_id_idx" ON "payload_locked_documents_rels" USING btree ("contact_submissions_id");
  DROP TYPE "public"."enum_footer_nav_items_link_type";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_footer_nav_items_link_type" AS ENUM('reference', 'custom');
  CREATE TABLE "footer_nav_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_footer_nav_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar NOT NULL
  );
  
  ALTER TABLE "career_applications" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "service_inquiries" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "contact_submissions" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footer_social_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footer_quick_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footer_our_products" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footer_legal_compliance" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "site_settings" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "career_applications" CASCADE;
  DROP TABLE "service_inquiries" CASCADE;
  DROP TABLE "contact_submissions" CASCADE;
  DROP TABLE "footer_social_links" CASCADE;
  DROP TABLE "footer_quick_links" CASCADE;
  DROP TABLE "footer_our_products" CASCADE;
  DROP TABLE "footer_legal_compliance" CASCADE;
  DROP TABLE "site_settings" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_career_applications_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_service_inquiries_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_contact_submissions_fk";
  
  DROP INDEX "form_submissions_form_idx";
  DROP INDEX "form_submissions_resume_idx";
  DROP INDEX "form_submissions_updated_at_idx";
  DROP INDEX "form_submissions_created_at_idx";
  DROP INDEX "payload_locked_documents_rels_career_applications_id_idx";
  DROP INDEX "payload_locked_documents_rels_service_inquiries_id_idx";
  DROP INDEX "payload_locked_documents_rels_contact_submissions_id_idx";
  ALTER TABLE "footer_nav_items" ADD CONSTRAINT "footer_nav_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "footer_nav_items_order_idx" ON "footer_nav_items" USING btree ("_order");
  CREATE INDEX "footer_nav_items_parent_id_idx" ON "footer_nav_items" USING btree ("_parent_id");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_career_applications_fk" FOREIGN KEY ("form_submissions_id") REFERENCES "public"."form_submissions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_service_inquiries_fk" FOREIGN KEY ("form_submissions_id") REFERENCES "public"."form_submissions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_contact_submissions_fk" FOREIGN KEY ("form_submissions_id") REFERENCES "public"."form_submissions"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "form_submissions_form_3_idx" ON "form_submissions" USING btree ("form_id");
  CREATE INDEX "form_submissions_resume_1_idx" ON "form_submissions" USING btree ("resume_id");
  CREATE INDEX "form_submissions_updated_at_3_idx" ON "form_submissions" USING btree ("updated_at");
  CREATE INDEX "form_submissions_created_at_3_idx" ON "form_submissions" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_form_submissions_id_1_idx" ON "payload_locked_documents_rels" USING btree ("form_submissions_id");
  CREATE INDEX "payload_locked_documents_rels_form_submissions_id_2_idx" ON "payload_locked_documents_rels" USING btree ("form_submissions_id");
  CREATE INDEX "payload_locked_documents_rels_form_submissions_id_3_idx" ON "payload_locked_documents_rels" USING btree ("form_submissions_id");
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "career_applications_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "service_inquiries_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "contact_submissions_id";
  ALTER TABLE "footer" DROP COLUMN "description";
  ALTER TABLE "footer" DROP COLUMN "contact_info_phone";
  ALTER TABLE "footer" DROP COLUMN "contact_info_email";
  ALTER TABLE "footer" DROP COLUMN "contact_info_address";
  ALTER TABLE "footer" DROP COLUMN "copyright_text";
  ALTER TABLE "footer" DROP COLUMN "newsletter_title";
  ALTER TABLE "footer" DROP COLUMN "newsletter_description";
  ALTER TABLE "footer" DROP COLUMN "newsletter_placeholder";
  ALTER TABLE "footer" DROP COLUMN "newsletter_button_label";
  DROP TYPE "public"."enum_footer_social_links_platform";
  DROP TYPE "public"."enum_footer_quick_links_link_type";`)
}
