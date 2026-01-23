'use client'
import React from 'react'
import { Download } from 'lucide-react'

const DownloadResumeCell: React.FC<any> = ({ cellData }) => {
    if (!cellData) {
        return <span style={{ color: '#999', fontSize: '13px' }}>No Resume</span>
    }

    const mediaId = typeof cellData === 'object' ? cellData.id : cellData
    const filename = typeof cellData === 'object' ? cellData.filename : 'cv.pdf'

    const handleDownload = async (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()

        try {
            const response = await fetch(`/api/media/${mediaId}`)
            if (!response.ok) throw new Error('Download failed')

            const blob = await response.blob()
            const url = window.URL.createObjectURL(blob)
            const link = document.createElement('a')
            link.href = url
            link.download = filename
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
            window.URL.revokeObjectURL(url)
        } catch (error) {
            console.error('Download failed:', error)
            alert('Failed to download resume')
        }
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span
                style={{
                    fontSize: '13px',
                    maxWidth: '120px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                }}
                title={filename}
            >
                📄 {filename}
            </span>
            <button
                onClick={handleDownload}
                title="Download Resume"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '4px',
                    background: '#2563eb', // Tailwind-style blue-600
                    borderRadius: '4px',
                    cursor: 'pointer',
                    border: 'none',
                    color: 'white',
                    transition: 'opacity 0.2s',
                }}
                onMouseOver={(e) => {
                    e.currentTarget.style.opacity = '0.8'
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.opacity = '1'
                }}
            >
                <Download size={14} />
            </button>
        </div>
    )
}

export default DownloadResumeCell
