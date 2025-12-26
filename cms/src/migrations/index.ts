import * as migration_20251209_092757 from './20251209_092757';
import * as migration_20251211_063424_add_roles_enum from './20251211_063424_add_roles_enum';
import * as migration_20251218_062733_final_push from './20251218_062733_final_push';
import * as migration_20251218_070232_create_admin_user from './20251218_070232_create_admin_user';
import * as migration_20251223_055621_add_structured_fields_to_submissions from './20251223_055621_add_structured_fields_to_submissions';

export const migrations = [
  {
    up: migration_20251209_092757.up,
    down: migration_20251209_092757.down,
    name: '20251209_092757',
  },
  {
    up: migration_20251211_063424_add_roles_enum.up,
    down: migration_20251211_063424_add_roles_enum.down,
    name: '20251211_063424_add_roles_enum',
  },
  {
    up: migration_20251218_062733_final_push.up,
    down: migration_20251218_062733_final_push.down,
    name: '20251218_062733_final_push',
  },
  {
    up: migration_20251218_070232_create_admin_user.up,
    down: migration_20251218_070232_create_admin_user.down,
    name: '20251218_070232_create_admin_user',
  },
  {
    up: migration_20251223_055621_add_structured_fields_to_submissions.up,
    down: migration_20251223_055621_add_structured_fields_to_submissions.down,
    name: '20251223_055621_add_structured_fields_to_submissions'
  },
];
