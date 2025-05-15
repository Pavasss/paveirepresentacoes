
import { CompanyData } from './types';
import { libreplast } from './libreplast';
import { liplast } from './liplast';
import { pplast } from './pplast';
import { totalplast } from './totalplast';
import { vabene } from './vabene';
import { magitus } from './magitus';
import { plastsul } from './plastsul';
import { magipack } from './magipack';
import { guarufilme } from './guarufilme';
import { thermoflexo } from './thermoflexo';

// Combine all company data into a single array
export const companiesData: CompanyData[] = [
  libreplast,
  liplast,
  pplast,
  totalplast,
  vabene,
  magitus,
  plastsul,
  magipack,
  guarufilme,
  thermoflexo
];

// Re-export types for convenience
export * from './types';
