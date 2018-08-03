import { DappsModule } from './dapps.module';

describe('DappsModule', () => {
  let dappsModule: DappsModule;

  beforeEach(() => {
    dappsModule = new DappsModule();
  });

  it('should create an instance', () => {
    expect(dappsModule).toBeTruthy();
  });
});
