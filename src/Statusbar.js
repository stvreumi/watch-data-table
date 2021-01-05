function Statusbar() {
  return (
    <div
      style={{
        padding: '0.5rem 0',
      }}
    >
      <span
        style={{
          display: 'inline-block',
          background: '#0aff0082',
          padding: '0.5rem',
        }}
      >
        Grouped
      </span>{' '}
      <span
        style={{
          display: 'inline-block',
          background: '#ffa50078',
          padding: '0.5rem',
        }}
      >
        Aggregated
      </span>{' '}
      <span
        style={{
          display: 'inline-block',
          background: '#ff000042',
          padding: '0.5rem',
        }}
      >
        Value in the same group
      </span>
    </div>
  )
}

export default Statusbar;