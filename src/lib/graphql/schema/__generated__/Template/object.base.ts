import * as Inputs from '@/lib/graphql/schema/__generated__/inputs'
import { builder } from '../../builder';
import {
  definePrismaObject,
  defineFieldObject,
  defineRelationFunction,
  defineRelationObject,
} from '../utils';

export const TemplateObject = definePrismaObject('Template', {
  description: undefined,
  findUnique: ({ id }) => ({ id }),
  fields: (t) => ({
    id: t.field(TemplateIdFieldObject),
    company: t.relation('company', TemplateCompanyFieldObject),
    companyId: t.field(TemplateCompanyIdFieldObject),
    isCompanyWide: t.field(TemplateIsCompanyWideFieldObject),
    type: t.field(TemplateTypeFieldObject),
    name: t.field(TemplateNameFieldObject),
    category: t.field(TemplateCategoryFieldObject),
    screeningQuestionsTemplate: t.relation('screeningQuestionsTemplate', TemplateScreeningQuestionsTemplateFieldObject(t)),
    pipelineTemplate: t.relation('pipelineTemplate', TemplatePipelineTemplateFieldObject(t)),
    autoConfirmationEmail: t.relation('autoConfirmationEmail', TemplateAutoConfirmationEmailFieldObject(t)),
    stages: t.relation('stages', TemplateStagesFieldObject(t)),
    evaluations: t.relation('evaluations', TemplateEvaluationsFieldObject(t)),
  }),
});

export const TemplateIdFieldObject = defineFieldObject('Template', {
  type: "ID",
  description: undefined,
  nullable: false,
  resolve: (parent) => String(parent.id),
});

export const TemplateCompanyFieldObject = defineRelationObject('Template', 'company', {
  description: undefined,
  nullable: false,
  args: undefined,
  query: undefined,
});

export const TemplateCompanyIdFieldObject = defineFieldObject('Template', {
  type: "String",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.companyId,
});

export const TemplateIsCompanyWideFieldObject = defineFieldObject('Template', {
  type: "Boolean",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.isCompanyWide,
});

export const TemplateTypeFieldObject = defineFieldObject('Template', {
  type: Inputs.TemplateTypes,
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.type,
});

export const TemplateNameFieldObject = defineFieldObject('Template', {
  type: "String",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.name,
});

export const TemplateCategoryFieldObject = defineFieldObject('Template', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.category,
});

export const TemplateScreeningQuestionsTemplateFieldArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.OfferWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.OfferOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.OfferWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.OfferScalarFieldEnum], required: false }),
}))

export const TemplateScreeningQuestionsTemplateFieldObject = defineRelationFunction('Template', (t) =>
  defineRelationObject('Template', 'screeningQuestionsTemplate', {
    description: undefined,
    nullable: false,
    args: TemplateScreeningQuestionsTemplateFieldArgs,
    query: (args) => ({
      where: args.where || undefined,
      cursor: args.cursor || undefined,
      take: args.take || undefined,
      distinct: args.distinct || undefined,
      skip: args.skip || undefined,
      orderBy: args.orderBy || undefined,
    }),
  }),
);

export const TemplatePipelineTemplateFieldArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.OfferWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.OfferOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.OfferWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.OfferScalarFieldEnum], required: false }),
}))

export const TemplatePipelineTemplateFieldObject = defineRelationFunction('Template', (t) =>
  defineRelationObject('Template', 'pipelineTemplate', {
    description: undefined,
    nullable: false,
    args: TemplatePipelineTemplateFieldArgs,
    query: (args) => ({
      where: args.where || undefined,
      cursor: args.cursor || undefined,
      take: args.take || undefined,
      distinct: args.distinct || undefined,
      skip: args.skip || undefined,
      orderBy: args.orderBy || undefined,
    }),
  }),
);

export const TemplateAutoConfirmationEmailFieldArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.OfferWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.OfferOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.OfferWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.OfferScalarFieldEnum], required: false }),
}))

export const TemplateAutoConfirmationEmailFieldObject = defineRelationFunction('Template', (t) =>
  defineRelationObject('Template', 'autoConfirmationEmail', {
    description: undefined,
    nullable: false,
    args: TemplateAutoConfirmationEmailFieldArgs,
    query: (args) => ({
      where: args.where || undefined,
      cursor: args.cursor || undefined,
      take: args.take || undefined,
      distinct: args.distinct || undefined,
      skip: args.skip || undefined,
      orderBy: args.orderBy || undefined,
    }),
  }),
);

export const TemplateStagesFieldArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.StageWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.StageOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.StageWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.StageScalarFieldEnum], required: false }),
}))

export const TemplateStagesFieldObject = defineRelationFunction('Template', (t) =>
  defineRelationObject('Template', 'stages', {
    description: undefined,
    nullable: false,
    args: TemplateStagesFieldArgs,
    query: (args) => ({
      where: args.where || undefined,
      cursor: args.cursor || undefined,
      take: args.take || undefined,
      distinct: args.distinct || undefined,
      skip: args.skip || undefined,
      orderBy: args.orderBy || undefined,
    }),
  }),
);

export const TemplateEvaluationsFieldArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.EvaluationWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.EvaluationOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.EvaluationWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.EvaluationScalarFieldEnum], required: false }),
}))

export const TemplateEvaluationsFieldObject = defineRelationFunction('Template', (t) =>
  defineRelationObject('Template', 'evaluations', {
    description: undefined,
    nullable: false,
    args: TemplateEvaluationsFieldArgs,
    query: (args) => ({
      where: args.where || undefined,
      cursor: args.cursor || undefined,
      take: args.take || undefined,
      distinct: args.distinct || undefined,
      skip: args.skip || undefined,
      orderBy: args.orderBy || undefined,
    }),
  }),
);
