import * as Inputs from '@/graphql/schema/__generated__/inputs'
import {
  defineExposeObject,
  definePrismaObject,
  defineFieldObject,
  defineRelationFunction,
  defineRelationObject,
} from '../utils';

export const AuditLogObject = definePrismaObject('AuditLog', {
  description: undefined,
  findUnique: ({ id }) => ({ id }),
  fields: (t) => ({
    id: t.exposeID('id', AuditLogIdFieldObject),
    company: t.relation('company', AuditLogCompanyFieldObject),
    companyId: t.exposeInt('companyId', AuditLogCompanyIdFieldObject),
    user: t.relation('user', AuditLogUserFieldObject),
    userId: t.exposeInt('userId', AuditLogUserIdFieldObject),
    offer: t.relation('offer', AuditLogOfferFieldObject),
    offerId: t.exposeInt('offerId', AuditLogOfferIdFieldObject),
    candidate: t.relation('candidate', AuditLogCandidateFieldObject),
    candidateId: t.exposeInt('candidateId', AuditLogCandidateIdFieldObject),
    actor: t.exposeString('actor', AuditLogActorFieldObject),
    actorType: t.exposeString('actorType', AuditLogActorTypeFieldObject),
    ip: t.exposeString('ip', AuditLogIpFieldObject),
    action: t.exposeString('action', AuditLogActionFieldObject),
    eventDetails: t.field(AuditLogEventDetailsFieldObject),
    createdAt: t.field(AuditLogCreatedAtFieldObject),
  }),
});

export const AuditLogIdFieldObject = defineExposeObject('Int', {
  description: undefined,
  nullable: false,
});

export const AuditLogCompanyFieldObject = defineRelationObject('AuditLog', 'company', {
  description: undefined,
  nullable: false,
  args: undefined,
  query: undefined,
});

export const AuditLogCompanyIdFieldObject = defineExposeObject('Int', {
  description: undefined,
  nullable: false,
});

export const AuditLogUserFieldObject = defineRelationObject('AuditLog', 'user', {
  description: undefined,
  nullable: true,
  args: undefined,
  query: undefined,
});

export const AuditLogUserIdFieldObject = defineExposeObject('Int', {
  description: undefined,
  nullable: true,
});

export const AuditLogOfferFieldObject = defineRelationObject('AuditLog', 'offer', {
  description: undefined,
  nullable: true,
  args: undefined,
  query: undefined,
});

export const AuditLogOfferIdFieldObject = defineExposeObject('Int', {
  description: undefined,
  nullable: true,
});

export const AuditLogCandidateFieldObject = defineRelationObject('AuditLog', 'candidate', {
  description: undefined,
  nullable: true,
  args: undefined,
  query: undefined,
});

export const AuditLogCandidateIdFieldObject = defineExposeObject('Int', {
  description: undefined,
  nullable: true,
});

export const AuditLogActorFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: false,
});

export const AuditLogActorTypeFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: false,
});

export const AuditLogIpFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: false,
});

export const AuditLogActionFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: false,
});

export const AuditLogEventDetailsFieldObject = defineFieldObject('AuditLog', {
  type: Inputs.Json,
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.eventDetails,
});

export const AuditLogCreatedAtFieldObject = defineFieldObject('AuditLog', {
  type: Inputs.DateTime,
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.createdAt,
});
