/* eslint-disable */
import type { Prisma, User, Account, Session, VerificationToken, Attachment, HiringRole, Role, Company, SubscriptionData, CompanyMetadata, Department, DisqualifyReason, TagSource, AuditLog, MeetingRoom, EventSchedule, EventScheduleInterviewer, EventScheduleEvaluation, Event, EventInterviewer, Offer, OfferFile, Match, OfferTag, Membership, TalentPool, TalentPoolFile, TalentPoolMatch, Template, Stage, StageVisibility, StageMetadata, Candidate, CandidateTag, CandidateCustomField, CustomField, Evaluation, EvaluationQuestion, SharedCandidateLink, Task, TaskMember, Follow } from ".prisma/client";
export default interface PrismaTypes {
    User: {
        Name: "User";
        Shape: User;
        Include: Prisma.UserInclude;
        Select: Prisma.UserSelect;
        OrderBy: Prisma.UserOrderByWithRelationInput;
        WhereUnique: Prisma.UserWhereUniqueInput;
        Where: Prisma.UserWhereInput;
        Create: {};
        Update: {};
        RelationName: "photo" | "accounts" | "sessions" | "hiringRoles" | "companiesOwned";
        ListRelations: "accounts" | "sessions" | "hiringRoles" | "companiesOwned";
        Relations: {
            photo: {
                Shape: Attachment | null;
                Name: "Attachment";
            };
            accounts: {
                Shape: Account[];
                Name: "Account";
            };
            sessions: {
                Shape: Session[];
                Name: "Session";
            };
            hiringRoles: {
                Shape: HiringRole[];
                Name: "HiringRole";
            };
            companiesOwned: {
                Shape: Company[];
                Name: "Company";
            };
        };
    };
    Account: {
        Name: "Account";
        Shape: Account;
        Include: Prisma.AccountInclude;
        Select: Prisma.AccountSelect;
        OrderBy: Prisma.AccountOrderByWithRelationInput;
        WhereUnique: Prisma.AccountWhereUniqueInput;
        Where: Prisma.AccountWhereInput;
        Create: {};
        Update: {};
        RelationName: "user";
        ListRelations: never;
        Relations: {
            user: {
                Shape: User;
                Name: "User";
            };
        };
    };
    Session: {
        Name: "Session";
        Shape: Session;
        Include: Prisma.SessionInclude;
        Select: Prisma.SessionSelect;
        OrderBy: Prisma.SessionOrderByWithRelationInput;
        WhereUnique: Prisma.SessionWhereUniqueInput;
        Where: Prisma.SessionWhereInput;
        Create: {};
        Update: {};
        RelationName: "user";
        ListRelations: never;
        Relations: {
            user: {
                Shape: User;
                Name: "User";
            };
        };
    };
    VerificationToken: {
        Name: "VerificationToken";
        Shape: VerificationToken;
        Include: never;
        Select: Prisma.VerificationTokenSelect;
        OrderBy: Prisma.VerificationTokenOrderByWithRelationInput;
        WhereUnique: Prisma.VerificationTokenWhereUniqueInput;
        Where: Prisma.VerificationTokenWhereInput;
        Create: {};
        Update: {};
        RelationName: never;
        ListRelations: never;
        Relations: {};
    };
    Attachment: {
        Name: "Attachment";
        Shape: Attachment;
        Include: Prisma.AttachmentInclude;
        Select: Prisma.AttachmentSelect;
        OrderBy: Prisma.AttachmentOrderByWithRelationInput;
        WhereUnique: Prisma.AttachmentWhereUniqueInput;
        Where: Prisma.AttachmentWhereInput;
        Create: {};
        Update: {};
        RelationName: "userProfilePhoto" | "candidateCv" | "candidateAvatar" | "candidateCoverLetter" | "companyLogo" | "uploader" | "offerFiles" | "talentPoolFiles" | "company";
        ListRelations: "offerFiles" | "talentPoolFiles";
        Relations: {
            userProfilePhoto: {
                Shape: User | null;
                Name: "User";
            };
            candidateCv: {
                Shape: Candidate | null;
                Name: "Candidate";
            };
            candidateAvatar: {
                Shape: Candidate | null;
                Name: "Candidate";
            };
            candidateCoverLetter: {
                Shape: Candidate | null;
                Name: "Candidate";
            };
            companyLogo: {
                Shape: Company | null;
                Name: "Company";
            };
            uploader: {
                Shape: HiringRole | null;
                Name: "HiringRole";
            };
            offerFiles: {
                Shape: OfferFile[];
                Name: "OfferFile";
            };
            talentPoolFiles: {
                Shape: TalentPoolFile[];
                Name: "TalentPoolFile";
            };
            company: {
                Shape: Company;
                Name: "Company";
            };
        };
    };
    HiringRole: {
        Name: "HiringRole";
        Shape: HiringRole;
        Include: Prisma.HiringRoleInclude;
        Select: Prisma.HiringRoleSelect;
        OrderBy: Prisma.HiringRoleOrderByWithRelationInput;
        WhereUnique: Prisma.HiringRoleWhereUniqueInput;
        Where: Prisma.HiringRoleWhereInput;
        Create: {};
        Update: {};
        RelationName: "user" | "role" | "company" | "attachments" | "auditLogs" | "eventScheduleInterviewers" | "createdEvents" | "offerRecruiter" | "offerHiringManager" | "memberships" | "stageVisibilities" | "hiredCandidates" | "evaluations" | "tasks" | "follows" | "interviewerEvents" | "EventInterviewer";
        ListRelations: "attachments" | "auditLogs" | "eventScheduleInterviewers" | "createdEvents" | "memberships" | "stageVisibilities" | "hiredCandidates" | "evaluations" | "tasks" | "follows" | "interviewerEvents" | "EventInterviewer";
        Relations: {
            user: {
                Shape: User;
                Name: "User";
            };
            role: {
                Shape: Role;
                Name: "Role";
            };
            company: {
                Shape: Company;
                Name: "Company";
            };
            attachments: {
                Shape: Attachment[];
                Name: "Attachment";
            };
            auditLogs: {
                Shape: AuditLog[];
                Name: "AuditLog";
            };
            eventScheduleInterviewers: {
                Shape: EventScheduleInterviewer[];
                Name: "EventScheduleInterviewer";
            };
            createdEvents: {
                Shape: Event[];
                Name: "Event";
            };
            offerRecruiter: {
                Shape: Offer | null;
                Name: "Offer";
            };
            offerHiringManager: {
                Shape: Offer | null;
                Name: "Offer";
            };
            memberships: {
                Shape: Membership[];
                Name: "Membership";
            };
            stageVisibilities: {
                Shape: StageVisibility[];
                Name: "StageVisibility";
            };
            hiredCandidates: {
                Shape: Candidate[];
                Name: "Candidate";
            };
            evaluations: {
                Shape: Evaluation[];
                Name: "Evaluation";
            };
            tasks: {
                Shape: TaskMember[];
                Name: "TaskMember";
            };
            follows: {
                Shape: Follow[];
                Name: "Follow";
            };
            interviewerEvents: {
                Shape: Event[];
                Name: "Event";
            };
            EventInterviewer: {
                Shape: EventInterviewer[];
                Name: "EventInterviewer";
            };
        };
    };
    Role: {
        Name: "Role";
        Shape: Role;
        Include: Prisma.RoleInclude;
        Select: Prisma.RoleSelect;
        OrderBy: Prisma.RoleOrderByWithRelationInput;
        WhereUnique: Prisma.RoleWhereUniqueInput;
        Where: Prisma.RoleWhereInput;
        Create: {};
        Update: {};
        RelationName: "company" | "hiringRoles" | "memberships" | "stageVisibility";
        ListRelations: "hiringRoles" | "memberships" | "stageVisibility";
        Relations: {
            company: {
                Shape: Company;
                Name: "Company";
            };
            hiringRoles: {
                Shape: HiringRole[];
                Name: "HiringRole";
            };
            memberships: {
                Shape: Membership[];
                Name: "Membership";
            };
            stageVisibility: {
                Shape: StageVisibility[];
                Name: "StageVisibility";
            };
        };
    };
    Company: {
        Name: "Company";
        Shape: Company;
        Include: Prisma.CompanyInclude;
        Select: Prisma.CompanySelect;
        OrderBy: Prisma.CompanyOrderByWithRelationInput;
        WhereUnique: Prisma.CompanyWhereUniqueInput;
        Where: Prisma.CompanyWhereInput;
        Create: {};
        Update: {};
        RelationName: "roles" | "subscription" | "meetingRooms" | "metadata" | "eventSchedule" | "events" | "departments" | "disqualifyReasons" | "tagSources" | "auditLogs" | "offers" | "templates" | "tasks" | "owner" | "hiringRoles" | "candidates" | "TalentPool" | "CustomFields" | "logo" | "attachments";
        ListRelations: "roles" | "meetingRooms" | "metadata" | "eventSchedule" | "events" | "departments" | "disqualifyReasons" | "tagSources" | "auditLogs" | "offers" | "templates" | "tasks" | "hiringRoles" | "candidates" | "TalentPool" | "CustomFields" | "attachments";
        Relations: {
            roles: {
                Shape: Role[];
                Name: "Role";
            };
            subscription: {
                Shape: SubscriptionData | null;
                Name: "SubscriptionData";
            };
            meetingRooms: {
                Shape: MeetingRoom[];
                Name: "MeetingRoom";
            };
            metadata: {
                Shape: CompanyMetadata[];
                Name: "CompanyMetadata";
            };
            eventSchedule: {
                Shape: EventSchedule[];
                Name: "EventSchedule";
            };
            events: {
                Shape: Event[];
                Name: "Event";
            };
            departments: {
                Shape: Department[];
                Name: "Department";
            };
            disqualifyReasons: {
                Shape: DisqualifyReason[];
                Name: "DisqualifyReason";
            };
            tagSources: {
                Shape: TagSource[];
                Name: "TagSource";
            };
            auditLogs: {
                Shape: AuditLog[];
                Name: "AuditLog";
            };
            offers: {
                Shape: Offer[];
                Name: "Offer";
            };
            templates: {
                Shape: Template[];
                Name: "Template";
            };
            tasks: {
                Shape: Task[];
                Name: "Task";
            };
            owner: {
                Shape: User;
                Name: "User";
            };
            hiringRoles: {
                Shape: HiringRole[];
                Name: "HiringRole";
            };
            candidates: {
                Shape: Candidate[];
                Name: "Candidate";
            };
            TalentPool: {
                Shape: TalentPool[];
                Name: "TalentPool";
            };
            CustomFields: {
                Shape: CustomField[];
                Name: "CustomField";
            };
            logo: {
                Shape: Attachment | null;
                Name: "Attachment";
            };
            attachments: {
                Shape: Attachment[];
                Name: "Attachment";
            };
        };
    };
    SubscriptionData: {
        Name: "SubscriptionData";
        Shape: SubscriptionData;
        Include: Prisma.SubscriptionDataInclude;
        Select: Prisma.SubscriptionDataSelect;
        OrderBy: Prisma.SubscriptionDataOrderByWithRelationInput;
        WhereUnique: Prisma.SubscriptionDataWhereUniqueInput;
        Where: Prisma.SubscriptionDataWhereInput;
        Create: {};
        Update: {};
        RelationName: "company";
        ListRelations: never;
        Relations: {
            company: {
                Shape: Company;
                Name: "Company";
            };
        };
    };
    CompanyMetadata: {
        Name: "CompanyMetadata";
        Shape: CompanyMetadata;
        Include: Prisma.CompanyMetadataInclude;
        Select: Prisma.CompanyMetadataSelect;
        OrderBy: Prisma.CompanyMetadataOrderByWithRelationInput;
        WhereUnique: Prisma.CompanyMetadataWhereUniqueInput;
        Where: Prisma.CompanyMetadataWhereInput;
        Create: {};
        Update: {};
        RelationName: "company";
        ListRelations: never;
        Relations: {
            company: {
                Shape: Company;
                Name: "Company";
            };
        };
    };
    Department: {
        Name: "Department";
        Shape: Department;
        Include: Prisma.DepartmentInclude;
        Select: Prisma.DepartmentSelect;
        OrderBy: Prisma.DepartmentOrderByWithRelationInput;
        WhereUnique: Prisma.DepartmentWhereUniqueInput;
        Where: Prisma.DepartmentWhereInput;
        Create: {};
        Update: {};
        RelationName: "company" | "offers";
        ListRelations: "offers";
        Relations: {
            company: {
                Shape: Company;
                Name: "Company";
            };
            offers: {
                Shape: Offer[];
                Name: "Offer";
            };
        };
    };
    DisqualifyReason: {
        Name: "DisqualifyReason";
        Shape: DisqualifyReason;
        Include: Prisma.DisqualifyReasonInclude;
        Select: Prisma.DisqualifyReasonSelect;
        OrderBy: Prisma.DisqualifyReasonOrderByWithRelationInput;
        WhereUnique: Prisma.DisqualifyReasonWhereUniqueInput;
        Where: Prisma.DisqualifyReasonWhereInput;
        Create: {};
        Update: {};
        RelationName: "company" | "matches";
        ListRelations: "matches";
        Relations: {
            company: {
                Shape: Company;
                Name: "Company";
            };
            matches: {
                Shape: Match[];
                Name: "Match";
            };
        };
    };
    TagSource: {
        Name: "TagSource";
        Shape: TagSource;
        Include: Prisma.TagSourceInclude;
        Select: Prisma.TagSourceSelect;
        OrderBy: Prisma.TagSourceOrderByWithRelationInput;
        WhereUnique: Prisma.TagSourceWhereUniqueInput;
        Where: Prisma.TagSourceWhereInput;
        Create: {};
        Update: {};
        RelationName: "company" | "offerTags" | "candidateReferrer" | "candidateTags";
        ListRelations: "offerTags" | "candidateReferrer" | "candidateTags";
        Relations: {
            company: {
                Shape: Company;
                Name: "Company";
            };
            offerTags: {
                Shape: OfferTag[];
                Name: "OfferTag";
            };
            candidateReferrer: {
                Shape: Candidate[];
                Name: "Candidate";
            };
            candidateTags: {
                Shape: CandidateTag[];
                Name: "CandidateTag";
            };
        };
    };
    AuditLog: {
        Name: "AuditLog";
        Shape: AuditLog;
        Include: Prisma.AuditLogInclude;
        Select: Prisma.AuditLogSelect;
        OrderBy: Prisma.AuditLogOrderByWithRelationInput;
        WhereUnique: Prisma.AuditLogWhereUniqueInput;
        Where: Prisma.AuditLogWhereInput;
        Create: {};
        Update: {};
        RelationName: "company" | "user" | "offer" | "candidate";
        ListRelations: never;
        Relations: {
            company: {
                Shape: Company;
                Name: "Company";
            };
            user: {
                Shape: HiringRole | null;
                Name: "HiringRole";
            };
            offer: {
                Shape: Offer | null;
                Name: "Offer";
            };
            candidate: {
                Shape: Candidate | null;
                Name: "Candidate";
            };
        };
    };
    MeetingRoom: {
        Name: "MeetingRoom";
        Shape: MeetingRoom;
        Include: Prisma.MeetingRoomInclude;
        Select: Prisma.MeetingRoomSelect;
        OrderBy: Prisma.MeetingRoomOrderByWithRelationInput;
        WhereUnique: Prisma.MeetingRoomWhereUniqueInput;
        Where: Prisma.MeetingRoomWhereInput;
        Create: {};
        Update: {};
        RelationName: "company";
        ListRelations: never;
        Relations: {
            company: {
                Shape: Company;
                Name: "Company";
            };
        };
    };
    EventSchedule: {
        Name: "EventSchedule";
        Shape: EventSchedule;
        Include: Prisma.EventScheduleInclude;
        Select: Prisma.EventScheduleSelect;
        OrderBy: Prisma.EventScheduleOrderByWithRelationInput;
        WhereUnique: Prisma.EventScheduleWhereUniqueInput;
        Where: Prisma.EventScheduleWhereInput;
        Create: {};
        Update: {};
        RelationName: "company" | "eventScheduleInterviewers" | "eventScheduleEvaluations";
        ListRelations: "eventScheduleInterviewers" | "eventScheduleEvaluations";
        Relations: {
            company: {
                Shape: Company;
                Name: "Company";
            };
            eventScheduleInterviewers: {
                Shape: EventScheduleInterviewer[];
                Name: "EventScheduleInterviewer";
            };
            eventScheduleEvaluations: {
                Shape: EventScheduleEvaluation[];
                Name: "EventScheduleEvaluation";
            };
        };
    };
    EventScheduleInterviewer: {
        Name: "EventScheduleInterviewer";
        Shape: EventScheduleInterviewer;
        Include: Prisma.EventScheduleInterviewerInclude;
        Select: Prisma.EventScheduleInterviewerSelect;
        OrderBy: Prisma.EventScheduleInterviewerOrderByWithRelationInput;
        WhereUnique: Prisma.EventScheduleInterviewerWhereUniqueInput;
        Where: Prisma.EventScheduleInterviewerWhereInput;
        Create: {};
        Update: {};
        RelationName: "eventSchedule" | "teamMember";
        ListRelations: never;
        Relations: {
            eventSchedule: {
                Shape: EventSchedule;
                Name: "EventSchedule";
            };
            teamMember: {
                Shape: HiringRole;
                Name: "HiringRole";
            };
        };
    };
    EventScheduleEvaluation: {
        Name: "EventScheduleEvaluation";
        Shape: EventScheduleEvaluation;
        Include: Prisma.EventScheduleEvaluationInclude;
        Select: Prisma.EventScheduleEvaluationSelect;
        OrderBy: Prisma.EventScheduleEvaluationOrderByWithRelationInput;
        WhereUnique: Prisma.EventScheduleEvaluationWhereUniqueInput;
        Where: Prisma.EventScheduleEvaluationWhereInput;
        Create: {};
        Update: {};
        RelationName: "eventSchedule" | "evaluation";
        ListRelations: never;
        Relations: {
            eventSchedule: {
                Shape: EventSchedule;
                Name: "EventSchedule";
            };
            evaluation: {
                Shape: Evaluation;
                Name: "Evaluation";
            };
        };
    };
    Event: {
        Name: "Event";
        Shape: Event;
        Include: Prisma.EventInclude;
        Select: Prisma.EventSelect;
        OrderBy: Prisma.EventOrderByWithRelationInput;
        WhereUnique: Prisma.EventWhereUniqueInput;
        Where: Prisma.EventWhereInput;
        Create: {};
        Update: {};
        RelationName: "company" | "interviewers" | "evaluations" | "candidates" | "createdBy" | "EventInterviewer";
        ListRelations: "interviewers" | "evaluations" | "candidates" | "EventInterviewer";
        Relations: {
            company: {
                Shape: Company;
                Name: "Company";
            };
            interviewers: {
                Shape: HiringRole[];
                Name: "HiringRole";
            };
            evaluations: {
                Shape: Evaluation[];
                Name: "Evaluation";
            };
            candidates: {
                Shape: Candidate[];
                Name: "Candidate";
            };
            createdBy: {
                Shape: HiringRole;
                Name: "HiringRole";
            };
            EventInterviewer: {
                Shape: EventInterviewer[];
                Name: "EventInterviewer";
            };
        };
    };
    EventInterviewer: {
        Name: "EventInterviewer";
        Shape: EventInterviewer;
        Include: Prisma.EventInterviewerInclude;
        Select: Prisma.EventInterviewerSelect;
        OrderBy: Prisma.EventInterviewerOrderByWithRelationInput;
        WhereUnique: Prisma.EventInterviewerWhereUniqueInput;
        Where: Prisma.EventInterviewerWhereInput;
        Create: {};
        Update: {};
        RelationName: "event" | "teamMember";
        ListRelations: never;
        Relations: {
            event: {
                Shape: Event;
                Name: "Event";
            };
            teamMember: {
                Shape: HiringRole;
                Name: "HiringRole";
            };
        };
    };
    Offer: {
        Name: "Offer";
        Shape: Offer;
        Include: Prisma.OfferInclude;
        Select: Prisma.OfferSelect;
        OrderBy: Prisma.OfferOrderByWithRelationInput;
        WhereUnique: Prisma.OfferWhereUniqueInput;
        Where: Prisma.OfferWhereInput;
        Create: {};
        Update: {};
        RelationName: "company" | "department" | "recruiter" | "hiringManager" | "screeningQuestionsTemplate" | "pipelineTemplate" | "autoConfirmationEmail" | "auditLogs" | "files" | "offerTags" | "memberships" | "matches" | "hired" | "evaluations" | "follows";
        ListRelations: "auditLogs" | "files" | "offerTags" | "memberships" | "matches" | "hired" | "evaluations" | "follows";
        Relations: {
            company: {
                Shape: Company;
                Name: "Company";
            };
            department: {
                Shape: Department | null;
                Name: "Department";
            };
            recruiter: {
                Shape: HiringRole | null;
                Name: "HiringRole";
            };
            hiringManager: {
                Shape: HiringRole | null;
                Name: "HiringRole";
            };
            screeningQuestionsTemplate: {
                Shape: Template | null;
                Name: "Template";
            };
            pipelineTemplate: {
                Shape: Template | null;
                Name: "Template";
            };
            autoConfirmationEmail: {
                Shape: Template | null;
                Name: "Template";
            };
            auditLogs: {
                Shape: AuditLog[];
                Name: "AuditLog";
            };
            files: {
                Shape: OfferFile[];
                Name: "OfferFile";
            };
            offerTags: {
                Shape: OfferTag[];
                Name: "OfferTag";
            };
            memberships: {
                Shape: Membership[];
                Name: "Membership";
            };
            matches: {
                Shape: Match[];
                Name: "Match";
            };
            hired: {
                Shape: Candidate[];
                Name: "Candidate";
            };
            evaluations: {
                Shape: Evaluation[];
                Name: "Evaluation";
            };
            follows: {
                Shape: Follow[];
                Name: "Follow";
            };
        };
    };
    OfferFile: {
        Name: "OfferFile";
        Shape: OfferFile;
        Include: Prisma.OfferFileInclude;
        Select: Prisma.OfferFileSelect;
        OrderBy: Prisma.OfferFileOrderByWithRelationInput;
        WhereUnique: Prisma.OfferFileWhereUniqueInput;
        Where: Prisma.OfferFileWhereInput;
        Create: {};
        Update: {};
        RelationName: "offer" | "attachment";
        ListRelations: never;
        Relations: {
            offer: {
                Shape: Offer;
                Name: "Offer";
            };
            attachment: {
                Shape: Attachment;
                Name: "Attachment";
            };
        };
    };
    Match: {
        Name: "Match";
        Shape: Match;
        Include: Prisma.MatchInclude;
        Select: Prisma.MatchSelect;
        OrderBy: Prisma.MatchOrderByWithRelationInput;
        WhereUnique: Prisma.MatchWhereUniqueInput;
        Where: Prisma.MatchWhereInput;
        Create: {};
        Update: {};
        RelationName: "offer" | "candidate" | "stage" | "disqualifyReason";
        ListRelations: never;
        Relations: {
            offer: {
                Shape: Offer;
                Name: "Offer";
            };
            candidate: {
                Shape: Candidate;
                Name: "Candidate";
            };
            stage: {
                Shape: Stage | null;
                Name: "Stage";
            };
            disqualifyReason: {
                Shape: DisqualifyReason | null;
                Name: "DisqualifyReason";
            };
        };
    };
    OfferTag: {
        Name: "OfferTag";
        Shape: OfferTag;
        Include: Prisma.OfferTagInclude;
        Select: Prisma.OfferTagSelect;
        OrderBy: Prisma.OfferTagOrderByWithRelationInput;
        WhereUnique: Prisma.OfferTagWhereUniqueInput;
        Where: Prisma.OfferTagWhereInput;
        Create: {};
        Update: {};
        RelationName: "offer" | "tag";
        ListRelations: never;
        Relations: {
            offer: {
                Shape: Offer;
                Name: "Offer";
            };
            tag: {
                Shape: TagSource;
                Name: "TagSource";
            };
        };
    };
    Membership: {
        Name: "Membership";
        Shape: Membership;
        Include: Prisma.MembershipInclude;
        Select: Prisma.MembershipSelect;
        OrderBy: Prisma.MembershipOrderByWithRelationInput;
        WhereUnique: Prisma.MembershipWhereUniqueInput;
        Where: Prisma.MembershipWhereInput;
        Create: {};
        Update: {};
        RelationName: "teamMember" | "role" | "offer";
        ListRelations: never;
        Relations: {
            teamMember: {
                Shape: HiringRole | null;
                Name: "HiringRole";
            };
            role: {
                Shape: Role | null;
                Name: "Role";
            };
            offer: {
                Shape: Offer;
                Name: "Offer";
            };
        };
    };
    TalentPool: {
        Name: "TalentPool";
        Shape: TalentPool;
        Include: Prisma.TalentPoolInclude;
        Select: Prisma.TalentPoolSelect;
        OrderBy: Prisma.TalentPoolOrderByWithRelationInput;
        WhereUnique: Prisma.TalentPoolWhereUniqueInput;
        Where: Prisma.TalentPoolWhereInput;
        Create: {};
        Update: {};
        RelationName: "files" | "matches" | "follows" | "company";
        ListRelations: "files" | "matches" | "follows";
        Relations: {
            files: {
                Shape: TalentPoolFile[];
                Name: "TalentPoolFile";
            };
            matches: {
                Shape: TalentPoolMatch[];
                Name: "TalentPoolMatch";
            };
            follows: {
                Shape: Follow[];
                Name: "Follow";
            };
            company: {
                Shape: Company;
                Name: "Company";
            };
        };
    };
    TalentPoolFile: {
        Name: "TalentPoolFile";
        Shape: TalentPoolFile;
        Include: Prisma.TalentPoolFileInclude;
        Select: Prisma.TalentPoolFileSelect;
        OrderBy: Prisma.TalentPoolFileOrderByWithRelationInput;
        WhereUnique: Prisma.TalentPoolFileWhereUniqueInput;
        Where: Prisma.TalentPoolFileWhereInput;
        Create: {};
        Update: {};
        RelationName: "talentPool" | "attachment";
        ListRelations: never;
        Relations: {
            talentPool: {
                Shape: TalentPool;
                Name: "TalentPool";
            };
            attachment: {
                Shape: Attachment;
                Name: "Attachment";
            };
        };
    };
    TalentPoolMatch: {
        Name: "TalentPoolMatch";
        Shape: TalentPoolMatch;
        Include: Prisma.TalentPoolMatchInclude;
        Select: Prisma.TalentPoolMatchSelect;
        OrderBy: Prisma.TalentPoolMatchOrderByWithRelationInput;
        WhereUnique: Prisma.TalentPoolMatchWhereUniqueInput;
        Where: Prisma.TalentPoolMatchWhereInput;
        Create: {};
        Update: {};
        RelationName: "talentPool" | "candidate";
        ListRelations: never;
        Relations: {
            talentPool: {
                Shape: TalentPool;
                Name: "TalentPool";
            };
            candidate: {
                Shape: Candidate;
                Name: "Candidate";
            };
        };
    };
    Template: {
        Name: "Template";
        Shape: Template;
        Include: Prisma.TemplateInclude;
        Select: Prisma.TemplateSelect;
        OrderBy: Prisma.TemplateOrderByWithRelationInput;
        WhereUnique: Prisma.TemplateWhereUniqueInput;
        Where: Prisma.TemplateWhereInput;
        Create: {};
        Update: {};
        RelationName: "company" | "screeningQuestionsTemplate" | "pipelineTemplate" | "autoConfirmationEmail" | "stages" | "evaluations";
        ListRelations: "screeningQuestionsTemplate" | "pipelineTemplate" | "autoConfirmationEmail" | "stages" | "evaluations";
        Relations: {
            company: {
                Shape: Company;
                Name: "Company";
            };
            screeningQuestionsTemplate: {
                Shape: Offer[];
                Name: "Offer";
            };
            pipelineTemplate: {
                Shape: Offer[];
                Name: "Offer";
            };
            autoConfirmationEmail: {
                Shape: Offer[];
                Name: "Offer";
            };
            stages: {
                Shape: Stage[];
                Name: "Stage";
            };
            evaluations: {
                Shape: Evaluation[];
                Name: "Evaluation";
            };
        };
    };
    Stage: {
        Name: "Stage";
        Shape: Stage;
        Include: Prisma.StageInclude;
        Select: Prisma.StageSelect;
        OrderBy: Prisma.StageOrderByWithRelationInput;
        WhereUnique: Prisma.StageWhereUniqueInput;
        Where: Prisma.StageWhereInput;
        Create: {};
        Update: {};
        RelationName: "template" | "matches" | "visibility" | "metadata";
        ListRelations: "matches" | "visibility" | "metadata";
        Relations: {
            template: {
                Shape: Template;
                Name: "Template";
            };
            matches: {
                Shape: Match[];
                Name: "Match";
            };
            visibility: {
                Shape: StageVisibility[];
                Name: "StageVisibility";
            };
            metadata: {
                Shape: StageMetadata[];
                Name: "StageMetadata";
            };
        };
    };
    StageVisibility: {
        Name: "StageVisibility";
        Shape: StageVisibility;
        Include: Prisma.StageVisibilityInclude;
        Select: Prisma.StageVisibilitySelect;
        OrderBy: Prisma.StageVisibilityOrderByWithRelationInput;
        WhereUnique: Prisma.StageVisibilityWhereUniqueInput;
        Where: Prisma.StageVisibilityWhereInput;
        Create: {};
        Update: {};
        RelationName: "teamMember" | "role" | "stage";
        ListRelations: never;
        Relations: {
            teamMember: {
                Shape: HiringRole | null;
                Name: "HiringRole";
            };
            role: {
                Shape: Role | null;
                Name: "Role";
            };
            stage: {
                Shape: Stage;
                Name: "Stage";
            };
        };
    };
    StageMetadata: {
        Name: "StageMetadata";
        Shape: StageMetadata;
        Include: Prisma.StageMetadataInclude;
        Select: Prisma.StageMetadataSelect;
        OrderBy: Prisma.StageMetadataOrderByWithRelationInput;
        WhereUnique: Prisma.StageMetadataWhereUniqueInput;
        Where: Prisma.StageMetadataWhereInput;
        Create: {};
        Update: {};
        RelationName: "stage";
        ListRelations: never;
        Relations: {
            stage: {
                Shape: Stage;
                Name: "Stage";
            };
        };
    };
    Candidate: {
        Name: "Candidate";
        Shape: Candidate;
        Include: Prisma.CandidateInclude;
        Select: Prisma.CandidateSelect;
        OrderBy: Prisma.CandidateOrderByWithRelationInput;
        WhereUnique: Prisma.CandidateWhereUniqueInput;
        Where: Prisma.CandidateWhereInput;
        Create: {};
        Update: {};
        RelationName: "referrer" | "cv" | "avatar" | "coverLetter" | "hiredAt" | "hiredBy" | "auditLogs" | "offers" | "talentPools" | "candidateTags" | "candidateCustomFields" | "evaluations" | "tasks" | "follows" | "SharedCandidateLink" | "company" | "events";
        ListRelations: "auditLogs" | "offers" | "talentPools" | "candidateTags" | "candidateCustomFields" | "evaluations" | "tasks" | "follows" | "SharedCandidateLink" | "events";
        Relations: {
            referrer: {
                Shape: TagSource | null;
                Name: "TagSource";
            };
            cv: {
                Shape: Attachment | null;
                Name: "Attachment";
            };
            avatar: {
                Shape: Attachment | null;
                Name: "Attachment";
            };
            coverLetter: {
                Shape: Attachment | null;
                Name: "Attachment";
            };
            hiredAt: {
                Shape: Offer | null;
                Name: "Offer";
            };
            hiredBy: {
                Shape: HiringRole | null;
                Name: "HiringRole";
            };
            auditLogs: {
                Shape: AuditLog[];
                Name: "AuditLog";
            };
            offers: {
                Shape: Match[];
                Name: "Match";
            };
            talentPools: {
                Shape: TalentPoolMatch[];
                Name: "TalentPoolMatch";
            };
            candidateTags: {
                Shape: CandidateTag[];
                Name: "CandidateTag";
            };
            candidateCustomFields: {
                Shape: CandidateCustomField[];
                Name: "CandidateCustomField";
            };
            evaluations: {
                Shape: Evaluation[];
                Name: "Evaluation";
            };
            tasks: {
                Shape: Task[];
                Name: "Task";
            };
            follows: {
                Shape: Follow[];
                Name: "Follow";
            };
            SharedCandidateLink: {
                Shape: SharedCandidateLink[];
                Name: "SharedCandidateLink";
            };
            company: {
                Shape: Company;
                Name: "Company";
            };
            events: {
                Shape: Event[];
                Name: "Event";
            };
        };
    };
    CandidateTag: {
        Name: "CandidateTag";
        Shape: CandidateTag;
        Include: Prisma.CandidateTagInclude;
        Select: Prisma.CandidateTagSelect;
        OrderBy: Prisma.CandidateTagOrderByWithRelationInput;
        WhereUnique: Prisma.CandidateTagWhereUniqueInput;
        Where: Prisma.CandidateTagWhereInput;
        Create: {};
        Update: {};
        RelationName: "candidate" | "tag";
        ListRelations: never;
        Relations: {
            candidate: {
                Shape: Candidate;
                Name: "Candidate";
            };
            tag: {
                Shape: TagSource;
                Name: "TagSource";
            };
        };
    };
    CandidateCustomField: {
        Name: "CandidateCustomField";
        Shape: CandidateCustomField;
        Include: Prisma.CandidateCustomFieldInclude;
        Select: Prisma.CandidateCustomFieldSelect;
        OrderBy: Prisma.CandidateCustomFieldOrderByWithRelationInput;
        WhereUnique: Prisma.CandidateCustomFieldWhereUniqueInput;
        Where: Prisma.CandidateCustomFieldWhereInput;
        Create: {};
        Update: {};
        RelationName: "candidate" | "customField";
        ListRelations: never;
        Relations: {
            candidate: {
                Shape: Candidate;
                Name: "Candidate";
            };
            customField: {
                Shape: CustomField;
                Name: "CustomField";
            };
        };
    };
    CustomField: {
        Name: "CustomField";
        Shape: CustomField;
        Include: Prisma.CustomFieldInclude;
        Select: Prisma.CustomFieldSelect;
        OrderBy: Prisma.CustomFieldOrderByWithRelationInput;
        WhereUnique: Prisma.CustomFieldWhereUniqueInput;
        Where: Prisma.CustomFieldWhereInput;
        Create: {};
        Update: {};
        RelationName: "company" | "candidateCustomFields";
        ListRelations: "candidateCustomFields";
        Relations: {
            company: {
                Shape: Company;
                Name: "Company";
            };
            candidateCustomFields: {
                Shape: CandidateCustomField[];
                Name: "CandidateCustomField";
            };
        };
    };
    Evaluation: {
        Name: "Evaluation";
        Shape: Evaluation;
        Include: Prisma.EvaluationInclude;
        Select: Prisma.EvaluationSelect;
        OrderBy: Prisma.EvaluationOrderByWithRelationInput;
        WhereUnique: Prisma.EvaluationWhereUniqueInput;
        Where: Prisma.EvaluationWhereInput;
        Create: {};
        Update: {};
        RelationName: "template" | "offer" | "candidate" | "teamMember" | "eventScheduleEvaluations" | "event" | "answers";
        ListRelations: "eventScheduleEvaluations" | "answers";
        Relations: {
            template: {
                Shape: Template | null;
                Name: "Template";
            };
            offer: {
                Shape: Offer | null;
                Name: "Offer";
            };
            candidate: {
                Shape: Candidate;
                Name: "Candidate";
            };
            teamMember: {
                Shape: HiringRole;
                Name: "HiringRole";
            };
            eventScheduleEvaluations: {
                Shape: EventScheduleEvaluation[];
                Name: "EventScheduleEvaluation";
            };
            event: {
                Shape: Event | null;
                Name: "Event";
            };
            answers: {
                Shape: EvaluationQuestion[];
                Name: "EvaluationQuestion";
            };
        };
    };
    EvaluationQuestion: {
        Name: "EvaluationQuestion";
        Shape: EvaluationQuestion;
        Include: Prisma.EvaluationQuestionInclude;
        Select: Prisma.EvaluationQuestionSelect;
        OrderBy: Prisma.EvaluationQuestionOrderByWithRelationInput;
        WhereUnique: Prisma.EvaluationQuestionWhereUniqueInput;
        Where: Prisma.EvaluationQuestionWhereInput;
        Create: {};
        Update: {};
        RelationName: "evaluation";
        ListRelations: never;
        Relations: {
            evaluation: {
                Shape: Evaluation;
                Name: "Evaluation";
            };
        };
    };
    SharedCandidateLink: {
        Name: "SharedCandidateLink";
        Shape: SharedCandidateLink;
        Include: Prisma.SharedCandidateLinkInclude;
        Select: Prisma.SharedCandidateLinkSelect;
        OrderBy: Prisma.SharedCandidateLinkOrderByWithRelationInput;
        WhereUnique: Prisma.SharedCandidateLinkWhereUniqueInput;
        Where: Prisma.SharedCandidateLinkWhereInput;
        Create: {};
        Update: {};
        RelationName: "candidate";
        ListRelations: never;
        Relations: {
            candidate: {
                Shape: Candidate;
                Name: "Candidate";
            };
        };
    };
    Task: {
        Name: "Task";
        Shape: Task;
        Include: Prisma.TaskInclude;
        Select: Prisma.TaskSelect;
        OrderBy: Prisma.TaskOrderByWithRelationInput;
        WhereUnique: Prisma.TaskWhereUniqueInput;
        Where: Prisma.TaskWhereInput;
        Create: {};
        Update: {};
        RelationName: "company" | "taskMembers" | "Candidate";
        ListRelations: "taskMembers";
        Relations: {
            company: {
                Shape: Company;
                Name: "Company";
            };
            taskMembers: {
                Shape: TaskMember[];
                Name: "TaskMember";
            };
            Candidate: {
                Shape: Candidate | null;
                Name: "Candidate";
            };
        };
    };
    TaskMember: {
        Name: "TaskMember";
        Shape: TaskMember;
        Include: Prisma.TaskMemberInclude;
        Select: Prisma.TaskMemberSelect;
        OrderBy: Prisma.TaskMemberOrderByWithRelationInput;
        WhereUnique: Prisma.TaskMemberWhereUniqueInput;
        Where: Prisma.TaskMemberWhereInput;
        Create: {};
        Update: {};
        RelationName: "task" | "teamMember";
        ListRelations: never;
        Relations: {
            task: {
                Shape: Task;
                Name: "Task";
            };
            teamMember: {
                Shape: HiringRole;
                Name: "HiringRole";
            };
        };
    };
    Follow: {
        Name: "Follow";
        Shape: Follow;
        Include: Prisma.FollowInclude;
        Select: Prisma.FollowSelect;
        OrderBy: Prisma.FollowOrderByWithRelationInput;
        WhereUnique: Prisma.FollowWhereUniqueInput;
        Where: Prisma.FollowWhereInput;
        Create: {};
        Update: {};
        RelationName: "offer" | "candidate" | "talentPool" | "teamMember";
        ListRelations: never;
        Relations: {
            offer: {
                Shape: Offer | null;
                Name: "Offer";
            };
            candidate: {
                Shape: Candidate | null;
                Name: "Candidate";
            };
            talentPool: {
                Shape: TalentPool | null;
                Name: "TalentPool";
            };
            teamMember: {
                Shape: HiringRole;
                Name: "HiringRole";
            };
        };
    };
}