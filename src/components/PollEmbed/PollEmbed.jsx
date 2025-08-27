import React from 'react'

export default function PollEmbed({ remountKey, scale = 1 }) {
  const iframeRef = React.useRef(null)
  const [size, setSize] = React.useState({ width: 0, height: 0 })

  React.useEffect(() => {
    const handleMessage = (event) => {
      if (!event.data) return

      if (event.data.type === 'resize') {
        setSize({ width: event.data.width, height: event.data.height })
      }
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <div
      className="overflow-hidden border bg-sky-800/50 bg-teal-800/30"
      style={{
        width: `${size.width * scale}px`,
        height: `${size.height * scale}px`,
      }}
    >
      <iframe
        key={remountKey}
        ref={iframeRef}
        src="poll.html"
        title="Poll"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          width: `${size.width}px`,
          height: `${size.height}px`,
          border: 'none',
        }}
      />
    </div>
  )
}
