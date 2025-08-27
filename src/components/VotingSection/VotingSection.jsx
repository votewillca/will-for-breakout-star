import React from 'react'
import { Button } from '../ui/button'
import PollEmbed from '../PollEmbed'
import { useDataStore } from '@/store/dataStore'

export default function VotingSection() {
  // State controlling scale for all PollEmbed instances
  const [scale, setScale] = React.useState(0.3)
  const [refreshKey, setRefreshKey] = React.useState(Date.now())
  const currentLanguage = useDataStore((state) => state.currentLanguage)

  // Handlers with min/max limits
  const increment = () => setScale((s) => Math.min(s + 0.1, 1)) // max 2x
  const decrement = () => setScale((s) => Math.max(s - 0.1, 0.2)) // min 0.5x

  return (
    <section className="bg-neutral flex flex-col items-center justify-center gap-8">
      <div className="flex w-full max-w-md flex-col items-center justify-center gap-4 p-2">
        {/* The main control panel container */}

        {currentLanguage === 'english' && (
          <p className="space-y-1 text-center text-sm font-semibold text-red-500">
            <span className="block">🚨 Please avoid refreshing the entire website frequently!</span>
            <span className="block font-bold text-teal-400">
              Instead, use the Refresh Polls 🔄 button below
            </span>
            <span className="block font-bold text-amber-400">
              Use the zoom controls to change the size of the polls!
            </span>
          </p>
        )}

        {currentLanguage === 'tagalog' && (
          <div className="space-y-2 text-center text-sm font-semibold text-white">
            <div className="text-red-500">
              🚨 Iwasan ang madalas na pag-refresh ng buong website!
            </div>
            <div>
              Sa halip, gamitin ang{' '}
              <span className="font-bold text-teal-400"> Refresh Polls 🔄 </span> button sa ibaba.
            </div>
            <div className="font-bold text-amber-400">
              Gamitin ang zoom controls para baguhin ang laki ng polls!
            </div>
          </div>
        )}

        <div className="flex items-center gap-4 rounded-xl bg-teal-800/30 p-4 shadow-2xl">
          {/* Scale controls */}

          <div className="flex items-center gap-2">
            <Button
              onClick={decrement}
              variant="outline"
              className="h-10 w-10 rounded-lg border-neutral-700 bg-neutral-800 text-lg text-white transition-colors duration-200 hover:bg-neutral-700"
            >
              -
            </Button>
            <div className="flex flex-col text-center">
              <span className="min-w-[60px] text-center font-mono text-xs font-bold text-white">
                Zoom
              </span>
              <span className="min-w-[60px] text-center font-mono text-xl font-bold text-white">
                {(scale * 100).toFixed(0)}%
              </span>
            </div>
            <Button
              onClick={increment}
              variant="outline"
              className="h-10 w-10 rounded-lg border-neutral-700 bg-neutral-800 text-lg text-white transition-colors duration-200 hover:bg-neutral-700"
            >
              +
            </Button>
          </div>

          {/* Vertical separator */}
          <div className="h-8 w-px bg-white" />

          {/* Refresh polls button */}
          <Button
            key={refreshKey}
            onClick={() => {
              setRefreshKey(Date.now())
            }}
            variant="outline"
            className="rounded-lg border-neutral-700 bg-neutral-800 px-4 py-2 text-white transition-colors duration-200 hover:bg-neutral-700"
          >
            <span className="flex items-center gap-2">
              Refresh Polls
              <span className="text-xl">🔄</span>
            </span>
          </Button>
        </div>
      </div>
      {/* Poll embeds */}
      <div className="flex flex-wrap justify-center">
        <PollEmbed remountKey={refreshKey + '-1'} scale={scale} />
        <PollEmbed remountKey={refreshKey + '-2'} scale={scale} />
        <PollEmbed remountKey={refreshKey + '-3'} scale={scale} />
        <PollEmbed remountKey={refreshKey + '-4'} scale={scale} />
        <PollEmbed remountKey={refreshKey + '-5'} scale={scale} />
      </div>
    </section>
  )
}
