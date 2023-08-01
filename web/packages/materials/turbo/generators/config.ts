import { PlopTypes } from "@turbo/gen";

// Learn more about Turborepo Generators at https://turbo.build/repo/docs/core-concepts/monorepos/code-generation

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  // A simple generator to add a new React component to the internal UI library
  plop.setGenerator("create-material", {
    description: "Adds a new material",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the material?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "{{pascalCase name}}/component.tsx",
        templateFile: "templates/component.hbs",
      },
      {
        type: "add",
        path: "{{pascalCase name}}/index.d.ts",
        templateFile: "templates/types.d.hbs",
      },
    ],
  });
}
