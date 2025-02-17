import { SeedManager } from '@mikro-orm/seeder';

(global as any).process.env.FORCE_COLOR = 0;

import { MikroORM } from '@mikro-orm/core';
import type { SqliteDriver } from '@mikro-orm/sqlite';
import { SchemaGenerator } from '@mikro-orm/sqlite';
import { CLIHelper } from '@mikro-orm/cli';
import { SchemaCommandFactory } from '../../../packages/cli/src/commands/SchemaCommandFactory';
import { initORMSqlite } from '../../bootstrap';

const closeSpy = jest.spyOn(MikroORM.prototype, 'close');
const showHelpMock = jest.spyOn(CLIHelper, 'showHelp');
showHelpMock.mockImplementation(() => void 0);
const createSchema = jest.spyOn(SchemaGenerator.prototype, 'createSchema');
createSchema.mockImplementation(async () => void 0);
const getCreateSchemaSQL = jest.spyOn(SchemaGenerator.prototype, 'getCreateSchemaSQL');
getCreateSchemaSQL.mockImplementation(async () => '');
const seed = jest.spyOn(SeedManager.prototype, 'seedString');
seed.mockImplementation(async () => void 0);
const dumpMock = jest.spyOn(CLIHelper, 'dump');
dumpMock.mockImplementation(() => void 0);

describe('CreateSchemaCommand', () => {

  let orm: MikroORM<SqliteDriver>;

  beforeAll(async () => {
    orm = await initORMSqlite();
    const getORMMock = jest.spyOn(CLIHelper, 'getORM');
    getORMMock.mockResolvedValue(orm);
  });

  afterAll(async () => await orm.close(true));

  test('builder', async () => {
    const cmd = SchemaCommandFactory.create('create');
    const args = { option: jest.fn() };
    cmd.builder(args as any);
  });

  test('handler', async () => {
    const cmd = SchemaCommandFactory.create('create');

    expect(showHelpMock.mock.calls.length).toBe(0);
    await expect(cmd.handler({} as any)).resolves.toBeUndefined();
    expect(showHelpMock.mock.calls.length).toBe(1);

    expect(createSchema.mock.calls.length).toBe(0);
    expect(closeSpy).toBeCalledTimes(0);
    await expect(cmd.handler({ run: true } as any)).resolves.toBeUndefined();
    expect(seed.mock.calls.length).toBe(0);
    expect(createSchema.mock.calls.length).toBe(1);
    expect(closeSpy).toBeCalledTimes(1);

    expect(getCreateSchemaSQL.mock.calls.length).toBe(0);
    await expect(cmd.handler({ dump: true } as any)).resolves.toBeUndefined();
    expect(getCreateSchemaSQL.mock.calls.length).toBe(1);
    expect(seed.mock.calls.length).toBe(0);
    expect(closeSpy).toBeCalledTimes(2);

    expect(seed.mock.calls.length).toBe(0);
    await expect(cmd.handler({ run: true, seed: '' } as any)).resolves.toBeUndefined();
    expect(createSchema.mock.calls.length).toBe(2);
    expect(seed.mock.calls.length).toBe(1);
    expect(seed).toBeCalledWith(orm.config.get('seeder').defaultSeeder);
    expect(closeSpy).toBeCalledTimes(3);

    await expect(cmd.handler({ run: true, seed: 'UsersSeeder' } as any)).resolves.toBeUndefined();
    expect(createSchema.mock.calls.length).toBe(3);
    expect(seed.mock.calls.length).toBe(2);
    expect(seed).toBeCalledWith('UsersSeeder');
    expect(closeSpy).toBeCalledTimes(4);
  });

});
