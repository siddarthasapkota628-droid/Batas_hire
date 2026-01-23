import * as migration_20251209_092757 from './20251209_092757';
import * as migration_20251211_063424_add_roles_enum from './20251211_063424_add_roles_enum';
import * as migration_20251218_062733_final_push from './20251218_062733_final_push';
import * as migration_20251218_070232_create_admin_user from './20251218_070232_create_admin_user';
import * as migration_20260105_054514 from './20260105_054514';
import * as migration_20260111_100710_after_merged_with_sid from './20260111_100710_after_merged_with_sid';
import * as migration_20260114_063343_jan14 from './20260114_063343_jan14';
import * as migration_20260116_080251_Jan16_batas from './20260116_080251_Jan16_batas';

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
    up: migration_20260105_054514.up,
    down: migration_20260105_054514.down,
    name: '20260105_054514',
  },
  {
    up: migration_20260111_100710_after_merged_with_sid.up,
    down: migration_20260111_100710_after_merged_with_sid.down,
    name: '20260111_100710_after_merged_with_sid',
  },
  {
    up: migration_20260114_063343_jan14.up,
    down: migration_20260114_063343_jan14.down,
    name: '20260114_063343_jan14',
  },
  {
    up: migration_20260116_080251_Jan16_batas.up,
    down: migration_20260116_080251_Jan16_batas.down,
    name: '20260116_080251_Jan16_batas'
  },
];
