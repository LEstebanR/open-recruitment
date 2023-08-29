import { me } from './me'

export const utils = {
  me,
}

export const defaultPrismaQueryOptions = async ({
  query,
  context,
  args,
  prisma,
  model,
  method,
  defaultValue = {},
}: {
  query?
  context
  args
  prisma
  model
  method
  defaultValue?
}) => {
  const selectedCompany = context?.session?.user?.selectedCompany
  const whereCompanyFromSession = {
    AND: {
      ...args.where,
      companyId: selectedCompany,
    },
  }

  const options = {
    where: whereCompanyFromSession,
    cursor: args.cursor || undefined,
    take: args.take || undefined,
    distinct: args.distinct || undefined,
    skip: args.skip || undefined,
    orderBy: args.orderBy || undefined,
    ...(query ?? {}),
  }

  return !selectedCompany ? defaultValue : await prisma[model][method](options)
}
