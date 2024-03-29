export {
  MeetingRoomObject,
  MeetingRoomIdFieldObject,
  MeetingRoomNameFieldObject,
  MeetingRoomTypeFieldObject,
  MeetingRoomLinkFieldObject,
  MeetingRoomCompanyFieldObject,
  MeetingRoomCompanyIdFieldObject
} from './object.base';
export {
  createManyMeetingRoomMutation,
  createOneMeetingRoomMutation,
  deleteManyMeetingRoomMutation,
  deleteOneMeetingRoomMutation,
  updateManyMeetingRoomMutation,
  updateOneMeetingRoomMutation,
  upsertOneMeetingRoomMutation,
  createManyMeetingRoomMutationObject,
  createOneMeetingRoomMutationObject,
  deleteManyMeetingRoomMutationObject,
  deleteOneMeetingRoomMutationObject,
  updateManyMeetingRoomMutationObject,
  updateOneMeetingRoomMutationObject,
  upsertOneMeetingRoomMutationObject
} from './mutations';
export {
  findFirstMeetingRoomQuery,
  findManyMeetingRoomQuery,
  countMeetingRoomQuery,
  findUniqueMeetingRoomQuery,
  findFirstMeetingRoomQueryObject,
  findManyMeetingRoomQueryObject,
  countMeetingRoomQueryObject,
  findUniqueMeetingRoomQueryObject
} from './queries';
