'use client'
import { useDataStore } from '@/store/dataStore'
import styled, { keyframes } from 'styled-components'
import VotingSection from '@/components/VotingSection'
import PersonalVoteStats from '@/components/PersonalVoteStats'
import GapCounterSection from '@/components/GapCounterSection'
import HotRightNowMini from '@/components/HotRightNowMini'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

const instantFlash = keyframes`
  0% { color: white; }
  1% { color: cyan; } /* Instant jump to orange */
  99% { color: cyan; } /* Hold orange for almost the entire duration */
  100% { color: white; } /* Instant return to white */
`

// Create the styled component with the new keyframes and timing
const FlashingSpan = styled.span`
  display: inline-block;
  font-weight: 700;
  animation: ${instantFlash} 1.5s steps(1) forwards;
  /* 2.5s duration (2s hold + 0.5s for the instant on/off)
    steps(1) makes the animation jump to the next keyframe instantly
    forwards keeps the final state until the animation is re-triggered
  */
`

export default function Vote() {
  const allParticipantsData = useDataStore((state) => state.allParticipantsData)
  const lastSnapshotDate = useDataStore((state) => state.lastSnapshotDate)
  const lastApiUpdate = useDataStore((state) => state.lastApiUpdate)
  const hasData = allParticipantsData && lastSnapshotDate && lastApiUpdate
  const recordedVotes = useDataStore((state) => state.recordedVotes)
  const currentLanguage = useDataStore((state) => state.currentLanguage)

  return (
    <div className="flex flex-col items-center space-y-8 pb-20 font-sans">
      <div className=""></div>

      <LanguageToggle />

      <div className="flex w-full flex-wrap justify-center gap-8">
        <PersonalVoteStats />
        {currentLanguage === 'english' && (
          <div className="flex h-[350px] max-w-2xl flex-col space-y-6 overflow-scroll rounded-xl border-2 border-blue-500">
            <div className="space-y-4 rounded-lg p-6 text-center text-sm shadow-lg">
              <h2 className="text-2xl font-semibold">Voting Guide</h2>
              <ul className="list-disc space-y-4 pl-5 text-left text-sm">
                <li>
                  Vote 5 times, then switch to a different browser (e.g., Chrome, Firefox, Brave
                  Browser,Safari).
                </li>
                <li>Votes without answered math questions aren’t counted.</li>
                <li>
                  If no math questions appear, try switching to a different browser{' '}
                  <span className="font-bold text-amber-500">
                    (e.g., Chrome, Firefox, Safari—not just tabs)
                  </span>{' '}
                  or <span className="font-bold text-teal-400">wait a full minute</span>.
                </li>
                <li>
                  Voting too early will{' '}
                  <span className="font-bold text-red-500">reset your cooldown</span>.
                  <br />
                  Give it a full pause or try a different browser.
                </li>
                <li>
                  Still no math questions? Even on the Official NYLON Website? Switch to your{' '}
                  <span className="font-bold text-nowrap text-purple-500">mobile data</span>. Wait
                  for a full 2 hours before going back to your Wifi.
                </li>
              </ul>
            </div>
          </div>
        )}

        {currentLanguage === 'tagalog' && (
          <div className="flex h-[350px] max-w-2xl flex-col space-y-6 overflow-scroll rounded-xl border-2 border-blue-500">
            <div className="space-y-4 rounded-lg p-6 text-center text-sm shadow-lg">
              <h2 className="text-2xl font-semibold">Gabay sa Pagboto</h2>
              <ul className="list-disc space-y-4 pl-5 text-left text-sm">
                <li>
                  Bumoto ng 5 beses, tapos lumipat sa ibang browser (e.g., Chrome, Firefox, Brave
                  Browser, Safari).
                </li>
                <li>Hindi mabibilang ang votes na walang nasagot na math questions.</li>
                <li>
                  Kung walang lumalabas na math questions, subukan mong lumipat sa ibang browser{' '}
                  <span className="font-bold text-amber-500">
                    (e.g., Chrome, Firefox, Safari—hindi lang tabs)
                  </span>{' '}
                  o <span className="font-bold text-teal-400">maghintay ng isang minuto</span>.
                </li>
                <li>
                  Kapag bumoto ka agad,{' '}
                  <span className="font-bold text-red-500">
                    mare-reset ang 1 minute cooldown mo
                  </span>
                  .
                  <br />
                  Magpahinga muna o lumipat ng ibang browser.
                </li>
                <li>
                  Wala pa ring math questions? Kahit sa Official Nylon Website? Gumamit ng{' '}
                  <span className="font-bold text-nowrap text-purple-500">mobile data</span>.
                  Maghintay ng 2 oras bago bumalik sa Wifi.
                </li>
              </ul>
            </div>
          </div>
        )}
        {/* <HotRightNowMini /> */}
      </div>
      <div className="space-y-4">
        <VotingSection />
      </div>

      <Attribution />
    </div>
  )
}

function Header({ lastSnapshotDate, lastApiUpdate }) {
  return (
    <p className="p-2 pt-0 text-center italic">
      <span className="font-bold text-red-500">Top Gainer</span> gained{' '}
      <span className="">
        the most votes from {/* Use the FlashingSpan component with a key */}
        <FlashingSpan key={lastSnapshotDate}>{lastSnapshotDate}</FlashingSpan> to{' '}
        {/* Use the FlashingSpan component with a key */}
        <span className="text-nowrap">
          <FlashingSpan key={lastApiUpdate}>{lastApiUpdate}</FlashingSpan> (PH Time)
        </span>
      </span>
    </p>
  )
}

function HeaderSkeleton() {
  return (
    <p className="p-2 pt-0 text-center italic">
      The person with <span className="font-bold text-red-500">Top Gainer</span> gained{' '}
      <span className="text-nowrap">
        the most votes from {/* Skeleton for lastSnapshotDate */}
        <span className="mx-1 inline-block h-4 w-15 rounded bg-gray-300" />
        to {/* Skeleton for lastApiUpdate */}
        <span className="mx-1 inline-block h-4 w-15 rounded bg-gray-300" />
      </span>
    </p>
  )
}

function Attribution() {
  return (
    <div className="mx-auto">
      <p className="text-s text-center text-gray-500 italic">
        Made with love by{' '}
        <a
          href="https://x.com/sovereignswifts"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-300 hover:underline"
        >
          @SovereignSwifts
        </a>{' '}
        🩵🩷
        <br />
        Message me in X / Twitter if there are bugs / problems.
      </p>
    </div>
  )
}

function LanguageToggle() {
  // Access Zustand state + setter
  const currentLanguage = useDataStore((state) => state.currentLanguage)
  const setState = useDataStore((state) => state.setState)

  // Derived boolean for the switch
  const isTagalog = currentLanguage === 'tagalog'

  // Handle toggle
  const handleToggle = (checked) => {
    setState({
      currentLanguage: checked ? 'tagalog' : 'english',
    })
  }

  return (
    <div className="flex items-center space-x-3">
      {/* Left label (English) */}

      <Label htmlFor="lang-switch" className={!isTagalog ? 'font-bold text-blue-500' : ''}>
        English
      </Label>

      {/* Switch from shadcn/ui */}
      <Switch id="lang-switch" checked={isTagalog} onCheckedChange={handleToggle} />

      {/* Right label (Tagalog) */}
      <Label htmlFor="lang-switch" className={isTagalog ? 'font-bold text-pink-500' : ''}>
        Tagalog
      </Label>
    </div>
  )
}
