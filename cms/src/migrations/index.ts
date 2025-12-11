import * as migration_20251209_092757 from './20251209_092757';
import * as migration_20251211_063424_add_roles_enum from './20251211_063424_add_roles_enum';

export const migrations = [
  {
    up: migration_20251209_092757.up,
    down: migration_20251209_092757.down,
    name: '20251209_092757',
  },
  {
    up: migration_20251211_063424_add_roles_enum.up,
    down: migration_20251211_063424_add_roles_enum.down,
    name: '20251211_063424_add_roles_enum'
  },
];
