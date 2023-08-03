import * as Inputs from '@/lib/graphql/schema/__generated__/inputs'
import {
  defineExposeObject,
  definePrismaObject,
  defineFieldObject,
  defineRelationFunction,
  defineRelationObject,
} from '../utils';

export const AttachmentObject = definePrismaObject('Attachment', {
  description: undefined,
  findUnique: ({ id }) => ({ id }),
  fields: (t) => ({
    id: t.exposeID('id', AttachmentIdFieldObject),
    contentType: t.exposeString('contentType', AttachmentContentTypeFieldObject),
    filename: t.exposeString('filename', AttachmentFilenameFieldObject),
    path: t.exposeString('path', AttachmentPathFieldObject),
    userProfilePhoto: t.relation('userProfilePhoto', AttachmentUserProfilePhotoFieldObject),
    candidate: t.relation('candidate', AttachmentCandidateFieldObject),
    uploader: t.relation('uploader', AttachmentUploaderFieldObject),
    uploaderId: t.exposeInt('uploaderId', AttachmentUploaderIdFieldObject),
    createdAt: t.field(AttachmentCreatedAtFieldObject),
    updatedAt: t.field(AttachmentUpdatedAtFieldObject),
    offerFiles: t.relation('offerFiles', AttachmentOfferFilesFieldObject(t)),
    talentPoolFiles: t.relation('talentPoolFiles', AttachmentTalentPoolFilesFieldObject(t)),
  }),
});

export const AttachmentIdFieldObject = defineExposeObject('Int', {
  description: undefined,
  nullable: false,
});

export const AttachmentContentTypeFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: false,
});

export const AttachmentFilenameFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: false,
});

export const AttachmentPathFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: false,
});

export const AttachmentUserProfilePhotoFieldObject = defineRelationObject('Attachment', 'userProfilePhoto', {
  description: undefined,
  nullable: true,
  args: undefined,
  query: undefined,
});

export const AttachmentCandidateFieldObject = defineRelationObject('Attachment', 'candidate', {
  description: undefined,
  nullable: true,
  args: undefined,
  query: undefined,
});

export const AttachmentUploaderFieldObject = defineRelationObject('Attachment', 'uploader', {
  description: undefined,
  nullable: false,
  args: undefined,
  query: undefined,
});

export const AttachmentUploaderIdFieldObject = defineExposeObject('Int', {
  description: undefined,
  nullable: false,
});

export const AttachmentCreatedAtFieldObject = defineFieldObject('Attachment', {
  type: Inputs.DateTime,
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.createdAt,
});

export const AttachmentUpdatedAtFieldObject = defineFieldObject('Attachment', {
  type: Inputs.DateTime,
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.updatedAt,
});

export const AttachmentOfferFilesFieldObject = defineRelationFunction('Attachment', (t) =>
  defineRelationObject('Attachment', 'offerFiles', {
    description: undefined,
    nullable: false,
    args: {
      where: t.arg({ type: Inputs.OfferFileWhereInput, required: false }),
      orderBy: t.arg({ type: [Inputs.OfferFileOrderByWithRelationInput], required: false }),
      cursor: t.arg({ type: Inputs.OfferFileWhereUniqueInput, required: false }),
      take: t.arg({ type: 'Int', required: false }),
      skip: t.arg({ type: 'Int', required: false }),
      distinct: t.arg({ type: [Inputs.OfferFileScalarFieldEnum], required: false }),
    },
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

export const AttachmentTalentPoolFilesFieldObject = defineRelationFunction('Attachment', (t) =>
  defineRelationObject('Attachment', 'talentPoolFiles', {
    description: undefined,
    nullable: false,
    args: {
      where: t.arg({ type: Inputs.TalentPoolFileWhereInput, required: false }),
      orderBy: t.arg({ type: [Inputs.TalentPoolFileOrderByWithRelationInput], required: false }),
      cursor: t.arg({ type: Inputs.TalentPoolFileWhereUniqueInput, required: false }),
      take: t.arg({ type: 'Int', required: false }),
      skip: t.arg({ type: 'Int', required: false }),
      distinct: t.arg({ type: [Inputs.TalentPoolFileScalarFieldEnum], required: false }),
    },
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
