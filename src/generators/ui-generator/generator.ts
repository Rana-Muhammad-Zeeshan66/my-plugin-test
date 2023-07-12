import { formatFiles, Tree } from '@nx/devkit';

import { UiGeneratorGeneratorSchema } from './schema';
import { execSync } from 'child_process';

export async function uiGeneratorGenerator(
  tree: Tree,
  options: UiGeneratorGeneratorSchema
) {
  const command = `npm install ${options.name}@latest`;
  execSync(command, { stdio: 'inherit' });
  await formatFiles(tree);
}

export default uiGeneratorGenerator;
