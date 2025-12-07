import * as migration_20251207_080337_update_pages_fixed_struct from './20251207_080337_update_pages_fixed_struct';
import * as migration_20251207_083122_add_roles_to_users from './20251207_083122_add_roles_to_users';

export const migrations = [
  {
    up: migration_20251207_080337_update_pages_fixed_struct.up,
    down: migration_20251207_080337_update_pages_fixed_struct.down,
    name: '20251207_080337_update_pages_fixed_struct',
  },
  {
    up: migration_20251207_083122_add_roles_to_users.up,
    down: migration_20251207_083122_add_roles_to_users.down,
    name: '20251207_083122_add_roles_to_users'
  },
];
