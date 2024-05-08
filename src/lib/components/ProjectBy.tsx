import React from 'react'

const ProjectBy = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center h-[40] mt-20 mb-4 text-white/40">
      <p className="text-xs" style={{ zIndex: '9999999' }}>
        A project by{' '}
        <a
          href="https://www.antoniobrandao.com"
          target="_blank"
          className="text-white/40 hover:text-white/70"
        >
          Antonio Brandao
        </a>{' '}
        a.k.a.{' '}
        <a
          href="https://twitter.com/antonius_maxim"
          target="_blank"
          className="text-white/40 hover:text-white/70"
        >
          Antonius Maximus
        </a>{' '}
        - feel free to reach out via{' '}
        <a
          href="https://twitter.com/antonius_maxim"
          target="_blank"
          className="text-white/40 hover:text-white/70"
        >
          X
        </a>{' '}
        if you would like to comment or suggest additions
      </p>
      <p className="text-xs mt-2" style={{ zIndex: '9999999' }}>
        Special thanks to{' '}
        <a
          href="https://twitter.com/KingsandClicks"
          target="_blank"
          className="text-white/40 hover:text-white/70"
        >
          Seb
        </a>{' '}
        for inspiring me to do this.{' '}
      </p>
    </div>
  )
}

export default ProjectBy
