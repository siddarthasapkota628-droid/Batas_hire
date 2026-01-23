import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
    // Check if admin user already exists
     const existingAdmin = await payload.find({
    collection: 'users',
    where: {
      email: {
        equals: 'superadmin@yourdomain.com', // ⚠️ CHANGE THIS
      },
    },
  })

  if (existingAdmin.docs.length === 0) {
    // Create Super Admin user
    await payload.create({
      collection: 'users',
      data: {
        name: 'Super Admin',
        email: 'rujanrajlawat@gmail.com', // ⚠️ CHANGE THIS
        password: 'rujanrajlawat@gmail.com', // ⚠️ CHANGE THIS
        roles: ['admin'], // Super Admin role
        enableAdminPanelAccess: true, // Enable admin panel access
      },
    })
    
    console.log('✅ Super Admin user created successfully')
    console.log('📧 Email: superadmin@yourdomain.com')
    console.log('🔐 Password: YourSecurePassword123!')
  } else {
    console.log('ℹ️ Super Admin user already exists')
  }
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
    // Optional: Remove the admin user if rolling back
    await payload.delete({
    collection: 'users',
    where: {
      email: {
        equals: 'rujanrajlawat@gmail.com', // ⚠️ CHANGE THIS
      },
    },
  })
  
  console.log('🗑️ Super Admin user removed')
}
