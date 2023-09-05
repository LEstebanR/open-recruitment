module.exports = {
  crud: {
    outputDir: './src/lib/graphql/schema/__generated__/',
    // replacer(generated, position) {
    //   return `// THIS CONTENT WAS INSERTED AT REPLACE. THE POSITION IS ${position}\n${generated}`
    // },
    prismaCaller: 'prisma',
    //disabled: true,
    inputsImporter: "import * as Inputs from '@/lib/graphql/schema/__generated__/inputs'",
    deleteOutputDirBeforeGenerate: true,
    exportEverythingInObjectsDotTs: true,
    prismaImporter: `import { Prisma } from '@prisma/client';`,
    resolverImports: `\nimport { prisma } from '@/lib/prisma';`,
  },
  inputs: {
    simple: false,
    prismaImporter: `import { Prisma } from '@prisma/client';`,
    outputFilePath: './src/lib/graphql/schema/__generated__/inputs.ts',
  },
  global: {
    builderLocation: '/src/lib/graphql/schema/builder',
    // replacer: (str, section) => {
    //   if (section === 'crud.model.resolver') {
    //     return str.replace(
    //       "import * as Inputs from '../inputs'",
    //       "import * as Inputs from '../../inputs';",
    //     );
    //   }
    //   return str;
    // },
    // afterGenerate: (dmmf) => {
    //   console.log(dmmf)
    //   throw new Error("Owpa")
    // }
  },
}
