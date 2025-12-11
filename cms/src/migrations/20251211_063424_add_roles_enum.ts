import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
   await db.execute(sql`
   CREATE TYPE "public"."enum_about_mission_icon" AS ENUM('Target', 'Eye', 'Users', 'Award');
  CREATE TYPE "public"."enum_about_vision_icon" AS ENUM('Target', 'Eye', 'Users', 'Award');
  CREATE TYPE "public"."enum_about_values_icon" AS ENUM('Target', 'Eye', 'Users', 'Award');
  CREATE TYPE "public"."enum_services_products_stats_icon" AS ENUM('Clock', 'Percent', 'CreditCard', 'CheckCircle');
  CREATE TYPE "public"."enum_services_products_icon" AS ENUM('ShoppingCart', 'Car', 'Home', 'Briefcase', 'CreditCard');
  ALTER TYPE "public"."enum_roles_permissions_action" ADD VALUE 'create';
  ALTER TYPE "public"."enum_roles_permissions_action" ADD VALUE 'update';
  ALTER TYPE "public"."enum_roles_permissions_action" ADD VALUE 'delete';
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
  
  ALTER TABLE "roles_permissions" ALTER COLUMN "resource" SET DATA TYPE text;
  DROP TYPE "public"."enum_roles_permissions_resource";
  CREATE TYPE "public"."enum_roles_permissions_resource" AS ENUM('pages', 'media', 'about', 'services');
  ALTER TABLE "roles_permissions" ALTER COLUMN "resource" SET DATA TYPE "public"."enum_roles_permissions_resource" USING "resource"::"public"."enum_roles_permissions_resource";
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
  CREATE INDEX "services_products_image_idx" ON "services_products" USING btree ("image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
   await db.execute(sql`
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
  CREATE TYPE "public"."enum_roles_permissions_resource" AS ENUM('pages', 'users', 'media');
  ALTER TABLE "roles_permissions" ALTER COLUMN "resource" SET DATA TYPE "public"."enum_roles_permissions_resource" USING "resource"::"public"."enum_roles_permissions_resource";
  ALTER TABLE "roles_permissions" ALTER COLUMN "action" SET DATA TYPE text;
  ALTER TABLE "roles_permissions" ALTER COLUMN "action" SET DEFAULT 'read'::text;
  DROP TYPE "public"."enum_roles_permissions_action";
  CREATE TYPE "public"."enum_roles_permissions_action" AS ENUM('read', 'manage');
  ALTER TABLE "roles_permissions" ALTER COLUMN "action" SET DEFAULT 'read'::"public"."enum_roles_permissions_action";
  ALTER TABLE "roles_permissions" ALTER COLUMN "action" SET DATA TYPE "public"."enum_roles_permissions_action" USING "action"::"public"."enum_roles_permissions_action";
  DROP TYPE "public"."enum_about_mission_icon";
  DROP TYPE "public"."enum_about_vision_icon";
  DROP TYPE "public"."enum_about_values_icon";
  DROP TYPE "public"."enum_services_products_stats_icon";
  DROP TYPE "public"."enum_services_products_icon";`)
}
