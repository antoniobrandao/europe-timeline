import React from 'react'

const ProjectBy = () => {
  return (
    <div className="w-full flex justify-center h-[40] mt-20 mb-4 text-white/40">
      <p className="text-xs" style={{ zIndex: '9999999' }}>
        A project by{' '}
        <a
          href="https://www.antoniobrandao.com"
          target="_blank"
          className="text-white/40 hover:text-white/70"
        >
          Antonio Brandao
        </a>
      </p>
    </div>
  )
}

export default ProjectBy
