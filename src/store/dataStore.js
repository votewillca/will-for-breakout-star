import { create } from 'zustand'
import { GENERAL_DETAILS } from '@/data/generalDetails'

export const useDataStore = create((set) => ({
  data: null,
  error: null,
  isLoading: true,
  lastApiUpdate: '--',
  lastSnapshotDate: '--',
  primaryPlayerData: null,
  allParticipantsData: null,
  enemyPlayerData: null,
  gapBetweenPrimaryAndEnemy: 0,
  isPrimaryPlayerLeading: false,
  fiveMinuteVoteMovement: null,
  fiveMinuteGapMovement: null,

  halfHourlyVoteMovement: null,
  halfHourlyGapMovement: null,

  hourlyVoteMovement: null,
  hourlyGapMovement: null,

  baselineTime: null,

  serverPassword: null,
  isAuthenticated: null,
  isAuthenticatedLoading: null,
  currentVersion: null,

  lastVotesSnapshot: null,
  votesGainedAfterLastSnapshot: null,

  primaryPlayerDisplayName: GENERAL_DETAILS.primaryPlayerDisplayName,
  enemyPlayerDisplayName: GENERAL_DETAILS.enemyPlayerDisplayName,
  primaryPlayerTotalVotes: null,

  currentLanguage: 'english',

  // State setter
  setState: (newState) => set(newState),
}))
